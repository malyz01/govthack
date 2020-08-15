const path = require('path')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve('server', 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': {
        MAP_API: JSON.stringify(process.env.MAP_API)
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './server/public',
    proxy: {
      '*': 'http://localhost:3000'
    }
  }
}
