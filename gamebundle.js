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

/***/ "./src/AssetLoading/AssetLoader.ts":
/*!*****************************************!*\
  !*** ./src/AssetLoading/AssetLoader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AssetLoader\": () => (/* binding */ AssetLoader)\n/* harmony export */ });\n/* harmony import */ var _Images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images */ \"./src/AssetLoading/Images.ts\");\n/* harmony import */ var _Sounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sounds */ \"./src/AssetLoading/Sounds.ts\");\nvar _a;\n\n\nclass AssetLoader {\n    constructor() {\n        this.loadAssets = (onLoadingFinished) => {\n            const images = {\n                \"asteroid-gray-1dmg.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY_1DMG,\n                \"asteroid-gray-2dmg.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY_2DMG,\n                \"asteroid-gray-3dmg.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY_3DMG,\n                \"asteroid-gray.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY,\n                \"asteroid.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID,\n                \"ball01.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.BALL01,\n                \"ball02.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.BALL02,\n                \"ball03.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.BALL03,\n                \"bg.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.BG,\n                \"enemy-explosion.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ENEMY_EXPLOSION,\n                \"enemy.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ENEMY,\n                \"powerup.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.POWERUP,\n                \"ship-double-moving.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.SHIP_DOUBLE_MOVING,\n                \"ship-double.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.SHIP_DOUBLE,\n                \"ship-single-moving.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.SHIP_SINGLE_MOVING,\n                \"ship-single.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.SHIP_SINGLE,\n            };\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ASTEROID_DMG = new Audio(AssetLoader.rootSoundDir + \"asteroid-takes-damage.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ASTEROID_DMG.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.DEATH = new Audio(AssetLoader.rootSoundDir + \"death.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.DEATH.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ENEMY_DEATH = new Audio(AssetLoader.rootSoundDir + \"enemy-death.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ENEMY_DEATH.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ENEMY_SHOOT = new Audio(AssetLoader.rootSoundDir + \"enemy-shoot.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ENEMY_SHOOT.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.EXPLOSION = new Audio(AssetLoader.rootSoundDir + \"explosion.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.EXPLOSION.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.LASER = new Audio(AssetLoader.rootSoundDir + \"laser.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.LASER.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.LASER2 = new Audio(AssetLoader.rootSoundDir + \"laser2.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.LASER2.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.MENU_SELECT = new Audio(AssetLoader.rootSoundDir + \"menu-select.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.MENU_SELECT.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.POWERUP = new Audio(AssetLoader.rootSoundDir + \"powerup.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.POWERUP.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.SCORE_CLEARED = new Audio(AssetLoader.rootSoundDir + \"score-cleared.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.SCORE_CLEARED.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.SHIELD_UP = new Audio(AssetLoader.rootSoundDir + \"shield-up.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.SHIELD_UP.volume = 0.2;\n            let assetCount = Object.keys(images).length;\n            // Assigning to .src loads the asset\n            const loadAsset = (fileName, asset) => {\n                asset.onload = () => { onLoadFinished(fileName); };\n                asset.src = fileName;\n            };\n            // Decrement the count after loading an image, then perform callback when done\n            const onLoadFinished = (fileName) => {\n                console.log(`loaded [${fileName}]`);\n                if (--assetCount === 0) {\n                    console.log('done loading');\n                    onLoadingFinished();\n                }\n            };\n            // Iterate the hash table keys\n            Object.keys(images).forEach((key) => {\n                loadAsset(AssetLoader.rootImageDir + key, images[key]);\n            });\n        };\n        const href = document.location.href;\n        const joiner = href[href.length - 1] == '/' ? '' : '/';\n        AssetLoader.rootImageDir = href + joiner + \"images/\";\n        AssetLoader.rootSoundDir = href + joiner + \"sounds/\";\n    }\n}\n_a = AssetLoader;\nAssetLoader.rootImageDir = \"\";\nAssetLoader.rootSoundDir = \"\";\nAssetLoader.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new AssetLoader();\n    }\n    return _a.instance;\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/AssetLoading/AssetLoader.ts?");

/***/ }),

