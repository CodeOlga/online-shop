import { useState } from 'react';
import { best } from './best';
import './App.css';

function Bestsellers() {
  const [bestRecord, setBestRecord] = useState(0);
  const { id, artist, album, price, image } = best[bestRecord];

  const previousRecord = () => {
    setBestRecord ((bestRecord => {
      bestRecord--;
      if (bestRecord < 0) {
        return best.length - 1;
      }
      return bestRecord;
    }))
  }

  const nextRecord = () => {
    setBestRecord((bestRecord => {
      bestRecord++;
      if (bestRecord > best.length - 1) {
        bestRecord = 0;
      }
      return bestRecord;
    }))
  }

  return(
  <div className='main'>  
    <div className='container'>
      <img src={image} alt="record" width="300px"/>
    </div> 
    <div className='container'>
      <h2>{id} {artist}</h2>
    </div> 
    <div className='container'>
      <h2> {album}</h2>
    </div> 
    <div className='container'>
      <h3>$ {price}</h3>
    </div>
    <div className='button'>
      <button className='buttonChange' onClick={previousRecord}>Previous</button>
      <button className='buttonChange' onClick={nextRecord}>Next</button>
    </div>
  </div>
  )
}
export default Bestsellers;