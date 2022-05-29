/**
 * Check if variable is defined
 *
 * @param variable
 */
export function varIsDefined(variable: any) {
    return (variable !== void 0);
}

/**
 * Check if variable is boolean
 *
 * @param variable
 */
export function varIsBool(variable: any) {
    return (typeof variable === "boolean")
}

/**
 * Check if variable is Array
 *
 * @param arr
 */
export function varIsArray(arr: any) {
    return Array.isArray(arr);
}
