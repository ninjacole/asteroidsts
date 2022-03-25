import { Sounds } from "../AssetLoading/Sounds";
import { Vector } from "../Utilities/Vector";
import { Bullet } from "./Bullet";

class Weapon {
    public bulletsFired: Bullet[] = [];
    private sound: HTMLAudioElement = Sounds.LASER2;
    private lastFired: number = Date.now();
    private fireRate: number = 150;


    private canFire = (): boolean => {
        return Date.now() - this.lastFired > this.fireRate;
    }

    private playFireSound = (numTimes: number) => {
        for (let i = 0; i < numTimes; i += 1) {
            this.sound.currentTime = 0;
            this.sound.play();
        }
    }

    public fire = (origin: Vector, velocity: Vector, rotation: number) => {
        if (this.canFire()) {
            this.playFireSound(1);
            this.bulletsFired.push(new Bullet(origin, velocity, rotation));
            this.lastFired = Date.now();
        }
    }
}

export { Weapon }