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
        selectButton: selectNextButton,
        selectNextButton: selectNextButton,
        confirmSelection: confirmSelection,

    }
}

// Initialisation du jeu
var game = new Phaser.Game(config);
var appScene = new Phaser.Scene('menu');

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

    var buttons = [];
    buttons.push(playButton);
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
    this.input.on('pointerdown', () => this.scene.start('level1'))   
}
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
        // Code here
        };

function update() {
    const upJustPressed = Phaser.Input.Keyboard.JustDown
		const downJustPressed = Phaser.Input.Keyboard.JustDown
		const spaceJustPressed = Phaser.Input.Keyboard.JustDown
		
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
		}
}



//     var background = this.physics.add.image(400, 100, 'background');

//    background.setVelocity(100, 200);
//    background.setBounce(1, 1);
//    background.setCollideWorldBounds(true);
