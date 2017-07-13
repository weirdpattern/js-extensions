/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import webpack from 'webpack';

export default [
  {
    entry: ['./lib/index.js'],
    output: {
      path: './dist',
      filename: 'js-extensions.js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
            plugins: ['transform-object-rest-spread'],
          },
        },
      ],
    },
    resolve: {
      extensions: ['', '.js'],
    },
    plugins: [new webpack.optimize.OccurenceOrderPlugin(true)],
  },
  {
    entry: ['./lib/index.js'],
    output: {
      path: './dist',
      filename: 'js-extensions.min.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
            plugins: ['transform-object-rest-spread'],
          },
        },
      ],
    },
    resolve: {
      extensions: ['', '.js'],
    },
    plugins: [new webpack.optimize.OccurenceOrderPlugin(true), new webpack.optimize.UglifyJsPlugin()],
  },
];
