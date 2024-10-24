import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const data = [
  {
    date: '2021-02-02 13:30:00',
    open: 134.8993,
    low: 134.63,
    high: 134.96,
    close: 134.95,
    volume: 10,
  },
  {
    date: '2021-02-03 13:15:00',
    open: 134.9,
    low: 134.8593,
    high: 135.0799,
    close: 134.8993,
    volume: 15,
  },
  {
    date: '2021-02-04 13:00:00',
    open: 134.8993,
    low: 134.94,
    high: 135.2593,
    close: 135.0108,
    volume: 20,
  },
  {
    date: '2021-02-05 12:45:00',
    open: 135.275,
    low: 135.14,
    high: 135.4692,
    close: 135.2338,
    volume: 9,
  },
  {
    date: '2021-02-06 13:30:00',
    open: 135.2338,
    low: 135.63,
    high: 135.96,
    close: 135.76,
    volume: 15,
  },
  {
    date: '2021-02-07 13:30:00',
    open: 135.76,
    low: 135.2338,
    high: 135.96,
    close: 135.2338,
    volume: 15,
  },
  {
    date: '2021-02-08 13:15:00',
    open: 135.2338,
    low: 134.8593,
    high: 135.2338,
    close: 134.8993,
    volume: 18,
  },
  {
    date: '2021-02-09 13:00:00',
    open: 135.2338,
    low: 134.94,
    high: 135.2593,
    close: 135.0108,
    volume: 5,
  },
  {
    date: '2021-02-10 13:00:00',
    open: 135.2338,
    low: 134.94,
    high: 135.2593,
    close: 135.25,
    volume: 5,
  },
  {
    date: '2021-02-11 12:45:00',
    open: 135.25,
    low: 135.14,
    high: 135.4692,
    close: 135.4,
    volume: 7,
  },
];

const ApexChart: React.FC = () => {
  const [xaxisRange, setXaxisRange] = useState({
    min: new Date(data[0].date).getTime(),
    max: new Date(data[data.length - 1].date).getTime(),
  });

  const candlestickData = data.map((price) => ({
    x: price.date,
    y: [price.open, price.high, price.low, price.close],
  }));

  const volumeData = data.map((price) => ({
    x: price.date,
    y: price.volume,
    color: price.close > price.open ? 'rgba(255, 26, 26, 1)' : 'rgba(48, 18, 247, 1)',
  }));

  // 이동평균선 데이터를 계산 (여기서는 간단하게 close 값의 평균을 이동평균선으로 사용)
  const movingAverageData = data.map((price, index, arr) => {
    const sum = arr.slice(Math.max(0, index - 2), index + 1).reduce((acc, curr) => acc + curr.close, 0);
    const avg = sum / Math.min(index + 1, 3); // 간단한 3일 이동평균
    return { x: price.date, y: avg };
  });

  interface ChartContext {
    w: {
      globals: {
        minX: number;
        maxX: number;
      };
    };
  }

  const handleSync = (chartContext: ChartContext) => {
    console.log(chartContext);
    const newMin = chartContext.w.globals.minX;
    const newMax = chartContext.w.globals.maxX;

    setXaxisRange({ min: newMin, max: newMax });
  };

  return (
    <div className="w-full h-[74vh] flex flex-col justify-center items-center">
      <div id="chart-candlestick" className="w-full h-[48vh]">
        <ApexCharts
          type="candlestick"
          series={[
            { name: '주가', data: candlestickData },
            { name: '이동평균선', type: 'line', data: movingAverageData },
          ]}
          height="100%"
          options={{
            theme: {
              mode: 'light',
            },
            chart: {
              toolbar: {
                tools: {},
              },
              background: 'transparent',
              animations: {
                enabled: false, // 애니메이션 비활성화
              },
              events: {
                zoomed: handleSync,
                scrolled: handleSync,
              },
            },
            grid: {
              show: true,
            },
            plotOptions: {
              candlestick: {
                wick: {
                  useFillColor: true,
                },
                colors: {
                  upward: '#ff1a1a',
                  downward: '#3012f7',
                },
              },
            },
            xaxis: {
              type: 'datetime',
              min: xaxisRange.min,
              max: xaxisRange.max,
              labels: {
                show: false,
              },
              axisBorder: {
                show: true,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              show: false,
              opposite: true,
            },
            tooltip: {
              y: {
                formatter: (v) => `$ ${v.toFixed(2)}`,
              },
            },
          }}
        />
      </div>

      <div id="chart-bar" className="w-full h-[26vh]">
        <ApexCharts
          type="bar"
          series={[{ name: 'Volume', data: volumeData }]}
          height="100%"
          options={{
            chart: {
              toolbar: {
                show: false,
              },
              animations: {
                enabled: false, // 애니메이션 비활성화
              },
              events: {
                zoomed: handleSync,
                scrolled: handleSync,
              },
            },
            plotOptions: {
              bar: {
                distributed: true, // 각 바의 색상 적용
              },
            },
            dataLabels: {
              enabled: false,
            },
            colors: volumeData.map((data) => data.color), // 색상 배열 적용
            legend: {
              show: false,
            },
            xaxis: {
              type: 'datetime',
              min: xaxisRange.min,
              max: xaxisRange.max,
              labels: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              axisTicks: {
                show: true,
              },
            },
            yaxis: {
              opposite: true,
              show: false,
              min: 0,
            },
            tooltip: {
              y: {
                formatter: (v) => `${v}`,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ApexChart;
