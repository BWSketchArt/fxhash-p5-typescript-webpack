import {p5} from "../index";

export class Controls {
    numberOfShapes: p5.Element

    constructor(show: boolean = true) {
        if (show === false)
            return;

        this.createNumberOfShapes();
    }

    private createNumberOfShapes() {
        this.numberOfShapes = p5.createSlider(1, 30, 15, 1)
            .position(10, 10)
            .style("width", "100px");
    }
}
