import { NavLink } from "react-router-dom";
import Common from "./Common";
import AboutImage from "../images/2.jpg"
function About() {
  return (
    <>

    <Common  name="Know More About Us..!" imgsrc={AboutImage} visit="/contact" btnname="Contact Now"/>
 
    </>
  );
}

export default About;
