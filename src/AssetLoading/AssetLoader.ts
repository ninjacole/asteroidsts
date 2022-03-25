import { IHashTable } from "../Interfaces/IHashTable";
import { Images } from "./Images";
import { Sounds } from "./Sounds";

class AssetLoader {
    private static instance: AssetLoader;
    private static rootImageDir: string = "";
    private static rootSoundDir: string = "";

    private constructor() { 
        const href: string = document.location.href;
        const joiner: string = href[href.length - 1] == '/' ? '' : '/';
        AssetLoader.rootImageDir = href + joiner + "images/";
        AssetLoader.rootSoundDir = href + joiner + "sounds/";
    }

    public static getInstance = (): AssetLoader => {
        if (!this.instance) {
            this.instance = new AssetLoader();
        }

        return this.instance;
    }

    public loadAssets = (onLoadingFinished: () => void) => {
        
        const images: IHashTable<HTMLImageElement> = {
            "asteroid-gray-1dmg.png": Images.ASTEROID_GRAY_1DMG,
            "asteroid-gray-2dmg.png": Images.ASTEROID_GRAY_2DMG,
            "asteroid-gray-3dmg.png": Images.ASTEROID_GRAY_3DMG,
            "asteroid-gray.png": Images.ASTEROID_GRAY,
            "asteroid.png": Images.ASTEROID,
            "ball01.png": Images.BALL01,
            "ball02.png": Images.BALL02,
            "ball03.png": Images.BALL03,
            "bg.png": Images.BG,
            "enemy-explosion.png": Images.ENEMY_EXPLOSION,
            "enemy.png": Images.ENEMY,
            "powerup.png": Images.POWERUP,
            "ship-double-moving.png": Images.SHIP_DOUBLE_MOVING,
            "ship-double.png": Images.SHIP_DOUBLE,
            "ship-single-moving.png": Images.SHIP_SINGLE_MOVING,
            "ship-single.png": Images.SHIP_SINGLE,
        };

        Sounds.ASTEROID_DMG = new Audio(AssetLoader.rootSoundDir + "asteroid-takes-damage.wav");
        Sounds.ASTEROID_DMG.volume = 0.2;

        Sounds.DEATH = new Audio(AssetLoader.rootSoundDir + "death.wav");
        Sounds.DEATH.volume = 0.2

        Sounds.ENEMY_DEATH = new Audio(AssetLoader.rootSoundDir + "enemy-death.wav");
        Sounds.ENEMY_DEATH.volume = 0.2

        Sounds.ENEMY_SHOOT = new Audio(AssetLoader.rootSoundDir + "enemy-shoot.wav");
        Sounds.ENEMY_SHOOT.volume = 0.2

        Sounds.EXPLOSION = new Audio(AssetLoader.rootSoundDir + "explosion.wav");
        Sounds.EXPLOSION.volume = 0.2

        Sounds.LASER = new Audio(AssetLoader.rootSoundDir + "laser.wav");
        Sounds.LASER.volume = 0.2

        Sounds.LASER2 = new Audio(AssetLoader.rootSoundDir + "laser2.wav");
        Sounds.LASER2.volume = 0.2

        Sounds.MENU_SELECT = new Audio(AssetLoader.rootSoundDir + "menu-select.wav");
        Sounds.MENU_SELECT.volume = 0.2

        Sounds.POWERUP = new Audio(AssetLoader.rootSoundDir + "powerup.wav");
        Sounds.POWERUP.volume = 0.2

        Sounds.SCORE_CLEARED = new Audio(AssetLoader.rootSoundDir + "score-cleared.wav");
        Sounds.SCORE_CLEARED.volume = 0.2

        Sounds.SHIELD_UP = new Audio(AssetLoader.rootSoundDir + "shield-up.wav");
        Sounds.SHIELD_UP.volume = 0.2

        let assetCount: number = Object.keys(images).length;
        
        // Assigning to .src loads the asset
        const loadAsset = (fileName: string, asset: HTMLImageElement | HTMLAudioElement): void => {
            asset.onload = () => { onLoadFinished(fileName) };
            asset.src = fileName;
        }

        // Decrement the count after loading an image, then perform callback when done
        const onLoadFinished = (fileName: string) => {
            console.log(`loaded [${ fileName }]`);
            if (--assetCount === 0) {
                console.log('done loading');
                onLoadingFinished();
            }
        }

        // Iterate the hash table keys
        Object.keys(images).forEach((key: string) => {
            loadAsset(AssetLoader.rootImageDir + key, images[key])
        });
    }
}

export { AssetLoader }