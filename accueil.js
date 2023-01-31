const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y:0}
        }
    },
    scene:{
        preload: preload,
        create: create,
        update: update,

    }
}

// Initialisation du jeu
var game = new Phaser.Game(config);
var menuScene = new Phaser.Scene('menu');

function preload() {
    this.load.image('new','./image/new.png');
    this.load.image('ff','./image/ff.png');
    this.load.image('glass-panel','./assets/png/glassPanel.png');
    this.load.image('cursor-hand','./assets/png/cursor_hand.png');
};

function create() {
    this.add.image(500, 300, 'new');
    this.add.image(700,300, 'ff');

    const { width, height } = this.scale
    
        // Play button
    const playButton = this.add.image(width * 0.5, height * 0.6, 'glass-panel')
        .setDisplaySize(150, 50)
        
    this.add.text(playButton.x, playButton.y, 'Play')
        .setOrigin(0.5)
    
    this.buttonSelector = this.add.image(800, 500, 'cursor-hand')
    this.input.on('pointerdown', () => this.scene.start('level1'))
}

function update() {
}
