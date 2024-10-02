import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <>
      {
        <BrowserRouter>
          <div className="flex">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/main" element={<MainPage />} />
            </Routes>
            <MenuBar />
          </div>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
