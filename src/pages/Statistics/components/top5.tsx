import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { useState, useRef, useEffect } from "react";
import { getTop5 } from "../../../services/statisticService";
import { useUser } from "../../../hooks/useUserInfo";
import { position } from "../../../shared/constants/chart/chartElementPosition";
import { fontSize } from "../../../shared/constants/chart/chartElementFontSize";

// 차트 설정
ChartJS.register(
  Filler,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  {
    id: "centerLabel",
    afterDatasetsDraw(chart) {
      const { ctx, data } = chart;
      chart.getDatasetMeta(0).data.forEach((element: any, index: number) => {
        const { x, y } = element.tooltipPosition(true);
        const pointData = data.datasets[0].data[index] as {
          x: number;
          y: number;
          r: number;
          label: string;
        };
        const label = pointData.label || "";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = `bold ${fontSize(index)}`;
        ctx.textBaseline = "middle";
        ctx.fillText(label, x, y);
      });
    },
  },
);

export default function Top5({
  setNoFood,
}: {
  setNoFood: (value: boolean) => void;
}) {
  const [gradient, setGradient] = useState<string[]>([]);
  const chartRef = useRef<any>(null);
  const { refrigeratorId } = useUser();
  const [foodData, setFoodData] = useState<any[]>([]);

  // 차트 데이터
  const data = {
    datasets: [
      {
        label: "소비식품",
        data: foodData,
      },
    ],
  };

  // 차트 준비되면 그라데이션 생성
  const onChartReady = () => {
    const chart = chartRef.current;
    if (!chart) return null;

    const ctx = chart.ctx;
    if (!ctx) return null;

    const newGradients = Array.from({ length: 5 }, (_, index) => {
      switch (index) {
        case 0:
          const gradient0 = ctx.createLinearGradient(10.8, 0, 200, 0);
          gradient0.addColorStop(0, "#3BD273");
          gradient0.addColorStop(1, "#85F42C");
          return gradient0;

        case 1:
          const gradient1 = ctx.createLinearGradient(50, 60, 200, 0);
          gradient1.addColorStop(0, "#FFA12F");
          gradient1.addColorStop(1, "#FFCB30");
          return gradient1;

        case 2:
          const gradient2 = ctx.createLinearGradient(200, 0, 300, 0);
          gradient2.addColorStop(0, "#FF6D35");
          gradient2.addColorStop(1, "#FF2F4E");

          return gradient2;

        case 3:
          const gradient3 = ctx.createLinearGradient(50, 200, 20, 300);
          gradient3.addColorStop(0, "#33E269");
          gradient3.addColorStop(1, "#21C473");
          return gradient3;

        case 4:
          const gradient5 = ctx.createLinearGradient(90, 0, 250, 0);

          gradient5.addColorStop(0, "#C67EFF");
          gradient5.addColorStop(1, "#E659D5");
          return gradient5;

        default:
          break;
      }
    });

    setGradient(newGradients);
  };

  useEffect(() => {
    if (chartRef.current) {
      onChartReady();
    }
  }, []);

  // 소비식품 TOP5 조회
  useEffect(() => {
    getTop5(refrigeratorId).then((res) => {
      const data = res.data.monthly_top_consumed_foods;
      if (data.length === 0) {
        setNoFood(true);
        setFoodData([]);
        return;
      }

      const sortedData = data
        .sort((a, b) => b?.total_quantity - a?.total_quantity)
        .map((item, index) => ({
          x: position[index].x,
          y: position[index].y,
          r: position[index].r,
          label: item.food_name,
        }));

      setFoodData(sortedData);
    });
  }, [refrigeratorId]);

  useEffect(() => {
    if (chartRef.current && gradient.length > 0) {
      const chart = chartRef.current;
      if (!chart) return;

      const ctx = chart.ctx;
      if (!ctx) return;

      chart.data.datasets[0].backgroundColor = foodData.map(
        (_, index) => gradient[index],
      );
      chart.update();
    }
  }, [gradient, foodData]);

  // 차트 옵션
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    hover: {},
  };

  return (
    <>
      <section className="text-sm text-gray-400">소비식품 TOP5</section>
      <section className="mt-[0.9rem]">
        <Bubble
          data={data}
          options={options}
          style={{ height: "41vh" }}
          ref={chartRef}
        />
      </section>
    </>
  );
}
