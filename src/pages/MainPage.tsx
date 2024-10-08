import TopNavBar from '../components/TopNavBar';
import StockChartList from '../components/StockChartList';

function MainPage() {

  return (
    <>
      <div className="w-[100%] h-[100vh]">
        <TopNavBar />
        <div className="flex justify-center ">
          <div className="w-[95%] min-w-[800px] max-w-[1500px]">
            <StockChartList />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
