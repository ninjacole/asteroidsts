/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Canvas.ts":
/*!***********************!*\
  !*** ./src/Canvas.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\r\n    constructor() {\r\n        this.canvas = document.getElementById('gameCanvas');\r\n        this.updateSize = () => {\r\n            this.canvas.height = window.innerHeight;\r\n            this.canvas.width = window.innerWidth;\r\n        };\r\n        this.context = this.canvas.getContext('2d');\r\n        window.onresize = this.updateSize;\r\n        this.updateSize();\r\n    }\r\n    static getInstance() {\r\n        if (!this.instance) {\r\n            this.instance = new Canvas();\r\n        }\r\n        return this.instance;\r\n    }\r\n    get width() {\r\n        return this.canvas.width;\r\n    }\r\n    get height() {\r\n        return this.canvas.height;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://asteroidsts/./src/Canvas.ts?");

/***/ }),

/***/ "./src/Entities/Player.ts":
/*!********************************!*\
  !*** ./src/Entities/Player.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Canvas */ \"./src/Canvas.ts\");\n/* harmony import */ var _Input_Mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input/Mouse */ \"./src/Input/Mouse.ts\");\n/* harmony import */ var _Utilities_AssetLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/AssetLoader */ \"./src/Utilities/AssetLoader.ts\");\n/* harmony import */ var _Utilities_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities/Vector */ \"./src/Utilities/Vector.ts\");\n\r\n\r\n\r\n\r\nclass Player {\r\n    constructor(position, velocity) {\r\n        this.rotation = 0;\r\n        this.accelerationCoefficient = 0.1;\r\n        this.maxSpeed = 12;\r\n        this.movingImage = new Image();\r\n        this.idleImage = new Image();\r\n        this.image = new Image();\r\n        this.mouse = _Input_Mouse__WEBPACK_IMPORTED_MODULE_1__.Mouse.getInstance();\r\n        this.speed = 3;\r\n        this.draw = (context) => {\r\n            const origin = new _Utilities_Vector__WEBPACK_IMPORTED_MODULE_3__.Vector(this.image.width / 2, this.image.height / 2);\r\n            const scale = 1;\r\n            context.save();\r\n            context.translate(this.position.x, this.position.y);\r\n            context.rotate(this.rotation);\r\n            context.drawImage(this.image, 0, 0, this.image.width, this.image.height, -origin.x, -origin.y, this.image.width, this.image.height * scale);\r\n            context.restore();\r\n        };\r\n        this.update = () => {\r\n            const canvas = _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance();\r\n            this.position.x = this.getPositionChange(this.position.x, this.velocity.x, canvas.width);\r\n            this.position.y = this.getPositionChange(this.position.y, this.velocity.y, canvas.height);\r\n            var opposite = this.mouse.position.y - this.position.y;\r\n            var adjacent = this.mouse.position.x - this.position.x;\r\n            this.rotation = Math.atan2(opposite, adjacent);\r\n        };\r\n        this.engineStart = () => {\r\n            this.image = this.movingImage;\r\n            const dx = this.mouse.position.x - this.position.x;\r\n            const dy = this.mouse.position.y - this.position.y;\r\n            let angle = Math.atan2(dy, dx);\r\n            if (angle < 0) {\r\n                angle += Math.PI * 2;\r\n            }\r\n            const newVx = Math.cos(angle) * this.speed * this.accelerationCoefficient;\r\n            const newVy = Math.sin(angle) * this.speed * this.accelerationCoefficient;\r\n            this.velocity.x = this.getVelocityUpdate(this.velocity.x, newVx);\r\n            this.velocity.y = this.getVelocityUpdate(this.velocity.y, newVy);\r\n        };\r\n        this.engineStop = () => {\r\n            this.image = this.idleImage;\r\n        };\r\n        this.getVelocityUpdate = (velocity, change) => {\r\n            let newVel = velocity + change;\r\n            if (newVel > this.maxSpeed) {\r\n                newVel = this.maxSpeed;\r\n            }\r\n            else if (newVel < -1 * this.maxSpeed) {\r\n                newVel = -1 * this.maxSpeed;\r\n            }\r\n            return newVel;\r\n        };\r\n        this.getPositionChange = (pos, dx, max) => {\r\n            let newPos = pos + dx;\r\n            if (newPos > max) {\r\n                newPos = 0;\r\n            }\r\n            else if (newPos < 0) {\r\n                newPos = max;\r\n            }\r\n            return newPos;\r\n        };\r\n        this.position = position;\r\n        this.velocity = velocity;\r\n        this.idleImage = _Utilities_AssetLoader__WEBPACK_IMPORTED_MODULE_2__.AssetLoader.images.SHIP_SINGLE;\r\n        this.movingImage = _Utilities_AssetLoader__WEBPACK_IMPORTED_MODULE_2__.AssetLoader.images.SHIP_SINGLE_MOVING;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://asteroidsts/./src/Entities/Player.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.ts\");\n/* harmony import */ var _Entities_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entities/Player */ \"./src/Entities/Player.ts\");\n/* harmony import */ var _Input_InputHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input/InputHandler */ \"./src/Input/InputHandler.ts\");\n/* harmony import */ var _Input_Mouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input/Mouse */ \"./src/Input/Mouse.ts\");\n/* harmony import */ var _Utilities_AssetLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utilities/AssetLoader */ \"./src/Utilities/AssetLoader.ts\");\n/* harmony import */ var _Utilities_Vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utilities/Vector */ \"./src/Utilities/Vector.ts\");\nvar _a;\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor() {\r\n        this.canvas = _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance();\r\n        this.mouse = _Input_Mouse__WEBPACK_IMPORTED_MODULE_3__.Mouse.getInstance();\r\n        this.loader = _Utilities_AssetLoader__WEBPACK_IMPORTED_MODULE_4__.AssetLoader.getInstance();\r\n        this.inputHandler = _Input_InputHandler__WEBPACK_IMPORTED_MODULE_2__.InputHandler.getInstance();\r\n        this.entities = [];\r\n        this.start = () => {\r\n            const player = new _Entities_Player__WEBPACK_IMPORTED_MODULE_1__.Player(new _Utilities_Vector__WEBPACK_IMPORTED_MODULE_5__.Vector(500, 500), new _Utilities_Vector__WEBPACK_IMPORTED_MODULE_5__.Vector());\r\n            this.entities.push(player);\r\n            this.inputHandler.movePlayer = {\r\n                execute: () => {\r\n                    player.engineStart();\r\n                },\r\n                undoAction: () => {\r\n                    player.engineStop();\r\n                },\r\n                button: 0\r\n            };\r\n            requestAnimationFrame(this.loop);\r\n        };\r\n        this.init = () => {\r\n            this.loader.loadAssets(this.start);\r\n        };\r\n        this.loop = (timestamp) => {\r\n            this.input();\r\n            this.update();\r\n            this.draw();\r\n            requestAnimationFrame(this.loop);\r\n        };\r\n        this.input = () => {\r\n            const commands = this.inputHandler.getExecuteCommands();\r\n            commands.forEach((value) => {\r\n                value.execute();\r\n            });\r\n            const cancelCommands = this.inputHandler.getCanceledCommands();\r\n            cancelCommands.forEach((value) => {\r\n                value.undoAction && value.undoAction();\r\n            });\r\n        };\r\n        this.update = () => {\r\n            this.entities.forEach((entity) => {\r\n                entity.update();\r\n            });\r\n        };\r\n        this.draw = () => {\r\n            this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n            for (let i = 0; i < this.entities.length; i++) {\r\n                this.entities[i].draw(this.canvas.context);\r\n            }\r\n        };\r\n    }\r\n}\r\n_a = Game;\r\nGame.getInstance = () => {\r\n    if (!_a.instance) {\r\n        _a.instance = new Game();\r\n    }\r\n    return _a.instance;\r\n};\r\nconst game = Game.getInstance();\r\ngame.init();\r\n\n\n//# sourceURL=webpack://asteroidsts/./src/Game.ts?");

