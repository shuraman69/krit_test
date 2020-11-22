import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

import { Header } from './components';
import { routes } from './routes';
import store from './redux/store';

function App() {
  return (
    <div className="main-wrapper">
      <div className="content">
        <Provider store={store}>
          <Header />
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
                <route.Сomponent />
              </Route>
            ))}
          </Switch>
        </Provider>
      </div>
    </div>
  );
}

export default App;
