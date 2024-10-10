import TopNavBar from '../components/TopNavBar';
import Order from '../components/orderContents/Order';

const boxStyles = {
    height: '800px',
    backgroundColor: '#ffffff',
    margin: '10px',
    borderRadius: '15px'
  };

function StockDetailsPage() {
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-Bg-gray">
        <TopNavBar />
        <div className="w-[100%] min-w-[1300px] px-[10px]">
          <div className="border">1</div>
          <div className="flex">
            <div className="w-[55%]" style={boxStyles}>2</div>
            <div className="w-[25%]" style={boxStyles}>3</div>
            <div className="w-[20%]" style={boxStyles}><Order/></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockDetailsPage;
