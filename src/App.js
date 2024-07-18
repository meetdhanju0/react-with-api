import './App.css';
import '../src/component/css/bootstrap.css'
import '../src/component/css/responsive.css'
import '../src/component/css/style.css'
import '../src/component/css/style.css.map'
import Navbar from './component/Navbar'
import {Routes, Route } from "react-router-dom";
import BookTable from './component/BookTable'
import Footer from './component/Footer'
import About from './component/About'
import Menu from './component/Menu'
import Home from './component/Home'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/booktable' element={<BookTable/>}/>
        <Route path='/404' element={<NotFound/>}/>
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
