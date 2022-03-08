import { EXECUTE_SEARCH, RESET_STORE } from "../actionTypes";

const initialState = {
  results: null
}

// initial state as default value
function searchReducer(state = initialState, action) {
  switch (action.type) {
    case EXECUTE_SEARCH: {
      // fill state with the search results
      return {
        ...state,
        results: action.searchQueryResults
      }
    }
    case RESET_STORE: {
      return {
        results: null
      }
    }
    // If this reducer doesn't recognize the action type return the existing state unchanged
    default:
      return state
  }
}

export default searchReducer