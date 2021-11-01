import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import "./index.css";
import watsapp from "../src/Pictures/watsaap.png";
//  This is the main gate of the whole application. Application will be started from here.....
function App() {
  return (
    <>
      <Navbar />
      <div className="watsaap__container">
        <a href="https://wa.me/923065590188" target="_blank">
          <img src={watsapp} alt="" className="watsaap__btn" />
        </a>
      </div>
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch> */}
      <Switch>
        <Redirect to="/" />
      </Switch>
      <Home />
      <Service />
      <About />
      <Contact />
    </>
  );
}

export default App;
