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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\n/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Vector */ \"./src/utils/Vector.ts\");\n\nclass Canvas {\n    constructor() {\n        this.canvas = document.getElementById('gameCanvas');\n        this.updateSize = () => {\n            this.canvas.height = window.innerHeight;\n            this.canvas.width = window.innerWidth;\n        };\n        this.drawImage = (image, pos, rotation, scale) => {\n            const context = Canvas.getInstance().context;\n            const origin = new _utils_Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(image.width / 2, image.height / 2);\n            scale = scale || 1;\n            context.save();\n            context.translate(pos.x, pos.y);\n            context.rotate(rotation);\n            context.drawImage(image, 0, 0, image.width, image.height, -origin.x * scale, -origin.y * scale, image.width * scale, image.height * scale);\n            context.restore();\n        };\n        this.getCenter = () => {\n            return new _utils_Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(this.canvas.width / 2, this.canvas.height / 2);\n        };\n        this.updatePosition = (pos, velocity) => {\n            pos.add(velocity);\n            const maxHeight = this.canvas.height;\n            const maxWidth = this.canvas.width;\n            if (pos.x > maxWidth) {\n                pos.x = 0;\n            }\n            else if (pos.x < 0) {\n                pos.x = maxWidth;\n            }\n            if (pos.y > maxHeight) {\n                pos.y = 0;\n            }\n            else if (pos.y < 0) {\n                pos.y = maxHeight;\n            }\n            return pos;\n        };\n        this.context = this.canvas.getContext('2d');\n        window.onresize = this.updateSize;\n        this.updateSize();\n    }\n    static getInstance() {\n        if (!this.instance) {\n            this.instance = new Canvas();\n        }\n        return this.instance;\n    }\n    get width() {\n        return this.canvas.width;\n    }\n    get height() {\n        return this.canvas.height;\n    }\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/Canvas.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.ts\");\n/* harmony import */ var _entities_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/Player */ \"./src/entities/Player.ts\");\n/* harmony import */ var _input_InputHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input/InputHandler */ \"./src/input/InputHandler.ts\");\n/* harmony import */ var _input_Mouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/Mouse */ \"./src/input/Mouse.ts\");\n/* harmony import */ var _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interfaces/ICommand */ \"./src/interfaces/ICommand.ts\");\n/* harmony import */ var _assetLoading_AssetLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assetLoading/AssetLoader */ \"./src/assetLoading/AssetLoader.ts\");\n/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/Vector */ \"./src/utils/Vector.ts\");\n/* harmony import */ var _utils_Keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/Keys */ \"./src/utils/Keys.ts\");\n/* harmony import */ var _ui_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/Menu */ \"./src/ui/Menu.ts\");\n/* harmony import */ var _utils_GameLoop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/GameLoop */ \"./src/utils/GameLoop.ts\");\n/* harmony import */ var _entities_Asteroid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entities/Asteroid */ \"./src/entities/Asteroid.ts\");\n/* harmony import */ var _input_Commands__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input/Commands */ \"./src/input/Commands.ts\");\nvar _a;\n\n\n\n\n\n\n\n\n\n\n\n\nclass Game {\n    constructor() {\n        this.canvas = _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance();\n        this.mouse = _input_Mouse__WEBPACK_IMPORTED_MODULE_3__.Mouse.getInstance();\n        this.inputHandler = _input_InputHandler__WEBPACK_IMPORTED_MODULE_2__.InputHandler.getInstance();\n        this.menu = _ui_Menu__WEBPACK_IMPORTED_MODULE_8__.Menu.getInstance(this);\n        this.gameLoop = _utils_GameLoop__WEBPACK_IMPORTED_MODULE_9__.GameLoop.getInstance();\n        this.player = new _entities_Player__WEBPACK_IMPORTED_MODULE_1__.Player(this.canvas.getCenter(), _utils_Vector__WEBPACK_IMPORTED_MODULE_6__.Vector.zero);\n        this.entities = [];\n        this.init = () => {\n            this.preventRightClick();\n            this.loadAssets();\n        };\n        this.preventRightClick = () => {\n            document.addEventListener('contextmenu', event => event.preventDefault());\n        };\n        this.loadAssets = () => {\n            _assetLoading_AssetLoader__WEBPACK_IMPORTED_MODULE_5__.AssetLoader.getInstance().loadAssets(this.showStartMenu);\n        };\n        this.showStartMenu = () => {\n            this.menu.showStart();\n        };\n        this.start = () => {\n            this.initPlayer();\n            this.initCommands();\n            // todo: remove this- testing only\n            this.entities.push(_entities_Asteroid__WEBPACK_IMPORTED_MODULE_10__.Asteroid.spawn());\n            this.gameLoop.run(this.loop);\n        };\n        this.pause = () => {\n            this.gameLoop.stop();\n            this.menu.showPause();\n        };\n        this.resume = () => {\n            this.gameLoop.run(this.loop);\n        };\n        this.gameOver = () => {\n        };\n        this.waveStart = () => {\n        };\n        this.initPlayer = () => {\n            this.player = new _entities_Player__WEBPACK_IMPORTED_MODULE_1__.Player(this.canvas.getCenter(), _utils_Vector__WEBPACK_IMPORTED_MODULE_6__.Vector.zero);\n            this.entities.push(this.player);\n            this.initCommands();\n        };\n        this.initCommands = () => {\n            _input_Commands__WEBPACK_IMPORTED_MODULE_11__.Commands.playerFire = {\n                execute: () => {\n                    this.player.fireWeapon();\n                },\n                key: _utils_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.SPACE,\n                keyAction: _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_4__.KeyAction.DOWN\n            };\n            _input_Commands__WEBPACK_IMPORTED_MODULE_11__.Commands.pause = {\n                execute: () => {\n                    this.pause();\n                },\n                key: _utils_Keys__WEBPACK_IMPORTED_MODULE_7__.keys.ESCAPE,\n                keyAction: _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_4__.KeyAction.DOWN\n            };\n            _input_Commands__WEBPACK_IMPORTED_MODULE_11__.Commands.movePlayer = {\n                execute: () => {\n                    this.player.engineStart();\n                },\n                button: 0,\n                keyAction: _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_4__.KeyAction.DOWN\n            };\n        };\n        this.loop = (timestamp) => {\n            this.input();\n            this.update();\n            this.draw();\n        };\n        this.input = () => {\n            const commands = this.inputHandler.getCommands();\n            commands.forEach((value) => {\n                value.execute();\n            });\n        };\n        this.update = () => {\n            this.entities.forEach((entity) => {\n                entity.update();\n            });\n        };\n        this.draw = () => {\n            this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n            for (let i = 0; i < this.entities.length; i++) {\n                this.entities[i].draw();\n            }\n        };\n        this.detectBulletAsteroidCollisions = () => {\n        };\n    }\n}\n_a = Game;\nGame.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new Game();\n    }\n    return _a.instance;\n};\n\nGame.getInstance().init();\n\n\n//# sourceURL=webpack://asteroidsts/./src/Game.ts?");

