scene:{
    preload: preload;
    create: create;
    update: update;
}

var game = new Phaser.Game(config);
var level1Scene = new Phaser.Scene('level1');

function preload() {
    this.load.image('forest1','./map/map1.png');
    this.load.image('Perso','./chara/principal.png');
    this.load.image('mob1','./chars/ennemi1.png');
    this.load.image('cursor-hand','./assets/png/cursor_hand.png');
};

function create() {
    this.add.image(500, 300,'forest1');
    this.add.image(150,200,'Perso');
    this.add.image(400,200,'mob1');
}

function update() {
}

// Personnage
var player = {
    name: "Player",
    health: 100,
    damage: 15,
    items: [],
    weapons: ["Poings"],
    currentWeapon: "Poings"
  };
  
  // Ennemis
  var ennemy = [
    {
        name: "Sorcier",
        pv: 45,
        damage: 15,
        items: [1],
        weapon: 1,
    },
]

function gameLoop() {
    if (ennemy.pv <= 0) {
        console.log("Vous passez au niveau suivant");
        this.input.on('pointerdown', () => this.scene.start('level2'))
};
    }

// Fonction pour afficher l'état du joueur
function displayPlayer() {
    console.log(`${player.name} : ${player.health} PV, ${player.damage} dégâts, Arme : ${player.currentWeapon}`);
    if (player.items.length > 0) {
      console.log(`Items : ${player.items.join(", ")}`);
    }
  }
  
  // Fonction pour afficher l'état de l'ennemi
  function displayEnemy(enemy) {
    console.log(`${enemy.name} : ${enemy.health} PV, ${enemy.damage} dégâts`);
    if (enemy.weapons.length > 0) {
      console.log(`Arme : ${enemy.weapons.join(", ")}`);
    }
    if (enemy.items.length > 0) {
      console.log(`Items : ${enemy.items.join(", ")}`);
    }
  }

function gameLoop() {
    if (ennemy >= ennemy.length) {
        level++;
        currentEnnemy = 0;
        console.log("Vous passez au niveau " + level);
    }
}

    console.log("Vous êtes dans la forêt");
    console.log("Vous affrontez un sorcier qui a 45 points de vie");

    if (ennemy.items > 0) {
        console.log(ennemy.name + " possède un item sur lui : " + ennemy.items[0]);
    }

    if (ennemy.weapon > 0) {
        console.log(ennemy.name + " possède une arme : " + ennemy.weapon);
    }

    while (ennemy.pv > 0 && player.pv > 0) {
        ennemy.pv -= player.damage;
        console.log("Vous infligez " + player.damage + " dégâts à " + ennemy.name + " qui lui reste " + ennemy.pv + " points de vie");

        if (ennemy.pv <= 0) {
            console.log("Le sorcier est mort!");
        }
    }