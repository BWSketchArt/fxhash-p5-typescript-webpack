import {p5} from "../app";

import {Config} from "./Config";
import {State} from "./State";
import {AppModule} from "../modules/AppModule";
import {PolygonHelper} from "./project/PolygonHelper";
import {ColorHelper} from "./project/ColorHelper";

export class App extends AppModule {
    config: Config
    state: State

    constructor() {
        super(new Config(), new State());
        console.log(`🚀 App Started | %s | Seed: %s, Hash: %s`, this.title, this.state.seed, this.state.hash);
    }

    draw() {

        p5.noFill();
        p5.background(0);
        p5.translate(this.state.pos.x, this.state.pos.y);
        p5.scale(this.state.scale);

        const numberOfShapes = this.state.getNumberOfShapes();
        const colours = ColorHelper.getColorsArray(numberOfShapes);

        // CONSISTENT SPEED REGARDLESS OF FRAMERATE
        const speed = (p5.frameCount / (numberOfShapes * 30)) * 2;

        // DRAW ALL SHAPES
        for (let i = 0; i < numberOfShapes; i++) {
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
}
