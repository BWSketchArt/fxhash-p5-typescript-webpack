export type RGBType = `rgb(${number},${number},${number})`;
export type RGBAType = `rgba(${number},${number},${number},${number})`;
export type HEXType = `#${string}`;

export type ColorType = RGBType | RGBAType | HEXType;
