import { ICommand, KeyAction } from "../interfaces/ICommand";

class Commands {
    private static defaultCommand: ICommand = { execute: () => {}, keyAction: KeyAction.DOWN };
    public static movePlayer: ICommand = { execute: () => {}, key: "", keyAction: KeyAction.DOWN };
    public static playerFire: ICommand = { execute: () => {}, key: "", keyAction: KeyAction.DOWN };
    public static pause: ICommand = { execute: () => {}, key: "", keyAction: KeyAction.DOWN };

    public static reset = () => {
        this.movePlayer = this.playerFire = this.pause = this.defaultCommand;
    }

    public static getAll = (): ICommand[] => {
        return [this.movePlayer, this.playerFire, this.pause];
    }

}

export { Commands }