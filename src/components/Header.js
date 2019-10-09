import React, { Component } from "react";
import logo from "../logo.svg";

import Title from "./Title.js";
import Description from "./Description.js";

const header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Title data="Welcome to React, Ironhacker!"></Title>
      <Description data="You are ready to take this to the next level!"></Description>
    </header>
  );
};

export default header;
