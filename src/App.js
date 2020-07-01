import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "./components/index";
import { About, Main, Partners, Support } from "./pages/index";

function App() {
  return (
    <div className="main-wrapper">
      <div className="content">
        <BrowserRouter>
          <Header />
          <Route path="/" component={Main}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/partners" exact component={Partners}></Route>
          <Route path="/support" exact component={Support}></Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
