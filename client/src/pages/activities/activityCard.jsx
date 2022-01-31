import React from 'react'
import CardCold from '../../components/relax/cold/cold';
import CardWarm from '../../components/relax/warm/cardWarm';
import { connect } from 'react-redux'

function Activity({ results }) {


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
          <h1>{results}°f</h1>
        {handleTemp()} 
        </div>
      </div>
     </div>
  );
}

const mapStateToProps = state => ({
  results: state.search.results
  // humidity: state.search.results.humidity
})

export default connect(mapStateToProps, null)(Activity);
