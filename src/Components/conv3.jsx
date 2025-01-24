import { useState } from 'react'
import '../Styles/App.css'
import '../Styles/conv3.css'

function Conv3() {

  const [weight, updateWeight] = useState(0);
  const [unidad, changeUnidad] = useState('KG');
  const [newUnity, changeNewUnity] = useState('LBS');
  const [sentido, changeSentido] = useState('KG => LBS');
  const [div, updateDiv] = useState(false);
  const [count, updateCount] = useState(0);

  const unity = () => {
    (sentido == 'KG => LBS') ? (changeUnidad('LBS'), changeNewUnity('KG'), changeSentido('LBS => KG'), console.log(sentido)) : ((sentido == 'LBS => KG') ? (changeUnidad('G'), changeNewUnity('OZ'), changeSentido('G => OZ'), updateCount(1)) : ((sentido == 'G => OZ') ? (changeUnidad('OZ'), changeNewUnity('G'), changeSentido('OZ => G')) : (changeUnidad('KG'), changeNewUnity('LBS'), changeSentido('KG => LBS'))));
    updateDiv(false);
  }

  const getWeight = () => {
    document.getElementById("conversion").value = "";
    document.getElementById("conversion").blur();
    const newWeightInKg = weight / 2.205;
    const newWeightInLbs = weight * 2.205;
    const newWeightInG = weight * 28.35;
    const newWeightInOz = weight / 28.35;
    (unidad == 'LBS') ? (updateWeight(newWeightInKg.toFixed(2))) : ((unidad == 'KG') ? (updateWeight(newWeightInLbs.toFixed(2))) : ((unidad == 'OZ') ? (updateWeight(newWeightInG.toFixed(2))) : (updateWeight(newWeightInOz.toFixed(2)))));
    updateDiv(true);
  }

  const hide = () => {
    updateDiv(false);
  }

  const handleEvent = (event) => {
    if (event.key === "Enter") getWeight();
    else if (event.key === "Escape") document.getElementById("conversion").blur(), document.getElementById("conversion").value = "";
  }
  


  return (
    <>
      <div>
        {/*<input type="number" placeholder="Input the temperature here" onChange={e => updateTemperature(e.target.value)} />*/}
        <div className="inputUser">
          <i className="fa-solid fa-weight-scale fa-2xl" style={{paddingTop:3 + 'rem', paddingRight:0.75 + 'rem'}}></i>
          <div className="form-control">
              <input type="number" id="conversion" onKeyDown={handleEvent} onClick={hide} onChange={e => updateWeight(e.target.value)} required="" />
              <label>
                  <span style={{transitionDelay:0 + 'ms'}}>W</span>
                  <span style={{transitionDelay:50 + 'ms'}}>e</span>
                  <span style={{transitionDelay:100 + 'ms'}}>i</span>
                  <span style={{transitionDelay:150 + 'ms'}}>g</span>
                  <span style={{transitionDelay:200 + 'ms'}}>h</span>
                  <span style={{transitionDelay:250 + 'ms'}}>t</span>
              </label>
            </div>
            <span className="unidad">{unidad}</span>
            <div className="prueba" id="tooltip2" style={{cursor: 'help'}}>
              <i className="fa-regular fa-circle-question fa-2xl"></i>
              {unidad == 'KG' && <span id="tooltip2-text">In order to get Lbs → Kg * 2.205</span>}
              {unidad == 'LBS' && <span id="tooltip2-text">In order to get Kg → Lbs / 2.205</span>}
              {unidad == 'G' && <span id="tooltip2-text">In order to get Oz → g * 28.53</span>}
              {unidad == 'OZ' && <span id="tooltip2-text">In order to get g → Oz / 28.53</span>}
            </div>
          </div>
        {div && <span className="sad">{weight}{newUnity}</span>}
        {!div && <span className="sad">{newUnity}</span>}
        <div className="buttonsConvert">
          <button type="button" className="btn2" onClick={getWeight}>Convert</button>
          <button type="button" className="btn2" onClick={unity}>Change unit</button>
        </div>
      </div>
    </>
  )
};

export default Conv3