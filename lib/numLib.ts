import {varIsDefined} from "./varLib";

/**
 * Round number with precision
 *
 * @param num
 * @param precision
 */
export function numRound(num: number, precision: number = 2) {
    if (!varIsDefined(num))
        num = 0;

    if (!("" + num).includes("e")) {
        return +(Math.round(Number(num + "e+" + precision)) + "e-" + precision);
    } else {
        let arr = ("" + num).split("e"), sig = "";

        if (+arr[1] + precision > 0)
            sig = "+";

        return +(Math.round(Number(+arr[0] + "e" + sig + (+arr[1] + precision))) + "e-" + precision);
    }
}

/**
 * Check if number is between min and max range.
 *
 * @param num
 * @param numMin
 * @param numMax
 * @param inclusive
 */
export function numIsBetween(num: number, numMin: number, numMax: number, inclusive: boolean = false) {
    let min = Math.min(numMin, numMax);
    let max = Math.max(numMin, numMax);

    return inclusive ? num >= min && num <= max : num > min && num < max;
}

/**
 * Returns difference between numbers
 *
 * @param numA
 * @param numB
 * @param precision
 */
export function numDiff(numA: number, numB: number, precision?: number) {
    return numRound((numB - numA) / numA * 100, precision);
}

/**
 * Divide number by a value (with precision)
 *
 * @param num
 * @param value
 * @param precision
 */
export function numDiv(num: number, value: number, precision?: number) {
    if (value === 0)
        return 0;

    return numRound(num / value, precision);
}

/**
 * Subtract value from a number (with precision)
 *
 * @param num
 * @param value
 * @param precision
 */
export function numSub(num: number, value: number, precision?: number) {
    return numRound(num - value, precision);
}

/**
 * Add value to a number (with precision)
 *
 * @param num
 * @param value
 * @param precision
 */
export function numAdd(num: number, value: number, precision?: number) {
    return numRound(num + value, precision);
}

/**
 * Multiply number by value (with precision)
 *
 * @param num
 * @param value
 * @param precision
 */
export function numMul(num: number, value: number, precision?: number) {
    return numRound(num * value, precision);
}
