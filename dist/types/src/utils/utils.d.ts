/**
 * 移除base64头部
 * @param base64Str base64 字符串
 */
export declare function removeBase64Header(base64Str: any): any;
export declare function urlToBinaryContent(url: any): Promise<unknown>;
export declare function getTimeDifference(time1: Date, time2: Date): string;
/**
 * 将传入的imageData进行缩放后，输出新的imageData
 * @param inputImageData 输入imageData
 * @param outputWidth 输出的宽度
 * @param outputHeight 输出的高度
 */
export declare function scaleImageData(inputImageData: ImageData, outputWidth: number, outputHeight: number): ImageData;
/**
 * convert imageData blur
 * @param imgData
 * @param sigma
 */
export declare function gaussBlur(imgData: ImageData, sigma?: number): ImageData;
/**
 * 获取随机字符串
 * @param length 字符串长度
 */
export declare function getUniqueId(length?: number): number;
export declare function isMac(): boolean;
export declare function isWin(): boolean;
//# sourceMappingURL=utils.d.ts.map