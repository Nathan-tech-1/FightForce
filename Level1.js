import { Scene } from 'Phaser'

class level1 extends Scene {
    constructor() {
        super('preload')

    }

    preload() {
        this.load.image('new','./image/new.png');
        this.load.image('ff','./image/ff.png');
        this.load.image('glass-panel','./assets/png/glassPanel.png');
    }

    create() {
        this.add.image(500, 300, 'new');
        this.add.image(700,300, 'ff');
        const { width, height } = this.scale
        this.input.on('pointerdown', () => this.scene.start('level1') )
    }  
}