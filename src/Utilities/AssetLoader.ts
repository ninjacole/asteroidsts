import { IHashTable } from "../Interfaces/IHashTable";

class AssetLoader {
    private static instance: AssetLoader;
    private static rootDir: string = "./images/";

    private constructor() { }

    public static getInstance = (): AssetLoader => {
        if (!this.instance) {
            this.instance = new AssetLoader();
        }

        return this.instance;
    }

    public static images: IHashTable<HTMLImageElement> = {
        ASTEROID_GRAY_1DMG: new Image(),
        ASTEROID_GRAY_2DMG: new Image(),
        ASTEROID_GRAY_3DMG: new Image(),
        ASTEROID_GRAY: new Image(),
        ASTEROID: new Image(),
        BALL01: new Image(),
        BALL02: new Image(),
        BALL03: new Image(),
        BG: new Image(),
        ENEMY_EXPLOSION: new Image(),
        ENEMY: new Image(),
        POWERUP: new Image(),
        SHIP_DOUBLE_MOVING: new Image(),
        SHIP_DOUBLE: new Image(),
        SHIP_SINGLE_MOVING: new Image(),
        SHIP_SINGLE: new Image(),
    };

    public loadAssets = (onLoadingFinished: () => void) => {
        const fileNames: IHashTable<string> = {
            ASTEROID_GRAY_1DMG: AssetLoader.rootDir + "asteroid-gray-1dmg",
            ASTEROID_GRAY_2DMG: AssetLoader.rootDir + "asteroid-gray-2dmg",
            ASTEROID_GRAY_3DMG: AssetLoader.rootDir + "asteroid-gray-3dmg",
            ASTEROID_GRAY: AssetLoader.rootDir + "asteroid-gray",
            ASTEROID: AssetLoader.rootDir + "asteroid",
            BALL01: AssetLoader.rootDir + "ball01",
            BALL02: AssetLoader.rootDir + "ball02",
            BALL03: AssetLoader.rootDir + "ball03",
            BG: AssetLoader.rootDir + "bg",
            ENEMY_EXPLOSION: AssetLoader.rootDir + "enemy-explosion",
            ENEMY: AssetLoader.rootDir + "enemy",
            POWERUP: AssetLoader.rootDir + "powerup",
            SHIP_DOUBLE_MOVING: AssetLoader.rootDir + "ship-double-moving",
            SHIP_DOUBLE: AssetLoader.rootDir + "ship-double",
            SHIP_SINGLE_MOVING: AssetLoader.rootDir + "ship-single-moving",
            SHIP_SINGLE: AssetLoader.rootDir + "ship-single",
        };

        let count: number = Object.keys(fileNames).length;

        const onLoadFinished = (fileName: string) => {
            console.log(`finished loading [${fileName}]`);
            if (--count === 0) {
                onLoadingFinished();
            }
        }

        Object.keys(fileNames).forEach((key: string) => {
            AssetLoader.images[key] = new Image();
            AssetLoader.images[key].onload = () => { onLoadFinished(key) };
            AssetLoader.images[key].src = fileNames[key] + ".png";
        })
    }
}

export { AssetLoader }