import { CHECK_LOGIN } from 

const initialState = {
  user: null,
  isChecked: false
}

function userRducer(state = initialState, action) {
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

export default userReducer