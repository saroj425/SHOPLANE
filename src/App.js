import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Forgotpassword from './pages/Forgotpassword/Forgotpassword';
import Layout from './components/Layout';
import ProductDetails from './pages/Dashboard/ProductDetails';


function App() {
  
  return (
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgotpassword' element={<Forgotpassword/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/product-details/:id' element={<ProductDetails/>}/>
        </Routes>
      
      </BrowserRouter>
  );
}

export default App;
