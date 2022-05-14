import {p5} from "../index";

export class Config {
    // App name
    readonly name: string
    // App author
    readonly author: string
    // Framerate
    readonly framerate: number
    // Angle mode
    readonly angle_mode: p5.ANGLE_MODE
    // Rectangle corner mode
    readonly rect_mode: p5.RECT_MODE
    // Canvas width target
    readonly canvas_wt: number
    // Canvas height target
    readonly canvas_ht: number
    // Canvas scale step
    readonly scale_step: number
    // Canvas pos step
    readonly pos_step: number
    // Canvas width margin in percents
    readonly canvas_wm: number

    constructor() {
        this.name = "Gears"
        this.author = "BWSketchArt"
        this.framerate = 30
        this.angle_mode = p5.RADIANS
        this.rect_mode = p5.CENTER
        this.canvas_wt = 1920
        this.canvas_ht = 1080
        this.canvas_wm = 10;
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
