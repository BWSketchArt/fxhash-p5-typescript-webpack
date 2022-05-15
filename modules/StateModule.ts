import * as p5 from "p5";

import {fxhash} from "../app";

export class StateModule {
    // Random seed
    seed: number
    // Random hash
    hash: string
    // Canvas current position
    pos: p5.Vector
    // Canvas new position
    pos_new: p5.Vector
    // Canvas scale
    scale: number
    // Canvas new scale
    scale_new: number
    // Canvas width
    canvas_w: number
    // Canvas height
    canvas_h: number
    // Mouse press position
    mouse_p: p5.Vector
    // Mouse release position
    mouse_r: p5.Vector

    constructor(randomNumber: number = fxhash.rand(), hash: string = fxhash.hash()) {
        this.seed = ~~(randomNumber * 123456789)
        this.hash = hash
    }
}
