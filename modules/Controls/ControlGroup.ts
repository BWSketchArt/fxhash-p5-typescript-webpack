import {p5} from "../../app";

import {FloatPositionEnum} from "../Enum/FloatPositionEnum";

export default abstract class ControlGroup {
    protected abstract groupClass: string
    protected abstract container: p5.Element;

    getContainer() {
        return this.container;
    }

    abstract draw(): void

    abstract buildGroup(): p5.Element

    // ===================== After Build Only =====================

    setFloatPosition(floatPosition: FloatPositionEnum) {
        if (this.container === null)
            return;

        this.container.style('float', floatPosition);

        return this;
    }

    floatRight = () => this.setFloatPosition(FloatPositionEnum.RIGHT);
    floatLeft = () => this.setFloatPosition(FloatPositionEnum.LEFT);
}
