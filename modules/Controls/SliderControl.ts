import {p5} from "../../app";

import ControlGroup from "./ControlGroup";

export class SliderControl extends ControlGroup {
    groupClass: string = "slider";

    min: number
    max: number
    value: number
    step: number
    width: number

    container: p5.Element
    label: p5.Element
    slider: p5.Element

    hasDynamicText: boolean = false;

    constructor(min: number, max: number, value: number = 0, step: number = 1, width: number = 100) {
        super();

        this.min = min;
        this.max = max;
        this.value = value;
        this.step = step;
        this.width = width;
    }

    getValue(): number {
        return <number>this.slider.value();
    }

    draw(): void {
        if (this.hasDynamicText)
            this.label.html(this.getText());
    }

    buildGroup(): p5.Element {
        this.container = this.buildContainer();

        this.slider = p5.createSlider(this.min, this.max, this.value, this.step)
            .style("width", this.width + "px")
            .style("height", "20px")
        this.container.child(this.slider);

        this.label = p5.createElement('span', this.getText());
        this.container.child(this.label);

        return this.container;
    }

    // -------------------- TEXT ---------------------

    getText() {
        return '';
    }

    setText(text: string) {
        this.hasDynamicText = false;
        this.getText = () => text;

        return this;
    }

    setDynamicText(fn: () => string) {
        this.hasDynamicText = true;
        this.getText = fn;

        return this;
    }

    // ------------------------------------------------


}
