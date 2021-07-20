import React from "react";

const SearchBox = ({ searchChange }) => (
  <div className="pa2">
    <input
      className="pa3"
      type="search"
      placeholder="search Kittens"
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;
