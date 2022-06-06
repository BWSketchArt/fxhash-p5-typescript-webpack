import {p5} from "../../app";

import ControlGroup from "./ControlGroup";

export class TextControl extends ControlGroup {
    groupClass: string = "text";

    container: p5.Element
    span: p5.Element

    hasDynamicText: boolean = false;

    draw(): void {
        if (this.hasDynamicText)
            this.span.html(this.getText());
    }

    buildGroup(): p5.Element {
        this.container = this.buildContainer();

        this.span = p5.createElement('span', this.getText());
        this.container.child(this.span);

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
