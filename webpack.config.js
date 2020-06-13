const path = require('path');
// 产出html文件，引入打包好的js
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 上下文目录
  context: process.cwd(),
  // 开发模式
  mode: 'development',
  // 输出设置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // devserver静态文件目录
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    // 配置路由
    before(app, server) {
      app.get('/success', function (req, res) {
        res.json({ id: 1 });
      });

      app.post('/error', function (req, res) {
        res.sendStatus(500);
      })
    }
  },
  plugins: [
    // 自动打包出html文件
    new htmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head'
    })
  ]
}