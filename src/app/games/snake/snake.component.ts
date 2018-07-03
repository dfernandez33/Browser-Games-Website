import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import 'p5'
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Snake } from './classes/snake';
import { Food } from './classes/food';
import { Direction } from './enums/direction.enum';
import { Coordinate } from './classes/coordinate';
import { State } from './enums/state.enum';
import { MyHammerConfig } from './classes/hamemrConfig';


@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements AfterViewInit {

  //instance of p5 object
  private p5;
  private width: number;

  constructor() { }

  ngAfterViewInit() {
    this.createCanvas();
  }
  
  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }
  
  //this is where all the game functionality happens
  private sketch(p: any) {
    //anything declared here can be accessed in helper functions.
    //Use this space for "global" variables.

    let width: number;
    let height: number;

    let snake: Snake;
    let food: Food;

    let state: State;

    let hammerConfig = new MyHammerConfig();
    let hammer = hammerConfig.buildHammer(document.getElementById('gameContainer'));

    p.setup = () => {
      state = State.START;
      width = document.getElementById('gameContainer').offsetWidth;
      height = width;
      p.createCanvas(width, height).parent('gameContainer');
      p.background(0);
      p.frameRate(10);
      snake = new Snake(p);
      food = new Food(p);
      //sets up listener to enable touch detection
      setupTouch();
    };
  
    //main game loop
    p.draw = () => {
      p.background(0);
      drawEdge();
      if (state == State.START) {
        drawWelcome();
      }
      //if no food was eatten overide previous positions in tail
      if (snake.size === snake.tail.length) {
        for (let i = 0; i < snake.tail.length - 1; i++) {
          snake.tail[i] = snake.tail[i + 1];
        }
      }
      snake.tail[snake.size - 1] = new Coordinate(snake.head.x, snake.head.y);

      //update snake position depending on direction
      if (snake.direction == Direction.RIGHT) {
        snake.head.x += snake.velocity*snake.scale
      } else if (snake.direction == Direction.LEFT) {
        snake.head.x -= snake.velocity*snake.scale
      } else if (snake.direction == Direction.UP) {
        snake.head.y -= snake.velocity*snake.scale
      }else if (snake.direction == Direction.DOWN) {
        snake.head.y += snake.velocity*snake.scale
      }

      snake.head.x = p.constrain(snake.head.x, 0, width - snake.scale);
      snake.head.y = p.constrain(snake.head.y, 40, height - snake.scale);

      checkCollision();
      drawScore();
      food.drawFood();
      snake.drawSnake();
    };

    p.keyPressed = () => {
      //record which way the snake is moving and set turn pivot
      document.addEventListener("keydown", arrow_keys_handler, false);
      if (p.keyCode === p.RIGHT_ARROW && snake.direction != Direction.LEFT) {
        if (state == State.START) {
          state = State.PLAYING;
        }
        snake.direction = Direction.RIGHT;
      } else if (p.keyCode === p.LEFT_ARROW && snake.direction != Direction.RIGHT) {
        if (state == State.START) {
          state = State.PLAYING;
        }
        snake.direction = Direction.LEFT;
      } else if (p.keyCode === p.DOWN_ARROW && snake.direction != Direction.UP) {
        if (state == State.START) {
          state = State.PLAYING;
        }
        snake.direction = Direction.DOWN;
      } else if (p.keyCode === p.UP_ARROW && snake.direction != Direction.DOWN) {
        if (state == State.START) {
          state = State.PLAYING;
        }
        snake.direction = Direction.UP;
      }
    }

    p.windowResized = () => {
      width = document.getElementById('gameContainer').offsetWidth;
      height = width;
      p.resizeCanvas(width, height);
    }

    //this method checks for collisions with food as well as collisions with the snake itself.
    let checkCollision = () => {
      if (p.dist(snake.head.x, snake.head.y, food.coordinates.x, food.coordinates.y) < 5) {
            snake.eatFood();
            food.reposition();
      }
      snake.tail.forEach(
        (part: Coordinate) => {
          if (p.dist(snake.head.x, snake.head.y, part.x, part.y) < 5) {
            p.setup();
          }
        }
      )

    }

    let drawScore = () => {
      p.fill(snake.SNAKE_COLOR);
      p.textSize(40);
      p.textAlign(p.LEFT);
      p.text("Score: " + snake.size, 10, 35);
    }

    let drawEdge = () => {
      p.stroke(255);
      p.line(0, 40, p.width, 40);
      p.stroke(0);
    }

    let drawWelcome = () => {
      p.fill(255);
      p.textSize(30)
      p.textAlign(p.CENTER);
      p.text("Press the arrow keys to start playing!", p.width / 2, 85)
    }

    let arrow_keys_handler = (e) => {
      switch(e.keyCode){
          case 37: case 39: case 38:  case 40: // Arrow keys
          case 32: e.preventDefault(); break; // Space
          default: break; // do not block other keys
      }
    };

    let setupTouch = () => {
      hammer.on('swipe', (event) => {
        if (event.direction == Direction.LEFT && snake.direction != Direction.RIGHT) {
          if (state == State.START) {
            state = State.PLAYING;
          }
          snake.direction = Direction.LEFT;
        } else if (event.direction == Direction.RIGHT && snake.direction != Direction.LEFT) {
          if (state == State.START) {
            state = State.PLAYING;
          }
          snake.direction = Direction.RIGHT;
        } else if (event.direction == Direction.UP && snake.direction != Direction.DOWN) {
          if (state == State.START) {
            state = State.PLAYING;
          }
          snake.direction = Direction.UP;
        } else if (event.direction == Direction.DOWN && snake.direction != Direction.UP) {
          if (state == State.START) {
            state = State.PLAYING;
          }
          snake.direction = Direction.DOWN;
        }
      });
    }

  }

}
