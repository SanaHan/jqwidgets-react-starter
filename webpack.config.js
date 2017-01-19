var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
        path.resolve(__dirname, "App.js"),
        path.resolve(__dirname, "main.js"),
         path.resolve(__dirname, "node_modules/jqwidgets-framework/jqwidgets-react")
      ],
        aaaexclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
