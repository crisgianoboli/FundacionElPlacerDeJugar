import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter, Switch, Route } from "react-router-dom";
import Autismo from "./components/pages/Autismo";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Agenda from "./components/pages/Agenda";
import Contacto from "./components/pages/Contacto";
import Dona from "./components/pages/Dona";
import Footer from "./components/Footer";
import { SocialMedia } from "./components/SocialMedia";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ScrollToTop } from "./ScrollToTop";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <SocialMedia />
        <Route
          render={({ location }) => {
            return (
              <>
                <TransitionGroup>
                  <CSSTransition
                    key={location.pathname}
                    classNames="pageSlider"
                    timeout={800}
                  >
                    <Switch location={location}>
                      <Route path="/" exact component={Home} />
                      <Route path="/Autismo" component={Autismo} />
                      <Route path="/About" component={About} />
                      <Route path="/Work" component={Work} />
                      <Route path="/Agenda" component={Agenda} />
                      <Route path="/Contacto" component={Contacto} />
                      <Route path="/Donate" component={Dona} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </>
            );
          }}
        />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
