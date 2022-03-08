import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actionTypes"

const initialState = {
  user: null,
  isChecked: false
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN: {
      // when user logs in point to user from db
      return {
        isChecked: true,
        user: action.user
      }
    }
    case USER_LOGGED_OUT: {
      return {
        isChecked: true,
        user: null
      }
    }
    default:
      return state
  }
}

export default userReducer