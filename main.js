import {Game, AUTO, Scene } from 'phaser';

const game = new Game({
    type: AUTO,
    width: window.innerWidth,
    height: window. innerHeight
});

class Map extends Scene {
    create() {
        this.add.rectangle(200, 200, 148, 148, 0xFF0000);
    }
}

game.scene.add('Map', Map, true);
