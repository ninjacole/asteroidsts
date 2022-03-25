import { ICommand } from "../Interfaces/ICommand";
import { IHashTable } from "../Interfaces/IHashTable";

class Keyboard {
    private static instance: Keyboard;
    private downKeys: IHashTable<boolean> = {};

    private constructor() {
        document.onkeydown = this.onKeyDown;
        document.onkeyup = this.onKeyUp;
    }

    public static getInstance = (): Keyboard => {
        if (!this.instance) {
            this.instance = new Keyboard();
        }

        return this.instance;
    }

    private onKeyDown = (event: KeyboardEvent) => {
        this.downKeys[event.code] = true;
    }

    private onKeyUp = (event: KeyboardEvent) => {
        delete this.downKeys[event.code];
    }

    public isKeyDown = (key?: string): boolean => {
        return key !== undefined && this.downKeys[key];
    }
}

export { Keyboard }