import {p5} from "../app";

export class ConfigModule {
    // App name
    name: string = "GenArt"
    // App author
    author: string = "Unnamed Artist"
    // Framerate
    framerate: number = 60
    // Angle mode
    angle_mode: p5.ANGLE_MODE = p5.RADIANS
    // Rectangle corner mode
    rect_mode: p5.RECT_MODE = p5.CORNER
    // Canvas width target
    canvas_wt: number = 1920
    // Canvas height target
    canvas_ht: number = 1080
    // Canvas scale step
    scale_step: number = 0.05
    // Canvas pos step
    pos_step: number = 0.05
    // Canvas width margin in percents
    canvas_wm: number = 10

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
