'use strict'

const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')
const { dependencies } = require('./package.json')

// preset default output object
const output = {
  library: 'EcomAuth',
  libraryTarget: 'umd',
  libraryExport: 'default',
  path: path.resolve(__dirname, 'dist'),
  filename: 'ecom-auth.min.js',
  globalObject: 'this'
}

// base Webpack config
const config = {
  mode: devMode ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output,
  devServer: {
    contentBase: path.resolve(__dirname, 'test'),
    compress: true,
    port: 9301,
    open: true
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  // exclude all pkg dependencies on production by default
  externals: devMode ? '' : new RegExp('^(' + Object.entries(dependencies).join('|') + ')(/|$)', 'i')
}

module.exports = devMode
  // single config object for dev server
  ? config
  // production outputs with and without polyfill
  : [
    config,
    {
      ...config,
      output: {
        ...output,
        filename: output.filename.replace('.min.js', '.root.min.js')
      },
      externals: {
        axios: {
          commonjs: 'axios',
          commonjs2: 'axios',
          root: 'axios'
        },
        eventemitter3: {
          commonjs: 'eventemitter3',
          commonjs2: 'eventemitter3',
          root: 'EventEmitter'
        },
        'blueimp-md5': {
          commonjs: 'blueimp-md5',
          commonjs2: 'blueimp-md5',
          root: 'md5'
        },
        '@ecomplus/utils': {
          commonjs: '@ecomplus/utils',
          commonjs2: '@ecomplus/utils',
          root: 'ecomUtils'
        },
        '@ecomplus/client': {
          commonjs: '@ecomplus/client',
          commonjs2: '@ecomplus/client',
          root: 'ecomClient'
        }
      }
    }
  ]