/***/ "./src/AssetLoading/Images.ts":
/*!************************************!*\
  !*** ./src/AssetLoading/Images.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Images\": () => (/* binding */ Images)\n/* harmony export */ });\nclass Images {\n}\nImages.ASTEROID_GRAY_1DMG = new Image();\nImages.ASTEROID_GRAY_2DMG = new Image();\nImages.ASTEROID_GRAY_3DMG = new Image();\nImages.ASTEROID_GRAY = new Image();\nImages.ASTEROID = new Image();\nImages.BALL01 = new Image();\nImages.BALL02 = new Image();\nImages.BALL03 = new Image();\nImages.BG = new Image();\nImages.ENEMY_EXPLOSION = new Image();\nImages.ENEMY = new Image();\nImages.POWERUP = new Image();\nImages.SHIP_DOUBLE_MOVING = new Image();\nImages.SHIP_DOUBLE = new Image();\nImages.SHIP_SINGLE_MOVING = new Image();\nImages.SHIP_SINGLE = new Image();\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/AssetLoading/Images.ts?");

/***/ }),

/***/ "./src/AssetLoading/Sounds.ts":
/*!************************************!*\
  !*** ./src/AssetLoading/Sounds.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sounds\": () => (/* binding */ Sounds)\n/* harmony export */ });\nclass Sounds {\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/AssetLoading/Sounds.ts?");

/***/ }),

/***/ "./src/Canvas.ts":
/*!***********************!*\
  !*** ./src/Canvas.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\n    constructor() {\n        this.canvas = document.getElementById('gameCanvas');\n        this.updateSize = () => {\n            this.canvas.height = window.innerHeight;\n            this.canvas.width = window.innerWidth;\n        };\n        this.context = this.canvas.getContext('2d');\n        window.onresize = this.updateSize;\n        this.updateSize();\n    }\n    static getInstance() {\n        if (!this.instance) {\n            this.instance = new Canvas();\n        }\n        return this.instance;\n    }\n    get width() {\n        return this.canvas.width;\n    }\n    get height() {\n        return this.canvas.height;\n    }\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/Canvas.ts?");

/***/ }),

