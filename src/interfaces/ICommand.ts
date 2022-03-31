interface ICommand {
    execute: () => void;
    key?: string;
    button?: number;
    keyAction: KeyAction
}

enum KeyAction {
    UP,
    DOWN
}

export { ICommand, KeyAction }