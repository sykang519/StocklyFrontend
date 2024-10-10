function Charge() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[25px] m-[20px] w-[90%]">계좌 충전</div>
      <div className="flex flex-col justify-between w-[90%] h-[560px]">
        <div>
          <div className="w-[100%] my-[20px] flex justify-between items-center">
            <div className="text-[18px] w-[30%]">충전 금액</div>
            <input
              className="w-[70%] h-[40px] border border-gray rounded-[10px] px-[10px]"
              placeholder="충전할 금액을 입력하세요"
            ></input>
          </div>
          <hr className="border-gray my-[20px]" />
          <div className="w-[100%] my-[20px] flex justify-between items-center">
            <div className="text-[18px]">충전 후 잔액</div>
            <div>0원</div>
          </div>
        </div>
        <button className="w-[100%] h-[45px] bg-MainBlue rounded-[7px] text-white my-[15px]">충전하기</button>
      </div>
    </div>
  );
}

export default Charge;
