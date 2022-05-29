/**
 * Clone object
 *
 * @param src
 */
export function objectClone(src: object) {
    return JSON.parse(JSON.stringify(src));
}


/**
 * Check if two objects are equal
 *
 * @param src
 * @param trg
 */
export function objectIsEqual(src:object, trg:object) {
    return (JSON.stringify(src) === JSON.stringify(trg))
}
