import { useState, useEffect } from 'react';

interface OrderData {
  id: number;
  // symbol: string;
  // name: string;
  sell_price_0: number;
  sell_price_1: number;
  sell_price_2: number;
  sell_price_3: number;
  sell_price_4: number;
  sell_price_5: number;
  sell_price_6: number;
  sell_volume_0: number;
  sell_volume_1: number;
  sell_volume_2: number;
  sell_volume_3: number;
  sell_volume_4: number;
  sell_volume_5: number;
  sell_volume_6: number;
  buy_price_0: number;
  buy_price_1: number;
  buy_price_2: number;
  buy_price_3: number;
  buy_price_4: number;
  buy_price_5: number;
  buy_price_6: number;
  buy_volume_0: number;
  buy_volume_1: number;
  buy_volume_2: number;
  buy_volume_3: number;
  buy_volume_4: number;
  buy_volume_5: number;
  buy_volume_6: number;

  [key: string]: number;
}

function OrderPrice() {
  const [askLength, setAskLength] = useState<number[]>([]);
  const [bidLength, setBidLength] = useState<number[]>([]);
  const [datas, setDatas] = useState<OrderData>();

  useEffect(() => {
    console.log(1);
    const eventSource = new EventSource('http://localhost.order-service/api/v1/invests/orderBook/005930');
    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setDatas(newData);
    };
    eventSource.onerror = () => {
      console.error('SSE connection error');
      eventSource.close();
    };
    return () => {
      eventSource.close();
    };
  });

  useEffect(() => {
    const calculateLengths = (data: OrderData): void => {
      // sell_volume과 buy_volume을 추출하여 배열로 구성
      const sellVolumes = [
        data.sell_volume_0,
        data.sell_volume_1,
        data.sell_volume_2,
        data.sell_volume_3,
        data.sell_volume_4,
        data.sell_volume_5,
        data.sell_volume_6,
      ];
      const buyVolumes = [
        data.buy_volume_0,
        data.buy_volume_1,
        data.buy_volume_2,
        data.buy_volume_3,
        data.buy_volume_4,
        data.buy_volume_5,
        data.buy_volume_6,
      ];

      // sell_volume과 buy_volume 중 최대값 찾기
      const maxVolume = Math.max(...sellVolumes, ...buyVolumes);

      // sell_volume과 buy_volume 각각에 대해 (volume / maxVolume) * 100 계산하여 리스트에 저장
      const calculatedSellLengths = sellVolumes.map((volume) => (volume / maxVolume) * 100);
      const calculatedBuyLengths = buyVolumes.map((volume) => (volume / maxVolume) * 100);

      // 상태에 계산된 길이 비율을 업데이트
      setAskLength(calculatedSellLengths);
      setBidLength(calculatedBuyLengths);
    };
    // 예시 데이터가 있을 때 함수 호출
    if (datas) {
      calculateLengths(datas);
    }
  }, [datas]);

  if (datas === undefined) {
    return <div>loading</div>;
  }

  return (
    <div className="w-full h-[80vh]">
      <div className="text-[20px] font-bold p-[15px]">호가</div>
      <div className="w-full h-[70vh] flex flex-col justify-center items-center p-[20px]">
        <table className="w-full h-[70vh]">
          <thead>
            <tr>
              <th className="w-[35%] text-center p-[10px]">매도수량</th>
              <th className="w-[30%] text-center p-[10px]">금액</th>
              <th className="w-[35%] text-center p-[10px]">매수수량</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }).map((_, index) => (
              <tr key={`ask-${index}`}>
                <td
                  className="w-[35%] text-right p-[10px] relative text-[12px]"
                  style={{ background: `linear-gradient(to left, #dcdcff ${askLength[index]}%, transparent 0)` }}
                >{datas[`sell_volume_${index}`]}</td>
                <td className="w-[30%] text-center p-[10px] border-x border-[#c1c1c1]">{datas[`sell_price_${index}`]}</td>
                <td className="w-[35%] text-center p-[10px]"></td>
              </tr>
            ))}
            {Array.from({ length: 7 }).map((_, index) => (
              <tr key={`bid-${index}`}>
                <td className="w-[35%] text-center p-[10px]"></td>
                <td className="w-[30%] text-center p-[10px] border-x border-[#c1c1c1]">{datas[`buy_price_${index}`]}</td>
                <td
                  className="w-[35%] text-left p-[10px] relative text-[12px]"
                  style={{ background: `linear-gradient(to right, #ffdcdc ${bidLength[index]}%, transparent 0)` }}
                >{datas[`buy_volume_${index}`]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderPrice;
