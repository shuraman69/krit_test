import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import { Header } from './components';
import { routes } from './routes';

function App() {
  const { errorMessage } = useSelector(({ stations }) => stations);

  return (
    <HelmetProvider>
      <div className="main-wrapper">
        <div className="content">
          {errorMessage && (
          <div className="alert">
            <span className="alert__description">{errorMessage}</span>
          </div>
          )}
          <Switch>
            {routes.map((route) => (
              <Route key={route.id} path={route.path} exact>
                <Helmet>
                  <meta name="keywords" content={route.keywords} />
                  <meta name="description" content={route.description} />
                  <title>{route.title}</title>
                  <meta property="og:title" content={route.title} />
                  <meta property="og:description" content={route.description} />
                  <meta property="og:url" content={route.path} />
                </Helmet>
                {route.title.includes('404') && <Redirect to="/404" />}
                {route.header && <Header />}
                <route.Сomponent />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
