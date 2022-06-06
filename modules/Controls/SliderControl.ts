import {p5} from "../../app";

import {PositionFloatEnum} from "../Enum/PositionFloatEnum";
import ControlGroup from "./ControlGroup";

export class SliderControl extends ControlGroup {
    groupClass: string = "slider";

    min: number
    max: number
    value: number
    step: number
    width: number
    textPosition: PositionFloatEnum

    container: p5.Element
    label: p5.Element
    slider: p5.Element

    constructor(min: number, max: number, value: number = 0, step: number = 1) {
        super();

        this.textPosition = PositionFloatEnum.LEFT;
        this.min = min;
        this.max = max;
        this.value = value;
        this.step = step;
    }

    getValue(): number {
        return <number>this.slider.value();
    }

    setTextPosition(textPosition: PositionFloatEnum) {
        this.textPosition = textPosition;
    }

    draw(): void {

    }

    buildGroup(): p5.Element {
        return undefined;
    }

    // -------------------- TEXT ---------------------

    getText() {
        return '';
    }

    setText(text: string) {
        this.getText = () => text;

        return this;
    }

    setDynamicText(fn: () => string) {
        this.getText = fn;

        return this;
    }

    // ------------------------------------------------


}
