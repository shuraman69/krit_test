import React from 'react';
import { Route } from 'react-router-dom';
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
          {routes.map((route) => (
            <Route key={route.id} path={route.path} exact>
              <Helmet>
                <meta name="keywords" content={route.keywords} />
                <meta name="description" content={route.description} />
                <title>{route.title}</title>
              </Helmet>
              <route.Сomponent />
            </Route>
          ))}
        </Provider>
      </div>
    </div>
  );
}

export default App;
