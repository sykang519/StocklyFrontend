import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MenuBar from './components/menuBar/MenuBar';
import MyInvest from './pages/MyInvestPage';
import StockDetailsPage from './pages/StockDetailsPage';

function App() {


  return (
    <>
      {
        <BrowserRouter>
          <div className={`flex`}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/myinvest" element={<MyInvest />} />
              <Route path="/details" element={<StockDetailsPage />} />
            </Routes>
            <MenuBar/>
          </div>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
