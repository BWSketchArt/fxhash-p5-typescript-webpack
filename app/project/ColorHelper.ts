import {p5} from "../../app";

export class ColorHelper {
    private static getColorVector(c: p5.Color) {
        return p5.createVector(
            p5.red(c),
            p5.green(c),
            p5.blue(c)
        );
    }

    public static rainbowColorBase() {
        return [
            p5.color('red'),
            p5.color('orange'),
            p5.color('yellow'),
            p5.color('green'),
            p5.color(38, 58, 150), // blue
            p5.color('indigo'),
            p5.color('violet')
        ];
    }

    public static getColorsArray(total: number, baseColorArray: p5.Color[] = null): p5.Color[] {

        if (baseColorArray == null) {
            baseColorArray = ColorHelper.rainbowColorBase();
        }
        var rainbowColors = baseColorArray.map(x => this.getColorVector(x));

        let colours = new Array<p5.Color>();
        for (var i = 0; i < total; i++) {
            var colorPosition = i / total;
            var scaledColorPosition = colorPosition * (rainbowColors.length - 1);

            var colorIndex = Math.floor(scaledColorPosition);
            var colorPercentage = scaledColorPosition - colorIndex;

            var nameColor = this.getColorByPercentage(rainbowColors[colorIndex],
                rainbowColors[colorIndex + 1],
                colorPercentage);

            colours.push(p5.color(nameColor.x, nameColor.y, nameColor.z))
        }

        return colours;
    }

    private static getColorByPercentage(firstColor: p5.Vector, secondColor: p5.Vector, percentage: number) {
        // assumes colors are p5js vectors
        var firstColorCopy = firstColor.copy();
        var secondColorCopy = secondColor.copy();

        var deltaColor = secondColorCopy.sub(firstColorCopy);
        var scaledDeltaColor = deltaColor.mult(percentage);
        return firstColorCopy.add(scaledDeltaColor);
    }
}
