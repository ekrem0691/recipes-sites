import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-sol">
        <h1> <i>/Ekrem/</i> </h1>
        <Link to="/recipes-sites/home/search"><p style={{color:"cadetblue"}}>Recipe</p></Link>
      </div>
      <div className="navbar-sağ">
        <Link to="/recipes-sites/home/about">About</Link>
        <Link to="/recipes-sites/home/github">Github</Link>
        <Link to="/recipes-sites/">Logout</Link>
      </div>
    </div>
  );
}

export default NavBar;
