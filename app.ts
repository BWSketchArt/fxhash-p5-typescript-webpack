import * as P5 from 'p5';
import {App} from "./app/App";
import {FxHashModule} from "./modules/FxHashModule";
import {OldControls} from "./modules/OldControls";
import {Controls} from "./app/Controls";

// ============== Instance Declaration ==============

// Core
let p5: P5
let app: App

// Modules
let fxhash: FxHashModule
let oldControls: OldControls;
let controls: Controls;

// ============== Instance Initialization ==============

const sketch = function (p5: P5) {
    p5.setup = function () {

        // setup p5 from config
        p5.angleMode(app.config.angle_mode)
        p5.rectMode(app.config.rect_mode);
        p5.frameRate(app.config.framerate);

        // init p5 state
        p5.createCanvas(app.state.canvas_w, app.state.canvas_h)

        // resize canvas
        p5.windowResized();
    }

    p5.draw = function () {
        controls.draw();
        oldControls.draw();
        app.draw();
    }

    p5.windowResized = function () {
        app.createCanvasSize();
        app.createScale();
        app.createPosition();

        p5.resizeCanvas(app.state.canvas_w, app.state.canvas_h);
    }
}

// FxHash Setup
fxhash = new FxHashModule();
fxhash.hash = () => (window as any)['fxhash'];
fxhash.rand = (window as any)['fxrand'];

// p5.js Setup
p5 = new P5(sketch, window.document.body)

// App Setup
app = new App();

// init controls
oldControls = new OldControls();
controls = new Controls();

export {fxhash, p5, app, oldControls, controls}
