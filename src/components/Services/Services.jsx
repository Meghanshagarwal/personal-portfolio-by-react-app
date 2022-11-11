import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
     
      <div className="awesome">
        
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <spane>
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          <br />
          Currently, I’m focused on building accessible, human-centered"
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
     
      <div className="cards">
       
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"PSD, XD, AI, Zeplin, Sketch, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
       
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, BOOTSTRAP, JAVASCRIPT, CORE JAVA, REACT JS,NODE.JS"}
          />
        </motion.div>
      
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "I know how to use javascript with html in order to increase the website beauty.I will be your good front end web developer"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
