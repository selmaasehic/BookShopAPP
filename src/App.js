import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import FirstPage from './FirstPage/FirstPage';
import CreateUser from './CreateUser/CreateUser';
import CartPage from './CartPage/CartPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<MainPage />} />
        <Route path='firstPage' exact element={<FirstPage />} />
        <Route path='createUser' exact element={<CreateUser />} />
        <Route path='cartPage' exact element={<CartPage /> } />
      </Routes>
    </div>
  );
}

export default App;
