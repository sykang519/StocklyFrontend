function MyStockList() {
  const stocks = [
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: 2.5 },
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: -2.5 },
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: 2.5 },
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: 2.5 },
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: -2.5 },
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: 2.5 },
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: 2.5 },
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: -2.5 },
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: 2.5 },
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: 2.5 },
    { company_name: '삼성전자', volume: 2, price: 60000, fluctuation_rate: -2.5 },
    { company_name: '삼성전자111', volume: 2, price: 60000, fluctuation_rate: 2.5 },
  ];
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-full h-[70px] text-[25px] p-[20px] sticky top-0 bg-white">전체 보유 주식</div>
      <div className="w-[85%] flex flex-col justify-center items-center overflow-scroll">
        {stocks.map((stock) => (
          <div className=" w-full flex border-b border-gray justify-between p-[10px]">
            <div>
              <div className="text-[21px]">{stock.company_name}</div>
              <div>{stock.volume}주</div>
            </div>
            <div>
              <div className="text-[20px]">₩ {stock.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
              <div className={`text-[18px] ${stock.fluctuation_rate > 0 ? 'text-up' : 'text-down'}`}>
                {stock.fluctuation_rate > 0 ? '+' : ''}
                {stock.fluctuation_rate}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyStockList;
