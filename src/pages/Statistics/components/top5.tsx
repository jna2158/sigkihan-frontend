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

export default function Top5() {
  const [gradient, setGradient] = useState<string[]>([]);
  const chartRef = useRef<any>(null);
  const { refrigeratorId } = useUser();
  const [foodData, setFoodData] = useState<any[]>([]);

  const onChartReady = () => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      if (!ctx) return;

      const gradients = [
        ctx.createLinearGradient(0, 0, 200, 0),
        ctx.createLinearGradient(0, 0, 200, 0),
        ctx.createLinearGradient(0, 0, 200, 0),
        ctx.createLinearGradient(0, 0, 200, 0),
        ctx.createLinearGradient(0, 0, 200, 0),
      ];

      gradients[0].addColorStop(0, "#3BD273");
      gradients[0].addColorStop(1, "#85F42C");

      gradients[1].addColorStop(0, "#FFA12F");
      gradients[1].addColorStop(1, "#FFCB30");

      gradients[2].addColorStop(0, "#FF2F4E");
      gradients[2].addColorStop(1, "#FF6D35");

      gradients[3].addColorStop(0, "#21C473");
      gradients[3].addColorStop(1, "#33E269");

      gradients[4].addColorStop(0, "#E659D5");
      gradients[4].addColorStop(1, "#C67EFF");

      setGradient(gradients);
    }
  };

  useEffect(() => {
    getTop5(refrigeratorId).then((res) => {
      const data = res.data.monthly_top_consumed_foods;
      if (data.length === 0) {
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
    if (chartRef.current) {
      onChartReady();
    }
  }, [chartRef.current]);

  useEffect(() => {
    if (gradient.length > 0 && chartRef.current) {
      chartRef.current.update();
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
