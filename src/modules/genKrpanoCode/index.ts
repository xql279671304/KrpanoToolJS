import {ILevelConfig} from '../makeTiles'

export enum EImageType {
    cube,
    tiles,
    shortTiles,
}

export function getKrpanoXml(sceneXml: string) {
    let xml = '<krpano version="1.20.10" title="Virtual Tour">'
    xml += '<include url="skin/vtourskin.xml" />'
    xml += sceneXml
    xml += '</krpano>'
    return xml
}

export function getSceneXml(params: any): string {
    const {title, dirName, sceneName, type, levelConfig} = params
    let xml = `<scene name="${sceneName}" title="${title}" onstart="" thumburl="/file/${dirName}/thumb.jpg" lat="" lng="" heading="">

                <view hlookat="0.0" vlookat="0.0" fovtype="MFOV" fov="100" maxpixelzoom="2.0" fovmin="90" fovmax="120" limitview="auto" />

                <preview url="/file/${dirName}/preview.jpg" />`

    xml += getImageXml(type, dirName, levelConfig)

    xml += `</scene>`

    return xml
}

export function getImageXml(type: EImageType, dirName: string, levelConfig?: ILevelConfig[]) {
    switch (type) {
        case EImageType.cube:
            return getCubeXml(dirName)
        case EImageType.tiles:
            return getTilesXml(dirName, false, levelConfig)
        case EImageType.shortTiles:
            return getTilesXml(dirName, true, levelConfig)
    }
}

/**
 * 获取立方体切图,图片标签代码
 * @param dirName 文件夹名称
 */
export function getCubeXml(dirName: string) {
    return `<image>
                <cube url="/file/${dirName}/pano_%s.jpg" />
            </image>`
}

/**
 * 获取瓦片切图图片标签的代码
 * @param dirName 文件夹名称
 * @param isShort 是否简写
 * @param levelConfig 瓦片图层级配置
 */
export function getTilesXml(dirName: string, isShort: boolean = false, levelConfig?: ILevelConfig[]): string {
    const V = formatNum('v', levelConfig)
    const H = formatNum('h', levelConfig)
    let xml = ''
    if (isShort) {
        const multires = [512]
        if (!levelConfig) return ''
        levelConfig.reverse().forEach(level => {
            multires.push(level.size)
        })
        xml = `<image>
                  <cube url="/file/${dirName}/%s/l%l/%${V}/l%l_%s_%${V}_%${H}.jpg" multires="${multires.toString()}" />
               </image>`
    } else {
        xml = ` <image multires="true" tilesize="512" type="CUBE">`
        levelConfig && levelConfig.forEach(level => {
            xml += ` <level tiledimageheight="${level.size}" tiledimagewidth="${level.size}">
                        <cube url="/file/${dirName}/%s/l${level.level}/%${V}/l${level.level}_%s_%${V}_%${H}.jpg" />
                    </level>`
        })
        xml += `</image>`
    }
    return xml
}

function formatNum(str: string, levelConfig): string {
    const maxTileSize = 512
    const max: number = Math.ceil(levelConfig[0].size / maxTileSize)
    return max >= 10 ? `0${str}` : str
}
