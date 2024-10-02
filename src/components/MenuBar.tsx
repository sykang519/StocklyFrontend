import { IoHeart } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa6';
import { useState } from 'react';
import MenuBarLikeContent from './MenuBarLikeContent';
import MenuBarChartContent from './MenuBarChartContent';

function MenuBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [like, setLike] = useState(false);
  const [chart, setChart] = useState(false);

  const handleDrawer = (button: string) => {
    // drawer가 닫혀있다가 열리는 경우
    if (!openDrawer) {
      if (button === 'like') {
        setOpenDrawer(true);
        setLike(true);
      } else if (button === 'chart') {
        setOpenDrawer(true);
        setChart(true);
      }
    } else if (openDrawer) {
      // drawer가 열려있던 상태에서 한 번 더 눌러서 drawer를 닫을 경우
      if (like && button === 'like') {
        setOpenDrawer(false);
        setLike(false);
      } else if (chart && button === 'chart') {
        setOpenDrawer(false);
        setChart(false);
      }
      // drawer가 열려있던 상태에서 다른 버튼을 눌러서 content 변화시킬 경우
      else if (like && button === 'chart') {
        setLike(false);
        setChart(true);
      } else if (chart && button === 'like') {
        setChart(false);
        setLike(true);
      }
    }
  };

  return (
    <div className="flex">
      <div
        className={`fixed top-0 h-full w-[300px] bg-Bg-gray transition-transform duration-300 z-100 ${openDrawer ? '-translate-x-full' : 'translate-x-0'}`}
      >
        {like ? <MenuBarLikeContent /> : <MenuBarChartContent />}
      </div>
      <div className="w-[80px] bg-Bg-gray border-l solid flex flex-col z-10">
        <button
          className="flex flex-col justify-center items-center m-[10px] group"
          onClick={() => handleDrawer('like')}
        >
          {like ? (
            <>
              <IoHeart className="w-[27px] h-[27px] m-[5px] text-[#06032d]" />
              <p className="text-[#06032d] text-[15px]">관심</p>
            </>
          ) : (
            <>
              <IoHeart className="w-[27px] h-[27px] m-[5px] text-[#B4BDC6] group-hover:text-[#06032d]" />
              <p className="text-[#B4BDC6] group-hover:text-[#06032d] text-[15px]">관심</p>
            </>
          )}
        </button>

        <button
          className="flex flex-col justify-center items-center m-[10px] group "
          onClick={() => handleDrawer('chart')}
        >
          {chart ? (
            <>
              <FaRegClock className="w-[25px] h-[25px] m-[5px] text-[#06032d]" />
              <p className="text-[#06032d] text-[15px]">실시간</p>
            </>
          ) : (
            <>
              <FaRegClock className="w-[25px] h-[25px] m-[5px] text-[#B4BDC6] group-hover:text-[#06032d]" />
              <p className="text-[#B4BDC6] group-hover:text-[#06032d] text-[15px]">실시간</p>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default MenuBar;
