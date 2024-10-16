import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);


const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        label: 'Sales',
        data: [120, 200, 150, 80, 250, 120, 200, 150, 80, 250, 10, 500],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };



const options = {
    // 옵션 (1) : 부모 크기에 맞춰 차트 반응형
    responsive: true,
    // 옵션 (2) : 차트에 커서 갖다대면 뜨는거
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    // 옵션 (3) : 척도
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
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <Line options={options} data={data} />
    </div>
  );
}

export default RoiChart;
