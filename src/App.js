
//-----перенесла в Nav.js--------//
/*import React from 'react';
 import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
 } from "react-router-dom";
 import './App.css';
  import About from './About';
  import Bestsellers from './Bestsellers';
import Shop from './Shop';*/


//----------перенесла в Shop.js----------//
/*import { useState } from 'react';
import { data } from './data'
import './App.css';
import Records from './Records';
import Buttons from './Buttons';*/

import './App.css';
import Nav from './Nav';
import Shop from './Shop';


//----------перенесла в Shop.js----------//
/*function App() {
const [records, setRecords] = useState(data);
  const [showText, setShowText] = useState(false);

  const chosenRecords = (searchTerm) => {
    const newRecords = data.filter (element => 
      element.searchTerm === searchTerm);
      setRecords(newRecords);
  }

  const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowText(!showText)
  }*/


  function App(){
  
  return (
    

    //----------перенесла в Nav.js---------//
    /*<Router>
      <nav>
        <Link to='/'>Shop</Link>
        <Link to='/about'>About</Link>
        <Link to='/bestsellers'>Bestsellers</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/bestsellers' element={<Bestsellers/>} />
      </Routes>
    </Router>*/

    
    

//------без <Nav/> перенесла в Shop.js----------//
    /*<div>
      <Nav/>
      <Buttons chosenRecords={chosenRecords}/>
      <Records 
      records={records} 
      showTextClick={showTextClick}/>

    <p><a href="https://www.barnesandnoble.com/">All content taken from Barnes&Noble for studying purpose</a></p>
    </div>*/

   <div>
      <Nav/>
      <Shop/>
    </div>

  );
}

export default App;
