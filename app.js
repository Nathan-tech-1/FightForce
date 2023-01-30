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
    }
}

// Initialisation du jeu
var game = new Phaser.Game(config);
var MainMenuScene = new Phaser.Scene('main-menu');

MainMenuScene.init = function () {
this.cursors = this.input.keyboard.createCursorKeys();
this.buttonSelector = this.add.image(
    this.buttons[this.selectedButtonIndex].x - this.buttons[this.selectedButtonIndex].displayWidth * 0.5 - 20,
    this.buttons[this.selectedButtonIndex].y,
    'cursor-hand'
  ).setDisplaySize(32, 32).setAlpha(0.7);
};

function preload() {
    this.load.image('new','./image/new.png');
    this.load.image('ff','./image/ff.png');
    this.load.image('glass-panel','./assets/png/glassPanel.png');
    this.load.image('cursor-hand','./assets/png/cursor_hand.png');

};

function create() {
    this.add.image(500, 300, 'new');
    this.add.image(700,300, 'ff');
    this.input.on('pointerdown', () => this.scene.start('game'))
    const { width, height } = this.scale
    
        // Play button
    const playButton = this.add.image(width * 0.5, height * 0.6, 'glass-panel')
        .setDisplaySize(150, 50)
        
    this.add.text(playButton.x, playButton.y, 'Play')
        .setOrigin(0.5)
    
        // Settings button
    const settingsButton = this.add.image(playButton.x, playButton.y + playButton.displayHeight + 10, 'glass-panel')
        .setDisplaySize(150, 50)
    
    this.add.text(settingsButton.x, settingsButton.y, 'Settings')
        .setOrigin(0.5)
    
        // Credits button
    const creditsButton = this.add.image(settingsButton.x, settingsButton.y + settingsButton.displayHeight + 10, 'glass-panel')
        .setDisplaySize(150, 50)
    
    this.add.text(creditsButton.x, creditsButton.y, 'Credits')
        .setOrigin(0.5)
    
    this.buttonSelector = this.add.image(0, 0, 'cursor-hand')

    var buttons = [];
    buttons.push(playButton);
    buttons.push(settingsButton);
    buttons.push(creditsButton);
    this.buttons = buttons;
    
    function selectButton(index) {
        const currentButton = this.buttons[this.selectedButtonIndex]

	// set the current selected button to a white tint
	currentButton.setTint(0xffffff)

	const button = this.buttons[index]

	// set the newly selected button to a green tint
	button.setTint(0x66ff7f)

	// move the hand cursor to the right edge
	this.buttonSelector.x = button.x + button.displayWidth * 0.5
	this.buttonSelector.y = button.y + 10

	// store the new selected index
	this.selectedButtonIndex = index
    this.selectButton(0)

    playButton.on('pointerup', () => {
        console.log('play');
    });
    
    settingsButton.on('pointerup', () => {
        console.log('settings');
    });
    
    creditsButton.on('pointerup', () => {
        console.log('credits');
    });
    
        };
    }

    function selectNextButton(change) {
        change = change || 1;
        var index = this.buttons.indexOf(this.selectedButton);
        index = (index + change + this.buttons.length) % this.buttons.length;
        this.selectButton(index);
        var index = this.selectedButtonIndex + change;
        if (index >= this.buttons.length) {
            index = 0;
        }
        else if (index < 0) { 
            index =
        this.buttons.length - 1;
    }

this.selectButton(index);

        
    }

    function confirmSelection() {
        // Code ici
        };
        

function update() {
    const upJustPressed = this.input.keyboard.justDown(Phaser.Keyboard.UP);
    const downJustPressed = this.input.keyboard.justDown(Phaser.Keyboard.DOWN);
    const spaceJustPressed = this.input.keyboard.justDown(Phaser.Keyboard.SPACE);
    
    if (upJustPressed)
    {
        this.selectNextButton(-1)
    }
    else if (downJustPressed)
    {
        this.selectNextButton(1)
    }
    else if (spaceJustPressed)
    {
        this.confirmSelection()
        // get the currently selected button
	const button = this.buttons[this.selectedButtonIndex]

	// emit the 'selected' event
	button.emit('selected')
    }
}



//     var background = this.physics.add.image(400, 100, 'background');

//    background.setVelocity(100, 200);
//    background.setBounce(1, 1);
//    background.setCollideWorldBounds(true);
