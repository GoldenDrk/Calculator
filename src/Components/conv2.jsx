import { useState } from 'react'
import '../Styles/App.css'
import '../Styles/conv2.css'

function Conv2() {

  const [dist, updateDist] = useState(0);
  const [unidad, changeUnidad] = useState('KM');
  const [newUnity, changeNewUnity] = useState('MI');
  const [sentido, changeSentido] = useState('KM => MI');
  const [div, updateDiv] = useState(false);
  const [count, updateCount] = useState(0);

  const unity = () => {
    (sentido == 'KM => MI' && count == 0) ? (changeUnidad('MI'), changeNewUnity('KM'), changeSentido('MI => KM'), console.log(sentido)) : ((sentido == 'MI => KM') ? (changeUnidad('M'), changeNewUnity('YD'), changeSentido('M => YD'), updateCount(1)) : ((sentido == 'M => YD') ? (changeUnidad('YD'), changeNewUnity('M'), changeSentido('YD => M')) : ((sentido == 'YD => M') ? (changeUnidad('M'), changeNewUnity('FT'), changeSentido('M => FT')) : ((sentido == 'M => FT') ? (changeUnidad('FT'), changeNewUnity('M'), changeSentido('FT => M')) : (changeUnidad('KM'), changeNewUnity('MI'), changeSentido('KM => MI'), updateCount(0))))));
    updateDiv(false);
  }

  const getDistance = () => {
    document.getElementById("conversion").value = "";
    document.getElementById("conversion").blur();
    const newDistanceInMi = dist / 1.609;
    const newDistanceInKm = dist * 1.609;
    const newDistanceInM = (unidad == 'YD') ? (dist / 1.094) : (dist / 3.281);
    const newDistanceInYd = dist * 1.094;
    const newDistanceInFt = dist * 3.281;
    (unidad == 'MI') ? (updateDist(newDistanceInKm.toFixed(2))) : ((unidad == 'KM') ? (updateDist(newDistanceInMi.toFixed(2))) : ((unidad == 'YD' || unidad == 'FT') ? (updateDist(newDistanceInM.toFixed(2))) : ((newUnity == 'YD') ? (updateDist(newDistanceInYd.toFixed(2))) : (updateDist(newDistanceInFt.toFixed(2))))));
    updateDiv(true);
  }

  const hide = () => {
    updateDiv(false);
  }

  const handleEvent = (event) => {
    if (event.key === "Enter") getDistance();
    else if (event.key === "Escape") document.getElementById("conversion").blur(), document.getElementById("conversion").value = "";
  }
  


  return (
    <>
      <div>
        {/*<input type="number" placeholder="Input the temperature here" onChange={e => updateTemperature(e.target.value)} />*/}
        <div className="inputUser">
          <i className="fa-solid fa-ruler fa-2xl" style={{paddingTop:3 + 'rem', paddingRight:0.75 + 'rem'}}></i>
          <div className="form-control">
              <input type="number" id="conversion" onKeyDown={handleEvent} onClick={hide} onChange={e => updateDist(e.target.value)} required="" />
              <label>
                  <span style={{transitionDelay:0 + 'ms'}}>D</span>
                  <span style={{transitionDelay:50 + 'ms'}}>i</span>
                  <span style={{transitionDelay:100 + 'ms'}}>s</span>
                  <span style={{transitionDelay:150 + 'ms'}}>t</span>
                  <span style={{transitionDelay:200 + 'ms'}}>a</span>
                  <span style={{transitionDelay:250 + 'ms'}}>n</span>
                  <span style={{transitionDelay:300 + 'ms'}}>c</span>
                  <span style={{transitionDelay:350 + 'ms'}}>e</span>
              </label>
            </div>
            <span className="unidad">{unidad}</span>
            <div className="prueba" id="tooltip2" style={{cursor: 'help'}}>
              <i className="fa-regular fa-circle-question fa-2xl"></i>
              {unidad == 'KM' && <span id="tooltip2-text">In order to get MI → KM / 1.609</span>}
              {unidad == 'MI' && <span id="tooltip2-text">In order to get KM → MI * 1.609</span>}
              {unidad == 'FT' && newUnity == 'M' && <span id="tooltip2-text">In order to get M → FT / 3.281</span>}
              {unidad == 'YD' && newUnity == 'M' && <span id="tooltip2-text">In order to get M → YD / 1.094</span>}
              {unidad == 'M' && newUnity == 'YD' && <span id="tooltip2-text">In order to get YD → M * 1.094</span>}
              {unidad == 'M' && newUnity == 'FT' && <span id="tooltip2-text">In order to get FT → M * 3.281</span>}
            </div>
          </div>
        {div && <span className="sad">{dist}{newUnity}</span>}
        {!div && <span className="sad">{newUnity}</span>}
        <div className="buttonsConvert">
          <button type="button" className="btn2" onClick={getDistance}>Convert</button>
          <button type="button" className="btn2" onClick={unity}>Change unit</button>
        </div>
      </div>
    </>
  )
};

export default Conv2