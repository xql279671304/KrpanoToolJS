import { IConvertPanoResult } from './@types';
/**
 * KrpanoToolJS工具，可在浏览器切图和还原图片
 */
export default class KrpanoToolJS {
    constructor();
    [key: string]: Function;
    private splitImage;
    /**
     * 生成立方体图（普通切图）
     * @param file input file
     */
    makeCube(file: File): Promise<IConvertPanoResult>;
    /**
     * 多分辨率切图
     * @param file input file
     */
    makeTiles(file: File): Promise<IConvertPanoResult>;
    /**
     * 同时生成立方体和多分辨率切图
     * @param file input file
     */
    makeCubeAndTiles(file: File): Promise<IConvertPanoResult>;
    /**
     * 检测图片是否符合(jpg,小于2万px)
     * @param file
     */
    checkFile(file: File): Promise<boolean | string>;
    /**
     * 多分辨率转为立方体图（敬请期待）
     */
    tilesToCube(): void;
    /**
     * 立方体图转为全景图（敬请期待）
     */
    cubeToPano(): void;
}
//# sourceMappingURL=index.d.ts.map