/***/ "./src/Entities/Player.ts":
/*!********************************!*\
  !*** ./src/Entities/Player.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Canvas */ \"./src/Canvas.ts\");\n/* harmony import */ var _Input_Mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input/Mouse */ \"./src/Input/Mouse.ts\");\n/* harmony import */ var _AssetLoading_Images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AssetLoading/Images */ \"./src/AssetLoading/Images.ts\");\n/* harmony import */ var _Utilities_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities/Vector */ \"./src/Utilities/Vector.ts\");\n/* harmony import */ var _AssetLoading_Sounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AssetLoading/Sounds */ \"./src/AssetLoading/Sounds.ts\");\n\n\n\n\n\nclass Player {\n    constructor(position, velocity) {\n        this.rotation = 0;\n        this.accelerationCoefficient = 0.1;\n        this.maxSpeed = 12;\n        this.movingImage = _AssetLoading_Images__WEBPACK_IMPORTED_MODULE_2__.Images.SHIP_SINGLE_MOVING;\n        this.idleImage = _AssetLoading_Images__WEBPACK_IMPORTED_MODULE_2__.Images.SHIP_SINGLE;\n        this.image = _AssetLoading_Images__WEBPACK_IMPORTED_MODULE_2__.Images.SHIP_SINGLE;\n        this.mouse = _Input_Mouse__WEBPACK_IMPORTED_MODULE_1__.Mouse.getInstance();\n        this.speed = 3;\n        this.weaponSound = _AssetLoading_Sounds__WEBPACK_IMPORTED_MODULE_4__.Sounds.LASER;\n        this.draw = (context) => {\n            const origin = new _Utilities_Vector__WEBPACK_IMPORTED_MODULE_3__.Vector(this.image.width / 2, this.image.height / 2);\n            const scale = 1;\n            context.save();\n            context.translate(this.position.x, this.position.y);\n            context.rotate(this.rotation);\n            context.drawImage(this.image, 0, 0, this.image.width, this.image.height, -origin.x, -origin.y, this.image.width, this.image.height * scale);\n            context.restore();\n        };\n        this.update = () => {\n            const canvas = _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance();\n            this.position.x = this.getPositionChange(this.position.x, this.velocity.x, canvas.width);\n            this.position.y = this.getPositionChange(this.position.y, this.velocity.y, canvas.height);\n            var opposite = this.mouse.position.y - this.position.y;\n            var adjacent = this.mouse.position.x - this.position.x;\n            this.rotation = Math.atan2(opposite, adjacent);\n        };\n        this.engineStart = () => {\n            this.image = this.movingImage;\n            const dx = this.mouse.position.x - this.position.x;\n            const dy = this.mouse.position.y - this.position.y;\n            let angle = Math.atan2(dy, dx);\n            if (angle < 0) {\n                angle += Math.PI * 2;\n            }\n            const newVx = Math.cos(angle) * this.speed * this.accelerationCoefficient;\n            const newVy = Math.sin(angle) * this.speed * this.accelerationCoefficient;\n            this.velocity.x = this.getVelocityUpdate(this.velocity.x, newVx);\n            this.velocity.y = this.getVelocityUpdate(this.velocity.y, newVy);\n        };\n        this.engineStop = () => {\n            this.image = this.idleImage;\n        };\n        this.fireWeapon = () => {\n            this.weaponSound.play();\n        };\n        this.getVelocityUpdate = (velocity, change) => {\n            let newVel = velocity + change;\n            if (newVel > this.maxSpeed) {\n                newVel = this.maxSpeed;\n            }\n            else if (newVel < -1 * this.maxSpeed) {\n                newVel = -1 * this.maxSpeed;\n            }\n            return newVel;\n        };\n        this.getPositionChange = (pos, dx, max) => {\n            let newPos = pos + dx;\n            if (newPos > max) {\n                newPos = 0;\n            }\n            else if (newPos < 0) {\n                newPos = max;\n            }\n            return newPos;\n        };\n        this.position = position;\n        this.velocity = velocity;\n    }\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/Entities/Player.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.ts\");\n/* harmony import */ var _Entities_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entities/Player */ \"./src/Entities/Player.ts\");\n/* harmony import */ var _Input_InputHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input/InputHandler */ \"./src/Input/InputHandler.ts\");\n/* harmony import */ var _Input_Mouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input/Mouse */ \"./src/Input/Mouse.ts\");\n/* harmony import */ var _AssetLoading_AssetLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AssetLoading/AssetLoader */ \"./src/AssetLoading/AssetLoader.ts\");\n/* harmony import */ var _Utilities_Vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utilities/Vector */ \"./src/Utilities/Vector.ts\");\n/* harmony import */ var _Utilities_Keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utilities/Keys */ \"./src/Utilities/Keys.ts\");\nvar _a;\n\n\n\n\n\n\n\nclass Game {\n    constructor() {\n        this.canvas = _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance();\n        this.mouse = _Input_Mouse__WEBPACK_IMPORTED_MODULE_3__.Mouse.getInstance();\n        this.loader = _AssetLoading_AssetLoader__WEBPACK_IMPORTED_MODULE_4__.AssetLoader.getInstance();\n        this.inputHandler = _Input_InputHandler__WEBPACK_IMPORTED_MODULE_2__.InputHandler.getInstance();\n        this.entities = [];\n        this.start = () => {\n            const player = new _Entities_Player__WEBPACK_IMPORTED_MODULE_1__.Player(new _Utilities_Vector__WEBPACK_IMPORTED_MODULE_5__.Vector(500, 500), new _Utilities_Vector__WEBPACK_IMPORTED_MODULE_5__.Vector());\n            this.entities.push(player);\n            this.inputHandler.movePlayer = {\n                execute: () => {\n                    player.engineStart();\n                },\n                undoAction: () => {\n                    player.engineStop();\n                },\n                button: 0\n            };\n            this.inputHandler.playerFire = {\n                execute: () => {\n                    player.fireWeapon();\n                },\n                key: _Utilities_Keys__WEBPACK_IMPORTED_MODULE_6__.keys.SPACE\n            };\n            requestAnimationFrame(this.loop);\n        };\n        this.init = () => {\n            document.addEventListener('contextmenu', event => event.preventDefault());\n            this.loader.loadAssets(this.start);\n        };\n        this.loop = (timestamp) => {\n            this.input();\n            this.update();\n            this.draw();\n            requestAnimationFrame(this.loop);\n        };\n        this.input = () => {\n            const commands = this.inputHandler.getExecuteCommands();\n            commands.forEach((value) => {\n                value.execute();\n            });\n            const cancelCommands = this.inputHandler.getCanceledCommands();\n            cancelCommands.forEach((value) => {\n                value.undoAction && value.undoAction();\n            });\n        };\n        this.update = () => {\n            this.entities.forEach((entity) => {\n                entity.update();\n            });\n        };\n        this.draw = () => {\n            this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n            for (let i = 0; i < this.entities.length; i++) {\n                this.entities[i].draw(this.canvas.context);\n            }\n        };\n    }\n}\n_a = Game;\nGame.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new Game();\n    }\n    return _a.instance;\n};\nconst game = Game.getInstance();\ngame.init();\n\n\n//# sourceURL=webpack://asteroidsts/./src/Game.ts?");

