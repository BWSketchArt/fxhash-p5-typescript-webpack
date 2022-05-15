import {app} from "../app";

import {ControlBarModule} from "../modules/ControlBarModule";
import {ControlsLocationEnum} from "../modules/Controls/ControlsEnum";
import {SliderControl} from "../modules/Controls/SliderControl";
import {TextControl} from "../modules/Controls/TextControl";

export class Controls {
    topBar: ControlBarModule
    bottomBar: ControlBarModule

    author: TextControl
    viewport: TextControl
    slider: SliderControl

    constructor() {
        this.topBar = new ControlBarModule(ControlsLocationEnum.TOP);
        this.bottomBar = new ControlBarModule(ControlsLocationEnum.BOTTOM);

        // ------------- Top Bar -------------

        this.viewport = this.topBar.addDynamicText(
            () => `Viewport: ${app.state.canvas_w} x ${app.state.canvas_h}`)

        // ------------- Bottom Bar -------------

        this.author = this.bottomBar.addText('© BWSketchArt')

        this.slider = this.bottomBar.addSlider(1, 30, 15).setDynamicText(
            () => `Number of circles: ${this.slider.getValue()}`)
    }

    draw() {
        this.topBar.draw();
        this.bottomBar.draw();
    }
}
