import {p5} from "../index";

export class Config {
    // App name
    name: string
    // App author
    author: string
    // Framerate
    framerate: number
    // Angle mode
    angle_mode: p5.ANGLE_MODE
    // Canvas width target
    canvas_wt: number
    // Canvas height target
    canvas_ht: number
    // Canvas scale step
    scale_step: number
    // Canvas pos step
    pos_step: number

    constructor() {
        this.name = "Gears"
        this.author = "BWSketchArt"
        this.framerate = 30
        this.angle_mode = p5.RADIANS
        this.canvas_wt = 1920
        this.canvas_ht = 1080
        this.scale_step = 0.05
        this.pos_step = 0.05
    }

    /** Canvas Width and Height ratio
     * ~ 1.7777777777777777 */
    getCanvasWHRatio() {
        return this.canvas_wt / this.canvas_ht
    }

    /** Canvas Height and Width ratio
     * ~ 0.5625 */
    getCanvasHWRatio() {
        return this.canvas_ht / this.canvas_wt
    }
}
