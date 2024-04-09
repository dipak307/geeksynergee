import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';
import {Routes,Route} from "react-router-dom"
import MenuBar from './MenuBar';
import CompanyInfo from './CompanyInfo';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   
  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };
  return (
   <>
     
     {isLoggedIn  && <MenuBar/>
    }
    <Routes>
    {isLoggedIn? 
     <Route path='/' element={<Home/>} /> : <Route  path='/login' element={<Login onLogin={handleLogin}/>}  />}
     <Route path='/Signup' element={<Signup/>} />
     <Route path='/info' element={<CompanyInfo/>} />
    </Routes>
   </>
  );
}

export default App;
