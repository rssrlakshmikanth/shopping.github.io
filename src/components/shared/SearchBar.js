import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import { ACTION_TYPES } from "../../helpers/constants";

function SearchBar(props) {
  return (
    <TextField
      fullWidth
      className="search-field"
      id="outlined-search"
      label="Search field"
      type="search"
      size="large"
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={props.state.searchString}
      onChange={(e) => {
        props.dispatch({
          type: ACTION_TYPES.UPDATE_SEARCH,
          value: e.target.value,
        });
      }}
    />
  );
}

export default SearchBar;
