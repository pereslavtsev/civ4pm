const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const ShebangPlugin = require('webpack-shebang-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  target: 'node',
  experiments: {
    topLevelAwait: true,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [new CleanWebpackPlugin(), new ShebangPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
