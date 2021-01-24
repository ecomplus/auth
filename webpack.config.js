'use strict'

const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')

const output = {
  library: 'ecomAuth',
  libraryTarget: 'umd',
  libraryExport: 'default',
  path: path.resolve(__dirname, 'dist'),
  filename: 'ecom-auth.min.js',
  globalObject: 'this'
}

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
  resolve: {
    mainFields: ['module', 'browser', 'main']
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
  devtool: 'source-map'
}

module.exports = devMode ? config : [
  {
    ...config,
    externals: /^(core-js|@ecomplus\/utils|@ecomplus\/client|eventemitter3|axios|blueimp-md5)/i
  },

  {
    ...config,
    output: {
      ...output,
      filename: output.filename.replace('.min.js', '.bundle.min.js')
    }
  },

  {
    ...config,
    target: 'node',
    optimization: {
      minimize: false
    },
    output: {
      ...output,
      filename: output.filename.replace('.min.js', '.node.js')
    },
    externals: /^(@ecomplus\/utils|@ecomplus\/client|eventemitter3|axios|blueimp-md5)/i
  },

  {
    ...config,
    output: {
      ...output,
      libraryTarget: 'var',
      filename: output.filename.replace('.min.js', '.var.min.js')
    },
    externals: {
      '@ecomplus/utils': 'ecomUtils',
      '@ecomplus/client': 'ecomClient',
      eventemitter3: 'EventEmitter3',
      axios: 'axios',
      'blueimp-md5': 'md5'
    }
  }
]
