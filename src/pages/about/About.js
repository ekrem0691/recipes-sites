import React from "react";
import Header from "../../components/header/Header";
import "./About.css";
import Coding from "../../assets/coding.svg"

function About() {
  return (
    <div className="about-page">
      <Header />
      <div className="about-page-info">
      <img src={Coding} alt="" style={{width:"35vw"}} />
      <h2>About Full Stack Developer <span>Ekrem Sarıyer</span></h2>
      <div>
        <h3>Im Ekrem</h3>
        <h4>I'm currently learning Full-Stack Development Languages</h4>
        <h4>I've already known Js,ReactJS,HTML,CSS,Bootstrap,SASS,SQL,Python</h4>
        <h5><span style={{color:"white"}}>Send Email:</span> 06hilalekrem06@gmail.com</h5>
      </div>
      </div>
    </div>
  );
}

export default About;
