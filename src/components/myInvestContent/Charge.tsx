import { useState, useEffect } from 'react';

function Charge() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (Number(price) > 0 && price[0] !== '0') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [price]); // price 가 변경되면 실행

  const handleClick = () => {
    console.log(price);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-[25px] m-[20px] w-[90%]">계좌 충전</div>
      <div className="flex flex-col justify-between w-[90%] h-[560px]">
        <div>
          <div className="w-[100%] my-[20px] flex justify-between items-center">
            <div className="text-[18px] w-[30%]">충전 금액</div>
            <div className="w-[70%] h-[40px] border border-gray rounded-[10px] px-[10px] outline-none flex justify-center items-center">
              <input
                className="outline-none w-[90%]"
                placeholder="충전할 금액을 입력하세요"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              /><p className="w-[10%] text-center">원</p>
            </div>
          </div>
          <hr className="border-gray my-[20px]" />
          <div className="w-[100%] my-[20px] flex justify-between items-center">
            <div className="text-[18px]">충전 후 잔액</div>
            <div>0원</div>
          </div>
        </div>
        <button
          className={`w-[100%] h-[45px] rounded-[7px] my-[15px] ${isDisabled ? 'bg-[#eeeeee] text-[#a6a6a6]' : 'bg-MainBlue text-white'}`}
          onClick={handleClick}
          disabled={isDisabled}
        >
          충전하기
        </button>
      </div>
    </div>
  );
}

export default Charge;
