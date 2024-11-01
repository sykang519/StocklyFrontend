import { useState, useEffect } from 'react';

function SignUp() {
  const [isCorrect, setIsCorrect] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  useEffect(() => {
    if (password === checkPassword) {
      setIsCorrect(true);
      setIsDisabled(false);
    } else {
      setIsCorrect(false);
      setIsDisabled(true);
    }
  }, [checkPassword, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost.stock-server/api/v1/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      console.log(JSON.stringify({ name, email, password }))
      if (response.ok) {
        alert('회원가입 성공');
      } else {
        alert('회원가입 실패');
        console.log(response);
      }
    } catch (error) {
      console.error('Network error: ', error);
      alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[45px] mb-[10px]">계정 생성</div>
      <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
        <input
          className="w-[575px] h-[75px] m-[15px] p-[20px] rounded-[7px] shadow"
          placeholder="이름"
          required
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className="w-[575px] h-[75px] m-[15px] p-[20px] rounded-[7px] shadow"
          placeholder="이메일"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="w-[575px] h-[75px] m-[15px] p-[20px] rounded-[7px] shadow"
          placeholder="비밀번호"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className="w-[575px] h-[75px] m-[15px] p-[20px] rounded-[7px] shadow"
          placeholder="비밀번호 확인"
          value={checkPassword}
          type="password"
          required
          onChange={(e) => setCheckPassword(e.target.value)}
        ></input>
        <div className={`${isCorrect ? 'text-black text-opacity-0' : 'text-reset-red'}`}>
          비밀번호를 다시 확인하세요
        </div>
        <button
          className="w-[300px] h-[65px] mt-[100px] text-white text-[23px] bg-MainBlue rounded-[10px] hover:bg-[#1063d8] drop-shadow-xl"
          type="submit"
          disabled={isDisabled}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUp;
