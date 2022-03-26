import { Canvas } from "../Canvas";
import { Mouse } from "../input/Mouse";
import { IEntity } from "../interfaces/IEntity";
import { Images } from "../assetLoading/Images";
import { Vector } from "../utils/Vector";
import { Sounds } from "../assetLoading/Sounds";
import { Weapon } from "./Weapon";
import { Bullet } from "./Bullet";

class Player implements IEntity {
    private position: Vector;
    private velocity: Vector;
    private rotation: number = 0;
    private accelerationCoefficient: number = 0.1;
    private maxSpeed = 12;
    private movingImage: HTMLImageElement = Images.SHIP_SINGLE_MOVING;
    private idleImage: HTMLImageElement = Images.SHIP_SINGLE;
    private image: HTMLImageElement = Images.SHIP_SINGLE;
    private mouse: Mouse = Mouse.getInstance();
    private speed: number = 3;
    private weaponSound: HTMLAudioElement = Sounds.LASER;
    private weapon: Weapon = new Weapon();

    constructor(position: Vector, velocity: Vector) {
        this.position = position;
        this.velocity = velocity;
    }

    draw = () => {
        const canvas: Canvas = Canvas.getInstance();
        canvas.drawImage(this.image, this.position, this.rotation);

        this.weapon.bulletsFired.forEach((bullet: Bullet) => {
            bullet.draw();
        })
    }

    update = () => {
        const canvas: Canvas = Canvas.getInstance();
        this.position = canvas.getPositionChange(this.position, this.velocity)

        var opposite = this.mouse.position.y - this.position.y;
        var adjacent = this.mouse.position.x - this.position.x;
        this.rotation = Math.atan2(opposite, adjacent);

        for (let i = this.weapon.bulletsFired.length - 1; i >= 0; i -= 1) {
            if (this.weapon.bulletsFired[i].canTravel()) {
                this.weapon.bulletsFired[i].update();
            } else {
                this.weapon.bulletsFired.splice(i, 1);
            }
        }
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

    fireWeapon = () => {
        this.weaponSound.play();
        this.weapon.fire(this.position.clone(), this.velocity.clone(), this.rotation);
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
}

export { Player }