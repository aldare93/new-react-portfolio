import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Home, Resume, Portfolio, Contact, About} from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About title={"Portfolio"}/>} />
          <Route path="/portfolio" exact component={() => <Portfolio title={"Portfolio"}/>} />
          <Route path="/resume" exact component={() => <Resume title={"Resume"}/>} />
          <Route path="/contact" exact component={() => <Contact title={"Contact"}/>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
