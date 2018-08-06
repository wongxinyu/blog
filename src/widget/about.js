/**
 * Created by axetroy on 17-4-6.
 */
import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import "./about.css";
class About extends Component {
  render() {
    return (
      <div className="widget widget-about" style={{ textAlign: "center" }}>
        <NavLink to="/"><div id="nav-logo" /></NavLink>
        <h1>黄心雨</h1>
        <p>世风之狡诈多端, 到底忠厚人颠扑不破.</p>
        <p>末俗以繁华相尚, 只觉冷淡处趣味弥长.</p>
      </div>
    );
  }
}
export default About;
