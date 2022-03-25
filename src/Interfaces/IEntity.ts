import { Vector } from "../Utilities/Vector";

interface IEntity {
    draw: (context: CanvasRenderingContext2D) => void;
    update: () => void;
}

export { IEntity }