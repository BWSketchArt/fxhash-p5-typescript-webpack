import {app, p5} from "../app";

import {ControlLocationEnum} from "./Enum/ControlLocationEnum";
import {SliderControl} from "./Controls/SliderControl";
import ControlGroup from "./Controls/ControlGroup";
import {TextControl} from "./Controls/TextControl";
import {TextAlignEnum} from "./Enum/TextAlignEnum";

export class ControlBarModule {
    className: string = "control-bar";
    offset: number = 10;

    private elPosition: TextAlignEnum;
    private container: p5.Element;
    private readonly location: ControlLocationEnum;
    private groups: ControlGroup[];

    /**
     * @param location Location (top, right, bottom, left)
     * @param elPosition Elements alignment (left, center, right)
     */
    constructor(location: ControlLocationEnum, elPosition: TextAlignEnum = TextAlignEnum.LEFT) {
        this.className = (location.toString() + '-' + this.className);
        this.location = location;
        this.elPosition = elPosition;
        this.groups = [];

        this.buildContainer();
    }

    private calcContainerTop(): number {
        const size = this.container.size() as P5ElementSize;

        if (this.location === ControlLocationEnum.BOTTOM)
            return p5.windowHeight / 2 + app.state.canvas_h / 2 + this.offset;

        if (this.location === ControlLocationEnum.TOP)
            return p5.windowHeight / 2 - app.state.canvas_h / 2 - size.height - this.offset;
    }

    private buildContainer() {
        const width = (100 - app.config.canvas_wm);

        this.container = p5.createDiv().class(this.className)
            .style('text-align', this.elPosition.toLocaleLowerCase())
            .style('position', 'absolute')
            .style('width', width + '%')
            .style('height', '20px')
    }

    private buildGroup(control: ControlGroup): ControlGroup {
        control.buildGroup();
        this.groups.push(control);
        this.container.child(control.getContainer());

        return control;
    }

    addText(text: string): TextControl {
        const control = new TextControl();

        control.setText(text);

        return this.buildGroup(control) as TextControl;
    }

    addDynamicText(fn: () => string): TextControl {
        const control = new TextControl();

        control.setDynamicText(fn);

        return this.buildGroup(control) as TextControl;
    }

    addSlider(min: number, max: number, value: number = 0, step: number = 1): SliderControl {
        const control = new SliderControl(min, max, value, step)

        return this.buildGroup(control) as SliderControl
    }

    draw() {
        this.container.style('top', this.calcContainerTop() + 'px');

        this.groups.forEach(group => {
            group.draw();
        })
    }
}
