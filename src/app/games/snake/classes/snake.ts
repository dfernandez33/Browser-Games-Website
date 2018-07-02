import { Direction } from "../enums/direction.enum";
import { Direct } from "protractor/built/driverProviders";
import { Coordinate } from "./coordinate";

export class Snake {

    //instance of p5 object
    p: any;
    
    head: Coordinate;

    tail: Coordinate[] = [];

    scale: number = 20;

    velocity: number = 1;
    
    direction: Direction;

    //length of the snake's tail. Initialized to one because of head
    size: number = 0;

    SNAKE_COLOR: string = '#0000FF';

    constructor(p: any) {
        this.p = p;
        let columns = Math.floor(this.p.width/this.scale);
        let rows = Math.floor((this.p.height)/this.scale);
        this.head  = new Coordinate(Math.floor(this.p.random(columns)),
                                            Math.floor(this.p.random(rows)));
        this.head.x *= this.scale;
        this.head.y *= this.scale;
        this.direction = null;
    }

    drawSnake() {
        this.p.fill(this.SNAKE_COLOR);
        this.tail.forEach(
            (part: Coordinate) => {
                this.p.rect(part.x, part.y, this.scale, this.scale);
            } 
        );
        this.p.rect(this.head.x, this.head.y, this.scale, this.scale);
    }

    eatFood() {
        this.size++;
    }

}