/***/ }),

/***/ "./src/Input/InputHandler.ts":
/*!***********************************!*\
  !*** ./src/Input/InputHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputHandler\": () => (/* binding */ InputHandler)\n/* harmony export */ });\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keyboard */ \"./src/Input/Keyboard.ts\");\n/* harmony import */ var _Mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mouse */ \"./src/Input/Mouse.ts\");\nvar _a;\n\n\nclass InputHandler {\n    constructor() {\n        this.mouse = _Mouse__WEBPACK_IMPORTED_MODULE_1__.Mouse.getInstance();\n        this.keyboard = _Keyboard__WEBPACK_IMPORTED_MODULE_0__.Keyboard.getInstance();\n        this.movePlayer = { execute: () => { }, key: \"\" };\n        this.rotatePlayerRight = { execute: () => { }, key: \"\" };\n        this.rotatePlayerLeft = { execute: () => { }, key: \"\" };\n        this.playerFire = { execute: () => { }, key: \"\" };\n        this.getExecuteCommands = () => {\n            let commands = [this.movePlayer, this.rotatePlayerLeft, this.rotatePlayerRight, this.playerFire];\n            let commandsToExecute = commands.filter((command) => {\n                return (command.key !== undefined && this.keyboard.isKeyDown(command.key)) ||\n                    command.button !== undefined && this.mouse.isButtonDown(command.button);\n            });\n            return commandsToExecute;\n        };\n        this.getCanceledCommands = () => {\n            let commands = [this.movePlayer];\n            let commandsToCancel = commands.filter((command) => {\n                return (command.key !== undefined && command.undoAction !== undefined && !this.keyboard.isKeyDown(command.key)) ||\n                    command.button !== undefined && command.undoAction !== undefined && !this.mouse.isButtonDown(command.button);\n            });\n            return commandsToCancel;\n        };\n    }\n}\n_a = InputHandler;\nInputHandler.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new InputHandler();\n    }\n    return _a.instance;\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/Input/InputHandler.ts?");

/***/ }),

/***/ "./src/Input/Keyboard.ts":
/*!*******************************!*\
  !*** ./src/Input/Keyboard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\nvar _a;\nclass Keyboard {\n    constructor() {\n        this.downKeys = {};\n        this.onKeyDown = (event) => {\n            this.downKeys[event.code] = true;\n        };\n        this.onKeyUp = (event) => {\n            delete this.downKeys[event.code];\n        };\n        this.isKeyDown = (key) => {\n            return key !== undefined && this.downKeys[key];\n        };\n        document.onkeydown = this.onKeyDown;\n        document.onkeyup = this.onKeyUp;\n    }\n}\n_a = Keyboard;\nKeyboard.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new Keyboard();\n    }\n    return _a.instance;\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/Input/Keyboard.ts?");

/***/ }),

