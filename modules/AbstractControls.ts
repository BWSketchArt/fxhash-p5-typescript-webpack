import {ControlBarModule} from "./ControlBarModule";
import {ColorType} from "./Types/ColorType";

export interface ControlsConfig {
    color?: ColorType;
}

export abstract class AbstractControls {
    protected abstract bars: { [key: string]: ControlBarModule };

    private readonly config: ControlsConfig;

    protected constructor(config?: ControlsConfig) {
        this.config = config;
    }

    draw() {
        Object.keys(this.bars).forEach(barName => {
            const bar = this.bars[barName] as ControlBarModule;

            bar.draw();

            if (this.config === void 0)
                return;

            if (this.config.color !== null)
                bar.getContainer().style('color', this.config.color);
        })
    }

}
