import { Vector } from "../Utilities/Vector";

class Mouse {
    private static instance: Mouse;

    public position: Vector;
    public leftDown: boolean = false;
    public rightDown: boolean = false;

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

    private handleMove = (event: MouseEvent) => {
        this.position = new Vector(event.pageX, event.pageY);
    }

    private handleDown = (event: MouseEvent) => {
        if (event.button == 1) {
            this.leftDown = true;
        } else if (event.button == 2) {
            this.rightDown = true;
        }
    }

    private handleUp = (event: MouseEvent) => {
        if (event.button == 1) {
            this.leftDown = false;
        } else if (event.button == 2) {
            this.rightDown = false;
        }
    }
}

export { Mouse }