export class TitleScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Title',
    });
  }

  /**ロードが終わったあとのライフサイクルで呼ばれるメソッド */
  create(): void {
    const { width, height } = this.game.canvas;

    this.add
      .text(width / 2, height / 2 + 60, 'クリックでスタート')
      .setOrigin(0.5);

    // 画面を埋めるようなZoneを作成
    const zone = this.add.zone(width / 2, height / 2, width, height);
    // Zoneをクリックできるように設定
    zone.setInteractive({
      useHandCursor: true, // マウスオーバーでカーソルが指マークになる
    });

    zone.on('pointerdown', () => {
      this.scene.start('Main');
    });
  }
}
