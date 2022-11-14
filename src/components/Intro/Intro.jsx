import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {

  const transition = { duration: 2, type: "spring" };


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">

      <div className="i-left">
        <div className="i-name">

          <span style={{ color: darkMode ? "white" : "" }}>Hi There,</span>
          <span>I Am Meghansh Agarwal</span>
          <span>
            I'm a web developer with an art & design background.In other words, I went to art school and returned as a programmer.
            Oops.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>

        <div className="i-icons">
        <a href="https://github.com/Meghanshagarwal" target="_blank" rel="noreferrer">
          <img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/meghansh-agarwal-52000b1bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDmIWEGoORQ2qE6daAX10tw%3D%3D" target="_blank" rel="noreferrer">
         
          <img src={LinkedIn} alt="" /></a>
        
          <img src={Instagram} alt="" />
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Web" text2="Developer" />
        </motion.div>


        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >

          <FloatinDiv img={crown} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
