import { Vector } from "../utils/Vector";

abstract class GameObject {
    protected position: Vector;
    protected velocity: Vector;

    constructor(position: Vector, velocity: Vector) {
        this.position = position;
        this.velocity = velocity;
    }

    public abstract update: () => void;
    public abstract draw: () => void;
}

export { GameObject }