import {app, p5} from "../index";

interface ElementSize {
    width: number,
    height: number
}

export class Controls {
    numberOfShapes: p5.Element
    numberOfShapesText: p5.Element

    constructor(show: boolean = true) {
        if (show === false)
            return;

        this.createNumberOfShapes();
    }

    draw() {
        let sliderSize: ElementSize = this.numberOfShapes.size() as ElementSize;
        let textSize: ElementSize = this.numberOfShapesText.size() as ElementSize;

        let sliderX = p5.windowWidth / 2 - sliderSize.width / 2;
        let textX = sliderX + sliderSize.width + 10;

        let offset = (textSize.width + 10) / 2;

        this.numberOfShapes.position(-offset + sliderX, p5.windowHeight / 2 + app.state.canvas_h / 2 + 10);
        this.numberOfShapesText.position(-offset + textX, p5.windowHeight / 2 + app.state.canvas_h / 2 + 10)
        this.numberOfShapesText.html('Number of circles: ' + this.numberOfShapes.value());

        console.log(this.numberOfShapesText.size())  // width and height of element
    }

    private createNumberOfShapes() {
        this.numberOfShapesText = p5.createP('Number of circles').style('color', 'cyan');
        this.numberOfShapes = p5.createSlider(1, 30, 15, 1)
            .style("width", "100px")
            .style("height", "20px")
    }
}
