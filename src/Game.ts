import { Ball } from "./Entities/Ball";
import { IEntity } from "./Interfaces/IEntity";

class Game {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    entities: IEntity[] = [];

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2D') as CanvasRenderingContext2D;

        this.entities[0] = new Ball({x: 100, y: 100}, {x: 10, y: 10});
    }
    
    update = () => {
        this.entities.forEach((entity: IEntity) => {
            entity.update();
        })
    }

    input = () => {

    }

    draw = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.context);
        }
    }

    loop = (timestamp: number) => {
        this.input();
        this.update();
        this.draw();
        requestAnimationFrame(this.loop);
    }

    start = () => {
        requestAnimationFrame(this.loop);
    }
}

const g = new Game(document.getElementById('gameCanvas') as HTMLCanvasElement);

export { Game }