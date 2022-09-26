# krpnao-js-tools

---

## 介绍：一款能在浏览器使用的高性能的krpano Tools，使用JavaScript切图、还原全景图等


## 一、功能介绍

---
### 在浏览器中将全景图转为立方体图、瓦片图

* 切图的逻辑、缩略图、预览图均以krpano为标准，如果是使用krpano来开发全景的，可以直接使用，暂时未开发自定义切图的参数，后续可能会开放。

1. 生成立方体图片（6个面）
2. 生成多分辨率瓦片图（层级根据图片分辨率自动调节）
3. 生成场景预览图preview.jpg
4. 生成场景缩略图thumb.jpg
5. 生成krpano代码：场景代码、立方体image节点代码、多分辨率image节点代码（包含简写和完整两种写法）
6. 生成的图片和场景，均无水印

## 二、如何使用

---

### 安装依赖
```shell
npm i @krpano/js-tools
```

### 切图，example in Vue：
```vue
<template>
    <input type="file" name="test" accept="image/jpeg,image/png">
</template>

<script>

// （可选）用于下载文件
import FileSaver from 'file-saver'
// 导入
import KrpanoToolJS from '@krpano/js-tools'

export default {
    methods: {
        onFileChange(e) {
            const file = e.target.files[0]
            if (!file) return
            
            const krpanoTool = new KrpanoToolJS()
            krpanoTool.makeTiles(file).then(result => {
                // result 的具体值看下面介绍
                // 可选，可以使用FileSaver，把内容下载下来
                FileSaver.saveAs(result.content)
            })
        },
    }
}
</script>

```
### 切图的返回值
```typescript
// result对象
interface IConvertPanoResult {
    dirName: string;  // 生成根目录文件夹名称
    content: Blob; // 场景图片、缩略图、预览图 的Blob文件，可以用于上传到后台或者下载到本地
    code: {  // 代码
        scene: string;  // 整个场景的代码
        cubeImage: string; // 立方体切图image节点的代码
        tileImage: string; // 多分辨率切图image节点的代码
        shortTileImage: string; // (简写)多分辨率切图image节点的代码
    };
}
```

### 切图方法
```typescript
// 生成立方体图（6张）、缩略图、预览图
makeCube(file: File): Promise<IConvertPanoResult>;

// 生成多分辨率瓦片图、缩略图、预览图
makeTiles(file: File): Promise<IConvertPanoResult>;

// 同时生成立方体图、多分辨率瓦片图
makeCubeAndTiles(file: File): Promise<IConvertPanoResult>;
```

## 三、迭代计划（敬请期待）

---

1. 在浏览器爬取图片
2. **还原全景图**

