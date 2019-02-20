const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
  
} else {
  const compiler = webpack(config);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: config.output.publicPath
  }));
  app.use(require("webpack-hot-middleware")(compiler));

  app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, '/index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      return res.end();
    });
  });
}

app.listen(process.env.PORT || 8080, () => {
  console.log('Listening on port 8080!\n'); 
});