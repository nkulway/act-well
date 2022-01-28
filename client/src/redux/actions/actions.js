import * as types from "../actionTypes"
import jwtDecode from 'jwt-decode'

export const executeSearch = (values) => dispatch => {
  if (!values) {
    dispatch(resetStore())
  } else {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${values}&units=imperial&appid=23960c9ac35ca92497bd443010347bf1`)
      .then(res => res.json())
      .then(data => dispatch(fetchSuccess(true, data.main.temp)))
  }
}

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

export const logOutUser = () => {
  return {
    type: types.USER_LOGGED_OUT
  }
}

export const checkUser = () => dispatch => {
  dispatch({ type: types.CHECK_USER })
  const token = localStorage.getItem('token')
  if(!token){
    dispatch(logOutUser())
  }
  const user = jwtDecode(token)
  console.log(user)

}

