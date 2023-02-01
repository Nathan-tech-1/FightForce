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
        displayPlayer: displayPlayer,


    }
}

// Initialisation du jeu
var game = new Phaser.Game(config);
var menuScene = new Phaser.Scene('menu');

function preload() {
    this.load.image('forest1','./map/map1.png')
    this.load.image('new','./image/new.png');
    this.load.image('ff','./image/ff.png');
    this.load.image('glass-panel','./assets/png/glassPanel.png');
    this.load.image('cursor-hand','./assets/png/cursor_hand.png');
    
};

function create() {
    this.add.image(500, 300, 'forest1');
    this.add.image(500, 300, 'new').anchor;
    this.add.image(700,300, 'ff');

    const { width, height } = this.scale
    
        // Play button
    const playButton = this.add.image(width * 0.5, height * 0.6, 'glass-panel')
        .setDisplaySize(150, 50)
        
    this.add.text(playButton.x, playButton.y, 'Play')
        .setOrigin(0.5)
    
    this.buttonSelector = this.add.image(800, 500, 'cursor-hand')
    this.input.keyboard.once('keydown-SPACE', () => {
		// fade to black
		this.cameras.main.fadeOut(3000, 0, 0, 0)
    })

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('level1')
        })

}



var level1Scene = new Phaser.Scene('level1');

function preload() {
    this.load.image('forest1','./map/map1.png');
    this.load.image('Perso','./chara/principal.png');
    this.load.image('mob1','./chara/ennemi2.png');
    this.load.image('glass','./assets/png/glassPanel_tab 1.png');
    this.load.image('glass-panel','./assets/png/glassPanel.png');
    this.load.image('cursor-hand','./assets/png/cursor_hand.png');
};

function create() {
    this.add.image(500, 350,'forest1');
    this.add.image(400,590,'Perso');
    this.add.image(990,600,'mob1');
    this.add.image(200,200,'glass');

    const { width, height } = this.scale
    
        // fight button
    const fightButton = this.add.image(200, 150, 'glass-panel')
        .setDisplaySize(150, 50)
        
    this.add.text(fightButton.x, fightButton.y, 'Combattre !')
        .setOrigin(0.5)

        const itemButton = this.add.image(200, 250, 'glass-panel')
        .setDisplaySize(150, 50)
        
    this.add.text(itemButton.x, itemButton.y, 'Objet')
        .setOrigin(0.5)

    this.cameras.main.fadeIn(1000, 0, 0, 0)
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
		this.time.delayedCall(1000, () => {
			this.scene.start('phaser-logo')
		})
	})

    var scoreText;
    var scoreText2;
    scoreText = this.add.text(16, 700, 'Vous êtes dans la forêt.', { fontSize: '32px', fill: '#ffff' });
    scoreText2 = this.add.text(16,745,'Vous affrontez un sorcier qui a 45 points de vie.',  { fontSize: '32px', fill: '#ffff' });

  }


function update() {
}


// Personnage
var player = {
    name: "Protagoniste",
    health: 100,
    damage: 5,
    items: [],
    weapons: ['Poings'],
    currentWeapon: 'Poings'
  };
  
  // Ennemis
  var ennemy = {
        name: "Sorcier",
        pv: 50,
        damage: 15,
        items: [1],
        weapon: 1,
    };

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

    if (ennemy.items > 0) {
        console.log(ennemy.name + " possède un item sur lui : " + ennemy.items[0]);
    }

    if (ennemy.weapon > 0) {
        scoreText = this.add.text(16, 700, 'Vous êtes dans la forêt.', { fontSize: '32px', fill: '#ffff' });
    }

    while (ennemy.pv > 0 && player.pv > 0) {
        ennemy.pv -= player.damage;
        console.log("Vous infligez " + player.damage + " dégâts à " + ennemy.name + " qui lui reste " + ennemy.pv + " points de vie");

        if (ennemy.pv <= 0) {
            console.log("Le sorcier est mort!");
        }
    }