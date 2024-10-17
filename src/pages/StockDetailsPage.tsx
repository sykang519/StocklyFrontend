import TopNavBar from '../components/TopNavBar';
import Order from '../components/orderContents/Order';
import useDrawerStore from '../zustand/MenuBarStore';
import TopContent from '../components/stockDetails/TopContent';
import Chart from '../components/stockDetails/Chart';
import Price from '../components/stockDetails/Price';

const boxStyles = {
  height: '800px',
  backgroundColor: '#ffffff',
  margin: '10px',
  borderRadius: '15px',
};

function StockDetailsPage() {
  const { openDrawer } = useDrawerStore();
  return (
    <>
      <div
        className={`w-[100%] h-[100vh] bg-Bg-gray transition-all duration-300 z-10 ${openDrawer ? 'mr-[370px]' : 'mr-[70px]'}`}
      >
        <TopNavBar />
        <div className="w-full min-w-[1300px] px-[10px]">
          <div className="w-full flex justify-center items-center">
              <TopContent/>
          </div>
          <div className="flex">
            <div className="w-[55%]" style={boxStyles}>
              <Chart/>
            </div>
            <div className="w-[25%]" style={boxStyles}>
              <Price/>
            </div>
            <div className="w-[20%]" style={boxStyles}>
              <Order />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockDetailsPage;
