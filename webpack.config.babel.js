const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const libraryName = 'ng-progress-arc';
const outputFile = `${libraryName}.js`;

module.exports = {
  entry: path.resolve(__dirname, './angular-progress-arc.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
  },
  externals: {
    angular: {
      commonjs: 'angular',
      commonjs2: 'angular',
      root: 'angular',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        }],
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(),
  ],
};
