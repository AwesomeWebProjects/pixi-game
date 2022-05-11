import { CompositeTilemap } from '@pixi/tilemap'

export default function (data) {
  const tilemap = new CompositeTilemap()

  const [container] = this.getContainer('ground')

  container.addChild(tilemap)

  const { tileSize } = this.properties.ground

  const renderTileMap = async (region) => {
    const { map } = region

    const mapData = await map.then((mapData) => mapData)

    const fileNamePath = (file) => `${file}.png`

    for (let column = 0; column < mapData.length; column++) {
      for (let row = 0; row < mapData[column].length; row++) {
        if (typeof mapData[column][row] === 'string') {
          tilemap.tile(fileNamePath(mapData[column][row]), column * tileSize, row * tileSize)
        }

        if (typeof mapData[column][row] === 'object' && mapData[column][row].length) {
          mapData[column][row].forEach((tileItem) => {
            tilemap.tile(fileNamePath(tileItem), column * tileSize, row * tileSize)
          })
        }
      }
    }
  }

  const makeTilemap = () => {
    // Clear the tilemap, in case it is being reused.
    tilemap.clear()

    data.assets.forEach((region) => {
      renderTileMap(region)
    })
  }

  makeTilemap()

  console.log(tilemap)
}
