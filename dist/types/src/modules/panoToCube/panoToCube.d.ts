import { ESplitImageType } from '../../@types';
export interface IFaceData {
    name: string;
    data: ImageData;
}
export interface ICubeImage {
    name: string;
    url: string;
}
export default class PanoToCube {
    private imageFile;
    canvas: HTMLCanvasElement;
    private ctx;
    private finishedCount;
    static interpolation: {
        linear: string;
        cubic: string;
        lanczos: string;
    };
    private facePositions;
    private tempFacePositions;
    faceDatas: IFaceData[];
    cbResolve: Function | undefined;
    cbReject: Function | undefined;
    private type;
    constructor(imageFile?: File);
    genCubeDatasAsync(type: ESplitImageType): Promise<IFaceData[]>;
    processImage(data: ImageData): void;
    renderFace(data: ImageData, faceIndex: number): void;
    /**
     * 生成立方体图 6 张
     * @param size 图片尺寸
     */
    genCubeImages(size?: number): ICubeImage[];
    /**
     * 生成缩略
     * @param faceName 某一面
     * @param size 图片大小
     */
    generateThumb(faceName?: string, size?: number): string;
    /**
     * 生成预览图：需要等到所有图片都生成完了才可以去调用
     * 预览图：参考krpano顺序：l f r b u d，自上而下
     */
    generatePreviewImage(): string;
    get imageWidth(): number;
    get imageHeight(): number;
}
//# sourceMappingURL=panoToCube.d.ts.map