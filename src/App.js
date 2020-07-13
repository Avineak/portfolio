import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/index";
import About from "./Pages/About/index";
import Project from "./Pages/Project/index";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
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
