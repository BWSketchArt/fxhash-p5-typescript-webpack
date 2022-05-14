import * as P5 from 'p5';
import {App} from "./app/App";
import {FxHash} from "./modules/FxHash";
import {ColorHelper} from "./project/ColorHelper";
import {PolygonHelper} from "./project/PolygonHelper";
import {OldControls} from "./modules/OldControls";
import {Controls} from "./app/Controls";

// ============== Instance Declaration ==============

// Core
let p5: P5
let app: App

// Modules
let fxhash: FxHash
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

        p5.noFill();
        p5.background(0);
        p5.translate(app.state.pos.x, app.state.pos.y);
        p5.scale(app.state.scale);

        const numberOfShapes = <number>oldControls.numberOfShapes.value();
        const colours = ColorHelper.getColorsArray(numberOfShapes);

        // CONSISTENT SPEED REGARDLESS OF FRAMERATE
        const speed = (p5.frameCount / (numberOfShapes * 30)) * 2;

        // DRAW ALL SHAPES
        for (var i = 0; i < numberOfShapes; i++) {
            p5.push();
            const lineWidth = 8;
            const spin = speed * (numberOfShapes - i);
            const numberOfSides = 3 + i;
            const width = 40 * i;
            p5.strokeWeight(lineWidth);
            p5.stroke(colours[i]);
            p5.rotate(spin);
            PolygonHelper.draw(numberOfSides, width)
            p5.pop();
        }

    }

    p5.windowResized = function () {
        app.createCanvasSize();
        app.createScale();
        app.createPosition();

        p5.resizeCanvas(app.state.canvas_w, app.state.canvas_h);
    }
}

// FxHash Setup
fxhash = new FxHash();
fxhash.hash = () => (window as any)['fxhash'];
fxhash.rand = (window as any)['fxrand'];

// p5.js Setup
p5 = new P5(sketch, window.document.body)

app = new App();

// init controls
oldControls = new OldControls();
controls = new Controls();

export {fxhash, p5, app}
