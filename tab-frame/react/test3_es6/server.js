var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  contentBase: __dirname + '/app',
  hot: true,
  inline: true

})
.listen(80, 'localhost', function(err, result){
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:80');
})
