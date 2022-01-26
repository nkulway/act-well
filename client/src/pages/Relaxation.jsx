import { connect } from 'react-redux';
import React from 'react';

function Relaxation({ executeSearch, results, reset }) {
  return (
  <div>
    Welcome to the relaxation page, it is {results} degrees out.
  </div>
    );
}

const mapDispatchtoProps = {
  // executeSearch
};

// how to handle undefined 'results'in reducer
const mapStateToProps = state => ({
  results: state.search.results,
  reset: state.reset
})

export default connect(mapStateToProps, mapDispatchtoProps)(Relaxation)
