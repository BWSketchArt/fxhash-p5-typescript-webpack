// fix for error: Cannot find namespace 'p5'
import module = require('p5');
// @ts-ignore
export = module;
export as namespace p5;

declare global {
    // missing interface for p5.Element.prototype.size()
    export interface P5ElementSize {
        width: number,
        height: number
    }
}
