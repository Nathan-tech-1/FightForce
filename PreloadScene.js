

//Jeu

var PreloadScene = new Phaser.Scene('preload');

PreloadScene.preload = function () {
    this.load.image('new','./image/new.png');
    this.load.image('ff','./image/ff.png');
    this.load.image('glass-panel','./assets/png/glassPanel.png');
};

PreloadScene.create = function () {
    this.add.image(500, 300, 'new');
    this.add.image(700,300, 'ff');
    var width = this.scale.width;
    var height = this.scale.height
}
