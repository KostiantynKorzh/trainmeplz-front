import React from "react";
import "./App.css";
import Main from "./components/pages/main/Main";
import Articles from "./components/pages/algorithms/Articles";
import About from "./components/pages/about/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Train from "./components/pages/train/Train";
import Test from "./components/pages/test/Test";
import AdminArticle from "./components/pages/algorithms/admin/AdminArticle";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Article from "./components/pages/algorithms/Article";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <DefaultLayout>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/train" component={Train} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/articles/admin" component={AdminArticle} />
              <Route exact path="/articles/:id" component={Article} />
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/about" component={About} />
            </Switch>
          </DefaultLayout>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
