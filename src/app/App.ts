import {Config} from "./Config";
import {State} from "./State";
import {fxhash} from "../index";
import {p5} from "../index";

export class App {
    config: Config
    state: State

    constructor() {
        this.config = new Config()
        this.state = new State(fxhash.rand(), fxhash.hash())

        this.createTitle();

        this.createCanvasSize();
        this.createPosition();
        this.createScale();

        console.log(`🚀 App Started | %s | Seed: %s, Hash: %s`,
            window.document.title, this.state.seed, this.state.hash);
    }

    createTitle() {
        window.document.title = `${this.config.name} by ${this.config.author}`
    }

    createCanvasSize() {
        const width_mod = (1 - (this.config.canvas_wm / 100));     // 0.9
        const height_offset = (1 + (this.config.canvas_wm / 100)); // 1.1

        this.state.canvas_w = p5.windowWidth * width_mod
        this.state.canvas_h = (this.state.canvas_w / this.config.getCanvasWHRatio()) * width_mod

        if (this.state.canvas_h * height_offset > p5.windowHeight) {
            this.state.canvas_w = p5.windowHeight / this.config.getCanvasHWRatio()
            this.state.canvas_h = p5.windowHeight * width_mod
        }
    }

    createScale() {
        const scale = this.state.canvas_w / this.config.canvas_wt;

        this.state.scale = this.state.scale_new = scale;
    }

    createPosition() {
        const x = this.state.canvas_w / 2;
        const y = this.state.canvas_h / 2;

        this.state.pos = this.state.pos_new = p5.createVector(x, y);
    }
}