/***/ }),

/***/ "./src/assetLoading/AssetLoader.ts":
/*!*****************************************!*\
  !*** ./src/assetLoading/AssetLoader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AssetLoader\": () => (/* binding */ AssetLoader)\n/* harmony export */ });\n/* harmony import */ var _Images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images */ \"./src/assetLoading/Images.ts\");\n/* harmony import */ var _Sounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sounds */ \"./src/assetLoading/Sounds.ts\");\nvar _a;\n\n\nclass AssetLoader {\n    constructor() {\n        this.loadAssets = (onLoadingFinished) => {\n            const images = {\n                \"asteroid-gray-1dmg.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY_1DMG,\n                \"asteroid-gray-2dmg.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY_2DMG,\n                \"asteroid-gray-3dmg.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY_3DMG,\n                \"asteroid-gray.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY,\n                \"asteroid.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID,\n                \"ball01.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.BALL01,\n                \"ball02.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.BALL02,\n                \"ball03.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.BALL03,\n                \"bg.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.BG,\n                \"enemy-explosion.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ENEMY_EXPLOSION,\n                \"enemy.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.ENEMY,\n                \"powerup.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.POWERUP,\n                \"ship-double-moving.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.SHIP_DOUBLE_MOVING,\n                \"ship-double.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.SHIP_DOUBLE,\n                \"ship-single-moving.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.SHIP_SINGLE_MOVING,\n                \"ship-single.png\": _Images__WEBPACK_IMPORTED_MODULE_0__.Images.SHIP_SINGLE,\n            };\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ASTEROID_DMG = new Audio(AssetLoader.rootSoundDir + \"asteroid-takes-damage.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ASTEROID_DMG.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.DEATH = new Audio(AssetLoader.rootSoundDir + \"death.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.DEATH.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ENEMY_DEATH = new Audio(AssetLoader.rootSoundDir + \"enemy-death.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ENEMY_DEATH.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ENEMY_SHOOT = new Audio(AssetLoader.rootSoundDir + \"enemy-shoot.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.ENEMY_SHOOT.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.EXPLOSION = new Audio(AssetLoader.rootSoundDir + \"explosion.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.EXPLOSION.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.LASER = new Audio(AssetLoader.rootSoundDir + \"laser.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.LASER.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.LASER2 = new Audio(AssetLoader.rootSoundDir + \"laser2.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.LASER2.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.MENU_SELECT = new Audio(AssetLoader.rootSoundDir + \"menu-select.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.MENU_SELECT.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.POWERUP = new Audio(AssetLoader.rootSoundDir + \"powerup.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.POWERUP.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.SCORE_CLEARED = new Audio(AssetLoader.rootSoundDir + \"score-cleared.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.SCORE_CLEARED.volume = 0.2;\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.SHIELD_UP = new Audio(AssetLoader.rootSoundDir + \"shield-up.wav\");\n            _Sounds__WEBPACK_IMPORTED_MODULE_1__.Sounds.SHIELD_UP.volume = 0.2;\n            let assetCount = Object.keys(images).length;\n            // Assigning to .src loads the asset\n            const loadAsset = (fileName, asset) => {\n                asset.onload = () => { onLoadFinished(fileName); };\n                asset.src = fileName;\n            };\n            // Decrement the count after loading an image, then perform callback when done\n            const onLoadFinished = (fileName) => {\n                console.log(`loaded [${fileName}]`);\n                if (--assetCount === 0) {\n                    console.log('done loading');\n                    onLoadingFinished();\n                }\n            };\n            // Iterate the hash table keys\n            Object.keys(images).forEach((key) => {\n                loadAsset(AssetLoader.rootImageDir + key, images[key]);\n            });\n        };\n        const href = document.location.href;\n        const joiner = href[href.length - 1] == '/' ? '' : '/';\n        AssetLoader.rootImageDir = href + joiner + \"images/\";\n        AssetLoader.rootSoundDir = href + joiner + \"sounds/\";\n    }\n}\n_a = AssetLoader;\nAssetLoader.rootImageDir = \"\";\nAssetLoader.rootSoundDir = \"\";\nAssetLoader.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new AssetLoader();\n    }\n    return _a.instance;\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/assetLoading/AssetLoader.ts?");

