import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  datasets: [
    {
      label: 'Sales',
      data: [120, 200, 150, 80, 250, 120, 200, 150, 80, 250, 10, 400],
      backgroundColor: ['rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)'],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: true, // 세로선
      },
    },
    y: {
      grid: {
        display: true, //가로선
      },
    },
  },
};

function RoiChart() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full text-[23px] p-[20px]">수익률</div>
      <div className="w-full flex justify-center items-center">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default RoiChart;
