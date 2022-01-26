import { connect } from 'react-redux';
import React from 'react';

function Exercise({ results, reset }) {
  return (
  <div>
    Welcome to the exercise page, it is {results} degrees outside.
  </div>
    )
}


// how to handle undefined 'results'in reducer
const mapStateToProps = state => ({
  results: state.search.results,
  reset: state.reset
})

export default connect(mapStateToProps, null)(Exercise)
