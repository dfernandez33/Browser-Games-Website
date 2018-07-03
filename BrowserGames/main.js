(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<app-snake></app-snake>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _games_snake_snake_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games/snake/snake.component */ "./src/app/games/snake/snake.component.ts");
/* harmony import */ var _shared_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-bootstrap-module */ "./src/app/shared-bootstrap-module.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _games_snake_snake_component__WEBPACK_IMPORTED_MODULE_3__["SnakeComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"]
            ],
            imports: [
                _shared_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["SharedBootstrapModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background-color: #0A4A81;\r\n}\r\n\r\n.navbar-toggler {\r\n    background-color: #5F6760;\r\n}\r\n\r\n.navbar-brand {\r\n    color: #5F6760;\r\n    font-size: xx-large;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">Game Corner <fa name=\"gamepad\" size=\"lg\"></fa></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" \r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavBar()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"\r\n        [ngClass]=\"{ 'show': navbarOpen }\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Link</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Dropdown\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n        </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.navbarOpen = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.toggleNavBar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/games/snake/classes/coordinate.ts":
/*!***************************************************!*\
  !*** ./src/app/games/snake/classes/coordinate.ts ***!
  \***************************************************/
/*! exports provided: Coordinate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinate", function() { return Coordinate; });
var Coordinate = /** @class */ (function () {
    function Coordinate(x, y) {
        this.x = x;
        this.y = y;
    }
    return Coordinate;
}());



/***/ }),

/***/ "./src/app/games/snake/classes/food.ts":
/*!*********************************************!*\
  !*** ./src/app/games/snake/classes/food.ts ***!
  \*********************************************/
/*! exports provided: Food */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Food", function() { return Food; });
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ "./src/app/games/snake/classes/coordinate.ts");

var Food = /** @class */ (function () {
    function Food(p) {
        this.scale = 20;
        this.FOOD_COLOR = '#FC050B';
        this.p = p;
        this.reposition();
    }
    Food.prototype.drawFood = function () {
        this.p.fill(this.FOOD_COLOR);
        this.p.rect(this.coordinates.x, this.coordinates.y, this.scale, this.scale);
    };
    Food.prototype.reposition = function () {
        var columns = Math.floor(this.p.width / this.scale);
        var rows = Math.floor((this.p.height) / this.scale);
        this.coordinates = new _coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"](Math.floor(this.p.random(columns)), Math.floor(this.p.random(rows)));
        this.coordinates.x *= this.scale;
        this.coordinates.y *= this.scale;
        if (this.coordinates.y < 40) {
            this.coordinates.y += 40;
        }
    };
    return Food;
}());



/***/ }),

/***/ "./src/app/games/snake/classes/hamemrConfig.ts":
/*!*****************************************************!*\
  !*** ./src/app/games/snake/classes/hamemrConfig.ts ***!
  \*****************************************************/
/*! exports provided: MyHammerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            // override hammerjs default configuration
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_0__["DIRECTION_ALL"] }
        };
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]));



/***/ }),

/***/ "./src/app/games/snake/classes/snake.ts":
/*!**********************************************!*\
  !*** ./src/app/games/snake/classes/snake.ts ***!
  \**********************************************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return Snake; });
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ "./src/app/games/snake/classes/coordinate.ts");

var Snake = /** @class */ (function () {
    function Snake(p) {
        this.tail = [];
        this.scale = 20;
        this.velocity = 1;
        //length of the snake's tail. Initialized to one because of head
        this.size = 0;
        this.SNAKE_COLOR = '#0CE900';
        this.p = p;
        var columns = Math.floor(this.p.width / this.scale);
        var rows = Math.floor((this.p.height) / this.scale);
        this.head = new _coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"](Math.floor(this.p.random(columns)), Math.floor(this.p.random(rows)));
        this.head.x *= this.scale;
        this.head.y *= this.scale;
        this.direction = null;
    }
    Snake.prototype.drawSnake = function () {
        var _this = this;
        this.p.fill(this.SNAKE_COLOR);
        this.tail.forEach(function (part) {
            _this.p.rect(part.x, part.y, _this.scale, _this.scale);
        });
        this.p.rect(this.head.x, this.head.y, this.scale, this.scale);
    };
    Snake.prototype.eatFood = function () {
        this.size++;
    };
    return Snake;
}());



/***/ }),

/***/ "./src/app/games/snake/enums/direction.enum.ts":
/*!*****************************************************!*\
  !*** ./src/app/games/snake/enums/direction.enum.ts ***!
  \*****************************************************/
