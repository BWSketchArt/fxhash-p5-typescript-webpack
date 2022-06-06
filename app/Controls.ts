import {app} from "../app";

import {ControlBarModule} from "../modules/ControlBarModule";
import {SliderControl} from "../modules/Controls/SliderControl";
import {TextControl} from "../modules/Controls/TextControl";
import {AbstractControls} from "../modules/AbstractControls";

export class Controls extends AbstractControls {
    protected bars = {
        topRight: ControlBarModule.topRight(),
        topLeft: ControlBarModule.topLeft(),
        topCenter: ControlBarModule.topCenter(),
        bottom: ControlBarModule.bottom()
    }

    authorText: TextControl
    viewportText: TextControl
    colorSlider: SliderControl
    circleSlider: SliderControl
    zoomSlider: SliderControl

    constructor() {
        super({color: '#ededee'});

        this.createTopLeftBar(this.bars.topLeft);
        this.createTopCenterBar(this.bars.topCenter);
        this.createTopRightBar(this.bars.topRight);
        this.createBottomBar(this.bars.bottom);
    }

    private createTopLeftBar(bar: ControlBarModule) {
        this.colorSlider = bar.addSlider2({max: 255, text: "R"});
    }

    private createTopCenterBar(bar: ControlBarModule) {
        this.zoomSlider = bar.addSlider(-80, 120, 0, 1, 200);
    }

    private createTopRightBar(bar: ControlBarModule) {
        this.viewportText = bar.addDynamicText(() =>
            `Viewport: ${app.state.canvas_w} x ${app.state.canvas_h}`)
    }

    private createBottomBar(bar: ControlBarModule) {
        this.circleSlider = bar.addSlider(1, 30, 15, 1, 150)
            .setDynamicText((val: number) => `Number of circles: ${val}`);

        this.authorText = bar.addText('© BWSketchArt').floatRight();
    }
}
