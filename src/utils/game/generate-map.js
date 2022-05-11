export const generateMap = async () => {
  /**
   * @todo refactor those const's
   */
  const tileSize = 48 // size of one tile

  const resolutionX = document.documentElement.clientWidth
  const resolutionY = document.documentElement.clientHeight

  const maxSquaresHorizontal = parseInt(resolutionX / tileSize)
  const maxSquaresVertical = parseInt(resolutionY / tileSize)

  console.log({ maxSquaresHorizontal, maxSquaresVertical })

  const map = []

  // for (let column = 0; column < maxSquaresVertical; column++) {
  //   map.push([])
  //   for (let row = 0; row < maxSquaresHorizontal; row++) {
  //     map[column].push(0)
  //   }
  // }

  return map
}

export const generatePlainMap = async (tileName) => {
  /**
   * @todo refactor those const's
   */
  const tileSize = 48 // size of one tile

  const resolutionX = document.documentElement.clientWidth
  const resolutionY = document.documentElement.clientHeight

  const maxSquaresHorizontal = Math.ceil(resolutionX / tileSize)
  const maxSquaresVertical = Math.ceil(resolutionY / tileSize)

  const map = []

  for (let column = 0; column < maxSquaresHorizontal; column++) {
    map.push([tileName])
    for (let row = 0; row < maxSquaresVertical; row++) {
      map[column].push(tileName)
    }
  }

  return map
}
