import {p5} from "../app";

/**
 * Calculate angle between two vectors
 *
 * @param v1 first Vector
 * @param v2 second Vector
 * @param doRound rounds output value, default is true
 * @param roundDec number of decimal places to round to, default is 2
 */
export function calcAngleBetweenVectors(v1: p5.Vector, v2: p5.Vector, doRound = true, roundDec = 2) {
    let res = v1.angleBetween(v2);

    return (doRound) ? p5.round(res, roundDec) : res;
}

export function calcDistBetweenCircleVectors(r: number, v1: p5.Vector, v2: p5.Vector) {
    // circumference
    let C = 2 * p5.PI * r;

    // angle between points
    let a = this.angleBetweenVectors(v1, v2, false);

    return (a / 360) * C;
}

export function calcDistBetweenCircleVectorsUsingAngle(r: number, angle: number) {
    // circumference
    let C = 2 * p5.PI * r;

    return (angle / 360) * C;
}