/***/ }),

/***/ "./src/Input/InputHandler.ts":
/*!***********************************!*\
  !*** ./src/Input/InputHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputHandler\": () => (/* binding */ InputHandler)\n/* harmony export */ });\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keyboard */ \"./src/Input/Keyboard.ts\");\n/* harmony import */ var _Mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mouse */ \"./src/Input/Mouse.ts\");\nvar _a;\r\n\r\n\r\nclass InputHandler {\r\n    constructor() {\r\n        this.mouse = _Mouse__WEBPACK_IMPORTED_MODULE_1__.Mouse.getInstance();\r\n        this.keyboard = _Keyboard__WEBPACK_IMPORTED_MODULE_0__.Keyboard.getInstance();\r\n        this.movePlayer = { execute: () => { }, key: \"\" };\r\n        this.rotatePlayerRight = { execute: () => { }, key: \"\" };\r\n        this.rotatePlayerLeft = { execute: () => { }, key: \"\" };\r\n        this.getExecuteCommands = () => {\r\n            let commands = [this.movePlayer, this.rotatePlayerLeft, this.rotatePlayerRight];\r\n            let commandsToExecute = commands.filter((command) => {\r\n                return (command.key !== undefined && this.keyboard.isKeyDown(command.key)) ||\r\n                    command.button !== undefined && this.mouse.isButtonDown(command.button);\r\n            });\r\n            return commandsToExecute;\r\n        };\r\n        this.getCanceledCommands = () => {\r\n            let commands = [this.movePlayer, this.rotatePlayerLeft, this.rotatePlayerRight];\r\n            let commandsToCancel = commands.filter((command) => {\r\n                return (command.key !== undefined && command.undoAction !== undefined && !this.keyboard.isKeyDown(command.key)) ||\r\n                    command.button !== undefined && command.undoAction !== undefined && !this.mouse.isButtonDown(command.button);\r\n            });\r\n            return commandsToCancel;\r\n        };\r\n    }\r\n}\r\n_a = InputHandler;\r\nInputHandler.getInstance = () => {\r\n    if (!_a.instance) {\r\n        _a.instance = new InputHandler();\r\n    }\r\n    return _a.instance;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://asteroidsts/./src/Input/InputHandler.ts?");

