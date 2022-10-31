function Records ({ records, showTextClick }) {
  return(
    <div className="records">
      {records.map((element => {
        const {id, artist, album, searchTerm, overview, price, image, showMore} = element;
        return(
          <div key = {id} className="record-card">
            <img src={ image } width="300px" alt="record" />
            <h2>{ artist }</h2>
            <h3>{ album }</h3>
            <h4>{ price }</h4>
            <p>{ showMore ? overview : overview.substring(0, 180) + '...'} <button className="btn" onClick={() => showTextClick(element)}>{ showMore ? 'show less' : 'show more'}</button></p>

          </div>
        )
      }))}
    </div>
  )
}
export default Records;