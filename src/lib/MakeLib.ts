import {app, p5} from "../index";
import * as P5 from 'p5';

export class MakeLib {
    vectorFromAngle(angle: number, height: number) {
        angle = (app.config.angle_mode === p5.DEGREES) ? p5.radians(angle) : angle;

        return P5.Vector.fromAngle(angle, height)
    }

    vectorFromAngleAtPos(angle: number, height: number, x: number = 0, y: number = 0) {
        p5.push()

        p5.translate(x, y)

        angle = (app.config.angle_mode === p5.DEGREES) ? p5.radians(angle) : angle;

        let v = P5.Vector.fromAngle(angle, height)

        p5.pop()

        v.x = v.x + x
        v.y = v.y + y

        return v
    }
}