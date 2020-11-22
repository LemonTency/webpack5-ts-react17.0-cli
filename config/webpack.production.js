// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const TerserJSPlugin = require('terser-webpack-plugin')
// //上线环境的配置文件
// module.exports = {
//   externals: {
//     react: 'React',
//     'react-router-dom': 'ReactRouterDOM'
//   },
//   optimization: {
//     minimize: true,
//     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
//     splitChunks: {
//       cacheGroups: {
//         styles: {
//           name: 'styles',
//           test: /\.css$/,
//           chunks: 'all',
//           enforce: true
//         }
//       }
//     }
//   }
// }
const {join,resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  output: {
    path: join(__dirname, '../dist/assets'),
    publicPath: '/assets/',
    assetModuleFilename: 'scripts/[name].[contenthash:5].bundule.[ext]',
    // filename: 'scripts/[name].[contenthash:5].bundule.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // cache: true, // 是否缓存
        // parallel: true, // 是否并行打包
        // sourceMap: false,
      }),
    ],
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'async',
      minChunks: 1,
      maxAsyncRequests: 5,
      // maxSize: 300000,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          // minSize: 0,
          name: 'commons',
        },
      },
      //最小的文件大小 超过之后将不予打包
      minSize: {
        javascript: 100000,
        style: 100000,
      },
      //最大的文件 超过之后继续拆分
      maxSize: {
        javascript: 300000, //故意写小的效果更明显
        style: 300000,
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      title: 'ORM系统',
      filename: '../views/index.html',
      template: resolve(__dirname, '../src/web/index-prod.html'),
      inject: true,
      minify: {
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
};
