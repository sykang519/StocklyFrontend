function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[50px] mb-[10px]">계정 생성</div>
      <form className="flex flex-col justify-center items-center">
        <input className="w-[575px] h-[75px] m-[15px] p-[20px] rounded-[7px] shadow" placeholder="이름" required></input>
        <input className="w-[575px] h-[75px] m-[15px] p-[20px] rounded-[7px] shadow" placeholder="이메일" required></input>
        <input className="w-[575px] h-[75px] m-[15px] p-[20px] rounded-[7px] shadow" placeholder="비밀번호" required></input>
        <input className="w-[575px] h-[75px] m-[15px] p-[20px] rounded-[7px] shadow" placeholder="비밀번호 확인" required></input>
        <button className="w-[300px] h-[65px] mt-[100px] text-white text-[28px] bg-MainBlue rounded-[7px]" type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUp;
