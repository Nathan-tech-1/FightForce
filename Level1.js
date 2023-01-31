var level1Scene = new Phaser.Scene('level1');

function preload() {
    this.load.image('forest1','./map/map1.png');
    this.load.image('forest2','./image/map2.png');
    this.load.image('forest3','./image/map3.png');
    this.load.image('Perso','./chara/principal.png');
    this.load.image('mob1','./chara/ennemi1.png');
    this.load.image('mob2','./chara/ennemi2.png');
    this.load.image('mob3','./chara/ennemi3.png');
    this.load.image('cursor-hand','./assets/png/cursor_hand.png');
};

function create() {
    this.add.image(500, 300, 'forest1');
    this.add.image(150,200,'Perso');
    this.add.image(400,200,'mob1');
}