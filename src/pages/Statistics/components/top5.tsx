import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useState, useRef, useEffect } from "react";
import { getTop5 } from "../../../services/statisticService";
import { useUser } from "../../../hooks/useUserInfo";

const position = [
  { x: 10.8, y: 60, r: 94, label: "" },
  { x: 30, y: 59, r: 59, label: "" },
  { x: 30, y: 128, r: 45, label: "" },
  { x: 23.7, y: 3, r: 40, label: "" },
  { x: 20.6, y: 125, r: 31, label: "" },
];

ChartJS.register(Tooltip, Legend, LinearScale, PointElement, LineElement, {
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
      ctx.font = `bold ${applyFontSize(index)}`;
      ctx.textBaseline = "middle";
      ctx.fillText(label, x, y);
    });
  },
});

// 폰트 크기 적용
const applyFontSize = (index: number) => {
  switch (index) {
    case 0:
      return "32px Arial";
    case 1:
      return "24px Arial";
    case 2:
      return "20px Arial";
    case 3:
      return "16px Arial";
    case 4:
      return "14px Arial";
    default:
      return "12px Arial";
  }
};

export default function Top5({
  setNoFood,
}: {
  setNoFood: (value: boolean) => void;
}) {
  const [gradient, setGradient] = useState<string[]>([]);
  const chartRef = useRef<any>(null);
  const { refrigeratorId } = useUser();
  const [foodData, setFoodData] = useState<any[]>([]);

  const onChartReady = () => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      if (!ctx) return;

      const newGradients = Array.from({ length: 5 }, (_, index) => {
        const gradient = ctx.createLinearGradient(0, 0, 200, 0);
        switch (index) {
          case 0:
            gradient.addColorStop(0, "#3BD273");
            gradient.addColorStop(1, "#85F42C");
            break;
          case 1:
            gradient.addColorStop(0, "#FFA12F");
            gradient.addColorStop(1, "#FFCB30");
            break;
          case 2:
            gradient.addColorStop(0, "#FF2F4E");
            gradient.addColorStop(1, "#FF6D35");
            break;
          case 3:
            gradient.addColorStop(0, "#21C473");
            gradient.addColorStop(1, "#33E269");
            break;
          case 4:
            gradient.addColorStop(0, "#E659D5");
            gradient.addColorStop(1, "#C67EFF");
            break;
          default:
            break;
        }
        return gradient;
      });

      setGradient(newGradients);
    }
  };

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
    setTimeout(() => {
      if (chartRef.current) {
        onChartReady();
      }
    }, 0);
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      chart.data.datasets[0].backgroundColor = [...gradient];
      chart.update();
    }
  }, [gradient]);

  const data = {
    datasets: [
      {
        label: "소비식품",
        data: foodData,
        backgroundColor: gradient,
      },
    ],
  };

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
