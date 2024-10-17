import TopNavBar from '../components/TopNavBar';
import StockChartList from '../components/StockChart';
import useDrawerStore from '../zustand/MenuBarStore';

function Carousel() {
  return (<div>hello</div>);
}

function MainPage() {
  const { openDrawer } = useDrawerStore();
  return (
    <>
      <div className={`w-[100%] h-[100vh] transition-all duration-300 z-10 ${openDrawer ? 'mr-[370px]' : 'mr-[70px]'}`}>
        <TopNavBar />
        <div className="flex justify-center ">
          <div className="w-[95%] min-w-[800px] max-w-[1500px]">
            <StockChartList />
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
}

export default MainPage;
