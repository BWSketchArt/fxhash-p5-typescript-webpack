import {app, p5} from "../app";

interface ElementSize {
    width: number,
    height: number
}

export class OldControls {
    numberOfShapes: p5.Element
    numberOfShapesText: p5.Element
    container: p5.Element;

    constructor(show: boolean = true) {
        if (show === false)
            return;

        this.createNumberOfShapes();
    }

    draw() {
        let sliderSize: ElementSize = this.numberOfShapes.size() as ElementSize;
        //let textSize: ElementSize = this.numberOfShapesText.size() as ElementSize;

        let sliderX = p5.windowWidth / 2 - sliderSize.width / 2;
        let textX = sliderX + sliderSize.width + 10;

       // let offset = (textSize.width + 10) / 2;

        //this.numberOfShapes.position(-offset + sliderX, p5.windowHeight / 2 + app.state.canvas_h / 2 + 10);
        //this.numberOfShapesText.position(-offset + textX, p5.windowHeight / 2 + app.state.canvas_h / 2 + 10)
        //this.numberOfShapesText.html('Number of circles: ' + this.numberOfShapes.value());
        this.container.style('top', (p5.windowHeight / 2 + app.state.canvas_h / 2 + 10) + 'px');
    }

    private createNumberOfShapes() {
        this.container = p5.createDiv().style('position', 'absolute').style('width', '90%');

        let group = p5.createDiv().class('group');

        this.container.child(group);

        //this.numberOfShapesText = p5.createElement('label', 'Number of circles')
        //    .style('color', 'cyan').style('float', 'right').style('padding', '0 5px');

        this.numberOfShapes = p5.createSlider(1, 30, 15, 1)
            .style("width", "100px")
            .style("height", "20px")
            .style('float', 'right')

        //group.child(this.numberOfShapesText);
        group.child(this.numberOfShapes);
    }
}
