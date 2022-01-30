import { connect } from 'react-redux'
import { executeSearch } from '../redux/actions/actions';
import { FormControl } from '@mui/material';
import { IconButton } from "@mui/material";
import { InputLabel } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import React from 'react';
import { Search } from '@material-ui/icons';
import { useState } from 'react';
import './searchBar.css'

function SearchBar({ executeSearch, reset }) {

  const [values, setValues] = useState({
    location: "",
    reset
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value })
    console.log(values)
  };

  const handleSubmit = e => {
    e.preventDefault()
    executeSearch(values.location)
  };

  return (
    <div className="search">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
    <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-location">Location</InputLabel>
        <OutlinedInput
          id="outlined-adornment-location"
          value={values.location}
          onChange={handleChange("location")}
          endAdornment={<IconButton 
            position="end"
            type="submit"
            >{<Search edge="end"/>}
            </IconButton>}
          label="location"
        />
      </FormControl>
      </form>
      </div>
     </div>
  )
}

const mapDispatchtoProps = {
  executeSearch
};

// how to handle undefined 'results'in reducer
const mapStateToProps = state => ({
  results: state.search.results,
  reset: state.reset
})

export default connect(mapStateToProps, mapDispatchtoProps)(SearchBar)
