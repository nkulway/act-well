import { connect } from 'react-redux';
import React from 'react';

function Amusement({ results, reset }) {
  return (
  <div>
    Welcome to the amusement page, it is {results} degrees outside.
  </div>
    )
}



// how to handle undefined 'results'in reducer
const mapStateToProps = state => ({
  results: state.search.results,
  reset: state.reset
})

export default connect(mapStateToProps, null)(Amusement)
