import { IoHeart } from 'react-icons/io5';

const like_list = [
  { company_name: '삼성전자', symbol: '00928' },
  { company_name: '삼성SDI', symbol: '00929' },
];

function MenuBarLikeContent() {
  return (
    <div>
      <div className="p-[10px] text-[20px]">관심 종목</div>
      <hr className="w-[100%] border-font-gray" />
      <div>
        {like_list.map((like) => (
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center m-[10px]">
              <div className="content-center cursor-pointer"><IoHeart className="w-[25px] h-[25px]"/></div>
              <div className="m-[10px] text-[18px]">{like.company_name}</div>
            </div>
            <div className="m-[10px] text-[17px] text-[#93949bec]">{like.symbol}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuBarLikeContent;
