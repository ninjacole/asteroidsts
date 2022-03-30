import { Vector } from "./Vector";

function convertDegreesToRads(degrees: number) {
    return (Math.PI / 180) * degrees;
}

// Returns the min or max values if the providied num is out of bounds
function limitNumber(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}

// Returns the min or max value for both x and y values if either
// are out of bounds.
function limitVector(vector: Vector, min: number, max: number) {
    vector.x = limitNumber(vector.x, min, max);
    vector.y = limitNumber(vector.y, min, max);
}

export { convertDegreesToRads, limitVector, limitNumber }