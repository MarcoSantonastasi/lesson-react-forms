import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import { listItems, MoviesList } from "./components/ListDemo";
import DynamicMoviesList from "./components/dynamicListsDemo/DynamicMoviesList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ul className="list-style">{listItems}</ul>
        <div>
          <MoviesList />
        </div>
        <hr />
        <DynamicMoviesList />
      </div>
    );
  }
}

export default App;
