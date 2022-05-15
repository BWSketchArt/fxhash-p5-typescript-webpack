import {p5} from "../app";

import {ConfigModule} from "../modules/ConfigModule";

export class Config extends ConfigModule {
    constructor() {
        super();

        this.name = "Gears"
        this.author = "BWSketchArt"
        this.framerate = 30
        this.rect_mode = p5.CENTER
    }
}
