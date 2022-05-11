import * as PIXI from 'pixi.js'

class Game extends PIXI.Application {
  constructor({
    width = document.documentElement.clientWidth,
    height = document.documentElement.clientHeight,
    backgroundColor = 0x1099bb,
    resolution = window.devicePixelRatio || 1,
    antialias = false,
    autoDensity = false,
  } = {}) {
    super({ width, height, backgroundColor, resolution, antialias, autoDensity })

    this.width = width
    this.height = height

    /**
     * @Canvas view attributes
     */
    this.view.width = this.width
    this.view.height = this.height

    this.backgroundColor = backgroundColor
    this.resolution = resolution
    this.antialias = antialias
    this.autoDensity = autoDensity

    this.stage.sortableChildren = true

    this.properties = {
      resolutionX: this.width,
      resolutionY: this.height,

      ground: {
        tileSize: 48, // size of one ground tile
      },
    }

    this.containers = []

    this.activeCharacter = null

    this.currentTarget = null
    this.currentTargetInstance = null
    this.currentTargetTextInstance = null

    this.controls = {
      keys: {},
    }
  }
}

export default Game
