import { Canvas } from "./Canvas";
import { Ball } from "./Entities/Ball";
import { Mouse } from "./Input/Mouse";
import { IEntity } from "./Interfaces/IEntity";
import { Vector } from "./Utilities/Vector";

class Game {
    private static instance: Game;
    canvas: Canvas = Canvas.getInstance();
    mouse: Mouse = Mouse.getInstance();
    entities: IEntity[] = [];

    private constructor() {
        this.entities[0] = new Ball(new Vector(10, 10), new Vector(5, 5));
    }
    
    public static getInstance = () => {
        if (!this.instance) {
            this.instance = new Game();
        }

        return this.instance;
    }

    public start = () => {
        requestAnimationFrame(this.loop);
    }

    private loop = (timestamp: number) => {
        this.input();
        this.update();
        this.draw();
        requestAnimationFrame(this.loop);
    }

    private input = () => {
        this.entities.forEach((entity: IEntity) => {
            entity.input();
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
game.start();