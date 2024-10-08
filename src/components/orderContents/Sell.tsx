

function Sell() {
  return (
    <div className="flex flex-col justify-center items-center mt-[20px]">
      <div className="flex flex-column  w-[90%] my-[5px]">
        <div className="w-[30%] h-[33px] ">판매 가격</div>
        <div className="bg-gray w-[70%] rounded-[7px] flex">
          <button className="w-[50%] text-[13px] flex justify-center items-center">지정가</button>
          <button className="w-[50%] text-[13px] flex justify-center items-center">시장가</button>
        </div>
      </div>
      <div className="flex flex-column justify-end w-[90%] my-[5px]">
        <div className="w-[30%] h-[33px]"></div> <input className="border w-[70%] rounded-[7px] border-gray"></input>
      </div>
      <div className="flex flex-column w-[90%] my-[5px]">
        <div className="w-[30%] h-[33px] ">수량</div>
        <input className="w-[70%] border border-gray rounded-[7px] px-[10px]" placeholder="수량 입력"></input>
      </div>
      <div className="flex flex-column  w-[90%]">
        <div className="w-[30%] h-[33px]"></div>
        <div className="w-[70%] flex justify-between">
          <button className="w-[23%] h-[25px] border rounded-[5px] text-[13px] border border-gray">10%</button>
          <button className="w-[23%] h-[25px] border rounded-[5px] text-[13px] border border-gray">25%</button>
          <button className="w-[23%] h-[25px] border rounded-[5px] text-[13px] border border-gray">50%</button>
          <button className="w-[23%] h-[25px] border rounded-[5px] text-[13px] border border-gray">최대</button>
        </div>
      </div>
      <hr className="w-[95%] border-font-gray my-[15px]" />
      <div className="flex flex-column  w-[90%] my-[5px]">
        <div className="w-[30%] h-[33px] ">판매 가능</div>
        <div className="w-[70%] text-right">0원</div>
      </div>
      <div className="flex flex-column  w-[90%] my-[5px]">
        <div className="w-[30%] h-[33px] ">총 금액</div>
        <div className="w-[70%] text-right">0원</div>
      </div>
      <button className="w-[90%] h-[40px] bg-MainBlue rounded-[7px] text-white my-[10px]">매도하기</button>
    </div>
  );
}

export default Sell;