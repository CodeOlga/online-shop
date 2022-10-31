import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import Records from './Records';
import './App.css';

function Shop(){

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
    }
  
    return (
      
      <div>
    
        <Buttons chosenRecords={chosenRecords}/>
        <Records 
        records={records} 
        showTextClick={showTextClick}/>
  
      <p><a href="https://www.barnesandnoble.com/">All content taken from Barnes&Noble for studying purpose</a></p>
      </div>
    );


}
export default Shop;