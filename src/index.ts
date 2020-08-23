import * as Phaser from 'phaser';
import { Scenes } from './scene';

const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 640,
  type: Phaser.AUTO,
  parent: 'game',
  //ゲーム画面を伸縮して表示させるための設定
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game',
  },
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
