import React from "react";
import Header from "../../components/header/Header";
import "./GitHub.css";
import { BsGithub } from "react-icons/bs";

function Github() {
  return (
    <div className="gitgub-page">
      <Header />
      <div className="icon-div">
        <a href="https://github.com/ekrem0691">
          <BsGithub className="icons" />
        </a>
      </div>
    </div>
  );
}

export default Github;
