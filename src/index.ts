import * as Phaser from 'phaser';
//あとでコメントアウトを解除する
import { Scenes } from './scene';

//コンフィグ
const config: Phaser.Types.Core.GameConfig = {
  //画面サイズ
  width: 800,
  height: 640,
  type: Phaser.AUTO,
  //ゲーム画面を描画するcanvasを書き出す先
  parent: 'game',
  //ゲーム画面を伸縮して表示させるための設定
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game',
  },
  // resolution: window.devicePixelRatio, // Retina環境で多少見た目がよくなる
  //必要なシーンを読み込む
  scene: Scenes,
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

//HTMLがロードされた後にインスタンスを生成する
window.addEventListener('load', () => {
  const game = new Game(config);
});
