import {PositionFloatEnum} from "./ControlsEnum";
import {p5} from "../../index";
import ControlGroup from "./ControlGroup";

export class TextControl extends ControlGroup {
    groupClass: string = "text";

    group: p5.Element
    span: p5.Element


    draw(): void {

    }

    buildGroup(): p5.Element {
        return undefined;
    }

    // -------------------- TEXT ---------------------

    textFn: () => string

    getText() {
        return this.textFn();
    }

    setText(text: string) {
        this.textFn = () => text;

        return this;
    }

    setDynamicText(fn: () => string) {
        this.textFn = fn;

        return this;
    }

    // ------------------------------------------------

}
