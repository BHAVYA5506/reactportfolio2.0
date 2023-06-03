import React from 'react'
import "./IntroPage.css";
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span className="GreetingHeading">Hy! I Am</span>
          <span className="NameHeading">Bhavya Arora</span>
          <span className="AboutHeading">
            Frontend developer with high level of experience in web designing
            and development, producing the Quality work.I am currently in a
            engineering college
          </span>
        </div>
        <button className=" button i-button">Hire me</button>
        <div className="i-icons">
          <a></a>
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt=""></img>
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} text1={"Web"} text2={"Developer"} />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} text1="Best Design" text2="award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
      {/* Blur Div's */}
      <div className="blur" style={{ background: "rgb(236 210 255)" }}>
      </div>
      {/* <div
        className="blur"
        style={{
          b"background-color": "#C1F5FF",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-20rem",
        }}
      ></div> */}
    </div>
  );
}

export default intro