import { useState, useEffect } from 'react';
// import { GrFormNext } from 'react-icons/gr';
// import { GrFormPrevious } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

interface StockData {
  close: number;
  id: number;
  name: string;
  rate: number;
  rate_price: number;
  symbol: string;
  volume: number;
}

function StockChart() {
  // const datas = [
  //   {
  //     company_name: '삼성전자',
  //     price: 60000,
  //     fluctuation_price: 5300,
  //     fluctuation_rate: 2.3,
  //     amount: 10000,
  //     volume: 1234,
  //   },
  // ];

  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 10;
  const stockDatas = [
    {
      close: 0,
      id: 1,
      name: '삼성전자',
      rate: 0,
      rate_price: 0,
      symbol: '005930',
      volume: 0,
    },
    {
      close: 0,
      id: 2,
      name: '삼성전자우',
      rate: 0,
      rate_price: 0,
      symbol: '005935',
      volume: 0,
    },
    {
      close: 0,
      id: 3,
      name: 'SK하이닉스',
      rate: 0,
      rate_price: 0,
      symbol: '000660',
      volume: 0,
    },
    {
      close: 0,
      id: 4,
      name: 'LG엔솔',
      rate: 0,
      rate_price: 0,
      symbol: '373220',
      volume: 0,
    },
    {
      close: 0,
      id: 5,
      name: '현대차',
      rate: 0,
      rate_price: 0,
      symbol: '005380',
      volume: 0,
    },
    {
      close: 0,
      id: 6,
      name: '현대차3우B',
      rate: 0,
      rate_price: 0,
      symbol: '005389',
      volume: 0,
    },
    {
      close: 0,
      id: 7,
      name: '현대차우',
      rate: 0,
      rate_price: 0,
      symbol: '005385',
      volume: 0,
    },
    {
      close: 0,
      id: 8,
      name: '현대차2우B',
      rate: 0,
      rate_price: 0,
      symbol: '005387',
      volume: 0,
    },
    {
      close: 0,
      id: 9,
      name: '삼성바이오로직스',
      rate: 0,
      rate_price: 0,
      symbol: '207940',
      volume: 0,
    },
    {
      close: 0,
      id: 10,
      name: '기아',
      rate: 0,
      rate_price: 0,
      symbol: '000270',
      volume: 0,
    },
    {
      close: 0,
      id: 11,
      name: '셀트리온',
      rate: 0,
      rate_price: 0,
      symbol: '068270',
      volume: 0,
    },
    {
      close: 0,
      id: 12,
      name: 'LG화학',
      rate: 0,
      rate_price: 0,
      symbol: '051910',
      volume: 0,
    },
    {
      close: 0,
      id: 13,
      name: 'POSCO홀딩스',
      rate: 0,
      rate_price: 0,
      symbol: '005490',
      volume: 0,
    },
    {
      close: 0,
      id: 14,
      name: 'LG화학우',
      rate: 0,
      rate_price: 0,
      symbol: '051915',
      volume: 0,
    },
    {
      close: 0,
      id: 15,
      name: 'NAVER',
      rate: 0,
      rate_price: 0,
      symbol: '035420',
      volume: 0,
    },
    {
      close: 0,
      id: 16,
      name: '삼성SDI',
      rate: 0,
      rate_price: 0,
      symbol: '006400',
      volume: 0,
    },
    {
      close: 0,
      id: 17,
      name: '삼성SDI우',
      rate: 0,
      rate_price: 0,
      symbol: '006405',
      volume: 0,
    },
    {
      close: 0,
      id: 18,
      name: 'KB금융',
      rate: 0,
      rate_price: 0,
      symbol: '105560',
      volume: 0,
    },
    {
      close: 0,
      id: 19,
      name: '삼성물산',
      rate: 0,
      rate_price: 0,
      symbol: '028260',
      volume: 0,
    },
    {
      close: 0,
      id: 20,
      name: '현대모비스',
      rate: 0,
      rate_price: 0,
      symbol: '012330',
      volume: 0,
    },
  ];

  const [datas, setDatas] = useState<StockData[]>(stockDatas);

  useEffect(() => {
    console.log('111');
    const eventSource = new EventSource(`http://localhost.stock-server/api/v1/stockDetails/stream/multiple?page=1`);
    
    eventSource.onmessage = (event) => {
      console.log('222');
      const newDataArray = JSON.parse(event.data);
      console.log(newDataArray);
  
      setDatas((prevDatas) =>
        prevDatas.map((data) => {
          const newData = newDataArray.find((item: StockData) => item.id === data.id);
          return newData ? { ...data, ...newData } : data;
        })
      );
    };
  
    eventSource.onerror = () => {
      console.error('SSE connection error');
      eventSource.close();
    };
  
    return () => {
      eventSource.close();
    };
  }, []);

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePageClick = (pageNumber: number) => {
  //   setCurrentPage(pageNumber);
  // };

  const gotoStockDetails = () => {
    navigate('/details');
  };

  // 페이지네이션 버튼 생성
  // const renderPageNumbers = () => {
  //   const pageNumbers = [];

  //   for (let i = 1; i <= 10; i++) {
  //     pageNumbers.push(
  //       <button
  //         key={i}
  //         className={`px-3 py-1 mx-1 rounded-md w-[35px] h-[35px] flex items-center justify-center ${currentPage === i ? 'text-black bg-Bg-gray' : 'text-chart-font'}`}
  //         onClick={() => handlePageClick(i)}
  //       >
  //         {i}
  //       </button>,
  //     );
  //   }
  //   return pageNumbers;
  // };

  if (datas.length === 0) {
    return (
      <>
        <div className="w-full h-[70vh] flex flex-col justify-center items-center">
          <CircularProgress size={50} sx={{ color: '#3182F6' }} />
          <p className="m-[10px]">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#e5e5e5]">
            <th className="text-left w-[20%] py-[10px] text-chart-font px-1">종목</th>
            <th className="text-right w-[15%] py-[10px] text-chart-font">현재가</th>
            <th className="text-right w-[25%] py-[10px] text-chart-font">등락률</th>
            <th className="text-right w-[20%] py-[10px] text-chart-font">거래대금</th>
            <th className="text-right w-[20%] py-[10px] text-chart-font px-1">거래량</th>
          </tr>
        </thead>
        <tbody>
        {datas.map((data, index) => (
          <tr
            key={index}
            className="rounded-[5px] hover:bg-Bg-gray cursor-pointer"
            onClick={gotoStockDetails}
          >
            <td className="text-left flex py-[10px] text-chart-font px-1 text-[18px]">
              <p className="text-MainBlue mr-10 font-bold text-[19px]">{index + 1}</p> {data.name}
            </td>
            <td className="text-right py-[10px] text-chart-font text-[18px]">
              {data.close.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
            </td>
            <td
              className={`text-right py-[10px] text-chart-font text-[18px] ${data.rate_price > 0 ? 'text-up' : 'text-down'}`}
            >
              {data.rate_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 ({data.rate})%
            </td>
            <td className="text-right py-[10px] text-chart-font text-[18px]">{data.volume}</td>
            <td className="text-right py-[10px] text-chart-font px-1 text-[18px]">{data.volume}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center my-4">{/* 페이지네이션 버튼 추가 */}</div>
    </div>
  );
}

export default StockChart;
