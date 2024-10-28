import { useState, useEffect } from 'react';

interface OrderData {
  volume: number;
  price: number;
}

function OrderPrice() {
  const [askLength, setAskLength] = useState<number[]>([]);
  const [bidLength, setBidLength] = useState<number[]>([]);
  const askData = [{ volume: 500, price: 68000 }, { volume: 600, price: 67000 }, { volume: 800, price: 66000 }, { volume: 400, price: 65000 }, { volume: 500, price: 64000 }, { volume: 200, price: 63000 }, { volume: 500, price: 62000 }]
  const bidData = [{ volume: 500, price: 62000 }, { volume: 600, price: 61000 }, { volume: 800, price: 60000 }, { volume: 400, price: 59000 }, { volume: 500, price: 58000 }, { volume: 200, price: 57000 }, { volume: 700, price: 56000 }]

  useEffect(() => {
    const calculateLengths = (data: OrderData[]): number[] => {
      const maxVolume = Math.max(...data.map(item => item.volume));
      return data.map((item) => (item.volume / maxVolume) * 100);
    };

    setAskLength(calculateLengths(askData));
    setBidLength(calculateLengths(bidData));
    console.log(askLength);
    console.log(bidLength);
  }, []);
  return (
    <div className="h-full">
      <div className="h-[5%] flex justify-start items-center m-[20px] my-[10px] text-[20px]">호가</div>
      <div className="w-full h-[90%] flex flex-col justify-center items-center p-[20px]">
        <table className="w-full">
          <tr>
            <th className="w-[35%] text-center p-[10px] ">매도수량</th>
            <th className="w-[30%] text-center p-[10px] ">금액</th>
            <th className="w-[35%] text-center p-[10px]">매수수량</th>
          </tr>
          {askData.map((ask, index) => (
            <tr>
              <td
                className="w-[35%] text-right p-[10px] relative text-[12px]"
                style={{ background: `linear-gradient(to left, #dcdcff ${askLength[index]}%, transparent 0)` }}
              >
                {ask.volume}
              </td>
              <td className="w-[30%] text-center p-[10px] border-x border-[#c1c1c1]">{ask.price}</td>
              <td className="w-[35%] text-center p-[10px]"></td>
            </tr>
          ))}
          {bidData.map((bid, index) => (
            <tr>
              <td className="w-[35%] text-center p-[10px]"></td>
              <td className="w-[30%] text-center p-[10px] border-x border-[#c1c1c1]">{bid.price}</td>
              <td
                className="w-[35%] text-left p-[10px] relative text-[12px]"
                style={{ background: `linear-gradient(to right, #ffdcdc ${bidLength[index]}%, transparent 0)` }}
              >
                {bid.volume}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default OrderPrice;