/***/ }),

/***/ "./src/assetLoading/Images.ts":
/*!************************************!*\
  !*** ./src/assetLoading/Images.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Images\": () => (/* binding */ Images)\n/* harmony export */ });\nclass Images {\n}\nImages.ASTEROID_GRAY_1DMG = new Image();\nImages.ASTEROID_GRAY_2DMG = new Image();\nImages.ASTEROID_GRAY_3DMG = new Image();\nImages.ASTEROID_GRAY = new Image();\nImages.ASTEROID = new Image();\nImages.BALL01 = new Image();\nImages.BALL02 = new Image();\nImages.BALL03 = new Image();\nImages.BG = new Image();\nImages.ENEMY_EXPLOSION = new Image();\nImages.ENEMY = new Image();\nImages.POWERUP = new Image();\nImages.SHIP_DOUBLE_MOVING = new Image();\nImages.SHIP_DOUBLE = new Image();\nImages.SHIP_SINGLE_MOVING = new Image();\nImages.SHIP_SINGLE = new Image();\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/assetLoading/Images.ts?");

/***/ }),

/***/ "./src/assetLoading/Sounds.ts":
/*!************************************!*\
  !*** ./src/assetLoading/Sounds.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sounds\": () => (/* binding */ Sounds)\n/* harmony export */ });\nclass Sounds {\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/assetLoading/Sounds.ts?");

/***/ }),

