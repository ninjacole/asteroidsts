import { IEntity } from "../Interfaces/IEntity";
import { Vector } from "../Utilities/Vector";

class Ball implements IEntity {
    position: Vector;
    velocity: Vector;
    radius: number;

    constructor(position: Vector, velocity: Vector) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 10;
    }

    draw = (context: CanvasRenderingContext2D) => {
        context.save();
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
        context.restore();
    }

    input = () => {

    }

    update = () => {

    }
}

export { Ball }