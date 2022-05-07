import * as P5 from 'p5';
import {App} from "./app/App";
import {FxHash} from "./app/FxHash";
import {Controls} from "./app/Controls";

// ============== Instance Declaration ==============

// Core
let p5: p5
let app: App
let fxhash: FxHash

// Other
let controls: Controls;

// ============== Instance Initialization ==============

const sketch = function (p5Instance: P5) {
    p5Instance.setup = function () {
        console.log('initialized');
    }
}

// FxHash Setup
fxhash = new FxHash();
fxhash.hash = () => (window as any)['fxhash'];
fxhash.rand = (window as any)['fxrand'];

// App Setup
app = new App();

// p5.js Setup
p5 = new P5(sketch, window.document.body)

export {fxhash, app, p5}

//
// /**
//  * Window Setup event callback
//  * (Called automatically by p5.js)
//  */
// function setup() {
//     console.log('setting up');
//
//     // Init app
//     app = new App('Gears', 'BWSketchArt');
//
//     // init lib
//     lib = new Lib();
//
//     // init controls
//     controls = new Controls();
//
//     // setup canvas & p5.js
//     angleMode(RADIANS)
//     createCanvas(windowWidth, windowHeight)
//     rectMode(CENTER);
//     noFill();
//     frameRate(app.config.framerate);
//
//     // resize canvas
//     windowResized();
// }
//
// /**
//  * Window Resize event callback
//  * (Called automatically by p5.js)
//  */
// function windowResized() {
//     app.createCanvasSize();
//     app.createScale();
//     app.createPosition();
//
//     resizeCanvas(app.state.canvas_w, app.state.canvas_h);
// }
//
// /**
//  * Window Draw event callback
//  * (Called automatically by p5.js)
//  */
// function draw() {
//
//     background(0);
//     translate(app.state.pos.x, app.state.pos.y);
//     scale(app.state.scale);
//
//     const numberOfShapes = <number>controls.numberOfShapes.value();
//     const colours = ColorHelper.getColorsArray(numberOfShapes);
//
//     // CONSISTENT SPEED REGARDLESS OF FRAMERATE
//     const speed = (frameCount / (numberOfShapes * 30)) * 2;
//
//     // DRAW ALL SHAPES
//     for (var i = 0; i < numberOfShapes; i++) {
//         push();
//         const lineWidth = 8;
//         const spin = speed * (numberOfShapes - i);
//         const numberOfSides = 3 + i;
//         const width = 40 * i;
//         strokeWeight(lineWidth);
//         stroke(colours[i]);
//         rotate(spin);
//         PolygonHelper.draw(numberOfSides, width)
//         pop();
//     }
//
//
// }



