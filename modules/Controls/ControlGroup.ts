import {p5} from "../../app";

import {PositionFloatEnum} from "./ControlsEnum";

export default abstract class ControlGroup {
    abstract groupClass: string
    abstract group: p5.Element;

    private position: PositionFloatEnum;

    constructor() {
        this.position = PositionFloatEnum.LEFT;
    }

    setPosition(position: PositionFloatEnum) {
        this.position = position;
    }

    getPosition(): PositionFloatEnum {
        return this.position;
    }

    abstract draw(): void

    abstract buildGroup(): p5.Element

}
