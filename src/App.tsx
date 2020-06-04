import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Switch, Link } from "react-router-dom";
import * as qs from "qs";
import { createBrowserHistory } from "history";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";

const browserHistory = createBrowserHistory();

function MainPage() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to={"/page1"}>Page 1</Link>
        <Link to={"/page2?x=1&y=2"}>Page 2</Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Switch>
          <Route path={"/page1"} render={(props) => <Page1></Page1>}></Route>
          <Route
            path={"/page2"}
            render={(props) => (
              <Page2
                queryParams={qs.parse(props.location.search.replace(/^\?/, ""))}
              ></Page2>
            )}
          ></Route>
          <Route path={"/"} render={(props) => <MainPage></MainPage>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
