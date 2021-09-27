import React from "react";
import "./App.css";
import Main from "./components/pages/main/Main";
import About from "./components/pages/about/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Train from "./components/pages/train/Train";
import Test from "./components/pages/test/Test";
import DefaultLayout from "./components/layouts/DefaultLayout";
import AdminArticle from "./components/pages/articles/admin/AdminArticle";
import AdminArticles from "./components/pages/articles/admin/AdminArticles";
import Article from "./components/pages/articles/Article";
import Articles from "./components/pages/articles/Articles";
import HeaderContainer from "./components/common/headers/HeaderContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer>
          <DefaultLayout>
            <Switch>
              <Route exact path={["/", "/home"]} component={Main} />
              <Route exact path="/train" component={Train} />
              <Route exact path="/test" component={Test} />
              <Route
                exact
                path="/admin/articles/:id"
                component={AdminArticle}
              />
              <Route exact path="/admin/articles" component={AdminArticles} />
              <Route exact path="/articles/:id" component={Article} />
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/about" component={About} />
            </Switch>
          </DefaultLayout>
        </HeaderContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