/***/ }),

/***/ "./src/Input/Keyboard.ts":
/*!*******************************!*\
  !*** ./src/Input/Keyboard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\nvar _a;\r\nclass Keyboard {\r\n    constructor() {\r\n        this.downKeys = {};\r\n        this.onKeyDown = (event) => {\r\n            this.downKeys[event.code] = true;\r\n        };\r\n        this.onKeyUp = (event) => {\r\n            delete this.downKeys[event.code];\r\n        };\r\n        this.isKeyDown = (key) => {\r\n            return key !== undefined && this.downKeys[key];\r\n        };\r\n        document.onkeydown = this.onKeyDown;\r\n        document.onkeyup = this.onKeyUp;\r\n    }\r\n}\r\n_a = Keyboard;\r\nKeyboard.getInstance = () => {\r\n    if (!_a.instance) {\r\n        _a.instance = new Keyboard();\r\n    }\r\n    return _a.instance;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://asteroidsts/./src/Input/Keyboard.ts?");

/***/ }),

/***/ "./src/Input/Mouse.ts":
/*!****************************!*\
  !*** ./src/Input/Mouse.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mouse\": () => (/* binding */ Mouse)\n/* harmony export */ });\n/* harmony import */ var _Utilities_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Vector */ \"./src/Utilities/Vector.ts\");\nvar _a;\r\n\r\nclass Mouse {\r\n    constructor() {\r\n        this.downButtons = {};\r\n        this.isButtonDown = (button) => {\r\n            return this.downButtons[button];\r\n        };\r\n        this.handleMove = (event) => {\r\n            this.position = new _Utilities_Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(event.pageX, event.pageY);\r\n        };\r\n        this.handleDown = (event) => {\r\n            console.log('pushed button: ' + event.button);\r\n            this.downButtons[event.button] = true;\r\n        };\r\n        this.handleUp = (event) => {\r\n            delete this.downButtons[event.button];\r\n        };\r\n        this.position = new _Utilities_Vector__WEBPACK_IMPORTED_MODULE_0__.Vector();\r\n        document.onmousemove = this.handleMove;\r\n        document.onmousedown = this.handleDown;\r\n        document.onmouseup = this.handleUp;\r\n    }\r\n}\r\n_a = Mouse;\r\nMouse.getInstance = () => {\r\n    if (!_a.instance) {\r\n        _a.instance = new Mouse();\r\n    }\r\n    return _a.instance;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://asteroidsts/./src/Input/Mouse.ts?");

/***/ }),

