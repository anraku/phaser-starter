// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const pathToPhaser = path.join(__dirname, "/node_modules/phaser/");
const phaser = path.join(pathToPhaser, "dist/phaser.js");
const outputPath = path.resolve(__dirname, 'public');

module.exports = {
  entry: "./src/index.ts",      //エントリポイント。依存関係整理の起点にするファイル。
  output: {
    path: outputPath,    //distというディレクトリに生成する
    filename: "bundle.js"   //バンドルして書き出すファイル名
  },
  module: {
    rules: [
      //.tsがケツにつくファイルを探索し、TypeScriptとして読み込む(ts-loader)
      {
        test: /\.ts$/,
        loader: "ts-loader",
        include: path.resolve(__dirname, 'src/'),
        exclude: "/node_modules/"
      },
      //phaser-hogehoge.jsというファイルの内容はPhaserというグローバル変数に内容を突っ込む(expose-loader)
      {
        test: /phaser\.js$/,
        loader: "expose-loader?Phaser",
        options: {
          exposes: [
            {
              globalName: ['_', 'phaser'],
              moduleLocalName: 'phaser',
            },
          ],
        }
      }
    ]
  },
  //開発用サーバを立てるときの設定
  devServer: {
    contentBase: outputPath,
    port: 8080,
    open: true
  },

  resolve: {
    //バンドル対象にするファイルを指定する
    extensions: [".ts", ".js"],
    //import "phaser"ってしたときに読み込みに行くやつを指定する
    alias: {
      phaser: phaser
    }
  }
};