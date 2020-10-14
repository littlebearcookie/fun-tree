var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'fun-tree.js',
    library: 'fun-tree',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.less$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "less-loader" }
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
      loader: 'babel-loader'
    },
    {
      test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
      loader: 'url-loader',
      query: {
        limit: 30000,
        name: '[name].[ext]?[hash]'
      }
    }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
}
