import {app, p5} from "../app";

import {ControlLocationEnum} from "./Enum/ControlLocationEnum";
import {SliderConfig, SliderControl} from "./Controls/SliderControl";
import ControlGroup from "./Controls/ControlGroup";
import {TextControl} from "./Controls/TextControl";
import {ItemsAlignEnum} from "./Enum/ItemsAlignEnum";

export class ControlBarModule {
    className: string = "control-bar";
    offset: number = 10;

    private itemsAlignment: ItemsAlignEnum;
    private container: p5.Element;
    private readonly location: ControlLocationEnum;
    private groups: ControlGroup[];

    /**
     * @param location Location (top, right, bottom, left)
     * @param itemsAlignment Elements alignment (left, center, right)
     */
    constructor(location: ControlLocationEnum = ControlLocationEnum.TOP,
                itemsAlignment: ItemsAlignEnum = ItemsAlignEnum.LEFT) {
        this.className = (location.toString() + '-' + this.className);
        this.location = location;
        this.itemsAlignment = itemsAlignment;
        this.groups = [];

        this.buildContainer();
    }

    // =========================== STATIC ===========================

    static top(itemsAlignment: ItemsAlignEnum = ItemsAlignEnum.LEFT) {
        return new this(ControlLocationEnum.TOP, itemsAlignment);
    }

    static bottom(itemsAlignment: ItemsAlignEnum = ItemsAlignEnum.LEFT) {
        return new this(ControlLocationEnum.BOTTOM, itemsAlignment);
    }

    static topCenter = () => new this(ControlLocationEnum.TOP, ItemsAlignEnum.CENTER);
    static topRight = () => new this(ControlLocationEnum.TOP, ItemsAlignEnum.RIGHT);
    static topLeft = () => new this(ControlLocationEnum.TOP, ItemsAlignEnum.LEFT);
    static bottomLeft = () => new this(ControlLocationEnum.BOTTOM, ItemsAlignEnum.LEFT);
    static bottomCenter = () => new this(ControlLocationEnum.BOTTOM, ItemsAlignEnum.CENTER);
    static bottomRight = () => new this(ControlLocationEnum.BOTTOM, ItemsAlignEnum.RIGHT);

    // =========================== PUBLIC ===========================

    addText(text: string): TextControl {
        const control = new TextControl();

        control.setText(text);

        return this.buildGroup(control) as TextControl;
    }

    addDynamicText(fn: () => string): TextControl {
        const control = new TextControl();

        control.setDynamicText(fn);

        return this.buildGroup(control) as TextControl;
    }

    addSlider(min: number, max: number, value: number = 0, step: number = 1, width: number = 100): SliderControl {
        const control = new SliderControl(min, max, value, step, width)

        return this.buildGroup(control) as SliderControl
    }

    addSlider2(config: SliderConfig): SliderControl {
        const control = new SliderControl(config.min, config.max, config.value, config.step, config.width)

        control.setText(config.text as string);

        return this.buildGroup(control) as SliderControl
    }

    getContainer() {
        return this.container;
    }

    draw() {
        this.container.style('top', this.calcContainerTop() + 'px');

        this.groups.forEach(group => {
            group.draw();
        })
    }

    // =========================== PRIVATE ===========================

    private calcContainerTop(): number {
        const size = this.container.size() as P5ElementSize;

        if (this.location === ControlLocationEnum.BOTTOM)
            return p5.windowHeight / 2 + app.state.canvas_h / 2 + this.offset;

        if (this.location === ControlLocationEnum.TOP)
            return p5.windowHeight / 2 - app.state.canvas_h / 2 - size.height - this.offset;
    }

    private buildContainer() {
        const width = (100 - app.config.canvas_wm);

        this.container = p5.createDiv().class(this.className)
            .style('text-align', this.itemsAlignment.toLocaleLowerCase())
            .style('position', 'absolute')
            .style('width', width + '%')
            .style('height', '20px')
    }

    private buildGroup(control: ControlGroup): ControlGroup {
        control.buildGroup();
        this.groups.push(control);
        this.container.child(control.getContainer());

        return control;
    }
}
