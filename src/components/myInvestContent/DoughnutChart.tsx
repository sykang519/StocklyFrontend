import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



const data = {
  labels: ['삼성전자', '카카오', '네이버', '삼성SDI'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [1000000, 200000, 50000, 300000],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      hoverOffset: 4,
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
        display: false, // x축
        grid: {
          display: false, // 세로선
        },
      },
      y: {
        display: false, //y축
        grid: {
          display: false, //가로선
        },
      },
    },
  };

function DoughnutChart() {
  return (
    <div className="w-[80%] flex justify-center items-center">
      <Doughnut data={data} options={options}/>
    </div>
  );
}

export default DoughnutChart;
