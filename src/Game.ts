import { Canvas } from "./Canvas";
import { Player } from "./entities/Player";
import { InputHandler } from "./input/InputHandler";
import { Mouse } from "./input/Mouse";
import { ICommand } from "./interfaces/ICommand";
import { AssetLoader } from "./assetLoading/AssetLoader";
import { Vector } from "./utils/Vector";
import { keys } from "./utils/Keys";
import { Menu } from "./ui/Menu";
import { GameLoop } from "./utils/GameLoop";
import { Asteroid } from "./entities/Asteroid";
import { GameObject } from "./entities/GameObject";

class Game {
    private static instance: Game;

    canvas: Canvas = Canvas.getInstance();
    mouse: Mouse = Mouse.getInstance();
    inputHandler: InputHandler = InputHandler.getInstance();
    menu: Menu = Menu.getInstance(this);
    gameLoop: GameLoop = GameLoop.getInstance();

    entities: GameObject[] = [];

    private constructor() { }

    public static getInstance = () => {
        if (!this.instance) {
            this.instance = new Game();
        }

        return this.instance;
    }

    public init = () => {
        this.preventRightClick();
        this.loadAssets();
    }

    private preventRightClick = () => {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }

    private loadAssets = () => {
        AssetLoader.getInstance().loadAssets(this.showStartMenu);
    }

    private showStartMenu = () => {
        this.menu.showStart();
    }

    public start = () => {
        this.initPlayer();
        this.initCommands();
        // todo: remove this- testing only
        this.entities.push(Asteroid.spawn());





        this.gameLoop.run(this.loop);
    }

    public pause = () => {
        this.gameLoop.stop();
        this.menu.showPause();
    }

    public resume = () => {
        this.gameLoop.run(this.loop);
    }

    public gameOver = () => {

    }

    public waveStart = () => {

    }

    private initPlayer = () => {
        const player = new Player(this.canvas.getCenter(), Vector.zero);
        this.entities.push(player);

        this.inputHandler.movePlayer = {
            execute: () => {
                player.engineStart()
            },
            undoAction: () => {
                player.engineStop()
            },
            button: 0
        };

        this.inputHandler.playerFire = {
            execute: () => {
                player.fireWeapon();
            },
            key: keys.SPACE
        }
    }

    private initCommands = () => {
        this.inputHandler.pause = {
            execute: () => {
                this.pause();
            },
            key: keys.ESCAPE
        }
    }

    private loop = (timestamp: number) => {
        this.input();
        this.update();
        this.draw();
    }

    private input = () => {
        const commands: ICommand[] = this.inputHandler.getExecuteCommands();
        commands.forEach((value: ICommand) => {
            value.execute();
        })

        const cancelCommands: ICommand[] = this.inputHandler.getCanceledCommands();
        cancelCommands.forEach((value: ICommand) => {
            value.undoAction && value.undoAction();
        })
    }

    private update = () => {
        this.entities.forEach((entity: GameObject) => {
            entity.update();
        });
    }

    private draw = () => {
        this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw();
        }
    }

    private detectBulletAsteroidCollisions = () => {

    }
}

export { Game }
Game.getInstance().init();