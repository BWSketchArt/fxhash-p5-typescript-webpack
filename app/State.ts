import {StateModule} from "../modules/StateModule";
import {controls} from "../app";

export class State extends StateModule {
    getNumberOfShapes(): number {
        return controls.circleSlider.getValue();
    }
    getColorValue(): number {
        return controls.colorSlider.getValue();
    }
    getZoomValue(): number {
        return controls.zoomSlider.getValue();
    }
}
