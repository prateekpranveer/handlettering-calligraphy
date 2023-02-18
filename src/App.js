import './App.css';
import  {BrowserRouter as Router}  from 'react-router-dom';
import { Routes,Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Services from './pages/Services';
import Workshop from './pages/Workshop';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/service' element={<Services/>}></Route>
      <Route path='/workshop' element={<Workshop/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
