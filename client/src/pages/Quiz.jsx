import React from 'react';
import { useNavigate } from 'react-router-dom'





function Quiz() { 

  let meanArr = []
  const navigate = useNavigate()

  const findAvg = (num) => {
    const sum = num.reduce((a, b) => a + b, 0);
    const avg = (sum / num.length) || 0;
    console.log(`The sum is: ${sum}. The average is: ${avg}.`);
    return
  }

  const handleClick = (e) => {
    let button = e.target
    meanArr.push(button.id)
    let avgArr = meanArr.map((str) => {
      return parseInt(str)
    })
    findAvg(avgArr)
    return
    
    
}

let move = () => {
  navigate('/register')
}

// let avg = (average) => {
//   let res = (average / average.length) * average.length
// return console.log(res)
// }



  return (
  <div>
    How are you feeling today?
    <div>
      <button id='1' onClick={handleClick}>Would love a relaxing afternoon.</button>
      <button id='2' onClick={handleClick}>Feeling up for some fun!</button>
      <button id='3' onClick={handleClick}>Ready for some activity!</button>
    </div>
    <div>
      <button id='1' onClick={handleClick}>Would love a relaxing afternoon.</button>
      <button id='2' onClick={handleClick}>Feeling up for some fun!</button>
      <button id='3' onClick={handleClick}>Ready for some activity!</button>
    </div>
    <div>
      <button id='1' onClick={handleClick}>Would love a relaxing afternoon.</button>
      <button id='2' onClick={handleClick}>Feeling up for some fun!</button>
      <button id='3' onClick={handleClick}>Ready for some activity!</button>
    </div>
  </div>
  )
}

export default Quiz;
