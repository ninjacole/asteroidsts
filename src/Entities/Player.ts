import { Canvas } from "../Canvas";
import { Mouse } from "../Input/Mouse";
import { IEntity } from "../Interfaces/IEntity";
import { AssetLoader } from "../Utilities/AssetLoader";
import { Vector } from "../Utilities/Vector";

class Player implements IEntity {
    private position: Vector;
    private velocity: Vector;
    private rotation: number = 0;
    private accelerationCoefficient: number = 0.1;
    private maxSpeed = 12;
    private movingImage: HTMLImageElement = new Image();
    private idleImage: HTMLImageElement = new Image();
    private image: HTMLImageElement = new Image();
    private mouse: Mouse = Mouse.getInstance();
    private speed: number = 3;

    constructor(position: Vector, velocity: Vector) {
        this.position = position;
        this.velocity = velocity;
        this.idleImage = AssetLoader.images["SHIP_SINGLE"];
        this.movingImage = AssetLoader.images["SHIP_SINGLE_MOVING"]
    }

    draw = (context: CanvasRenderingContext2D) => {
        const origin: Vector = new Vector(this.image.width / 2, this.image.height / 2);
        const scale = 1;
        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.rotation);
        context.drawImage(this.image, 0, 0, this.image.width, this.image.height, -origin.x, -origin.y, this.image.width, this.image.height * scale);
        context.restore();
    }

    update = () => {
        const canvas: Canvas = Canvas.getInstance();
        this.position.x = this.getPositionChange(this.position.x, this.velocity.x, canvas.width);
        this.position.y = this.getPositionChange(this.position.y, this.velocity.y, canvas.height);

        var opposite = this.mouse.position.y - this.position.y;
        var adjacent = this.mouse.position.x - this.position.x;
        this.rotation = Math.atan2(opposite, adjacent);
    }

    engineStart = () => {
        this.image = this.movingImage;
        const dx: number = this.mouse.position.x - this.position.x;
        const dy: number = this.mouse.position.y - this.position.y;
        let angle: number = Math.atan2(dy, dx);

        if (angle < 0) {
            angle += Math.PI * 2;
        }

        const newVx: number = Math.cos(angle) * this.speed * this.accelerationCoefficient;
        const newVy: number = Math.sin(angle) * this.speed * this.accelerationCoefficient;

        this.velocity.x = this.getVelocityUpdate(this.velocity.x, newVx);
        this.velocity.y = this.getVelocityUpdate(this.velocity.y, newVy);
    }

    engineStop = () => {
        this.image = this.idleImage;
    }

    getVelocityUpdate = (velocity: number, change: number): number => {
        let newVel: number = velocity + change;
        if (newVel > this.maxSpeed) {
            newVel = this.maxSpeed;
        } else if (newVel < -1 * this.maxSpeed) {
            newVel = -1 * this.maxSpeed;
        }

        return newVel;
    }
    private getPositionChange = (pos: number, dx: number, max: number): number => {
        let newPos: number = pos + dx;
        if (newPos > max) {
            newPos = 0;
        } else if (newPos < 0) {
            newPos = max;
        }

        return newPos;
    }
}

export { Player }