import { RESET_STORE } from "../actionTypes";

const initialState = null

// when called return state to initial state
function resetReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STORE: {
    return {
      initialState
    }
  }

    default: 
      return state
  }
}

export default resetReducer