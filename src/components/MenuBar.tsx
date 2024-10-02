import { IoHeart } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa6';
import MenuBarLikeContent from './MenuBarLikeContent';
import MenuBarChartContent from './MenuBarChartContent';
import useDrawerStore from '../zustand/MenuBarStore';

function MenuBar() {
  const {openDrawer, like, chart, handleDrawer} = useDrawerStore();

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
