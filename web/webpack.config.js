const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 引入CleanWebpackPlugin插件

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    chunkFilename: '[name].js', // 设置按需加载后的chunk名字
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
    port: "3000",
    inline: true,
    open: true,
    proxy:{
      "/auth/**": {
        target: "http://121.36.38.15:8001/",
        changeOrigin: true
      }
    }
  },
  devtool: 'source-map', // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-react-jsx", "@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,  // 正则匹配图片格式名
        use: [
          { loader: 'url-loader' }  // 使用url-loader
        ]
      },
      {
        test: /\.(scss|sass)$/,   // 正则匹配以.scss和.sass结尾的文件
        use: ['style-loader', 'css-loader', 'sass-loader']  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                modifyVars: { //更改全局主题色
                  'primary-color': '#0aa344',
                  'link-color': '#0aa344',
                },
                javascriptEnabled: true
              }
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html")
    }),
    new CleanWebpackPlugin(),  // 默认删除output中path对应文件
    new webpack.HotModuleReplacementPlugin() // 热更新插件
  ]
}