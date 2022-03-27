import { Canvas } from "./Canvas";
import { Player } from "./entities/Player";
import { InputHandler } from "./input/InputHandler";
import { Mouse } from "./input/Mouse";
import { ICommand } from "./interfaces/ICommand";
import { IEntity } from "./interfaces/IEntity";
import { AssetLoader } from "./assetLoading/AssetLoader";
import { Vector } from "./utils/Vector";
import { keys } from "./utils/Keys";
import { Menu } from "./ui/Menu";

class Game {
    private static instance: Game;
    canvas: Canvas = Canvas.getInstance();
    mouse: Mouse = Mouse.getInstance();
    inputHandler: InputHandler = InputHandler.getInstance();
    entities: IEntity[] = [];

    private constructor() {}
    
    public static getInstance = () => {
        if (!this.instance) {
            this.instance = new Game();
        }

        return this.instance;
    }

    public start = () => {
        const player = new Player(new Vector(500, 500), new Vector());
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
        requestAnimationFrame(this.loop);
    }

    public pause = () => {

    }

    public resume = () => {

    }

    public gameOver = () => {

    }

    public waveStart = () => {
        
    }

    public init = () => {
        // Prevent right-click browser menu
        document.addEventListener('contextmenu', event => event.preventDefault());
        AssetLoader.getInstance().loadAssets(() => {
            Menu.getInstance(this).showStart();
        });
    }

    private loop = (timestamp: number) => {
        this.input();
        this.update();
        this.draw();
        requestAnimationFrame(this.loop);
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
        this.entities.forEach((entity: IEntity) => {
            entity.update();
        })
    }

    private draw = () => {
        this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.canvas.context);
        }
    }
}

export { Game }
Game.getInstance().init();