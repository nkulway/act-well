import React from 'react'
import CardCold from '../../components/relax/cold/cold';
import CardWarm from '../../components/relax/warm/cardWarm';
import { connect } from 'react-redux'

function Relaxation({ results }) {

// pull form the relaxation component and determine the cards displayed based on temperature
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

export default connect(mapStateToProps, null)(Relaxation)
