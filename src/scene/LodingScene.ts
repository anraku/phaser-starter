export class LoadingScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Loading',
    });
  }
  preload(): void {
    //ロード中の文面を設定する
    const loadingText = (progress: number): string =>
      `Now Loading ... ${Math.round(progress * 100)}%`;

    //テキストオブジェクトを作る
    const currentLoadingText = this.add.text(10, 10, loadingText(0));

    //ファイルのロードをしていく
    this.load.image('logo', '../assets/phaser3-logo.png');

    //ロードに進捗があるたびに発生するイベント
    this.load.on('progress', (progress: number) => {
      //テキストの内容を書き換える
      currentLoadingText.text = loadingText(progress);
    });

    //ロードが完了すると発生するイベント
    this.load.on('complete', () => {
      //タイトルシーンへ遷移
      this.scene.start('Title');
    });
  }
}
