const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const notifier = require('node-notifier');
const ICON = join(__dirname, 'icon.png');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,//单页应用假路由需要用到的东西
    //dev打包的assets
    contentBase: join(__dirname, '../dist'),
    proxy: {
      '/api': 'http://localhost:3000',
    },
    port: 8080,
  },
  output: {
    publicPath: '/',
    assetModuleFilename: 'images/[name][ext]',
    filename: 'scripts/[name].bundule.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '京程一灯yd-react-generator',
      filename: 'index.html',
      template: resolve(__dirname, '../src/web/index-dev.html'),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8080'],
        notes: [
          'Some additionnal notes to be displayed unpon successful compilation',
        ],
      },
      onErrors: function (severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          icon: ICON,
        });
      },
    }),
  ]
};

// react-router
