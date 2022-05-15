import {app, p5} from "../app";

import {ControlsLocationEnum} from "./Controls/ControlsEnum";
import {SliderControl} from "./Controls/SliderControl";
import ControlGroup from "./Controls/ControlGroup";
import {TextControl} from "./Controls/TextControl";

export class ControlBarModule {
    className: string = "control-bar";
    offset: number = 10;

    private container: p5.Element;
    private readonly location: ControlsLocationEnum;
    private groups: ControlGroup[];

    constructor(location: ControlsLocationEnum, className?: string) {
        this.className = className || (location.toString() + '-' + this.className);
        this.location = location;
        this.groups = [];

        this.buildContainer();
    }

    private calcContainerTop(): number {
        const size = this.container.size() as P5ElementSize;

        if (this.location === ControlsLocationEnum.BOTTOM)
            return p5.windowHeight / 2 + app.state.canvas_h / 2 + this.offset;

        if (this.location === ControlsLocationEnum.TOP)
            return p5.windowHeight / 2 - app.state.canvas_h / 2 - size.height - this.offset;
    }

    private buildContainer() {
        const width = (100 - app.config.canvas_wm);

        this.container = p5.createDiv().class(this.className)
            .style('position', 'absolute')
            .style('width', width + '%')
            .style('background', 'red')
            .style('height', '20px')
    }

    addText(text: string) {
        const control = new TextControl();

        control.setText(text);
        control.buildGroup();

        this.groups.push(control);

        return control;
    }

    addDynamicText(fn: () => string) {
        const control = new TextControl();

        control.setDynamicText(fn);
        control.buildGroup();

        this.groups.push(control);

        return control;
    }

    addSlider(min: number, max: number, value: number = 0, step: number = 1) {
        const control = new SliderControl(min, max, value, step)

        control.buildGroup();

        this.groups.push(control)

        return control;
    }

    draw() {
        this.container.style('top', this.calcContainerTop() + 'px');

        this.groups.forEach(group => {
            // draw each group
        })
    }
}
