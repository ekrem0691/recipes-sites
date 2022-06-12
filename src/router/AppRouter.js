// import { Link} from "react-router-dom";
import React from "react";
import "./AppRouter.css";
import Header from "../components/header/Header";
import welcome from "../assets/welcome.png"


function AppRouter() {
  return (
    <div className="routers">
      <Header />
      <img src={welcome} alt="" style={{width:"60vw"}}/>

    </div>
  );
}

export default AppRouter;
