function Reset() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[25px] m-[20px] w-[90%]">투자 기록 초기화</div>
      <div className="flex flex-col justify-between w-[90%] h-[560px]">
        <div className="flex justify-center items-ceter text-font-gray my-[25px]">
          투자 기록을 초기화 하면 사용자의 모든 투자 기록과 자산 정보가 초기의 상태로 돌아갑니다. 데이터가 영구 삭제
          되므로 기록을 다시 복구할 수 없습니다. 신중하게 고민 후 결정 하시길 바랍니다.
        </div>
        <button className="w-[100%] h-[45px] bg-reset-red rounded-[7px] text-white my-[15px]">초기화 하기</button>
      </div>
    </div>
  );
}

export default Reset;
