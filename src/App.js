
import Home from "./Pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import {Switch,Route,Redirect} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Footer from "./Pages/Footer";

function App(){
  return(
    <> 

           <Navbar/>


    <Switch>
      
    

      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about"  component={About}></Route>
      <Route exact path="/services" component={Service}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Redirect to="/"></Redirect>

  
    </Switch>
 
           <Footer/>
    </>
  )
}


export default App;