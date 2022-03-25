import { ICommand } from "../Interfaces/ICommand"
import { Keyboard } from "./Keyboard";
import { Mouse } from "./Mouse";

class InputHandler {
    private static instance: InputHandler;

    private mouse: Mouse = Mouse.getInstance();
    private keyboard: Keyboard = Keyboard.getInstance();

    private constructor() { }

    public movePlayer: ICommand = { execute: () => {}, key: "" };
    public rotatePlayerRight: ICommand = { execute: () => {}, key: "" };
    public rotatePlayerLeft: ICommand = { execute: () => {}, key: "" };
    public playerFire: ICommand = { execute: () => {}, key: "" };

    public getExecuteCommands = (): ICommand[] => {
        let commands :ICommand[] = [this.movePlayer, this.rotatePlayerLeft, this.rotatePlayerRight, this.playerFire];
        let commandsToExecute: ICommand[] = commands.filter((command: ICommand) => {
            return (command.key !== undefined && this.keyboard.isKeyDown(command.key)) ||
                command.button !== undefined && this.mouse.isButtonDown(command.button);
        })

        return commandsToExecute;
    }

    public getCanceledCommands = (): ICommand[] => {
        let commands :ICommand[] = [this.movePlayer];
        let commandsToCancel: ICommand[] = commands.filter((command: ICommand) => {
            return (command.key !== undefined && command.undoAction !== undefined && !this.keyboard.isKeyDown(command.key)) ||
                command.button !== undefined && command.undoAction !== undefined && !this.mouse.isButtonDown(command.button);
        })

        return commandsToCancel;
    }

    public static getInstance = (): InputHandler => {
        if (!this.instance) {
            this.instance = new InputHandler();
        }

        return this.instance;
    }

}

export { InputHandler }