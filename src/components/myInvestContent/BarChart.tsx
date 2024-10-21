import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월'],
    datasets: [
      {
        label: '예수금',
        data: [50, 40, 20, 30, 30, 40, 20, 40],
        backgroundColor: '#76d3ae'
      },
      {
        label: '주식',
        data: [10, 20, 30, 40, 30, 40, 20, 10],
        backgroundColor: '#f8d865',
        borderWidth: 1,
      }
    ],
};

const options = {
    type: 'bar',
    data: data,
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: { 
      x: {
        grid: {
          display: true,
        },
        stacked: true,
      },
      y: {
        grid: {
          display: true,
        },
        stacked: true,
      },
    },
};

function BarChart() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full text-[23px] p-[20px]">계좌 변동 한 눈에 보기</div>
      <div className="w-full flex justify-center items-center">
      <Bar options={options} data={data} style={{width:"70%"}} />
      </div>
    </div>
  );
}

export default BarChart;
