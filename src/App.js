
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router';
import Blog from './Blog/Blog';
import Home from './Pages/Home/Home/Home';
import About from './About/About';
import Login from './Login/Login';
import Footer from './Shared/Footer/Footer';
import SignUp from './SignUp/SignUp';
import Notfound from './NotFound/Notfound';
import Checkout from './Checkout/Checkout';
import RequireAuth from './RequireAuth/RequireAuth';
import ServiceDetail from './Pages/Home/Services/ServiceDetail/ServiceDetail';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/Services/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/Blogs" element={<Blog></Blog>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