/***/ "./src/Utilities/AssetLoader.ts":
/*!**************************************!*\
  !*** ./src/Utilities/AssetLoader.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AssetLoader\": () => (/* binding */ AssetLoader)\n/* harmony export */ });\nvar _a;\r\nclass AssetLoader {\r\n    constructor() {\r\n        this.loadAssets = (onLoadingFinished) => {\r\n            const fileNames = {\r\n                ASTEROID_GRAY_1DMG: AssetLoader.rootDir + \"asteroid-gray-1dmg\",\r\n                ASTEROID_GRAY_2DMG: AssetLoader.rootDir + \"asteroid-gray-2dmg\",\r\n                ASTEROID_GRAY_3DMG: AssetLoader.rootDir + \"asteroid-gray-3dmg\",\r\n                ASTEROID_GRAY: AssetLoader.rootDir + \"asteroid-gray\",\r\n                ASTEROID: AssetLoader.rootDir + \"asteroid\",\r\n                BALL01: AssetLoader.rootDir + \"ball01\",\r\n                BALL02: AssetLoader.rootDir + \"ball02\",\r\n                BALL03: AssetLoader.rootDir + \"ball03\",\r\n                BG: AssetLoader.rootDir + \"bg\",\r\n                ENEMY_EXPLOSION: AssetLoader.rootDir + \"enemy-explosion\",\r\n                ENEMY: AssetLoader.rootDir + \"enemy\",\r\n                POWERUP: AssetLoader.rootDir + \"powerup\",\r\n                SHIP_DOUBLE_MOVING: AssetLoader.rootDir + \"ship-double-moving\",\r\n                SHIP_DOUBLE: AssetLoader.rootDir + \"ship-double\",\r\n                SHIP_SINGLE_MOVING: AssetLoader.rootDir + \"ship-single-moving\",\r\n                SHIP_SINGLE: AssetLoader.rootDir + \"ship-single\",\r\n            };\r\n            let count = Object.keys(fileNames).length;\r\n            const onLoadFinished = (fileName) => {\r\n                console.log(`finished loading [${fileName}]`);\r\n                if (--count === 0) {\r\n                    onLoadingFinished();\r\n                }\r\n            };\r\n            Object.keys(fileNames).forEach((key) => {\r\n                AssetLoader.images[key] = new Image();\r\n                AssetLoader.images[key].onload = () => { onLoadFinished(key); };\r\n                AssetLoader.images[key].src = fileNames[key] + \".png\";\r\n            });\r\n        };\r\n    }\r\n}\r\n_a = AssetLoader;\r\nAssetLoader.rootDir = \"/images/\";\r\nAssetLoader.getInstance = () => {\r\n    if (!_a.instance) {\r\n        _a.instance = new AssetLoader();\r\n    }\r\n    return _a.instance;\r\n};\r\nAssetLoader.images = {\r\n    ASTEROID_GRAY_1DMG: new Image(),\r\n    ASTEROID_GRAY_2DMG: new Image(),\r\n    ASTEROID_GRAY_3DMG: new Image(),\r\n    ASTEROID_GRAY: new Image(),\r\n    ASTEROID: new Image(),\r\n    BALL01: new Image(),\r\n    BALL02: new Image(),\r\n    BALL03: new Image(),\r\n    BG: new Image(),\r\n    ENEMY_EXPLOSION: new Image(),\r\n    ENEMY: new Image(),\r\n    POWERUP: new Image(),\r\n    SHIP_DOUBLE_MOVING: new Image(),\r\n    SHIP_DOUBLE: new Image(),\r\n    SHIP_SINGLE_MOVING: new Image(),\r\n    SHIP_SINGLE: new Image(),\r\n};\r\n\r\n\n\n//# sourceURL=webpack://asteroidsts/./src/Utilities/AssetLoader.ts?");

/***/ }),

/***/ "./src/Utilities/Vector.ts":
/*!*********************************!*\
  !*** ./src/Utilities/Vector.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\r\n    constructor(x, y) {\r\n        this.length = () => {\r\n            return Math.sqrt(this.x * this.x + this.y * this.y);\r\n        };\r\n        this.add = (vector) => {\r\n            this.x += vector.x;\r\n            this.y += vector.y;\r\n        };\r\n        this.subtract = (vector) => {\r\n            this.x -= vector.x;\r\n            this.y -= vector.y;\r\n        };\r\n        this.toString = () => {\r\n            return \"[\" + this.x + \", \" + this.y + \"]\";\r\n        };\r\n        this.clone = () => {\r\n            return new Vector(this.x, this.y);\r\n        };\r\n        this.equals = (vector) => {\r\n            return vector.x == this.x && vector.y == this.y;\r\n        };\r\n        this.x = x || 0;\r\n        this.y = y || 0;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://asteroidsts/./src/Utilities/Vector.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Game.ts");
/******/ 	
/******/ })()
;