/***/ "./src/entities/Asteroid.ts":
/*!**********************************!*\
  !*** ./src/entities/Asteroid.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Asteroid\": () => (/* binding */ Asteroid)\n/* harmony export */ });\n/* harmony import */ var _assetLoading_Images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assetLoading/Images */ \"./src/assetLoading/Images.ts\");\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Canvas */ \"./src/Canvas.ts\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ \"./src/utils/Utils.ts\");\n/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\");\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameObject */ \"./src/entities/GameObject.ts\");\nvar _a;\n\n\n\n\n\nvar AsteroidSize;\n(function (AsteroidSize) {\n    AsteroidSize[AsteroidSize[\"LARGE\"] = 4] = \"LARGE\";\n    AsteroidSize[AsteroidSize[\"MED\"] = 3] = \"MED\";\n    AsteroidSize[AsteroidSize[\"SMALL\"] = 2] = \"SMALL\";\n    AsteroidSize[AsteroidSize[\"TINY\"] = 1] = \"TINY\";\n})(AsteroidSize || (AsteroidSize = {}));\nclass Asteroid extends _GameObject__WEBPACK_IMPORTED_MODULE_4__.GameObject {\n    constructor(position, velocity, spin, size) {\n        super(position, velocity);\n        this.draw = () => {\n            const canvas = _Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.getInstance();\n            canvas.drawImage(this.img, this.position, this.rotation, this.size * .75);\n        };\n        this.update = () => {\n            this.rotate();\n            const canvas = _Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.getInstance();\n            this.position = canvas.updatePosition(this.position, this.velocity);\n        };\n        this.rotate = () => {\n            this.rotation += this.spin;\n            if (this.rotation > Math.PI * 2) {\n                this.rotation = this.rotation % Math.PI * 2;\n            }\n            else if (this.rotation < 0) {\n                this.rotation += Math.PI * 2;\n            }\n        };\n        this.spin = spin;\n        this.size = size;\n        this.rotation = 0;\n        this.height = size * _assetLoading_Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY.height;\n        this.width = size * _assetLoading_Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY.width;\n        this.hitpoints = size;\n        this.grayImages = [\n            _assetLoading_Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY_3DMG,\n            _assetLoading_Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY_2DMG,\n            _assetLoading_Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY_1DMG,\n            _assetLoading_Images__WEBPACK_IMPORTED_MODULE_0__.Images.ASTEROID_GRAY\n        ];\n        this.img = this.grayImages[this.hitpoints - 1];\n    }\n}\n_a = Asteroid;\nAsteroid.spawn = () => {\n    const position = _a.getRandomSpawnPoint();\n    const vel = _a.getRandomVelocity();\n    const spin = Math.random() * (4 * Math.PI / 180);\n    return new Asteroid(position, vel, spin, AsteroidSize.LARGE);\n};\nAsteroid.split = (asteroid, initVelocity) => {\n    const asteroids = [];\n    if (asteroid.size > 1) {\n        const getRandomVelocity = (iterator) => {\n            let randAngle = Math.random() * Math.PI;\n            randAngle = iterator === 0 ? 180 - randAngle : 180 + randAngle;\n            return randAngle;\n        };\n        // Reduces v2 by coefficient and adds to v1\n        const updateVelocity = (v1, v2, reductionCoefficient) => {\n            const x = Math.sin(v1.x) + v2.x * reductionCoefficient;\n            const y = Math.cos(v1.y) + v2.y * reductionCoefficient;\n            return new _utils_Vector__WEBPACK_IMPORTED_MODULE_3__.Vector(x, y);\n        };\n        for (let i = 0; i < 2; i += 1) {\n            const randomVelocity = new _utils_Vector__WEBPACK_IMPORTED_MODULE_3__.Vector(getRandomVelocity(i), getRandomVelocity(i));\n            const newTrajectory = updateVelocity(randomVelocity, initVelocity, 0.25);\n            (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_2__.limitVector)(newTrajectory, -20, 20);\n            const shift = i === 0 ? 8 : -8;\n            const position = new _utils_Vector__WEBPACK_IMPORTED_MODULE_3__.Vector(asteroid.position.x + shift, asteroid.position.y + shift);\n            asteroids.push(new Asteroid(position, newTrajectory, 2, asteroid.size - 1));\n        }\n    }\n    return asteroids;\n};\nAsteroid.getRandomSpawnPoint = () => {\n    const canvas = _Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.getInstance();\n    const x = Math.random() * canvas.width;\n    const y = Math.random() * canvas.height;\n    return new _utils_Vector__WEBPACK_IMPORTED_MODULE_3__.Vector(x, y);\n};\nAsteroid.getRandomVelocity = () => {\n    const negFivetoFive = () => {\n        return Math.ceil(Math.random() * 5 * (Math.random() < 0.5 ? -1 : 1));\n    };\n    const x = negFivetoFive();\n    const y = negFivetoFive();\n    return new _utils_Vector__WEBPACK_IMPORTED_MODULE_3__.Vector(x, y);\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/entities/Asteroid.ts?");

/***/ }),

/***/ "./src/entities/Bullet.ts":
/*!********************************!*\
  !*** ./src/entities/Bullet.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bullet\": () => (/* binding */ Bullet)\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Canvas */ \"./src/Canvas.ts\");\n/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\");\n\n\nclass Bullet {\n    constructor(origin, playerVelocity, playerRotation) {\n        this.duration = 700;\n        this.radius = 5;\n        this.speed = 7;\n        this.timeTravelled = 0;\n        this.startTime = Date.now();\n        this.calcInitVelocity = (v, rotation) => {\n            const vx = v.x + Math.cos(rotation) * this.speed;\n            const vy = v.y + Math.sin(rotation) * this.speed;\n            return new _utils_Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(vx, vy);\n        };\n        this.draw = () => {\n            const context = _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance().context;\n            context.fillStyle = \"#FFA600\";\n            context.beginPath();\n            context.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2);\n            context.fill();\n            context.closePath();\n        };\n        this.update = () => {\n            this.origin.add(this.velocity);\n            const canvas = _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance();\n            this.origin = canvas.updatePosition(this.origin, this.velocity);\n            this.timeTravelled = Date.now() - this.startTime;\n        };\n        this.canTravel = () => {\n            return this.timeTravelled < this.duration;\n        };\n        this.origin = origin;\n        this.velocity = this.calcInitVelocity(playerVelocity, playerRotation);\n    }\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/entities/Bullet.ts?");

/***/ }),

/***/ "./src/entities/GameObject.ts":
/*!************************************!*\
  !*** ./src/entities/GameObject.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameObject\": () => (/* binding */ GameObject)\n/* harmony export */ });\nclass GameObject {\n    constructor(position, velocity) {\n        this.position = position;\n        this.velocity = velocity;\n    }\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/entities/GameObject.ts?");

/***/ }),

