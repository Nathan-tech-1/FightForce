var level3Scene = new Phaser.Scene('level3');

function preload() {
    this.load.image('forest3','./image/map3.png');
    this.load.image('mob3','./chara/ennemi3.png');
    this.load.image('cursor-hand','./assets/png/cursor_hand.png');
}

function create() {
    this.add.image(500, 300, 'forest2');
    this.add.image(150,200,'Perso');
    this.add.image(400,200,'mob3');
}