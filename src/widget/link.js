/**
 * Created by axetroy on 17-4-6.
 */
import React, { Component } from "react";
import CONFIG from "../config.json";
import Octicon from "react-octicon";
class About extends Component {
  render() {
    return (
      <div className="widget widget-about" style={{ textAlign: "center" }}>
          <a href={`https://github.com/${CONFIG.owner}`} target="_blank"> <Octicon name="mark-github" />  https://github.com/wongxinyu</a>
          {/* <a href={`https://github.com/${CONFIG.owner}`} target="_blank"> <Octicon name="person" mega /></a> */}
      </div>
    );
  }
}
export default About;
