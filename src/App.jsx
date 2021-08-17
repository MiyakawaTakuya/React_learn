import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { TweetIndex } from "./pages/TweetIndex";
import { TweetFind } from "./pages/TweetFind";
import { TweetPost } from "./pages/TweetPost";

const NotFound = () => {
  return (
    <h2>Not Found...</h2>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <h1>Twitterのようなもの</h1>
      <ul>
        <li>
          <Link to="/tweet/">tweet 一覧</Link>
        </li>
        <li>
          <Link to="/tweet/post">tweet 入力</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/tweet/">
          <TweetIndex />
        </Route>
        <Route exact path="/tweet/post">
          <TweetPost />
        </Route>
        <Route path="/tweet/:id">
          <TweetFind />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
