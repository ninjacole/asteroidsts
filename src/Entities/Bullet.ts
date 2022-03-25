import { Canvas } from "../Canvas";
import { Vector } from "../Utilities/Vector";

class Bullet {
    private duration: number = 700;
    private radius: number = 5;
    private speed: number = 7;
    private timeTravelled: number = 0;
    private startTime: number = Date.now();
    private origin: Vector;
    private velocity: Vector;

    constructor(origin: Vector, playerVelocity: Vector, playerRotation: number) {
        this.origin = origin;
        this.velocity = this.calcInitVelocity(playerVelocity, playerRotation);
    }

    private calcInitVelocity = (v: Vector, rotation: number): Vector => {
        const vx: number = v.x + Math.cos(rotation) * this.speed;
        const vy: number = v.y + Math.sin(rotation) * this.speed;

        return new Vector(vx, vy);
    }

    public draw = () => {
        const context: CanvasRenderingContext2D = Canvas.getInstance().context;
        context.fillStyle = "#FFA600";
        context.beginPath();
        context.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    }

    public update = () => {
        this.origin.add(this.velocity);

        const canvas: Canvas = Canvas.getInstance();
        this.origin = canvas.getPositionChange(this.origin, this.velocity);
        
        this.timeTravelled = Date.now() - this.startTime;
    };

    public canTravel = (): boolean => {
        return this.timeTravelled < this.duration;
    }
}

export { Bullet }