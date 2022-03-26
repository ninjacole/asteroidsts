import { Vector } from "./utils/Vector";

class Canvas {
    private static instance: Canvas;

    canvas: HTMLCanvasElement = document.getElementById('gameCanvas') as HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    private constructor() {
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        window.onresize = this.updateSize;
        this.updateSize();
    }

    private updateSize = () => {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
    }

    public static getInstance(): Canvas {
        if (!this.instance) {
            this.instance = new Canvas();
        }

        return this.instance;
    }

    public drawImage = (image: HTMLImageElement, pos: Vector, rotation: number) => {
        const context: CanvasRenderingContext2D = Canvas.getInstance().context;
        const origin: Vector = new Vector(image.width / 2, image.height / 2);
        const scale = 1;
        context.save();
        context.translate(pos.x, pos.y);
        context.rotate(rotation);
        context.drawImage(image, 0, 0, image.width, image.height, -origin.x, -origin.y, image.width, image.height * scale);
        context.restore();
    }

    public getPositionChange = (pos: Vector, velocity: Vector): Vector => {
        pos.add(velocity);
        const maxHeight: number = this.canvas.height;
        const maxWidth: number = this.canvas.width;

        if (pos.x > maxWidth) {
            pos.x = 0;
        } else if (pos.x < 0) {
            pos.x = maxWidth;
        }

        if (pos.y > maxHeight) {
            pos.y = 0;
        } else if (pos.y < 0) {
            pos.y = maxHeight;
        }

        return pos;
    }

    public get width() {
        return this.canvas.width;
    }

    public get height() {
        return this.canvas.height;
    }
}

export { Canvas }