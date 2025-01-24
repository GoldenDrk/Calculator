import { useState } from 'react'
import '../Styles/App.css'
import '../Styles/conv.css'

function Conv() {

  const [temp, updateTemp] = useState(0);
  const [unidad, changeUnidad] = useState('ºC');
  const [newUnity, changeNewUnity] = useState('ºF');
  const [sentido, changeSentido] = useState('ºC => ºF');
  const [div, updateDiv] = useState(false);

  const unity = () => {
    (sentido == 'ºC => ºF') ? (changeUnidad('ºF'), changeNewUnity('ºC'), changeSentido('ºF => ºC')) : (changeUnidad('ºC'), changeNewUnity('ºF'), changeSentido('ºC => ºF'));
    updateDiv(false);
  }

  const getTemperature = () => {
    document.getElementById("conversion").value = "";
    document.getElementById("conversion").blur();
    const newTemperatureInF = (temp * 1.8) + 32;
    const newTemperatureInC = (temp - 32) / 1.8;
    (unidad != 'ºC') ? (updateTemp(newTemperatureInC.toFixed(1))) : (updateTemp(newTemperatureInF.toFixed(1)));
    updateDiv(true);
  }

  const hide = () => {
    updateDiv(false);
  }

  const handleEvent = (event) => {
    if (event.key === "Enter") getTemperature();
    else if (event.key === "Escape") document.getElementById("conversion").blur(), document.getElementById("conversion").value = "";
  }
  


  return (
    <>
      <div>
        {/*<input type="number" placeholder="Input the temperature here" onChange={e => updateTemperature(e.target.value)} />*/}
        <div className="inputUser">
          <i className="fa-solid fa-temperature-high fa-2xl" style={{paddingTop:3.17 + 'rem', paddingRight:0.75 + 'rem'}}></i>
          <div className="form-control">
              <input type="number" id="conversion" onKeyDown={handleEvent} onClick={hide} onChange={e => updateTemp(e.target.value)} required="" />
              <label>
                  <span style={{transitionDelay:0 + 'ms'}}>D</span>
                  <span style={{transitionDelay:50 + 'ms'}}>e</span>
                  <span style={{transitionDelay:100 + 'ms'}}>g</span>
                  <span style={{transitionDelay:150 + 'ms'}}>r</span>
                  <span style={{transitionDelay:200 + 'ms'}}>e</span>
                  <span style={{transitionDelay:250 + 'ms'}}>e</span>
                  <span style={{transitionDelay:300 + 'ms'}}>s</span>
              </label>
            </div>
            <span className="unidad">{unidad}</span>
            <div className="prueba" id="tooltip2" style={{cursor: 'help'}}>
              <i className="fa-regular fa-circle-question fa-2xl"></i>
              {unidad == 'ºC' && <span id="tooltip2-text">In order to get ºF → (ºC * 1.8) + 32</span>}
              {unidad == 'ºF' && <span id="tooltip2-text">In order to get ºC → (ºF - 32) / 1.8</span>}
            </div>
          </div>
        {div && <span className="sad">{temp}{newUnity}</span>}
        {!div && <span className="sad">{newUnity}</span>}
        <div className="buttonsConvert">
          <button type="button" className="btn2" onClick={getTemperature}>Convert</button>
          <button type="button" className="btn2" onClick={unity}>Change unit</button>
        </div>
      </div>
    </>
  )
};

export default Conv