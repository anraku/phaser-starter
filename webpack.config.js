// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const outputPath = path.resolve(__dirname, 'public');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts', //エントリポイント。依存関係整理の起点にするファイル。
  output: {
    path: outputPath, //distというディレクトリに生成する
    filename: 'bundle.js', //バンドルして書き出すファイル名
  },
  module: {
    rules: [
      //.tsがケツにつくファイルを探索し、TypeScriptとして読み込む(ts-loader)
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname, 'src/'),
        exclude: '/node_modules/',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets/', to: 'assets/' }],
    }),
  ],
  //開発用サーバを立てるときの設定
  devServer: {
    contentBase: outputPath,
    port: 3000,
    open: true,
  },

  resolve: {
    //バンドル対象にするファイルを指定する
    extensions: ['.ts', '.js'],
  },
};
