import { IoMdTrash } from 'react-icons/io';
import { useState } from 'react';
import Delete from '../../assets/icons/cancel.svg';

const alert_list = [
  { company_name: '삼성전자', price: 5000 },
  { company_name: '삼성SDI', price: 5000 },
];

const message_list = [
  { company_name: '삼성전자', price: 5000, date: '2002.05.19' },
  { company_name: '삼성SDI', price: 5000, date: '2002.05.27' },
];

function MenuBarLikeContent() {
  const [content, setContent] = useState('list');

  const handleClickList = () => {
    setContent('list');
  };
  const handleMessageList = () => {
    setContent('message');
  };
  return (
    <div>
      <div className="flex">
        <div
          className={`p-[15px] text-[20px] cursor-pointer ${content === 'list'? 'text-black' : 'text-[#b5b6bdeb]'}`}
          onClick={handleClickList}
        >
          알림목록
        </div>
        <div
          className={`p-[15px] text-[20px] cursor-pointer ${content === 'message' ? 'text-black' : 'text-[#b5b6bdeb]'}`}
          onClick={handleMessageList}
        >
          메시지
        </div>
      </div>

      <hr className="w-[100%] border-font-gray" />
      {content === 'list' ? (
        <div>
          {alert_list.map((like) => (
            <div className="flex justify-between items-center">
              <div className="mx-[15px] text-[18px] text-chart-font">{like.company_name}</div>
              <div className="flex justify-center items-center m-[10px]">
                <div className="m-[10px] text-[19px] ">{like.price}원</div>
                <div className="m-[10px] cursor-pointer">
                  <IoMdTrash className="w-[23px] h-[23px] text-chart-font" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {message_list.map((message) => (
            <div className="bg-white rounded-[10px] m-[10px] p-[5px]">
              <div className="flex justify-between items-center">
                <div className="m-[10px] text-[14px] text-[#acacacd4]">{message.date}</div> <img src={Delete} className="m-[10px] cursor-pointer"/>
              </div>
              <div className="m-[10px] text-[16px]">
                {message.company_name}가 {message.price}원에 도달했습니다.
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuBarLikeContent;
