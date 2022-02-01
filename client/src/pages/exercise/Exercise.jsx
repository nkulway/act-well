import CardCold from '../../components/exercise/cold/cold';
import CardWarm from '../../components/exercise/warm/cardWarm';
import { connect } from 'react-redux'
import React from 'react'


function Exercise({ results }) {


  const handleTemp = () => {
    if(results > 50){
      return <CardWarm />
    } else {
      return <CardCold />
    }
  }

  
  return (
     <div className="activity">
       <div className="activity-container">
        <div>
          {/* <Searching /> */}
          <h1>It is currently {results}°f outside</h1>
        {handleTemp()} 
        </div>
      </div>
     </div>
  );
}

// how to handle undefined 'results'in reducer
const mapStateToProps = state => ({
  results: state.search.results,
  reset: state.reset
})

export default connect(mapStateToProps, null)(Exercise)