/*! exports provided: Direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 8] = "UP";
    Direction[Direction["DOWN"] = 16] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 4] = "RIGHT";
})(Direction || (Direction = {}));


/***/ }),

/***/ "./src/app/games/snake/enums/state.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/games/snake/enums/state.enum.ts ***!
  \*************************************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
var State;
(function (State) {
    State[State["START"] = 0] = "START";
    State[State["PLAYING"] = 1] = "PLAYING";
})(State || (State = {}));


/***/ }),

/***/ "./src/app/games/snake/snake.component.css":
/*!*************************************************!*\
  !*** ./src/app/games/snake/snake.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    margin-bottom: 5%;\r\n    margin-top: 5%;\r\n    width:50%; \r\n    margin-left: 25%; \r\n    margin-right: 25%\r\n}"

/***/ }),

/***/ "./src/app/games/snake/snake.component.html":
/*!**************************************************!*\
  !*** ./src/app/games/snake/snake.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-left\">\r\n  <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Snake</h4>\r\n      <p class=\"card-text\">Simple game of snake made with p5.js</p>\r\n      <div id=\"gameContainer\" #gameContainer></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/games/snake/snake.component.ts":
/*!************************************************!*\
  !*** ./src/app/games/snake/snake.component.ts ***!
  \************************************************/
