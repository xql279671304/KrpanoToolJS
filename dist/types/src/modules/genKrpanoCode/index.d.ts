import { ILevelConfig } from '../makeTiles';
export declare enum EImageType {
    cube = 0,
    tiles = 1,
    shortTiles = 2
}
export declare function getKrpanoXml(sceneXml: string): string;
export declare function getSceneXml(params: any): string;
export declare function getImageXml(type: EImageType, dirName: string, levelConfig?: ILevelConfig[]): string;
/**
 * 获取立方体切图,图片标签代码
 * @param dirName 文件夹名称
 */
export declare function getCubeXml(dirName: string): string;
/**
 * 获取瓦片切图图片标签的代码
 * @param dirName 文件夹名称
 * @param isShort 是否简写
 * @param levelConfig 瓦片图层级配置
 */
export declare function getTilesXml(dirName: string, isShort?: boolean, levelConfig?: ILevelConfig[]): string;
//# sourceMappingURL=index.d.ts.map