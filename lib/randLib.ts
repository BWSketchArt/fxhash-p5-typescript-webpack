import {fxhash} from "../app";
import {numRound} from "./numLib";
import {arrayMaxNumberKey, arraySortAscByObjectField} from "./arrayLib";

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
 * Returns random option from array (with or without weights)
 * ```
 * // without weights
 * randOption(["apple","banana","monkey"]) // "banana"
 *
 * // with weights
 * randOption(["apple","banana","monkey"], [10,20,70]) // 10% chance for apple, 20% for banana & 70% for monkey
 *
 * // with wildcard weights
 * randOption(["apple","banana","monkey"], [10,0,30]) // 10% for apple, 30% for monkey, the rest 60% for banana
 * randOption(["apple","banana","monkey"], [30,10])   // 30% for apple, 10% for banana, the rest 60% for monkey
 * ```
 * @param options
 * @param weights
 */
export function randOption(options: Array<any>, weights: Array<number> = []): any {
    if (weights.length === 0)
        return options[Math.floor(fxhash.rand() * options.length)];

    let i, pickedOption, rnd = numRound(fxhash.rand() * 100), threshold = 0, noWeightOptions = [];

    // create weight:option map

    interface Map {
        weight: number,
        option: any
    }

    let map: Array<Map> = [];

    options.forEach((option, index) => {
        map.push({weight: weights[index] || 0, option: option});
    });

    // reorder map by weight asc

    let opts = arraySortAscByObjectField(map, 'weight') as Array<Map>;

    // pick option

    for (i = 0; i < options.length; i++) {
        if (opts[i].weight === 0) {
            noWeightOptions.push(opts[i].option);
            continue;
        }

        threshold += opts[i].weight;

        if (threshold >= rnd) {
            pickedOption = opts[i].option;
            break;
        }
    }

    if (!pickedOption)
        pickedOption = randOption(noWeightOptions);

    if (!pickedOption)
        pickedOption = options[arrayMaxNumberKey(weights)]

    return pickedOption;
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
    if (isNaN(chance)) chance = 0.5;
    return fxhash.rand() < chance;
}
