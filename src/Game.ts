import { IEntity } from "./Interfaces/IEntity";

class Game {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    entities: IEntity[];

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        
    }
    
    update = () => {
        this.entities.forEach((entity: IEntity) => {
            entity.update();
        })
    }

    input = () => {

    }

    draw = () => {
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.context);
        }
    }

    loop = (timestamp: number) => {
        this.input();
        this.update();
        this.draw();
    }

    start = () => {
        requestAnimationFrame(this.loop);
    }
}

export { Game }