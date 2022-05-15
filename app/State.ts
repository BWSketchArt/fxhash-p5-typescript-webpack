import {StateModule} from "../modules/StateModule";
import {oldControls} from "../app";

export class State extends StateModule {
    getNumberOfShapes(): number {
        return <number>oldControls.numberOfShapes.value();
    }
}
