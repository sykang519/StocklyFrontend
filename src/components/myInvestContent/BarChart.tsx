import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend); // BarElement 추가

const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        label: 'Sales',
        data: [120, 200, 150, 80, 250, 120, 200, 150, 80, 250, 10, 500],
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // 단일 색상
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
};

const options = {
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
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
};

function BarChart() {
  return (
    <div className="w-full h-full flex justify-center items-center"> {/* w-full과 h-full로 전체 크기 사용 */}
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;
