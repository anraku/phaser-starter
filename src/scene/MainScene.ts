export class MainScene extends Phaser.Scene {
  private acorn: Phaser.Physics.Arcade.Image;
  constructor() {
    super({
      key: 'Main',
      physics: { arcade: { debug: true } },
    });
  }

  create(): void {
    const { width, height } = this.game.canvas;

    this.add.image(width / 2, height / 2, 'logo');
    this.add.text(width / 2, height / 2 + 50, 'Hello World').setOrigin(0.5); // setOriginでテキストを中央寄せ
  }

  update(): void {
    // console.log(this.acorn.x, this.acorn.y);
  }
}
