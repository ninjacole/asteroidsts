interface ICommand {
    execute: () => void;
    undoAction?: () => void;
    key?: string;
    button?: number;
}

export { ICommand }