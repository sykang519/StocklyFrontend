import Buy from './Buy';
import Sell from './Sell';
import { useState } from 'react';

function Order() {
  const [content, setContent] = useState('buy');

  const handleClickBuy = () => {
    setContent('buy');
  };

  const handleClickSell = () => {
    setContent('sell');
  };

  return (
    <div>
      <div className="text-[17px] font-bold p-[15px]">주문하기</div>
      <div className="flex px-[15px]">
        <button
          className={`w-[50px] h-[35px] text-[17px] rounded-[18px] ${content === 'buy' ? 'text-buy-red bg-[#FFF2F2]' : 'text-font-gray'}`}
          onClick={handleClickBuy}
        >
          매수
        </button>
        <button
          className={`w-[50px] h-[35px] text-[17px] rounded-[18px] ${content === 'sell' ? 'text-MainBlue bg-[#F2F2FF]' : 'text-font-gray'}`}
          onClick={handleClickSell}
        >
          매도
        </button>
      </div>
      <div>
        {content==="buy" ? <Buy/> : <Sell/>}
      </div>
    </div>
  );
}

export default Order;
