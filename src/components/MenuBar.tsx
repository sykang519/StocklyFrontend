import { IoHeart } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa6';

function MenuBar() {
  return (
    <div className="w-[90px] bg-Bg-gray border-l solid flex flex-col ">
      <button className="flex flex-col justify-center items-center m-[10px] group">
        <IoHeart className="w-[27px] h-[27px] m-[5px] text-[#B4BDC6] group-hover:text-[#06032d]" />
        <p className="text-[#B4BDC6] group-hover:text-[#06032d] text-[15px]">관심</p>
      </button>

      <button className="flex flex-col justify-center items-center m-[10px] group">
        <FaRegClock className="w-[25px] h-[25px] m-[5px] text-[#B4BDC6] group-hover:text-[#06032d]" />
        <p className="text-[#B4BDC6] group-hover:text-[#06032d] text-[15px]">실시간</p>
      </button>
    </div>
  );
}

export default MenuBar;
