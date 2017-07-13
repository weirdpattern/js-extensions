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
