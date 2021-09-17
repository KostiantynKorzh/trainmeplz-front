import React from "react";
import "./App.css";
import Main from "./components/pages/main/Main";
import CustomForm from "./components/pages/train/CustomForm";
import TestForm from "./components/pages/test/TestForm";
import Algorithms from "./components/pages/algorithms/Algorithms";
import About from "./components/pages/about/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/common/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/train" component={CustomForm} />
            <Route exact path="/test" component={TestForm} />
            <Route exact path="/algorithms" component={Algorithms} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
