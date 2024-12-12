import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi2';
import { useState, useEffect } from 'react';

interface SellMarketProps {
  price: number;
  symbol: string;
  volume: number;
}

function SellMarket({ price, symbol, volume }: SellMarketProps) {
  const [isDisabled, setIsDisabled] = useState(true);

  const [quantity, setQuantity] = useState('');
  const plusQuantity = () => {
    setQuantity(String(Number(quantity) + 1));
  };

  const minusQuantity = () => {
    setQuantity(String(Number(quantity) - 1));
  };

  useEffect(() => {
    if (Number(quantity) > 0 && quantity[0] !== '0' && volume >= Number(quantity)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [quantity]); // price 또는 quantity가 변경되면 실행

  const handleChangeVolume = (percent: number) => {
    const can_sell = Math.floor(Math.floor(volume * percent));
    setQuantity(can_sell.toString());
    console.log(can_sell);
  };

  const handleClick = () => {
    fetch('http://localhost:30082/api/v1/invests/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        order_type: '매도',
        price_type: '시장가',
        symbol: symbol,
        quantity: Number(quantity),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('주문을 실패하였습니다.'); // 예외 발생
        }
        return res.json();
      })
      .then(() => {
        alert('주문이 정상적으로 처리되었습니다.');
      })
      .catch((error) => {
        alert(error.message || '오류가 발생하였습니다.'); // 실패 시 메시지 표시
        console.error('오류가 발생하였습니다:', error);
      });
  };

  return (
    <>
      <div className="flex flex-column justify-end w-[90%] my-[5px]">
        <div className="w-[30%] h-[33px]"></div>
        <div className="flex items-center w-[70%] border border-gray rounded-[7px] px-[10px] bg-gray text-[#787878]">
          최대한 빠른 가격
        </div>
      </div>
      <div className="flex flex-column w-[90%] my-[5px]">
        <div className="w-[30%] h-[33px] text-[17px]">수량</div>
        <div className="flex justify-center items-center w-[70%] border border-gray rounded-[7px] px-[10px]">
          <input
            className="w-[75%] outline-none"
            placeholder="수량 입력"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          ></input>
          <GoPlus className="w-[12%] cursor-pointer" onClick={plusQuantity} />
          <HiMinus className="w-[12%] cursor-pointer" onClick={minusQuantity} />
        </div>
      </div>
      <div className="flex flex-column  w-[90%]">
        <div className="w-[30%] h-[33px]"></div>
        <div className="w-[70%] flex justify-between">
          <button
            className="w-[23%] h-[25px] border rounded-[5px] text-[13px] border border-gray my-[5px]"
            onClick={() => handleChangeVolume(0.1)}
          >
            10%
          </button>
          <button
            className="w-[23%] h-[25px] border rounded-[5px] text-[13px] border border-gray my-[5px]"
            onClick={() => handleChangeVolume(0.25)}
          >
            25%
          </button>
          <button
            className="w-[23%] h-[25px] border rounded-[5px] text-[13px] border border-gray my-[5px]"
            onClick={() => handleChangeVolume(0.5)}
          >
            50%
          </button>
          <button
            className="w-[23%] h-[25px] border rounded-[5px] text-[13px] border border-gray my-[5px]"
            onClick={() => handleChangeVolume(1)}
          >
            최대
          </button>
        </div>
      </div>
      <hr className="w-[95%] border-font-gray my-[25px]" />
      <div className="flex flex-column  w-[90%] my-[5px]">
        <div className="w-[40%] h-[33px] text-[17px]">판매 가능</div>
        <div className="w-[60%] text-right">{volume}주</div>
      </div>
      <div className="flex flex-column  w-[90%] my-[5px]">
        <div className="w-[40%] h-[33px] text-[17px]">예상 총 금액</div>
        <div className="w-[60%] text-right">
          {!isDisabled ? (price * Number(quantity)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0'}원
        </div>
      </div>
      <button
        className={`w-[90%] h-[40px] rounded-[7px] my-[10px] ${isDisabled ? 'bg-[#eeeeee] text-[#a6a6a6]' : 'bg-MainBlue text-white'}`}
        onClick={handleClick}
        disabled={isDisabled}
      >
        매도하기
      </button>
    </>
  );
}

export default SellMarket;
