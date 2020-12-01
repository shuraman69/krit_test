import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import './scss/app.scss';
import App from './App';
// import { Update } from './components';
import store from './redux/store';

// const isUpdate = false;

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
/* serviceWorker.register({
  onUpdate: (registration) => {
    isUpdate = true;
    setTimeout(() => {
      window.location.reload();
    }, 5000);
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  },
}); */

renderMethod(
  <BrowserRouter>
    <Provider store={store}>
      {/* isUpdate && <Update /> */}
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// Old
// serviceWorker.register({
//   onUpdate: (registration) => {
//     isUpdate = true;
//     setTimeout(() => {
//       window.location.reload();
//     }, 5000);
//     if (registration && registration.waiting) {
//       registration.waiting.postMessage({ type: 'SKIP_WAITING' });
//     }
//   },
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
