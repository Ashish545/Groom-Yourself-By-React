import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "../images/home.jpg"
function Home() {
  return (
    <>
    <Common name="Learn Demanded Technology And Upskilled" imgsrc={web} visit="/services" btnname="Get Started"/>
    </>
  );
}

export default Home;
