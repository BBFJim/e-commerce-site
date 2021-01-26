import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header";

// Pages
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
