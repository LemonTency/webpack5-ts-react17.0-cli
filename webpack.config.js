const { join, resolve } = require('path');
const config = require(`./config/webpack.${process.env.NODE_ENV}`)
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production'
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

//公共选项配置区域
let cssLoaders = [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
    },
  },
  {
    loader: 'postcss-loader',
  },
];

const commonConfig = {
  entry: './src/web/index.tsx',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: '[name].bundle.js'
  // },
  output: {
    path: join(__dirname, './dist/assets'),
  },
  externals: {
    // react: 'React',
    // 'react-router-dom': 'ReactRouterDOM',
    // "mobx-react-lite": "mobx-react-lite"
  },
	resolve: {
    extensions: ['.ts', '.js', '.tsx', 'jsx'],
    modules: ['node_modules', resolve('src')],
		alias: {
      '@interface': resolve('src/server/shared'),
      '@middlewares': resolve('src/server/middlewares'),
      '@config': resolve('src/server/config'),
      '@web': resolve('src/web'),
      '@assets': resolve('src/web/assets'),
      '@components': resolve('src/web/components'),
      '@models': resolve('src/web/models'),
      '@routes': resolve('src/web/routes'),
      '@pages': resolve('src/web/pages'),
      '@utils': resolve('src/web/utils'),
      '@tools': resolve('src/web/tools'),
		}
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf)$/,
        type: 'asset',
      },
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
		filename:'index.html',
		template:`src/web/index-dev.html`
    }),
    new MiniCssExtractPlugin(
      {
        filename: devMode ? 'styles/[name].css' : 'styles/[name].[hash].css',
        chunkFilename: devMode ? 'styles/[id].css' : 'styles/[id].[hash].css',
      }
    )
  ],
  experiments: {
    asset: true,
  },
}
module.exports = merge(commonConfig, config)

