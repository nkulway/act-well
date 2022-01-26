import * as types from "../actionTypes"

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
