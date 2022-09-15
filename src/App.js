import "./App.css";
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7 } from "./Page";
import React, { Component } from "react";
import DeviceOrientation, { Orientation } from "react-screen-orientation";

class App extends Component {
  render() {
    return (
      <DeviceOrientation lockOrientation={"landscape"}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation="landscape" alwaysRender={false}>
          <Page1 />
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation="portrait" alwaysRender={false}>
          <Page5 />
        </Orientation>
      </DeviceOrientation>
    );
  }
}

export default App;
