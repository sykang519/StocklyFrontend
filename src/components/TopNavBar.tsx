import MainLogo from '../assets/icons/main_logo.svg';
import ProfileIcon from '../assets/icons/profile_icon.svg';
import useNavBarStore from '../zustand/TopNavBarStore';
import { useNavigate } from 'react-router-dom';

function TopNavBar() {
  const { home, news, myinvest, handleClick } = useNavBarStore();
  const navigate = useNavigate();
  
  const goToHome = () => {navigate('/main')}
  const goToMyInvest = () => {navigate('/myinvest')}
  return (
    <>
      <div className="w-[100%] flex justify-between items-center pb-[50px] min-w-[800px]">
        <div className="flex items-center m-[10px] cursor-pointer">
          <img src={MainLogo} className="w-[50px] h-[50px]" />
          <p className="text-[25px]">STOCKLY</p>
        </div>
        <div className="flex items-center">
          <div
            className={`text-[17px] mx-[20px] cursor-pointer ${home ? 'text-[#000000]' : 'text-[#B4BDC6]'}`}
            onClick={() => {handleClick('home'); goToHome();}}
          >
            홈
          </div>
          <div
            className={`text-[17px] mx-[20px] cursor-pointer ${news ? 'text-[#000000]' : 'text-[#B4BDC6]'}`}
            onClick={() => handleClick('news')}
          >
            뉴스
          </div>
          <div
            className={`text-[17px] mx-[20px] cursor-pointer ${myinvest ? 'text-[#000000]' : 'text-[#B4BDC6]'}`}
            onClick={() => {handleClick('myinvest'); goToMyInvest();}}
          >
            내 투자
          </div>
          <input
            placeholder="검색어를 입력하세요"
            className="m-[10px] bg-Box-gray w-[230px] h-[40px] rounded-[30px] p-[15px]"
          ></input>
        </div>
        <div className="m-[10px] cursor-pointer">
          <img src={ProfileIcon} />
        </div>
      </div>
    </>
  );
}

export default TopNavBar;
