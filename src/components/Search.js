import React, { createRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import search from "../assets/search.svg";

function Search(props) {
  const inputRef = createRef();
  const history = useHistory();
  const location = useLocation();

  const submit = (e) => {
    e.preventDefault();
    history.push(`/user/${inputRef.current.value}`);
  };

  return (
    <div className="container">
      <h4>Enter a Github username</h4>
      <form onSubmit={submit}>
        <div className="form-group">
          <input className="form-control" type="text" ref={inputRef} required />
          <button className="btn">Search</button>
        </div>
      </form>
      {location.pathname === "/" ? (
        <img className="search-img" src={search} alt="search" />
      ) : null}
    </div>
  );
}

export default Search;
