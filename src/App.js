
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router';
import Blog from './Blog/Blog';
import Home from './Pages/Home/Home/Home';
import About from './About/About';
import Login from './Login/Login';
import Footer from './Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/Blogs" element={<Blog></Blog>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
