var prodConfig = require('./webpack.config.prod')

module.exports = {
  debug: true,
  entry: prodConfig.entry,
  output: {
    filename: 'client.js',
    path: './static',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  postcss: prodConfig.postcss,
  plugins: [],
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: process.env.DEV_PORT,
    proxy: {
      '*': {
        target: `http://localhost:${process.env.PORT}`,
        secure: false,
        bypass: function (req, res, proxyOptions) {
          if (req.url.startsWith('/static')) {
            console.log('Serving with Webpack: ', req.url)
            return req.url
          }
        }
      }
    }
  }
}
