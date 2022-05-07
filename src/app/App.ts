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

        console.log(`🚀 App Started | %s | Seed: %s, Hash: %s`,
            window.document.title, this.state.seed, this.state.hash);
    }

    createTitle() {
        window.document.title = `${this.config.name} by ${this.config.author}`
    }

    createCanvasSize() {
        this.state.canvas_w = p5.windowHeight * 0.9
        this.state.canvas_h = (this.state.canvas_w / this.config.getCanvasWHRatio()) * 0.9

        if (this.state.canvas_h * 1.1 > p5.windowHeight) {
            this.state.canvas_w = p5.windowHeight / this.config.getCanvasHWRatio()
            this.state.canvas_h = p5.windowHeight * 0.9
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
