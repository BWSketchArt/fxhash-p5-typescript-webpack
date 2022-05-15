import {fxhash} from "../app";

/**
 * Returns a random float number from 0 to max (exclusively)
 * ```
 * rand(10)    // 4.1528023281134665
 * ```
 * @param max
 */
export function rand(max: number) {
    return fxhash.rand() * max;
}

/**
 * Returns a random float number between min and max (exclusively)
 * ```
 * rand(-5, 3) // 2.1528023281134665
 * ```
 * @param max
 * @param min
 */
export function randBetween(min: number, max: number) {
    return (fxhash.rand() * (max - min)) + min;
}

/**
 * Returns random integer (including)
 * ```
 * rand(10)    // 4
 * rand(3, -5) // 3 (between -5 and 3 inclusively)
 * ```
 * @param max
 * @param min
 */
export function randInt(max: number, min: number = 0) {
    return Math.floor(fxhash.rand() * (max - min + 1)) + min
}

/**
 * Returns random integer (excluding)
 * ```
 * rand(10)    // 4
 * rand(3, -5) // 2 (between -5 and 3 exclusively)
 * ```
 * @param max
 * @param min
 */
export function randIntExcluding(max: number, min: number = 0) {
    return Math.floor(fxhash.rand() * (max - 1 - min)) + min + 1
}

/**
 * Returns random value from array
 * ```
 * randValue(["apple"],["banana"],["monkey"]) // "banana"
 * ```
 * @param values
 */
export function randValue(values: Array<any>) {
    return values[Math.floor(fxhash.rand() * values.length)];
}

/**
 * Returns a random boolean (true or false) based on chance modifier
 * ```
 * randBool()    // will have a 50% chance of returning true
 * randBool(0.1) // will have a 10% chance of returning true
 * ```
 *
 * @param chance
 */
export function randBool(chance: number = 0.5) {
    return fxhash.rand() < chance;
}
