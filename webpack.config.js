const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',

  output: {
    filename: '[name].js',
    path: 'build',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
      inject: true,
    }),
  ],

  devtool: 'inline-source-map',
}