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

    public get width() {
        return this.canvas.width;
    }

    public get height() {
        return this.canvas.height;
    }
}

export { Canvas }