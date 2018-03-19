
import path from 'path';
import webpack from 'webpack';
import CleanWebapckPlugin from 'clean-webpack-plugin';

export default function getWebpackCommonConfig() {

  const config = {
    externals: {
      react: 'window.React',
      'react-dom': 'window.ReactDOM',
    },
    modules: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [ 'env', 'react' ],
              plugins: [
                'transform-class-properties',
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebapckPlugin([ 'dist' ]),
      new webpack.NamedModulesPlugin(),
    ],
    output: {
      filename: '[name].min.js',
      path: path.resolve(process.cwd(), 'dist'),
    },
  };

  return config;
}
