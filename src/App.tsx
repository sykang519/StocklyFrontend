import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MenuBar from './components/MenuBar';
import MyInvest from './pages/MyInvest';

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
            </Routes>
            <MenuBar />
          </div>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