/***/ "./src/entities/Player.ts":
/*!********************************!*\
  !*** ./src/entities/Player.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Canvas */ \"./src/Canvas.ts\");\n/* harmony import */ var _input_Mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/Mouse */ \"./src/input/Mouse.ts\");\n/* harmony import */ var _assetLoading_Images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assetLoading/Images */ \"./src/assetLoading/Images.ts\");\n/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\");\n/* harmony import */ var _assetLoading_Sounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assetLoading/Sounds */ \"./src/assetLoading/Sounds.ts\");\n/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Weapon */ \"./src/entities/Weapon.ts\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Utils */ \"./src/utils/Utils.ts\");\n/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GameObject */ \"./src/entities/GameObject.ts\");\n\n\n\n\n\n\n\n\nclass Player extends _GameObject__WEBPACK_IMPORTED_MODULE_7__.GameObject {\n    constructor(position, velocity) {\n        super(position, velocity);\n        this.rotation = 0;\n        this.accelerationCoefficient = 0.1;\n        this.maxSpeed = 12;\n        this.movingImage = _assetLoading_Images__WEBPACK_IMPORTED_MODULE_2__.Images.SHIP_SINGLE_MOVING;\n        this.idleImage = _assetLoading_Images__WEBPACK_IMPORTED_MODULE_2__.Images.SHIP_SINGLE;\n        this.image = _assetLoading_Images__WEBPACK_IMPORTED_MODULE_2__.Images.SHIP_SINGLE;\n        this.speed = 3;\n        this.weaponSound = _assetLoading_Sounds__WEBPACK_IMPORTED_MODULE_4__.Sounds.LASER2;\n        this.weapon = new _Weapon__WEBPACK_IMPORTED_MODULE_5__.Weapon();\n        this.draw = () => {\n            const canvas = _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance();\n            canvas.drawImage(this.image, this.position, this.rotation);\n            this.weapon.bulletsFired.forEach((bullet) => {\n                bullet.draw();\n            });\n            this.image = this.idleImage;\n        };\n        this.update = () => {\n            const canvas = _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.getInstance();\n            const mouse = _input_Mouse__WEBPACK_IMPORTED_MODULE_1__.Mouse.getInstance();\n            this.position = canvas.updatePosition(this.position, this.velocity);\n            var opposite = mouse.position.y - this.position.y;\n            var adjacent = mouse.position.x - this.position.x;\n            this.rotation = Math.atan2(opposite, adjacent);\n            for (let i = this.weapon.bulletsFired.length - 1; i >= 0; i -= 1) {\n                if (this.weapon.bulletsFired[i].canTravel()) {\n                    this.weapon.bulletsFired[i].update();\n                }\n                else {\n                    this.weapon.bulletsFired.splice(i, 1);\n                }\n            }\n        };\n        this.engineStart = () => {\n            const mouse = _input_Mouse__WEBPACK_IMPORTED_MODULE_1__.Mouse.getInstance();\n            this.image = this.movingImage;\n            const dx = mouse.position.x - this.position.x;\n            const dy = mouse.position.y - this.position.y;\n            let angle = Math.atan2(dy, dx);\n            if (angle < 0) {\n                angle += Math.PI * 2;\n            }\n            const newVelocity = new _utils_Vector__WEBPACK_IMPORTED_MODULE_3__.Vector(Math.cos(angle) * this.speed * this.accelerationCoefficient, Math.sin(angle) * this.speed * this.accelerationCoefficient);\n            this.velocity.add(newVelocity);\n            (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_6__.limitVector)(this.velocity, this.maxSpeed * -1, this.maxSpeed);\n        };\n        this.fireWeapon = () => {\n            this.weaponSound.play();\n            this.weapon.fire(this.position.clone(), this.velocity.clone(), this.rotation);\n        };\n        this.getVelocityUpdate = (velocity, change) => {\n            let newVel = velocity + change;\n            newVel = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_6__.limitNumber)(newVel, this.maxSpeed * -1, this.maxSpeed);\n            return newVel;\n        };\n    }\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/entities/Player.ts?");

/***/ }),

/***/ "./src/entities/Weapon.ts":
/*!********************************!*\
  !*** ./src/entities/Weapon.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Weapon\": () => (/* binding */ Weapon)\n/* harmony export */ });\n/* harmony import */ var _assetLoading_Sounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assetLoading/Sounds */ \"./src/assetLoading/Sounds.ts\");\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bullet */ \"./src/entities/Bullet.ts\");\n\n\nclass Weapon {\n    constructor() {\n        this.bulletsFired = [];\n        this.sound = _assetLoading_Sounds__WEBPACK_IMPORTED_MODULE_0__.Sounds.LASER2;\n        this.lastFired = Date.now();\n        this.fireRate = 150;\n        this.canFire = () => {\n            return Date.now() - this.lastFired > this.fireRate;\n        };\n        this.playFireSound = (numTimes) => {\n            for (let i = 0; i < numTimes; i += 1) {\n                this.sound.currentTime = 0;\n                this.sound.play();\n            }\n        };\n        this.fire = (origin, velocity, rotation) => {\n            if (this.canFire()) {\n                this.playFireSound(1);\n                this.bulletsFired.push(new _Bullet__WEBPACK_IMPORTED_MODULE_1__.Bullet(origin, velocity, rotation));\n                this.lastFired = Date.now();\n            }\n        };\n    }\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/entities/Weapon.ts?");

/***/ }),

