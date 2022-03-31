import { ICommand, KeyAction } from "../interfaces/ICommand"
import { Commands } from "./Commands";
import { Keyboard } from "./Keyboard";
import { Mouse } from "./Mouse";

class InputHandler {
    private static instance: InputHandler;

    private mouse: Mouse = Mouse.getInstance();
    private keyboard: Keyboard = Keyboard.getInstance();

    private constructor() { }

    public getCommands = (): ICommand[] => {
        const commands: ICommand[] = Commands.getAll();
        let commandsToExecute: ICommand[] = commands.filter((command: ICommand) => {
            if (command.keyAction === KeyAction.UP) {
                return (command.key !== undefined && !this.keyboard.isKeyDown(command.key)) ||
                (command.button !== undefined && !this.mouse.isButtonDown(command.button));
            } else if (command.keyAction === KeyAction.DOWN) {
                return (command.key !== undefined && this.keyboard.isKeyDown(command.key)) ||
                (command.button !== undefined && this.mouse.isButtonDown(command.button));
            }
        });

        return commandsToExecute;
    }

    public static getInstance = (): InputHandler => {
        if (!this.instance) {
            this.instance = new InputHandler();
        }

        return this.instance;
    }

}

export { InputHandler }