import {Game, AUTO, Scene } from 'phaser';
import Map from "./scenes/map.js";

const game = new Game({
    type: AUTO,
    width: window.innerWidth,
    height: window. innerHeight,
    parent: 'game',
    scene: [Map]
});
