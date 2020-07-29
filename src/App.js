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
          <Route path="/v2/build/" component={Main}></Route>
          <Route path="/v2/build/about/" exact component={About}></Route>
          <Route path="/v2/build/partners/" exact component={Partners}></Route>
          <Route path="/v2/build/support/" exact component={Support}></Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
