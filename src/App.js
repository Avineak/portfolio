import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./assets/Pages/MainPage/index";
import About from "./assets/Pages/About/index";
import Project from "./assets/Pages/Project/index";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