/***/ "./src/input/Commands.ts":
/*!*******************************!*\
  !*** ./src/input/Commands.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Commands\": () => (/* binding */ Commands)\n/* harmony export */ });\n/* harmony import */ var _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/ICommand */ \"./src/interfaces/ICommand.ts\");\nvar _a;\n\nclass Commands {\n}\n_a = Commands;\nCommands.defaultCommand = { execute: () => { }, keyAction: _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_0__.KeyAction.DOWN };\nCommands.movePlayer = { execute: () => { }, key: \"\", keyAction: _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_0__.KeyAction.DOWN };\nCommands.playerFire = { execute: () => { }, key: \"\", keyAction: _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_0__.KeyAction.DOWN };\nCommands.pause = { execute: () => { }, key: \"\", keyAction: _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_0__.KeyAction.DOWN };\nCommands.reset = () => {\n    _a.movePlayer = _a.playerFire = _a.pause = _a.defaultCommand;\n};\nCommands.getAll = () => {\n    return [_a.movePlayer, _a.playerFire, _a.pause];\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/input/Commands.ts?");

/***/ }),

/***/ "./src/input/InputHandler.ts":
/*!***********************************!*\
  !*** ./src/input/InputHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputHandler\": () => (/* binding */ InputHandler)\n/* harmony export */ });\n/* harmony import */ var _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/ICommand */ \"./src/interfaces/ICommand.ts\");\n/* harmony import */ var _Commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Commands */ \"./src/input/Commands.ts\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Keyboard */ \"./src/input/Keyboard.ts\");\n/* harmony import */ var _Mouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mouse */ \"./src/input/Mouse.ts\");\nvar _a;\n\n\n\n\nclass InputHandler {\n    constructor() {\n        this.mouse = _Mouse__WEBPACK_IMPORTED_MODULE_3__.Mouse.getInstance();\n        this.keyboard = _Keyboard__WEBPACK_IMPORTED_MODULE_2__.Keyboard.getInstance();\n        this.getCommands = () => {\n            const commands = _Commands__WEBPACK_IMPORTED_MODULE_1__.Commands.getAll();\n            let commandsToExecute = commands.filter((command) => {\n                if (command.keyAction === _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_0__.KeyAction.UP) {\n                    return (command.key !== undefined && !this.keyboard.isKeyDown(command.key)) ||\n                        (command.button !== undefined && !this.mouse.isButtonDown(command.button));\n                }\n                else if (command.keyAction === _interfaces_ICommand__WEBPACK_IMPORTED_MODULE_0__.KeyAction.DOWN) {\n                    return (command.key !== undefined && this.keyboard.isKeyDown(command.key)) ||\n                        (command.button !== undefined && this.mouse.isButtonDown(command.button));\n                }\n            });\n            return commandsToExecute;\n        };\n    }\n}\n_a = InputHandler;\nInputHandler.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new InputHandler();\n    }\n    return _a.instance;\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/input/InputHandler.ts?");

/***/ }),

/***/ "./src/input/Keyboard.ts":
/*!*******************************!*\
  !*** ./src/input/Keyboard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => (/* binding */ Keyboard)\n/* harmony export */ });\nvar _a;\nclass Keyboard {\n    constructor() {\n        this.downKeys = {};\n        this.onKeyDown = (event) => {\n            this.downKeys[event.code] = true;\n        };\n        this.onKeyUp = (event) => {\n            delete this.downKeys[event.code];\n        };\n        this.isKeyDown = (key) => {\n            return key !== undefined && this.downKeys[key];\n        };\n        document.onkeydown = this.onKeyDown;\n        document.onkeyup = this.onKeyUp;\n    }\n}\n_a = Keyboard;\nKeyboard.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new Keyboard();\n    }\n    return _a.instance;\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/input/Keyboard.ts?");

/***/ }),

/***/ "./src/input/Mouse.ts":
/*!****************************!*\
  !*** ./src/input/Mouse.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mouse\": () => (/* binding */ Mouse)\n/* harmony export */ });\n/* harmony import */ var _utils_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Vector */ \"./src/utils/Vector.ts\");\nvar _a;\n\nclass Mouse {\n    constructor() {\n        this.downButtons = {};\n        this.isButtonDown = (button) => {\n            return this.downButtons[button];\n        };\n        this.handleMove = (event) => {\n            this.position = new _utils_Vector__WEBPACK_IMPORTED_MODULE_0__.Vector(event.pageX, event.pageY);\n        };\n        this.handleDown = (event) => {\n            this.downButtons[event.button] = true;\n        };\n        this.handleUp = (event) => {\n            delete this.downButtons[event.button];\n        };\n        this.position = new _utils_Vector__WEBPACK_IMPORTED_MODULE_0__.Vector();\n        document.onmousemove = this.handleMove;\n        document.onmousedown = this.handleDown;\n        document.onmouseup = this.handleUp;\n    }\n}\n_a = Mouse;\nMouse.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new Mouse();\n    }\n    return _a.instance;\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/input/Mouse.ts?");

/***/ }),

