import { Vector } from "../Utilities/Vector";

interface IEntity {
    position: Vector;
    velocity: Vector;

    draw: (context: CanvasRenderingContext2D) => void;
    update: () => void;
    input: () => void;
}

export { IEntity }