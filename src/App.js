import './App.css';
import {useState} from 'react';



function App() {
  //we are using the useState Hook to assign a value fo the dice.
  const [firstDieValue, setFirstDieValue] = useState(1);
  const [secondDieValue, setSecondDieValue] = useState(6)

  const firstDie = require(`./images/${firstDieValue}.png`)
  const secondDie = require(`./images/${secondDieValue}.png`)


  //the fucntion here is for randomly calculating the value of the two die
  const setDiceValues =()=>{
    setFirstDieValue(() => Math.floor(Math.random() * 6 ) + 1)
    setSecondDieValue(() => Math.floor(Math.random() * 6) + 1)
  }
  
  return(
    <div className='dice'>
      <div className='dieHolder'>
      <img src = {firstDie} alt='A die' />
      <img src = {secondDie} alt= 'a die' />
      </div>
      <div className='addedValues'>{firstDieValue + secondDieValue}</div>
      <button className='button' onClick={setDiceValues}>Roll</button>
    </div>
  )
}

export default App;
