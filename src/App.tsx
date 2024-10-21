import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MenuBar from './components/menuBar/MenuBar';
import MyInvest from './pages/MyInvestPage';
import StockDetailsPage from './pages/StockDetailsPage';
import OnBoardingPage from './pages/OnBoardingPage';
import Test from './pages/Test';

function App() {
  const location = useLocation();

  const showMenuBar = !['/', '/login'].includes(location.pathname);

  return (
    <div className="flex">
      <Routes>
      <Route path="/test" element={<Test />} />
        <Route path="/" element={<OnBoardingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/myinvest" element={<MyInvest />} />
        <Route path="/details" element={<StockDetailsPage />} />
      </Routes>

      {showMenuBar && (
        <div className="w-[70px] fixed right-0 top-0 h-full">
          <MenuBar />
        </div>
      )}
    </div>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
