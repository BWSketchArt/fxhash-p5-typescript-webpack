import {p5} from "../index";

export class DrawLib {
    static point(x: number, y: number, color: string = '#00F', strokeW: number = 2) {
        p5.push();

        p5.strokeWeight(strokeW);
        p5.stroke(color);
        p5.point(x, y);

        p5.pop();
    }
}
