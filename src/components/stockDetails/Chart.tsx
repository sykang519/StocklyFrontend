import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

import { useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function StockDetailsPage() {
  const [filter, setFilter] = useState('day');
  // day, week, month, year
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

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="ml-[20px] text-[20px]">차트</p>
        <div>
          <button
            className={`w-[35px] h-[35px] mx-[5px] my-[10px] rounded-[7px] transition-colors duration-300 ease-in-out ${filter === 'day' ? 'bg-gray' : 'bg-transparent'}`}
            onClick={() => setFilter('day')}
          >
            일
          </button>
          <button
            className={`w-[35px] h-[35px] mx-[5px] my-[10px] rounded-[7px] transition-colors duration-300 ease-in-out ${filter === 'week' ? 'bg-gray' : 'bg-transparent'}`}
            onClick={() => setFilter('week')}
          >
            주
          </button>
          <button
            className={`w-[35px] h-[35px] mx-[5px] my-[10px] rounded-[7px] transition-colors duration-300 ease-in-out ${filter === 'month' ? 'bg-gray' : 'bg-transparent'}`}
            onClick={() => setFilter('month')}
          >
            윌
          </button>
          <button
            className={`w-[35px] h-[35px] mx-[5px] my-[10px] rounded-[7px] transition-colors duration-300 ease-in-out ${filter === 'year' ? 'bg-gray' : 'bg-transparent'}`}
            onClick={() => setFilter('year')}
          >
            년
          </button>
        </div>
        <div></div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <Line options={options} data={data} width="894px" height="320px" />
      </div>
    </>
  );
}

export default StockDetailsPage;