/***/ "./src/interfaces/ICommand.ts":
/*!************************************!*\
  !*** ./src/interfaces/ICommand.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyAction\": () => (/* binding */ KeyAction)\n/* harmony export */ });\nvar KeyAction;\n(function (KeyAction) {\n    KeyAction[KeyAction[\"UP\"] = 0] = \"UP\";\n    KeyAction[KeyAction[\"DOWN\"] = 1] = \"DOWN\";\n})(KeyAction || (KeyAction = {}));\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/interfaces/ICommand.ts?");

/***/ }),

/***/ "./src/ui/Menu.ts":
/*!************************!*\
  !*** ./src/ui/Menu.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _assetLoading_Sounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assetLoading/Sounds */ \"./src/assetLoading/Sounds.ts\");\nvar _a;\n\nclass Menu {\n    constructor(game) {\n        this.registerEvents = () => {\n            $(\".menu-button\").on('mouseover', () => {\n                _assetLoading_Sounds__WEBPACK_IMPORTED_MODULE_0__.Sounds.MENU_SELECT.currentTime = 0;\n                _assetLoading_Sounds__WEBPACK_IMPORTED_MODULE_0__.Sounds.MENU_SELECT.play();\n            });\n            $(\"#new-game\").on('click', () => {\n                $('#main-menu').hide();\n                this.game.start();\n            });\n            $(\"#resume-game\").on('click', () => {\n                $('#pause-menu').hide();\n                this.game.resume();\n            });\n            $(\"#exit-game\").on('click', () => {\n                $('#pause-menu').hide();\n                this.game.gameOver();\n            });\n            $(\"#reset-scores\").on('click', () => {\n                $(\"#scores-cleared\").text(\"Cleared!\");\n                $(\"#scores-cleared\").show().fadeOut(500);\n                // ASTEROIDS.scoreManager.clearHighScore();\n                _assetLoading_Sounds__WEBPACK_IMPORTED_MODULE_0__.Sounds.SCORE_CLEARED.currentTime = 0;\n                _assetLoading_Sounds__WEBPACK_IMPORTED_MODULE_0__.Sounds.SCORE_CLEARED.play();\n            });\n        };\n        this.showStart = () => {\n            $(\"#main-menu\").show();\n        };\n        this.showPause = () => {\n            $(\"#pause-menu\").show();\n        };\n        this.flashHighScore = () => {\n            $(\"#game-over-score\").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);\n        };\n        this.showGameOver = (finalScore, enemiesKilled, isHighScore, isWin) => {\n            let scoreMessage = \"\";\n            let gameEndMessage = \"\";\n            if (isHighScore) {\n                scoreMessage = \"New high score!: \" + finalScore;\n                this.flashHighScore();\n            }\n            else {\n                scoreMessage = \"Final score: \" + finalScore;\n            }\n            gameEndMessage = isWin ? \"YOU WIN!\" : \"GAME OVER\";\n            $(\"#game-end-message\").text(gameEndMessage);\n            $(\"#game-over-score\").text(scoreMessage);\n            $(\"#game-over-enemies-killed\").text(\"Enemies killed: \" + enemiesKilled);\n            $(\"#game-over\").show();\n            setTimeout(() => { $(\"#game-over\").fadeOut(this.showStart); }, 4000);\n        };\n        this.showWaveTransition = (wave, deathBonus, seconds) => {\n            let waveTransition = $(\"#wave-transition\");\n            waveTransition.empty();\n            waveTransition.fadeIn(1000);\n            waveTransition.append(\"<p class=\\\"game-over-text\\\">WAVE \" + wave + \"</p>\");\n            if (deathBonus && deathBonus > -1) {\n                waveTransition.append(\"<p class=\\\"game-over-text\\\">No death bonus: \" + deathBonus + \"</p>\").fadeIn(300);\n            }\n            if (seconds > 0) {\n                waveTransition.append(\"<p class=\\\"game-over-text\\\">Fast clear bonus: 100 * \" + seconds + \" seconds remaining = \" + (100 * seconds).toString() + \"</p>\").fadeIn(300);\n            }\n            setTimeout(() => { $(\"#wave-transition\").fadeOut(this.game.waveStart); }, 5000);\n        };\n        this.game = game;\n        this.registerEvents();\n    }\n}\n_a = Menu;\nMenu.getInstance = (game) => {\n    if (!_a.instance) {\n        _a.instance = new Menu(game);\n    }\n    return _a.instance;\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/ui/Menu.ts?");

/***/ }),

