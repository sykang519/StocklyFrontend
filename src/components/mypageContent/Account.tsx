import RoiChart from './RoiChart';
import { GrFormNext } from 'react-icons/gr';
import { useState } from 'react';
import MyStockList from './MyStockList';
import AssetsIcon from '../../assets/icons/assets_icon.svg';
import MoneyIcon from '../../assets/icons/money_icon.svg';
import RoiIcon from '../../assets/icons/roi_icon.svg';
import StockIcon from '../../assets/icons/stock_icon.svg';

function UserInfo() {
  const [openHoldings, setOpenHoldings] = useState(false);
  return (
    <div className="mx-[20px] my-[10px]">
      {/* 내 자산 */}
      <div>
        <div className="text-[25px] border-b border-gray text-[#373737] p-[10px]">수익률</div>
        <div className="w-full flex flex-col text-[25px] my-[20px] mx-[10px] items-start">
          <div className="text-[22px] text-[#373737]">
            <span className="text-[#7d7d7d] text-[18px]">총 자산&nbsp; </span>123,456,780 원{' '}
          </div>
          <div className="text-[15px] text-up">16,780 원 (+3.5%) </div>
        </div>
        <div>
          <RoiChart />
        </div>
        <div className="h-[30px]" />

        {/* 사각형 네 개 */}
        <div className="w-full">
          <div className="flex w-full">
            <div className="w-[50%] h-[120px] m-[10px] rounded-[10px] bg-Bg-gray">
              <div className="flex items-center mx-[10px] my-[15px]">
                <img src={AssetsIcon} className="mx-[10px] w-[23px] h-[23px]" />
                <span className="font-medium text-[#A2A5AC]">총자산</span>
              </div>
              <div className="mx-[20px] text-[21px] text-[#373737]">123,456,780 원</div>
            </div>
            <div className="w-[50%] h-[120px] m-[10px] rounded-[10px] bg-Bg-gray">
              <div className="flex items-center mx-[10px] my-[15px]">
                <img src={MoneyIcon} className="mx-[10px] w-[25px] h-[25px]" />
                <span className="font-medium text-[#A2A5AC]">예수금</span>
              </div>
              <div className="mx-[20px] text-[21px] text-[#373737]">456,780 원</div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-[50%] h-[120px] m-[10px] rounded-[10px] bg-Bg-gray">
              <div className="flex items-center mx-[10px] my-[15px]">
                <img src={StockIcon} className="mx-[10px] w-[25px] h-[25px]" />
                <span className="font-medium text-[#A2A5AC]">주식</span>
              </div>
              <div className="mx-[20px] text-[21px] text-[#373737]">123,000,000 원</div>
            </div>
            <div className="w-[50%] h-[120px] m-[10px] rounded-[10px] bg-Bg-gray">
              <div className="flex items-start mx-[10px] my-[15px]">
                <img src={RoiIcon} className="mx-[10px] w-[21px] h-[21px]" />
                <span className="font-medium text-[#A2A5AC]">수익률</span>
              </div>
              <div className="mx-[20px] text-[21px] text-[#ee5858]">+ 135,000 원(+3.5%)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px]" />

      {/* 보유 주식 */}
      <div>
        <div className="text-[25px] flex justify-between border-b border-gray text-[#373737] p-[10px] my-[10px]">
          보유 주식
          <GrFormNext
            className={`text-[30px] cursor-pointer ${openHoldings && 'rotate-90'} transition-transform duration-300 ease-in-out`}
            onClick={() => setOpenHoldings(!openHoldings)}
          />
        </div>
        <div className={`${!openHoldings && 'invisible'} mt-[20px]`}>
          <MyStockList />
        </div>
      </div>
      <div className="h-[300px]" />
    </div>
  );
}

export default UserInfo;