export declare enum EInputDataType {
    file = 0,
    imageData = 1
}
export interface IOptions {
    inputData: ImageData | File;
    type?: EInputDataType;
    imageWidth: number;
    imageHeight: number;
    panoWidth: number;
    faceName: string;
}
export interface ILevelConfig {
    level: number;
    size: number;
}
export interface ITiles {
    path: string;
    base64: string;
}
export declare type TTilesList = ITiles[];
export default class MakeTiles {
    levelConfig: ILevelConfig[];
    readonly maxTileSize = 512;
    private imageData;
    private panoWidth;
    private imageWidth;
    private imageHeight;
    private faceName;
    tiles: TTilesList;
    constructor(options: IOptions);
    private analyzeImageLevel;
    generateAsync(): Promise<TTilesList>;
    generate(): TTilesList;
    generateThumbAsync(width?: number, height?: number): Promise<unknown>;
    generateThumb(width?: number, height?: number): string;
    formatNum(cur: number): string;
}
//# sourceMappingURL=index.d.ts.map