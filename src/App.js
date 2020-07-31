import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/index';
import { routes } from './routes/';

function App() {
  return (
    <div className="main-wrapper">
      <div className="content">
        <BrowserRouter>
          <Header />
          {routes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              component={route.component}
            />
          ))}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
