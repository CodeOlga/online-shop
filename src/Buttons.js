function Buttons({chosenRecords}) {
  return(
    <div className="cont">
      <button className="change" onClick={() => chosenRecords('jazz')}>jazz</button>
      <button className="change" onClick={() => chosenRecords('soul')}>soul</button>
      <button className="change" onClick={() => chosenRecords('rock')}>rock</button>
      <button className="change" onClick={() => chosenRecords('hip-hop')}>hip-hop</button>
    </div>
  )
}
export default Buttons;