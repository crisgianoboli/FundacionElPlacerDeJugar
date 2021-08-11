import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Autismo from "./components/pages/Autismo";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Agenda from "./components/pages/Agenda";
import Contacto from "./components/pages/Contacto";
import Dona from "./components/pages/Dona";
import Footer from "./components/Footer";
import { SocialMedia } from "./components/SocialMedia";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <SocialMedia />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/Autismo" component={Autismo} />

          <Route path="/About" component={About} />

          <Route path="/Work" component={Work} />

          <Route path="/Agenda" component={Agenda} />

          <Route path="/Contacto" component={Contacto} />

          <Route path="/Donate" component={Dona} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
