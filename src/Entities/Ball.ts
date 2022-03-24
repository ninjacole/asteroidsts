import { Mouse } from "../Input/Mouse";
import { IEntity } from "../Interfaces/IEntity";
import { Vector } from "../Utilities/Vector";

class Ball implements IEntity {
    public position: Vector;
    public velocity: Vector;
    public radius: number;
    private mouse: Mouse = Mouse.getInstance();

    constructor(position: Vector, velocity: Vector) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 10;
    }

    draw = (context: CanvasRenderingContext2D) => {
        context.save();
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.strokeStyle = 'green';
        context.lineWidth = 5;
        context.stroke();
        context.restore();
    }

    input = () => {
        this.position = this.mouse.position;
    }

    update = () => {

    }
}

export { Ball }