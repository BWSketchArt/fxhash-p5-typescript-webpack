import {p5} from "../app";

export function doIntersectLineCircle(p1: p5.Vector, p2: p5.Vector, cpt: p5.Vector, r: number) {
    let sign = function (x: number) {
        return x < 0.0 ? -1 : 1;
    };

    let x1 = p1.copy().sub(cpt);
    let x2 = p2.copy().sub(cpt);

    let dv = x2.copy().sub(x1)
    let dr = dv.mag();
    let D = x1.x * x2.y - x2.x * x1.y;

    // evaluate if there is an intersection
    let di = r * r * dr * dr - D * D;
    if (di < 0.0)
        return [];

    let t = p5.sqrt(di);

    let ip: p5.Vector[] = [];

    ip.push(p5.createVector(D * dv.y + sign(dv.y) * dv.x * t, -D * dv.x + p5.abs(dv.y) * t).div(dr * dr).add(cpt));

    if (di > 0.0) {
        ip.push(p5.createVector(D * dv.y - sign(dv.y) * dv.x * t, -D * dv.x - p5.abs(dv.y) * t).div(dr * dr).add(cpt));
    }

    return ip;
}

