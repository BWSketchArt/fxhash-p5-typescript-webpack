export class FxHashModule {
    /**
     * Returns hash
     * ```
     * hash() // ooBJs1c2EjMCQosqpqmEsu4hGKqEB8BFWt5BDSpHkp1654gxE1g
     * ```
     */
    hash() {
        // @ts-ignore (you should override this function in index.tS)
        return window['fxhash']
    }

    /**
     * Returns random number from 0 to 1
     * ```
     * rand() // 0.1528023281134665
     * ```
     */
    rand() {
        // @ts-ignore (you should override this function in index.tS)
        return window['fxrand']()
    }
}
