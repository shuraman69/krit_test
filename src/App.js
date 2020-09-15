import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Header } from './components/';
import { routes } from './routes/';

function App() {
  return (
    <div className="main-wrapper">
      <div className="content">
        <BrowserRouter>
          <Header />
          {routes.map((route) => (
            <Route key={route.id} path={route.path}>
              <Helmet>
                <meta name="keywords" content={route.keywords} />
                <meta name="description" content={route.description} />
                <title>{route.title}</title>
              </Helmet>
              <route.Сomponent />
            </Route>
          ))}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
