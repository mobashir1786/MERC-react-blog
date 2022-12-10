import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './Routes/Home';
import Bollywood from './Routes/Bollywood';
import Hollywood from './Routes/Hollywood';
import Technology from './Routes/Technology';
import Fitness from './Routes/Fitness';
import Food from './Routes/Food';
import CreateCard from './Routes/CreateCard';
import LoginSignup from './Routes/LoginSignup';
import Logout from './Routes/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/food' element={<Food />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
          <Route path='/createCard' element={<CreateCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
