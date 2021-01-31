import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header";

// Pages
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
