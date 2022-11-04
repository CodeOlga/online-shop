import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Bestsellers from './Bestsellers';
import './App.css';
import Shop from './Shop';

function App() {
  return <Router>
      <nav>
        <Link to='/' className='link'>Shop</Link>
        <Link to='/about' className='link'>About</Link>
        <Link to='/bestsellers' className='link'>Bestsellers</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/bestsellers' element={<Bestsellers/>} />
      </Routes>
    </Router>
}
export default App;
