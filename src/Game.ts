import { Canvas } from "./Canvas";
import { Player } from "./Entities/Player";
import { InputHandler } from "./Input/InputHandler";
import { Mouse } from "./Input/Mouse";
import { ICommand } from "./Interfaces/ICommand";
import { IEntity } from "./Interfaces/IEntity";
import { AssetLoader } from "./Utilities/AssetLoader";
import { keys } from "./Utilities/Keys";
import { RotationDirection } from "./Utilities/RotationDirection";
import { Vector } from "./Utilities/Vector";

class Game {
    private static instance: Game;
    canvas: Canvas = Canvas.getInstance();
    mouse: Mouse = Mouse.getInstance();
    loader: AssetLoader = AssetLoader.getInstance();
    inputHandler: InputHandler = InputHandler.getInstance();
    entities: IEntity[] = [];

    private constructor() {
    }
    
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
        requestAnimationFrame(this.loop);
    }

    public init = () => {
        this.loader.loadAssets(this.start);
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

const game: Game = Game.getInstance()
game.init();