import { EXECUTE_SEARCH, RESET_STORE } from "../actionTypes";

const initialState = {
  results: null
}

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case EXECUTE_SEARCH: {
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
    default:
      return state
  }
}

export default searchReducer