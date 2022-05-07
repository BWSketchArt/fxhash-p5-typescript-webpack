export class FxHash {
    /** Returns Hash (e.g. 123123) */
    hash() {
        // @ts-ignore (you should override this function in index.tS)
        return window['fxhash']
    }

    /** Returns random number */
    rand() {
        // @ts-ignore (you should override this function in index.tS)
        return window['fxrand']()
    }
}
