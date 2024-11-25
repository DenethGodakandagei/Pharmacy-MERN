
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { createContext, useState  } from 'react';
import Home from './components/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Bymedicine from './pages/Bymedicine';
import Popuplog from './pages/Popuplog';
import { Toaster } from 'react-hot-toast';
import Addmedicine from './pages/Addmedicine';



export const registertrue =  createContext();



function App() {
  const [value, setValue] = useState(false);
  

  const [uservalue,setUservalue] =useState([]);
 
  const saveUserData = (data) => {
    
    setUservalue(data);
  };
 

  const toggleValue = () => {
    setValue(prevValue => !prevValue);
  
  };
 console.log(value)
  return (
    <registertrue.Provider  value={{ value, toggleValue , saveUserData ,uservalue }}>
      <Toaster  position="top-center" toastOptions={{duration:2000}} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/bymedicine/:id' element={<Bymedicine />} />
      <Route path='/loginorregister' element={<Popuplog />} />
      <Route path='/addmedicine' element={<Addmedicine />} />
    </Routes>
    </registertrue.Provider>
  );
}

export default App;
