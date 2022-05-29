/**
 * Remove array element by key
 *
 * @param array
 * @param key
 */
export function arrayRemoveByKey(array: Array<any>, key: number) {
    return array.splice(key, 1);
}


/**
 * Check if value is in array
 *
 * @param {*} value
 * @param {Array} arr
 * @return {boolean}
 */
export function arrayHasValue(value: any, arr: Array<any>) {
    return (arr.indexOf(value) !== -1);
}

/**
 * Get min number from array
 * ```
 * arrayMaxNumber([3,66,1,8]) // 1
 * ```
 * @param arr
 */
export function arrayMinNumber(arr: Array<number>) {
    return Math.min.apply(null, arr);
}

/**
 * Return key of min number in array
 * ```
 * arrayMaxNumber([3,66,1,8]) // 2
 * ```
 * @param arr
 */
export function arrayMinNumberKey(arr: Array<number>) {
    return arr.indexOf(arrayMinNumber(arr));
}

/**
 * Get max number from array
 * ```
 * arrayMaxNumber([1,5,30,8]) // 30
 * ```
 * @param arr
 */
export function arrayMaxNumber(arr: Array<number>) {
    return Math.max.apply(null, arr);
}

/**
 * Return key of max number in array
 * ```
 * arrayMaxNumberKey([1,5,30,8]) // 2
 * ```
 * @param arr
 */
export function arrayMaxNumberKey(arr: Array<number>) {
    return arr.indexOf(arrayMaxNumber(arr));
}

/**
 * Return sorted array using descending order
 * ```
 * arraySortDesc([1,5,30,8]) // [30,8,5,1]
 * ```
 * @param arr
 */
export function arraySortDesc(arr: Array<number>) {
    return [...arr].sort((a: number, b: number) => b - a);
}

/**
 * Return sorted array of objects using descending order of number field
 * ```
 * [{"w":10,"t":"world"},{"w":5,"t":"hello"}] // [{"w":5,"t":"hello"},{"w":10,"t":"world"}]
 * ```
 * @param arr
 * @param fieldName
 */
export function arraySortDescByObjectField(arr: Array<object>, fieldName: string) {
    return [...arr].sort((a: object, b: object) => {
        const field = fieldName as keyof typeof a;
        return b[field] - a[field];
    });
}

/**
 * Return sorted array using ascending order
 * ```
 * arraySortDesc([1,5,30,8]) // [1,5,8,30]
 * ```
 * @param arr
 */
export function arraySortAsc(arr: Array<number>) {
    return [...arr].sort((a: number, b: number) => a - b);
}

/**
 * Return sorted array of objects using ascending order of number field
 * ```
 * [{"w":10,"t":"world"},{"w":5,"t":"hello"}] // [{"w":5,"t":"hello"},{"w":10,"t":"world"}]
 * ```
 * @param arr
 * @param fieldName
 */
export function arraySortAscByObjectField(arr: Array<object>, fieldName: string) {
    return [...arr].sort((a: object, b: object) => {
        const field = fieldName as keyof typeof a;
        return a[field] - b[field];
    });
}
