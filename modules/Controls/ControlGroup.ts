import {p5} from "../../app";

import {PositionFloatEnum} from "../Enum/PositionFloatEnum";

export default abstract class ControlGroup {
    protected abstract groupClass: string
    protected abstract container: p5.Element;

    private position: PositionFloatEnum;

    constructor() {
        this.position = PositionFloatEnum.LEFT;
    }

    getContainer() {
        return this.container;
    }

    getGroupClass() {
        return this.groupClass;
    }

    setFloatDirection(position: PositionFloatEnum) {
        this.position = position;
    }

    getFloatDirection(): PositionFloatEnum {
        return this.position;
    }

    abstract draw(): void

    abstract buildGroup(): p5.Element

}
