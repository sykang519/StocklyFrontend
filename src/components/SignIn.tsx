import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate('/main');
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[50px] mb-[150px]">로그인</div>
      <form className="flex flex-col justify-center items-center">
        <input
          className="w-[575px] h-[80px] m-[15px] p-[20px] rounded-[7px] shadow"
          placeholder="이메일"
          required
        ></input>
        <input
          className="w-[575px] h-[80px] m-[15px] p-[20px] rounded-[7px] shadow"
          placeholder="비밀번호"
          required
        ></input>
        <button
          className="w-[300px] h-[65px] mt-[100px] text-[28px] bg-MainBlue text-white rounded-[7px]"
          type="submit"
          onClick={gotoMain}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default SignIn;
