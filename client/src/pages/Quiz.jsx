import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import { useNavigate } from 'react-router-dom'

function Quiz() { 

  let [questionAvg, setQuestionAvg] = useState([])
  const navigate = useNavigate()
  
  
  const handleClick = (num) => {
    setQuestionAvg([...questionAvg, parseInt(num)])
}

  const findAvg = (arrNum) => {
    if (arrNum.length <= 2){
      const sum = arrNum.reduce((a, b) => a + b, 0);
      const avg = (sum / arrNum.length) || 0;
      console.log(`The sum is: ${sum}. The average is: ${avg}.`);
    return avg
    } else {
      const sum = arrNum.reduce((a, b) => a + b, 0);
      const avg = (sum / arrNum.length) || 0;
      console.log(`The sum is: ${sum}. The average is: ${avg}.`);
      sequencePrompt(avg)
  }}

  
const sequencePrompt = (avg) => {
  if (avg >= 1.6 && avg <= 2.4){
    navigate('/amusement')
  } else if (avg > 2.4){
    navigate('/exercise')
  } else if (avg < 1.5){
    navigate('/relaxation')
  } 
}

const average = findAvg(questionAvg)



  return (
  <div>
    How are you feeling today?
    <div>
      <SearchBar />
      <button onClick={() => handleClick(1)}>Would love a relaxing afternoon.</button>
      <button onClick={() => handleClick(2)}>Feeling up for some fun!</button>
      <button onClick={() => handleClick(3)}>Ready for some activity!</button>
    </div>
    <div>
      <button onClick={() => handleClick(1)}>Would love a relaxing afternoon.</button>
      <button onClick={() => handleClick(2)}>Feeling up for some fun!</button>
      <button onClick={() => handleClick(3)}>Ready for some activity!</button>
    </div>
    <div>
      <button onClick={() => handleClick(1)}>Would love a relaxing afternoon.</button>
      <button onClick={() => handleClick(2)}>Feeling up for some fun!</button>
      <button onClick={() => handleClick(3)}>Ready for some activity!</button>
    </div>
  </div>
  )
}

export default Quiz;