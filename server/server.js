import fs from 'fs';
import path from 'path';
import compression from 'compression';
import express from 'express';

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

import { routes } from '../src/routes';
import App from '../src/App.js';

const app = express();
const PORT = 8050;

// gzip compression
app.use(compression());

routes.forEach((route) => {
  app.all(`^${route.path}$`, (req, res, next) => {
    console.log(res);
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
      const context = {};

      if (err) {
        console.log(err);
        return res.status(500).send('Some error happen');
      }

      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">
            ${ReactDOMServer.renderToString(
              <StaticRouter location={req.url} context={context}>
                <App />
              </StaticRouter>
            )}
          </div>`
        )
      );
    });
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log(`App launched on http://localhost:${PORT}`);
});
