import { Snake } from "./snake";
import { Coordinate } from "./coordinate";

export class Food {
    
    //instance or p5 object
    p: any;

    coordinates: Coordinate;

    scale: number = 20;

    FOOD_COLOR: string = '#FC050B';

    constructor(p: any) {
        this.p = p;
        this.reposition();
    }

    drawFood() {
        this.p.fill(this.FOOD_COLOR);
        this.p.rect(this.coordinates.x, this.coordinates.y, this.scale, this.scale);
    }

    reposition() {
        let columns = Math.floor(this.p.width/this.scale);
        let rows = Math.floor((this.p.height)/this.scale);
        this.coordinates  = new Coordinate(Math.floor(this.p.random(columns)),
                                            Math.floor(this.p.random(rows)));
        this.coordinates.x *= this.scale;
        this.coordinates.y *= this.scale;
        if (this.coordinates.y < 40) {
            this.coordinates.y += 40;
        }
    }
}
