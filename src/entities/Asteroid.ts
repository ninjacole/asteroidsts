import { Images } from "../assetLoading/Images";
import { Canvas } from "../Canvas";
import { limitVector } from "../utils/Utils";
import { Vector } from "../utils/Vector";
import { GameObject } from "./GameObject";

enum AsteroidSize {
    LARGE = 4,
    MED = 3,
    SMALL = 2,
    TINY = 1
}

class Asteroid extends GameObject {
    private spin: number;
    private size: number;
    private rotation: number;
    private height: number;
    private width: number;
    private hitpoints: number;
    private grayImages: HTMLImageElement[];
    private img: HTMLImageElement;

    constructor(position: Vector, velocity: Vector, spin: number, size: AsteroidSize) {
        super(position, velocity);
        this.spin = spin;
        this.size = size;
        this.rotation = 0;
        this.height = size * Images.ASTEROID_GRAY.height;
        this.width = size * Images.ASTEROID_GRAY.width;
        this.hitpoints = size;
        this.grayImages = [
            Images.ASTEROID_GRAY_3DMG,
            Images.ASTEROID_GRAY_2DMG,
            Images.ASTEROID_GRAY_1DMG,
            Images.ASTEROID_GRAY
        ];
        this.img = this.grayImages[this.hitpoints - 1];
    }

    public draw = () => {
        const canvas: Canvas = Canvas.getInstance();
        canvas.drawImage(this.img, this.position, this.rotation, this.size * .75);
    }

    public update = () => {
        this.rotate();
        const canvas: Canvas = Canvas.getInstance();
        this.position = canvas.updatePosition(this.position, this.velocity)
    }

    private rotate = () => {
        this.rotation += this.spin;
        if (this.rotation > Math.PI * 2) {
            this.rotation = this.rotation % Math.PI * 2;
        } else if (this.rotation < 0) {
            this.rotation += Math.PI * 2
        }
    }

    public static spawn = (): Asteroid => {
        const position: Vector = this.getRandomSpawnPoint();
        const vel: Vector = this.getRandomVelocity();
        const spin: number = Math.random() * (4 * Math.PI / 180);

        return new Asteroid(position, vel, spin, AsteroidSize.LARGE);
    }

    public static split = (asteroid: Asteroid, initVelocity: Vector): Asteroid[] => {
        const asteroids: Asteroid[] = [];

        if (asteroid.size > 1) {
            const getRandomVelocity = (iterator: number): number => {
                let randAngle: number = Math.random() * Math.PI;
                randAngle = iterator === 0 ? 180 - randAngle : 180 + randAngle;
                return randAngle;
            }

            // Reduces v2 by coefficient and adds to v1
            const updateVelocity = (v1: Vector, v2: Vector, reductionCoefficient: number): Vector => {
                const x = Math.sin(v1.x) + v2.x * reductionCoefficient;
                const y = Math.cos(v1.y) + v2.y * reductionCoefficient;
                return new Vector(x, y)
            }

            for (let i = 0; i < 2; i += 1) {
                const randomVelocity = new Vector(getRandomVelocity(i), getRandomVelocity(i));
                const newTrajectory = updateVelocity(randomVelocity, initVelocity, 0.25);
                limitVector(newTrajectory, -20, 20);

                const shift: number = i === 0 ? 8: -8;
                const position: Vector = new Vector(asteroid.position.x + shift, asteroid.position.y + shift);
                
                asteroids.push(new Asteroid(position, newTrajectory, 2, asteroid.size - 1));
            }
        }

        return asteroids;
    }

    private static getRandomSpawnPoint = (): Vector => {
        const canvas: Canvas = Canvas.getInstance();
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return new Vector(x, y);
    }

    private static getRandomVelocity = (): Vector => {
        const negFivetoFive = () => {
            return Math.ceil(Math.random() * 5 * (Math.random() < 0.5 ? -1 : 1));
        }

        const x = negFivetoFive();
        const y = negFivetoFive();
        return new Vector(x, y);
    }
}

export { Asteroid }
