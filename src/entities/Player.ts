import { Canvas } from "../Canvas";
import { Mouse } from "../input/Mouse";
import { Images } from "../assetLoading/Images";
import { Vector } from "../utils/Vector";
import { Sounds } from "../assetLoading/Sounds";
import { Weapon } from "./Weapon";
import { Bullet } from "./Bullet";
import { limitNumber, limitVector } from "../utils/Utils";
import { GameObject } from "./GameObject";

class Player extends GameObject {
    private rotation: number = 0;
    private accelerationCoefficient: number = 0.1;
    private maxSpeed = 12;
    private movingImage: HTMLImageElement = Images.SHIP_SINGLE_MOVING;
    private idleImage: HTMLImageElement = Images.SHIP_SINGLE;
    private image: HTMLImageElement = Images.SHIP_SINGLE;
    private speed: number = 3;
    private weaponSound: HTMLAudioElement = Sounds.LASER2;
    private weapon: Weapon = new Weapon();

    constructor(position: Vector, velocity: Vector) {
        super(position, velocity);
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
        const mouse: Mouse = Mouse.getInstance();
        this.position = canvas.updatePosition(this.position, this.velocity)

        var opposite = mouse.position.y - this.position.y;
        var adjacent = mouse.position.x - this.position.x;
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
        const mouse: Mouse = Mouse.getInstance();
        this.image = this.movingImage;
        const dx: number = mouse.position.x - this.position.x;
        const dy: number = mouse.position.y - this.position.y;
        let angle: number = Math.atan2(dy, dx);

        if (angle < 0) {
            angle += Math.PI * 2;
        }

        const newVelocity: Vector = new Vector(Math.cos(angle) * this.speed * this.accelerationCoefficient, Math.sin(angle) * this.speed * this.accelerationCoefficient);
        this.velocity.add(newVelocity);
        limitVector(this.velocity, this.maxSpeed * -1, this.maxSpeed);
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
        newVel = limitNumber(newVel, this.maxSpeed * -1, this.maxSpeed);

        return newVel;
    }
}

export { Player }