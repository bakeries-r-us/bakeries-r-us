import {Scene} from "phaser";

export default class Map extends Scene {
    create() {
        this.r = this.add.rectangle(200, 200, 148, 148, 0xFF0000);
    }

    update() {
        this.r.y += 2;
        if (this.r.y - this.r.height/2> window.innerHeight) {
            this.r.y = 0 - this.r.height/2;
        }
    }
}
