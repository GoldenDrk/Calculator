import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import guitarLogo from './assets/guitar.svg'
//import viteLogo from '/vite.svg'
import Conv from './conv.jsx'
import Conv2 from './conv2.jsx'
import Conv3 from './conv3.jsx'
import '../Styles/App.css'
import '../Styles/tooltip.css'
import '../Styles/tooltip2.css'

//onClick={() => updateFirstDigit((firstDigit) => firstDigit + 1)}

function App() {
  const [calc, updateCalc] = useState(false);
  const [firstDigit, updateFirstDigit] = useState('');
  const [secondDigit, updateSecondDigit] = useState('');
  const [symbol, updateSymbol] = useState('');
  const [symbolTxt, updateSymbolTxt] = useState('');
  const [result, updateResult] = useState(0);
  const [qwe, updateQwe] = useState(false);
  const [memory, updateMemory] = useState(0);
  const [div, changeDiv] = useState('calc');
  const [title, updateTitle] = useState('Calculator');
  const [txtBtn, changeTxtBtn] = useState('Distance');
  const [txtGtr, changeTxtGtr] = useState('Weight');

  const keyDown = (event) => {
    if (event.key === "-") agregSim(1);
    else if (event.key === "+") agregSim(2);
    else if (event.key === "/") agregSim(3);
    else if (event.key === "*") agregSim(4);
    else if (event.key === "1") agregNum(1);
    else if (event.key === "2") agregNum(2);
    else if (event.key === "3") agregNum(3);
    else if (event.key === "4") agregNum(4);
    else if (event.key === "5") agregNum(5);
    else if (event.key === "6") agregNum(6);
    else if (event.key === "7") agregNum(7);
    else if (event.key === "8") agregNum(8);
    else if (event.key === "9") agregNum(9);
    else if (event.key === "0") agregNum(0);
    else if (event.key === ".") agregNum(".");
    else if (event.key === "Enter") calculation(5);
    else if (event.key === "Escape") clear();
    else if (event.key === "Delete") clear();
    else if (event.key === "Backspace") quitarNum();
  };

  const numberPad = () => {
    document.getElementById("numberPad").focus();
  }

  const agregNum = (e) => {
    (!qwe) ? ((e == 10) ? (updateFirstDigit((x) => x + 0 + 0)) : (updateFirstDigit((x) => x + e))) : ((e == 10) ? (updateSecondDigit((x) => x + 0 + 0)) : (updateSecondDigit((x) => x + e)));
  }

  const quitarNum = () => {
    (secondDigit == '') ? (updateFirstDigit(firstDigit.substring(0, firstDigit.length - 1))) : (updateSecondDigit(secondDigit.substring(0, secondDigit.length - 1)));
  }

  const agregSim = (e) => {
    updateSymbol(e);
    if (e == 1) updateSymbolTxt('-');
    else if (e == 2) updateSymbolTxt('+');
    else if (e == 3) updateSymbolTxt('/');
    else updateSymbolTxt('*');
    updateQwe(true);
    if (secondDigit != '') calculation(e);
    if (memory > 0) updateCalc(false), updateFirstDigit(result);
  }

  const calculation = (e) => {
    if (e == 5) {
      if (symbol == 1) updateResult(parseFloat(firstDigit) - parseFloat(secondDigit));
      else if (symbol == 2) updateResult(parseFloat(firstDigit) + parseFloat(secondDigit));
      else if (symbol == 3) updateResult(parseFloat(firstDigit) / parseFloat(secondDigit));
      else updateResult(parseFloat(firstDigit) * parseFloat(secondDigit));
      updateFirstDigit('');
      updateSecondDigit('');
      updateMemory(1);
      updateCalc(true);
    }
    else {
      if (symbol == 1) updateResult(parseFloat(firstDigit) - parseFloat(secondDigit)), updateFirstDigit(parseFloat(firstDigit) - parseFloat(secondDigit));
      else if (symbol == 2) updateResult(parseFloat(firstDigit) + parseFloat(secondDigit)), updateFirstDigit(parseFloat(firstDigit) + parseFloat(secondDigit));
      else if (symbol == 3) updateResult(parseFloat(firstDigit) / parseFloat(secondDigit)), updateFirstDigit(parseFloat(firstDigit) / parseFloat(secondDigit));
      else updateResult(parseFloat(firstDigit) * parseFloat(secondDigit)), updateFirstDigit(parseFloat(firstDigit) * parseFloat(secondDigit));
      updateSecondDigit('');
      updateMemory(1);
      agregSim(e);
    }
  }

  const square = () => {
    (memory == 0) ? (updateResult(firstDigit * firstDigit)) : (updateResult(result * result));
    updateMemory(1);
    updateCalc(true);
  }

  const squareRoot = () => {
    (memory == 0) ? (updateResult(Math.sqrt(firstDigit))) : (updateResult(Math.sqrt(result)));
    updateMemory(1);
    updateCalc(true);
  }

  const clear = async () => {
    updateCalc(true);
    updateFirstDigit('');
    updateQwe(false);
    updateResult('Cleared');
    updateSecondDigit('');
    updateSymbol('');
    updateSymbolTxt('');
    updateMemory(0);
    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });
    updateCalc(false);
    updateResult(0);
  }

  const change = () => {
    (div == 'temp') ? (changeDiv('calc'), updateTitle('Calculator')) : (changeDiv('temp'), updateTitle('Degrees'), changeTxtBtn('Distance'), changeTxtGtr('Weight'))
  }

  const change2 = () => {
    (div == 'distance') ? (changeDiv('calc'), updateTitle('Calculator'), changeTxtBtn('Distance')) : (changeDiv('distance'), updateTitle('Distance'), changeTxtBtn('Calculator'), changeTxtGtr('Weight'))
  }

  const change3 = () => {
    (div == 'weight') ? (changeDiv('calc'), updateTitle('Calculator'), changeTxtGtr('Weight')) : (changeDiv('weight'), updateTitle('Weight'), changeTxtBtn('Distance'), changeTxtGtr('Calculator'))
  }

  return (
    <>
      <div className="idk">
        {/*<div style="display: flex; justify-content: space-around;">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Guitar_icon.svg" className="logo react" alt="React logo" />
          </a>
        </div>*/}
        {div == 'calc' && <><input id="numberPad" type="number" onKeyDown={keyDown} />
        <div id="tooltip2">
          <i className="fa-solid fa-keyboard fa-2xl" onClick={numberPad}></i>
          <span id="tooltip2-text">Click here to use the number pad</span>
        </div></>}
        {!calc && firstDigit == '' && <h1>{title}</h1>}
        {!calc && firstDigit != '' && <><h1>{firstDigit} {symbolTxt} {secondDigit}</h1></>}
        {calc && <><h1>{result}</h1></>}
        <div className="calculator">
          {div == 'calc' && <><div className="row">
            <div id="tooltip">
              <button type="button" className="btn" onClick={clear} style={{height:100 + '%'}}><i className="fa-solid fa-calculator fa-2xl fa-beat-fade"></i></button>
              <span id="tooltip-text">Clear calculator</span>
            </div>
            <button type="button" className="btn" onClick={square}>x²</button>
            <button type="button" className="btn" onClick={squareRoot}>√x</button>
            <button type="button" className="btn" onClick={() => agregSim(1)}>-</button>
          </div>
          <div className="row">
            <button type="button" className="btn" onClick={() => agregNum(7)}>7</button>
            <button type="button" className="btn" onClick={() => agregNum(8)}>8</button>
            <button type="button" className="btn" onClick={() => agregNum(9)}>9</button>
            <button type="button" className="btn" onClick={() => agregSim(2)}>+</button>
          </div>
          <div className="row">
            <button type="button" className="btn" onClick={() => agregNum(4)}>4</button>
            <button type="button" className="btn" onClick={() => agregNum(5)}>5</button>
            <button type="button" className="btn" onClick={() => agregNum(6)}>6</button>
            <button type="button" className="btn" onClick={() => agregSim(3)}>/</button>
          </div>
          <div className="row">
            <button type="button" className="btn" onClick={() => agregNum(1)}>1</button>
            <button type="button" className="btn" onClick={() => agregNum(2)}>2</button>
            <button type="button" className="btn" onClick={() => agregNum(3)}>3</button>
            <button type="button" className="btn" onClick={() => agregSim(4)}>*</button>
          </div>
          <div className="row">
            <button type="button" className="btn" onClick={() => agregNum(10)}>00</button>
            <button type="button" className="btn" onClick={() => agregNum(0)}>0</button>
            <button type="button" className="btn" onClick={() => agregNum(".")}>.</button>
            <button type="button" className="btn" onClick={() => calculation(5)}>=</button>
          </div></>}
          {div == 'temp' && <Conv />}
          {div == 'distance' && <Conv2 />}
          {div == 'weight' && <Conv3 />}
        </div>
        <div className="YT">
          <div className="YT2">
            {title != 'Degrees' && <button className="button1" type="button" onClick={change}>Degrees</button>}
            {title == 'Degrees' && <button className="button11" type="button" onClick={change}>Calculator</button>}
            {div == 'calc' && <button className="btn2" onClick={quitarNum}>C</button>}
            <a onClick={change2}>
              <button className="button" data-text="Awesome">
                  <span className="actual-text">&nbsp;{txtBtn}&nbsp;</span>
                  <span aria-hidden="true" className="hover-text">&nbsp;{txtBtn}&nbsp;</span>
              </button>
            </a>
          </div>
          <div id="tooltip2" style={{marginTop:5 + 'rem'}}>
            <a id="guitar" onClick={change3}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Guitar_icon.svg" className="logo react" alt="React logo" />
              <span id="tooltip2-text" style={{top:115 + '%'}}>{txtGtr}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
