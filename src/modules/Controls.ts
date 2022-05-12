import {app, p5} from "../index";

export class Controls {
    numberOfShapes: p5.Element
    numberOfShapesText: p5.Element

    constructor(show: boolean = true) {
        if (show === false)
            return;

        this.createNumberOfShapes();
    }

    draw() {
        this.numberOfShapes.position(p5.windowWidth / 2 - 50, p5.windowHeight / 2 + app.state.canvas_h / 2 + 10);
        this.numberOfShapesText.position(p5.windowWidth / 2 - 50 + 100 + 10, p5.windowHeight / 2 + app.state.canvas_h / 2 + 10)
        this.numberOfShapesText.html('Number of circles: ' + this.numberOfShapes.value());
    }

    private createNumberOfShapes() {
        this.numberOfShapesText = p5.createP('Number of circles').style('color', 'cyan');
        this.numberOfShapes = p5.createSlider(1, 30, 15, 1)
            .style("width", "100px")
            .style("height", "20px")
    }
}
