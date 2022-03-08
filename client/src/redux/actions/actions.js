import * as types from "../actionTypes"
import jwtDecode from 'jwt-decode'

// execute when search button is clicked
export const executeSearch = (values) => dispatch => {
  // if nothing was entered in values
  if (!values) {
  // reset store
    dispatch(resetStore())
  } else {
   // otherwise make a fetch request to a third party API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${values}&units=imperial&appid=23960c9ac35ca92497bd443010347bf1`)
   // then return as JSON
      .then(res => res.json())
   // then dispatch object to reducers
      .then(data => dispatch(fetchSuccess(true, data.main.temp)))
  }
}


// takes data from fetch request and puts it into an action
const fetchSuccess = (isSuccess, data) => {
  if (isSuccess) {
    return {
      type: types.EXECUTE_SEARCH,
      searchQueryResults: data
    }
  }
}

const resetStore = () => {
  return {
    type: types.RESET_STORE,
  }
}

// removes token from local storage as to log user out
export const logOutUser = () => {
  localStorage.removeItem("token")
  return {
    type: types.USER_LOGGED_OUT
  }
}

// putting things in local storage to get out later
export const logInUser = (token) => dispatch => {
  localStorage.setItem('token', token)
  const user = jwtDecode(token)
  dispatch({
    type: types.USER_LOGGED_IN,
    user
  })
}

// validates if a user is logged in
export const checkUser = () => dispatch => {
  dispatch({
    type: types.CHECK_USER
  })
  const token = localStorage.getItem('token')
  if (!token) {
    dispatch(logOutUser())
  } else {

    dispatch(logInUser(token))
  }
}