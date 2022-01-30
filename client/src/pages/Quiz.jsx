import { Button } from '@mui/material'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import { useNavigate } from 'react-router-dom'
import './quiz.css'
import { Box } from '@mui/system'
// import Login from './Login'

function Quiz() { 

  
  // const [showResults, setShowResults] = useState(false)
  // const onClick = () => setShowResults(true)
  // const [ answer, setAnwer ] = useState(false)
  let [questionAvg, setQuestionAvg] = useState([])
  const navigate = useNavigate()
  
  // const isAnswer = answer ? true : false

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
console.log(average)


  return (
    <>
  <div>
    <h1 className="title"> How are you feeling today? </h1>
    <h3>Take some time to answer the questions below. Your answers will help us create a series of healthy activities just for you.</h3>
   
    <div>
      <span>Let us know where you are!</span>
      <SearchBar /><br/>
    </div>
    <div className="button-box">
      <Box component="div" sx={{ display: 'inline' }}>First series</Box>
        <div className="button-container">
            <Button className="button" variant="contained" onClick={() => handleClick(1)}>I'm in the mood to sit around and watch tv.</Button><br/>
            <Button className="button" variant="contained" onClick={() => handleClick(2)}>Id love to hangout with some friends.</Button ><br/>  
            <Button className="button" variant="contained" onClick={() => handleClick(3)}>I'm feeling up for some exercise!</Button ><br/>
        </div>
    </div>
    
    <>
    <div className="button-box">
    <span>You're sitting on the couch when a friend calls you and asks if you want to join them at the gym. How do you respond?</span><br/>
      <div className="button-container">
            <Button className="button" variant="contained" onClick={() => handleClick(1)}>Don't answer the phone and remain on the couch.</Button> <br />
            <Button className="button" variant="contained" onClick={() => handleClick(2)}>You'd love to hangout but don't want to go to the gym.</Button ><br />  
            <Button className="button" variant="contained" onClick={() => handleClick(3)}>You grab your bag and head to the gym!</Button ><br/>
        </div>
    </div>   
    </>
   
    <>    
    <div className="button-box">
        <span>Third series</span>
        <div className="button-container">
            <Button className="button" variant="contained" onClick={() => handleClick(1)}>Would love a relaxing afternoon.</Button><br/>
            <Button className="button" variant="contained" onClick={() => handleClick(2)}>Feeling up for some fun!</Button ><br/>  
            <Button className="button" variant="contained" onClick={() => handleClick(3)}>Ready for some activity!</Button >
        </div>
    </div>
      </>
      
  </div>
  </>
  )
}

export default Quiz;