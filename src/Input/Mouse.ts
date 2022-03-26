import { IHashTable } from "../interfaces/IHashTable";
import { Vector } from "../utils/Vector";

class Mouse {
    private static instance: Mouse;

    public position: Vector;
    private downButtons: IHashTable<boolean> = {};

    private constructor() {
        this.position = new Vector();
        document.onmousemove = this.handleMove;
        document.onmousedown = this.handleDown;
        document.onmouseup = this.handleUp;
    }

    public static getInstance = () => {
        if (!this.instance) {
            this.instance = new Mouse();
        }

        return this.instance;
    }

    public isButtonDown = (button: number): boolean => {
        return this.downButtons[button];
    }

    private handleMove = (event: MouseEvent) => {
        this.position = new Vector(event.pageX, event.pageY);
    }

    private handleDown = (event: MouseEvent) => {
        this.downButtons[event.button] = true;
    }

    private handleUp = (event: MouseEvent) => {
        delete this.downButtons[event.button];
    }
}

export { Mouse }