/***/ "./src/Input/Mouse.ts":
/*!****************************!*\
  !*** ./src/Input/Mouse.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mouse\": () => (/* binding */ Mouse)\n/* harmony export */ });\n/* harmony import */ var _Utilities_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Vector */ \"./src/Utilities/Vector.ts\");\nvar _a;\n\nclass Mouse {\n    constructor() {\n        this.downButtons = {};\n        this.isButtonDown = (button) => {\n            return this.downButtons[button];\n        };\n        this.handleMove = (event) => {\n            this.position = new _Utilities_Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(event.pageX, event.pageY);\n        };\n        this.handleDown = (event) => {\n            console.log('pushed button: ' + event.button);\n            this.downButtons[event.button] = true;\n        };\n        this.handleUp = (event) => {\n            delete this.downButtons[event.button];\n        };\n        this.position = new _Utilities_Vector__WEBPACK_IMPORTED_MODULE_0__.Vector();\n        document.onmousemove = this.handleMove;\n        document.onmousedown = this.handleDown;\n        document.onmouseup = this.handleUp;\n    }\n}\n_a = Mouse;\nMouse.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new Mouse();\n    }\n    return _a.instance;\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/Input/Mouse.ts?");

/***/ }),

/***/ "./src/Utilities/Keys.ts":
/*!*******************************!*\
  !*** ./src/Utilities/Keys.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keys\": () => (/* binding */ keys)\n/* harmony export */ });\nconst keys = {\n    TAB: \"Tab\",\n    ENTER: \"Enter\",\n    PAUSE: \"Pause\",\n    ESCAPE: \"Escape\",\n    SPACE: \"Space\",\n    PAGE_UP: \"PageUp\",\n    PAGE_DOWN: \"PageDown\",\n    END: \"End\",\n    HOME: \"Home\",\n    LEFT_ARROW: \"ArrowLeft\",\n    UP_ARROW: \"ArrowUp\",\n    RIGHT_ARROW: \"ArrowRight\",\n    DOWN_ARROW: \"ArrowDown\",\n    INSERT: \"Insert\",\n    DELETE: \"Delete\",\n    ZERO: \"Digit0\",\n    ONE: \"Digit1\",\n    TWO: \"Digit2\",\n    THREE: \"Digit3\",\n    FOUR: \"Digit4\",\n    FIVE: \"Digit5\",\n    SIX: \"Digit6\",\n    SEVEN: \"Digit7\",\n    EIGHT: \"Digit8\",\n    NINE: \"Digit9\",\n    A: \"KeyA\",\n    B: \"KeyB\",\n    C: \"KeyC\",\n    D: \"KeyD\",\n    E: \"KeyE\",\n    F: \"KeyF\",\n    G: \"KeyG\",\n    H: \"KeyH\",\n    I: \"KeyI\",\n    J: \"KeyJ\",\n    K: \"KeyK\",\n    L: \"KeyL\",\n    M: \"KeyM\",\n    N: \"KeyN\",\n    O: \"KeyO\",\n    P: \"KeyP\",\n    Q: \"KeyQ\",\n    R: \"KeyR\",\n    S: \"KeyS\",\n    T: \"KeyT\",\n    U: \"KeyU\",\n    V: \"KeyV\",\n    W: \"KeyW\",\n    X: \"KeyX\",\n    Y: \"KeyY\",\n    Z: \"KeyZ\",\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/Utilities/Keys.ts?");

/***/ }),

/***/ "./src/Utilities/Vector.ts":
/*!*********************************!*\
  !*** ./src/Utilities/Vector.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\n    constructor(x, y) {\n        this.length = () => {\n            return Math.sqrt(this.x * this.x + this.y * this.y);\n        };\n        this.add = (vector) => {\n            this.x += vector.x;\n            this.y += vector.y;\n        };\n        this.subtract = (vector) => {\n            this.x -= vector.x;\n            this.y -= vector.y;\n        };\n        this.toString = () => {\n            return \"[\" + this.x + \", \" + this.y + \"]\";\n        };\n        this.clone = () => {\n            return new Vector(this.x, this.y);\n        };\n        this.equals = (vector) => {\n            return vector.x == this.x && vector.y == this.y;\n        };\n        this.x = x || 0;\n        this.y = y || 0;\n    }\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/Utilities/Vector.ts?");

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