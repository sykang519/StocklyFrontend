import TopNavBar from '../components/TopNavBar';
import Charge from '../components/myInvestContent/Charge';
import Reset from '../components/myInvestContent/Reset';
import useDrawerStore from '../zustand/MenuBarStore';

function MyInvestPage() {
  const {openDrawer} = useDrawerStore();
  return (
    <>
      <div className={`w-[100%] full bg-Bg-gray transition-all duration-300 ${openDrawer ? 'mr-[370px]' : 'mr-[70px]' }`}>
        <TopNavBar />
        <div className="flex justify-center ">
          <div className="w-[95%] min-w-[1300px] max-w-[1500px]">
            <div className="flex justify-between h-[850px] my-[30px]">
              <div className="flex flex-col w-[59%] justify-between">
                <div className="h-[48%] bg-white rounded-[15px]"> 1 </div>
                <div className="h-[48%] bg-white rounded-[15px]"> 2 </div>
              </div>
              <div className="flex flex-col w-[39%] justify-between">
                <div className="h-[30%] bg-white rounded-[15px]"> 3 </div>
                <div className="h-[66%] bg-white rounded-[15px]"> 4 </div>
              </div>
            </div>
            <div className="flex justify-between h-[670px] my-[30px]">
              <div className="w-[32%] bg-white rounded-[15px]"> <Charge/> </div>
              <div className="w-[32%] bg-white rounded-[15px]"> <Reset/> </div>
              <div className="w-[32%] bg-white rounded-[15px]"> 7 </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyInvestPage;
