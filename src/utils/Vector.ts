class Vector {
    x: number;
    y: number;
    
    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    public length = () => {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public add = (vector: Vector) => {
        this.x += vector.x;
        this.y += vector.y;
    }

    public subtract = (vector: Vector) => {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    public toString = () => {
        return "[" + this.x + ", " + this.y + "]";
    }

    public clone = () => {
        return new Vector(this.x, this.y);
    }

    public equals = (vector: Vector) => {
        return vector.x == this.x && vector.y == this.y;
    }

    public static get zero (): Vector {
        return new Vector();
    }
}

export { Vector }