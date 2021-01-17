import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link style={{ textDecoration: `none`, color: `#fff` }} to="/">
            <h1 className="center">GitGud</h1>
          </Link>
        </header>
        <Search />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
