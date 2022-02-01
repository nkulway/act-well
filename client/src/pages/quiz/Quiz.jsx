import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import { useNavigate } from 'react-router-dom'
import './quiz.css'

function Quiz() { 

  const [ stage, setStage ] = useState(0)
  const [questionAvg, setQuestionAvg] = useState([])
  const navigate = useNavigate()
  
  const handleClick = (num, stg) => {
    setStage(stg)
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
    <div>
      <Typography fontWeight="400" variant="p">Let us know where you are!</Typography><br/>
      <Typography fontWeight="400" variant="p">That way we can gauge what the weather is like.</Typography><br/>
      <SearchBar /><br/>
    </div>
    <h3>Take some time to answer the questions below. Your answers will help us create a series of healthy activities just for you.</h3><br />
    { stage === 0 && (
      <div className="button-box">
    <br/><Typography fontWeight="500" variant="p">1. You wake up and it's a beautiful Saturday morning. What do you do first?</Typography><br/>
        <div className="button-container">
            <Button className="button" variant="contained" onClick={() => handleClick(1, 1)}>Look at your phone and go back to sleep</Button><br/>
            <Button className="button" variant="contained" onClick={() => handleClick(2, 1)}>Message a couple of your friends to hangout</Button ><br/>  
            <Button className="button" variant="contained" onClick={() => handleClick(3, 1)}>immediately get out of bed and do 10 push ups</Button ><br/>
        </div>
    </div>
    )}
   
    { stage === 1 && (
    <div className="button-box">
    <br/><Typography fontWeight="500" variant="p">2. You're sitting on the couch when a friend calls you and asks if you want to join them at the gym. How do you respond?</Typography><br/>
      <div className="button-container">
            <Button className="button" variant="contained" onClick={() => handleClick(1, 2)}>Don't answer the phone and remain on the couch</Button> <br />
            <Button className="button" variant="contained" onClick={() => handleClick(2, 2)}>You'd love to hangout but don't want to go to the gym</Button ><br />  
            <Button className="button" variant="contained" onClick={() => handleClick(3, 2)}>You grab your bag and head to the gym!</Button ><br/>
        </div>
    </div>   
    )}
    { stage === 2 && (
    <div className="button-box">
    <br/><Typography fontWeight="500" variant="p">3. You're grocery shopping and take a look at your list. What's the first thing you need to get?</Typography><br/>
        <div className="button-container">
            <Button className="button" variant="contained" onClick={() => handleClick(1, 3)}>Chamomile tea</Button><br/>
            <Button className="button" variant="contained" onClick={() => handleClick(2, 3)}>Party hats and plates</Button ><br/>  
            <Button className="button" variant="contained" onClick={() => handleClick(3, 3)}>Protien powder</Button >
        </div>
    </div>
)}

      
  </div>
  </>
  )
}

export default Quiz;