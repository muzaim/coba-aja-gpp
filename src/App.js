import "./App.css";
import {
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
  Page11,
  Page12,
  Page13,
  Page14,
  Page15,
  Rotate,
} from "./Page";
import React, { Component } from "react";
import DeviceOrientation, { Orientation } from "react-screen-orientation";

class App extends Component {
  render() {
    return (
      <DeviceOrientation lockOrientation={"landscape"}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation="landscape" alwaysRender={false}>
          <div className="noSelect">
            <Page7 />
          </div>
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation="portrait" alwaysRender={false}>
          <Rotate />
        </Orientation>
      </DeviceOrientation>
    );
  }
}

export default App;
