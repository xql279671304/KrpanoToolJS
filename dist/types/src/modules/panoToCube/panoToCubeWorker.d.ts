declare function clamp(x: any, min: any, max: any): number;
declare function mod(x: any, n: any): number;
declare function copyPixelNearest(read: any, write: any): (xFrom: any, yFrom: any, to: any) => void;
declare function copyPixelBilinear(read: any, write: any): (xFrom: any, yFrom: any, to: any) => void;
declare function kernelResample(read: any, write: any, filterSize: any, kernel: any): (xFrom: any, yFrom: any, to: any) => void;
declare function copyPixelBicubic(read: any, write: any): (xFrom: any, yFrom: any, to: any) => void;
declare function copyPixelLanczos(read: any, write: any): (xFrom: any, yFrom: any, to: any) => void;
declare function renderFace({ data: readData, face, rotation, interpolation, maxWidth }: {
    data: any;
    face: any;
    rotation?: number;
    interpolation?: string;
    maxWidth?: number;
}): void;
declare namespace orientations {
    function f(out: any, x: any, y: any): void;
    function b(out: any, x: any, y: any): void;
    function r(out: any, x: any, y: any): void;
    function l(out: any, x: any, y: any): void;
    function u(out: any, x: any, y: any): void;
    function d(out: any, x: any, y: any): void;
}
//# sourceMappingURL=panoToCubeWorker.d.ts.map