/*! exports provided: SnakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeComponent", function() { return SnakeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/snake */ "./src/app/games/snake/classes/snake.ts");
/* harmony import */ var _classes_food__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/food */ "./src/app/games/snake/classes/food.ts");
/* harmony import */ var _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/direction.enum */ "./src/app/games/snake/enums/direction.enum.ts");
/* harmony import */ var _classes_coordinate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/coordinate */ "./src/app/games/snake/classes/coordinate.ts");
/* harmony import */ var _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums/state.enum */ "./src/app/games/snake/enums/state.enum.ts");
/* harmony import */ var _classes_hamemrConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/hamemrConfig */ "./src/app/games/snake/classes/hamemrConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SnakeComponent = /** @class */ (function () {
    function SnakeComponent() {
    }
    SnakeComponent.prototype.ngAfterViewInit = function () {
        this.createCanvas();
    };
    SnakeComponent.prototype.createCanvas = function () {
        this.p5 = new p5(this.sketch);
    };
    //this is where all the game functionality happens
    SnakeComponent.prototype.sketch = function (p) {
        //anything declared here can be accessed in helper functions.
        //Use this space for "global" variables.
        var width;
        var height;
        var snake;
        var food;
        var state;
        //set up hammer.js instance to detect touch events
        var hammerConfig = new _classes_hamemrConfig__WEBPACK_IMPORTED_MODULE_7__["MyHammerConfig"]();
        var hammer = hammerConfig.buildHammer(document.getElementById('gameContainer'));
        p.setup = function () {
            state = _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].START;
            width = document.getElementById('gameContainer').offsetWidth;
            height = width;
            p.createCanvas(width, height).parent('gameContainer');
            p.background(0);
            p.frameRate(10);
            snake = new _classes_snake__WEBPACK_IMPORTED_MODULE_2__["Snake"](p);
            food = new _classes_food__WEBPACK_IMPORTED_MODULE_3__["Food"](p);
            //sets up listener to enable touch detection
            setupTouch();
        };
        //main game loop
        p.draw = function () {
            p.background(0);
            drawEdge();
            if (state == _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].START) {
                drawWelcome();
            }
            //if no food was eatten overide previous positions in tail
            if (snake.size === snake.tail.length) {
                for (var i = 0; i < snake.tail.length - 1; i++) {
                    snake.tail[i] = snake.tail[i + 1];
                }
            }
            snake.tail[snake.size - 1] = new _classes_coordinate__WEBPACK_IMPORTED_MODULE_5__["Coordinate"](snake.head.x, snake.head.y);
            //update snake position depending on direction
            if (snake.direction == _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].RIGHT) {
                snake.head.x += snake.velocity * snake.scale;
            }
            else if (snake.direction == _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].LEFT) {
                snake.head.x -= snake.velocity * snake.scale;
            }
            else if (snake.direction == _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].UP) {
                snake.head.y -= snake.velocity * snake.scale;
            }
            else if (snake.direction == _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].DOWN) {
                snake.head.y += snake.velocity * snake.scale;
            }
            snake.head.x = p.constrain(snake.head.x, 0, width - snake.scale);
            snake.head.y = p.constrain(snake.head.y, 40, height - snake.scale);
            checkCollision();
            drawScore();
            food.drawFood();
            snake.drawSnake();
        };
        p.keyPressed = function () {
            //record which way the snake is moving and set turn pivot
            document.addEventListener("keydown", arrow_keys_handler, false);
            if (p.keyCode === p.RIGHT_ARROW && snake.direction != _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].LEFT) {
                if (state == _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].START) {
                    state = _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].PLAYING;
                }
                snake.direction = _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].RIGHT;
            }
            else if (p.keyCode === p.LEFT_ARROW && snake.direction != _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].RIGHT) {
                if (state == _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].START) {
                    state = _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].PLAYING;
                }
                snake.direction = _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].LEFT;
            }
            else if (p.keyCode === p.DOWN_ARROW && snake.direction != _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].UP) {
                if (state == _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].START) {
                    state = _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].PLAYING;
                }
                snake.direction = _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].DOWN;
            }
            else if (p.keyCode === p.UP_ARROW && snake.direction != _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].DOWN) {
                if (state == _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].START) {
                    state = _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].PLAYING;
                }
                snake.direction = _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].UP;
            }
        };
        p.windowResized = function () {
            width = document.getElementById('gameContainer').offsetWidth;
            height = width;
            p.resizeCanvas(width, height);
        };
        //this method checks for collisions with food as well as collisions with the snake itself.
        var checkCollision = function () {
            if (p.dist(snake.head.x, snake.head.y, food.coordinates.x, food.coordinates.y) < 5) {
                snake.eatFood();
                food.reposition();
            }
            snake.tail.forEach(function (part) {
                if (p.dist(snake.head.x, snake.head.y, part.x, part.y) < 5) {
                    p.setup();
                }
            });
        };
        var drawScore = function () {
            p.fill(snake.SNAKE_COLOR);
            p.textSize(40);
            p.textAlign(p.LEFT);
            p.text("Score: " + snake.size, 10, 35);
        };
        var drawEdge = function () {
            p.stroke(255);
            p.line(0, 40, p.width, 40);
            p.stroke(0);
        };
        var drawWelcome = function () {
            p.fill(255);
            p.textSize(30);
            p.textAlign(p.CENTER);
            p.text("Press the arrow keys to start playing!", p.width / 2, 85);
        };
        var arrow_keys_handler = function (e) {
            switch (e.keyCode) {
                case 37:
                case 39:
                case 38:
                case 40: // Arrow keys
                case 32:
                    e.preventDefault();
                    break; // Space
                default: break; // do not block other keys
            }
        };
        var setupTouch = function () {
            hammer.on('swipe', function (event) {
                if (event.direction == _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].LEFT && snake.direction != _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].RIGHT) {
                    if (state == _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].START) {
                        state = _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].PLAYING;
                    }
                    snake.direction = _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].LEFT;
                }
                else if (event.direction == _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].RIGHT && snake.direction != _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].LEFT) {
                    if (state == _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].START) {
                        state = _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].PLAYING;
                    }
                    snake.direction = _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].RIGHT;
                }
                else if (event.direction == _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].UP && snake.direction != _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].DOWN) {
                    if (state == _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].START) {
                        state = _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].PLAYING;
                    }
                    snake.direction = _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].UP;
                }
                else if (event.direction == _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].DOWN && snake.direction != _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].UP) {
                    if (state == _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].START) {
                        state = _enums_state_enum__WEBPACK_IMPORTED_MODULE_6__["State"].PLAYING;
                    }
                    snake.direction = _enums_direction_enum__WEBPACK_IMPORTED_MODULE_4__["Direction"].DOWN;
                }
            });
        };
    };
    SnakeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snake',
            template: __webpack_require__(/*! ./snake.component.html */ "./src/app/games/snake/snake.component.html"),
            styles: [__webpack_require__(/*! ./snake.component.css */ "./src/app/games/snake/snake.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SnakeComponent);
    return SnakeComponent;
}());



/***/ }),

/***/ "./src/app/shared-bootstrap-module.ts":
/*!********************************************!*\
  !*** ./src/app/shared-bootstrap-module.ts ***!
  \********************************************/
/*! exports provided: SharedBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedBootstrapModule", function() { return SharedBootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedBootstrapModule = /** @class */ (function () {
    function SharedBootstrapModule() {
    }
    SharedBootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot()],
            exports: [ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"]],
            declarations: [],
            providers: []
        })
    ], SharedBootstrapModule);
    return SharedBootstrapModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\david\Documents\GitHub\Games-Corner\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map