/***/ "./src/utils/GameLoop.ts":
/*!*******************************!*\
  !*** ./src/utils/GameLoop.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameLoop\": () => (/* binding */ GameLoop)\n/* harmony export */ });\nvar _a;\nclass GameLoop {\n    constructor() {\n        this.run = (state) => {\n            this.state = state;\n            if (this.lastTime === 0) {\n                window.requestAnimationFrame(this.execute);\n                this.lastTime = 0;\n            }\n        };\n        this.execute = () => {\n            if (this.state === null) {\n                this.lastTime = 0;\n            }\n            else {\n                window.requestAnimationFrame(this.execute);\n                const timeNow = Date.now();\n                let elapsed = timeNow - this.lastTime;\n                if (elapsed > 0) {\n                    if (this.lastTime !== 0) {\n                        if (elapsed > 1000) {\n                            // Cap max elapsed time to 1 second to avoid death spiral\n                            elapsed = 1000;\n                        }\n                        // Hackish fps smoothing\n                        const smoothElapsed = (elapsed + this.prevElapsed + this.prevElapsed2) / 3;\n                        this.state(0.001 * smoothElapsed);\n                        this.prevElapsed2 = this.prevElapsed;\n                        this.prevElapsed = elapsed;\n                    }\n                    this.lastTime = timeNow;\n                }\n            }\n        };\n        this.stop = () => {\n            this.run(null);\n        };\n        this.lastTime = 0;\n        this.state = null;\n        this.prevElapsed = 0;\n        this.prevElapsed2 = 2;\n    }\n}\n_a = GameLoop;\nGameLoop.getInstance = () => {\n    if (!_a.instance) {\n        _a.instance = new GameLoop();\n    }\n    return _a.instance;\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/utils/GameLoop.ts?");

/***/ }),

/***/ "./src/utils/Keys.ts":
/*!***************************!*\
  !*** ./src/utils/Keys.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keys\": () => (/* binding */ keys)\n/* harmony export */ });\nconst keys = {\n    TAB: \"Tab\",\n    ENTER: \"Enter\",\n    PAUSE: \"Pause\",\n    ESCAPE: \"Escape\",\n    SPACE: \"Space\",\n    PAGE_UP: \"PageUp\",\n    PAGE_DOWN: \"PageDown\",\n    END: \"End\",\n    HOME: \"Home\",\n    LEFT_ARROW: \"ArrowLeft\",\n    UP_ARROW: \"ArrowUp\",\n    RIGHT_ARROW: \"ArrowRight\",\n    DOWN_ARROW: \"ArrowDown\",\n    INSERT: \"Insert\",\n    DELETE: \"Delete\",\n    ZERO: \"Digit0\",\n    ONE: \"Digit1\",\n    TWO: \"Digit2\",\n    THREE: \"Digit3\",\n    FOUR: \"Digit4\",\n    FIVE: \"Digit5\",\n    SIX: \"Digit6\",\n    SEVEN: \"Digit7\",\n    EIGHT: \"Digit8\",\n    NINE: \"Digit9\",\n    A: \"KeyA\",\n    B: \"KeyB\",\n    C: \"KeyC\",\n    D: \"KeyD\",\n    E: \"KeyE\",\n    F: \"KeyF\",\n    G: \"KeyG\",\n    H: \"KeyH\",\n    I: \"KeyI\",\n    J: \"KeyJ\",\n    K: \"KeyK\",\n    L: \"KeyL\",\n    M: \"KeyM\",\n    N: \"KeyN\",\n    O: \"KeyO\",\n    P: \"KeyP\",\n    Q: \"KeyQ\",\n    R: \"KeyR\",\n    S: \"KeyS\",\n    T: \"KeyT\",\n    U: \"KeyU\",\n    V: \"KeyV\",\n    W: \"KeyW\",\n    X: \"KeyX\",\n    Y: \"KeyY\",\n    Z: \"KeyZ\",\n};\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/utils/Keys.ts?");

/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertDegreesToRads\": () => (/* binding */ convertDegreesToRads),\n/* harmony export */   \"limitNumber\": () => (/* binding */ limitNumber),\n/* harmony export */   \"limitVector\": () => (/* binding */ limitVector)\n/* harmony export */ });\nfunction convertDegreesToRads(degrees) {\n    return (Math.PI / 180) * degrees;\n}\n// Returns the min or max values if the providied num is out of bounds\nfunction limitNumber(num, min, max) {\n    return Math.min(Math.max(num, min), max);\n}\n// Returns the min or max value for both x and y values if either\n// are out of bounds.\nfunction limitVector(vector, min, max) {\n    vector.x = limitNumber(vector.x, min, max);\n    vector.y = limitNumber(vector.y, min, max);\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/utils/Utils.ts?");

/***/ }),

/***/ "./src/utils/Vector.ts":
/*!*****************************!*\
  !*** ./src/utils/Vector.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\n    constructor(x, y) {\n        this.length = () => {\n            return Math.sqrt(this.x * this.x + this.y * this.y);\n        };\n        this.add = (vector) => {\n            this.x += vector.x;\n            this.y += vector.y;\n        };\n        this.subtract = (vector) => {\n            this.x -= vector.x;\n            this.y -= vector.y;\n        };\n        this.toString = () => {\n            return \"[\" + this.x + \", \" + this.y + \"]\";\n        };\n        this.clone = () => {\n            return new Vector(this.x, this.y);\n        };\n        this.equals = (vector) => {\n            return vector.x == this.x && vector.y == this.y;\n        };\n        this.x = x || 0;\n        this.y = y || 0;\n    }\n    static get zero() {\n        return new Vector();\n    }\n}\n\n\n\n//# sourceURL=webpack://asteroidsts/./src/utils/Vector.ts?");

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