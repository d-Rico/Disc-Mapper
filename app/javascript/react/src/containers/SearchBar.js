import React from 'react'

const SearchBar = props => {
  return(
    <div className="searchbar">
      <label>
        <input
          id="search-field"
          name='search'
          type='search'
          placeholder='Start typing course name'
          value={props.search}
          onChange={props.handleSearchChange}
          />
      </label>
    </div>
  );
}

export default SearchBar;
