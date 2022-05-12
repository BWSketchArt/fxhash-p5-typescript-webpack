import * as P5 from 'p5';
import {App} from "./app/App";
import {FxHash} from "./modules/FxHash";
import {Controls} from "./modules/Controls";
import {MakeLib} from "./lib/MakeLib";
import {CalcLib} from "./lib/CalcLib";
import {DrawLib} from "./lib/DrawLib";
import {AlgoLib} from "./lib/AlgoLib";
import {ColorHelper} from "./project/ColorHelper";
import {PolygonHelper} from "./project/PolygonHelper";

// ============== Instance Declaration ==============

// Core
let p5: p5
let app: App

// Modules
let fxhash: FxHash
let controls: Controls;

// Lib
let algo: AlgoLib;
let make: MakeLib;
let calc: CalcLib;
let draw: DrawLib;

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

        p5.noFill();
        p5.background(0);
        p5.translate(app.state.pos.x, app.state.pos.y);
        p5.scale(app.state.scale);




        const numberOfShapes = <number>controls.numberOfShapes.value();
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

// lib
algo = new AlgoLib();
calc = new CalcLib();
draw = new DrawLib();
make = new MakeLib();

// App Setup
app = new App();

// init controls
controls = new Controls();

export {
    p5, app,
    fxhash, controls,
    algo, calc, draw, make
}
