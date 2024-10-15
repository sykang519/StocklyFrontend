function MenuBarChartContent() {
  const live_list = [
    { company_name: '삼성전자', price: 65000, fluctuation_rate: 2.5, fluctuation_price: 3500 },
    { company_name: '삼성전자', price: 65000, fluctuation_rate: 2.5, fluctuation_price: -3500 },
    { company_name: '삼성전자', price: 65000, fluctuation_rate: 2.5, fluctuation_price: 3500 },
  ];

  return (
    <div>
      <div className="p-[15px] text-[20px]">실시간</div>
      <hr className="w-[100%] border-font-gray" />
      <div>
        {live_list.map((live, index) => (
          <div className="flex justify-between items-center m-[5px]">
            <div className="m-[10px] text-[18px] flex text-chart-font">
              <p className="mr-[10px] text-MainBlue font-bold">{index + 1}</p>
              {live.company_name}
            </div>
            <div className="flex flex-col jsutify-center items-center m-[10px]">
              <div className="text-[17px]">{live.price}원</div>
              <div className={`text-[13px] font-thin ${live.fluctuation_price > 0 ? 'text-up' : 'text-down'}`}>
                {live.fluctuation_price > 0 ? "+" : ""}
                {live.fluctuation_price}원
                ({live.fluctuation_rate}%)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuBarChartContent;
