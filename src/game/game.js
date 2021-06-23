import * as PIXI from 'pixi.js'
import { CompositeTilemap } from '@pixi/tilemap'
// import generateMap from 'utils/game/generate-map'
import { movement } from 'utils/game/controls'
import Character from './character'
import mapObject from './map'

let assetsUrl = 'assets'

if (process.env.NODE_ENV === 'production') {
  assetsUrl = process.env.APP_ASSETS_URL
}

const assetsToLoad = [
  {
    name: 'Actor1',
    type: 'character',
    assets: [
      {
        name: 'Actor1_face',
        type: 'png',
        path: `${assetsUrl}/rpgmaker/Actor1/Actor1_face.png`,
      },
      {
        name: 'Actor1_back',
        type: 'atlas',
        path: `${assetsUrl}/rpgmaker/Actor1/Actor1_back.json`,
      },
      {
        name: 'Actor1_front',
        type: 'atlas',
        path: `${assetsUrl}/rpgmaker/Actor1/Actor1_front.json`,
      },
      {
        name: 'Actor1_left',
        type: 'atlas',
        path: `${assetsUrl}/rpgmaker/Actor1/Actor1_left.json`,
      },
      {
        name: 'Actor1_right',
        type: 'atlas',
        path: `${assetsUrl}/rpgmaker/Actor1/Actor1_right.json`,
      },
    ],
  },
  {
    name: 'GUI',
    type: 'GUI',
    assets: [
      {
        name: 'Avatar',
        type: 'png',
        path: `${assetsUrl}/rpgmaker/GUI/avatar.png`,
      },
      {
        name: 'CenterNameBackground',
        type: 'png',
        path: `${assetsUrl}/rpgmaker/GUI/background-name-center.png`,
      },
    ],
  },
  {
    name: 'Thunder1',
    type: 'animation',
    assets: [
      {
        name: 'Thunder1',
        type: 'atlas',
        path: `${assetsUrl}/rpgmaker/animations/Thunder1/Thunder1.json`,
      },
    ],
  },
  {
    name: 'Outside_A2',
    type: 'region',
    assets: [
      {
        name: 'Outside_A2',
        type: 'atlas',
        path: `${assetsUrl}/rpgmaker/Outside_A2.json`,
        // map: generateMap(),
        map: mapObject,
      },
    ],
  },
]

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

    this.ticker.add(this.gameLoop)
  }

  initialize = () => {
    document.body.style.overflow = 'hidden'

    if (PIXI.utils.isWebGLSupported()) {
      console.log('Using WebGL')
    } else {
      console.log('Using Canvas')
    }

    this.initializeContainers()

    document.body.appendChild(this.view)
  }

  initializeContainers = () => {
    const interfaceContainer = new PIXI.Container()
    interfaceContainer.name = 'ui'
    interfaceContainer.zIndex = 2
    this.containers.push(interfaceContainer)

    const groundContainer = new PIXI.Container()
    groundContainer.name = 'ground'
    groundContainer.zIndex = 0
    this.containers.push(groundContainer)

    const charactersContainer = new PIXI.Container()
    charactersContainer.name = 'characters'
    charactersContainer.zIndex = 1
    this.containers.push(charactersContainer)

    const animationsContainer = new PIXI.Container()
    animationsContainer.name = 'animations'
    animationsContainer.zIndex = 1
    this.containers.push(animationsContainer)

    this.containers.forEach((container) => {
      this.stage.addChild(container)
    })
  }

  initializeLoadAssets = () => {
    assetsToLoad.forEach((item) => {
      item.assets.forEach((assetsItem) => {
        this.loader.add(assetsItem.name, assetsItem.path)
      })
    })

    this.loader.load(this.handleAssetsLoaded)
  }

  handleAssetsLoaded = (_, resources) => {
    assetsToLoad.forEach((item) => {
      if (item.type === 'region') {
        this.initializeGrounds(item)
      }

      if (item.type === 'character') {
        this.initializeCharacter(item)
      }

      if (item.type === 'animation') {
        this.initializeAnimation(item)
      }

      if (item.type === 'GUI') {
        this.initializeUI(item)
      }
    })
  }

  getContainer = (name) => this.containers.filter((item) => item.name === name)

  graphicUserInterface = () => ({
    CenterNameBackground: (sprite) => {
      sprite.anchor.set(0.5, 0)

      sprite.x = this.screen.width / 2
      sprite.y = -1

      const target = new PIXI.Text('', {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 0xffffff,
      })

      target.anchor.set(0.5, 0.5)
      target.x = 0
      target.y = sprite.height / 2.5
      target.name = 'targetName'

      sprite.alpha = 0

      sprite.addChild(target)

      this.currentTargetInstance = sprite
      this.currentTargetTextInstance = target
    },
    Avatar: (sprite) => {
      sprite.x = 0
      sprite.y = 3

      // @Todo: validate if avatar asset will be available here
      const avatar = this.activeCharacter.avatar

      avatar.anchor.set(0.5, 0.5)

      avatar.scale.x = -1

      avatar.x = sprite.width / 2
      avatar.y = sprite.height / 2.3

      avatar.width = sprite.width / 1.7
      avatar.height = sprite.height / 1.7

      sprite.addChild(avatar)

      sprite.alpha = 1
    },
  })

  initializeUI = (gui) => {
    const [container] = this.getContainer('ui')

    const resources = this.loader.resources

    gui.assets.forEach((item) => {
      const loadedAsset = resources[item.name]

      const uiSprite = new PIXI.Sprite(loadedAsset.texture)
      uiSprite.name = loadedAsset.name

      container.addChild(uiSprite)

      const GUImethod = this.graphicUserInterface()[loadedAsset.name]

      if (GUImethod) {
        GUImethod(uiSprite)
      }
    })
  }

  initializeCharacter(data) {
    const playerSheet = {}

    const [container] = this.getContainer('characters')

    const resources = this.loader.resources

    let characterAvatar = null

    data.assets.forEach((item) => {
      const resource = resources[item.name]
      const splittedName = resource.name.split('_')
      const direction = splittedName[1]

      if (direction === 'face') {
        const avatar = new PIXI.Sprite(resource.texture)
        avatar.name = 'avatar'

        characterAvatar = new PIXI.Sprite(avatar.texture)
      } else {
        playerSheet[direction] = resource.spritesheet.animations[resource.name]
        /**
         * Note: animationSpriteSheet need to be an array
         */
        playerSheet[`${direction}_stand`] = [
          resource.spritesheet.textures[`${resource.name}_1.png`],
        ]
      }
    })

    const character = new Character({
      game: this,
      name: 'Barion',
      spritesheet: playerSheet,
      avatar: characterAvatar,
    })

    character.anchor.set(0.5, 0.5)

    character.x = this.screen.width / 2
    character.y = this.screen.height / 2

    // set speed, start playback and add it to the stage
    character.animationSpeed = 0.075
    character.play()

    if (!this.activeCharacter) {
      this.activeCharacter = character
    }

    container.addChild(this.activeCharacter)
  }

  initializeAnimation = (data) => {
    const resources = this.loader.resources

    const [container] = this.getContainer('animations')

    let x = 0
    let y = 0

    const animationSpriteSheet = resources[data.name].spritesheet
    const animations = animationSpriteSheet.animations[data.name]

    const animation = new PIXI.AnimatedSprite(animations)

    animation.name = data.name

    animation.anchor.set(0.5, 1)

    animation.x = x += 192
    animation.y = y += 192

    // set speed, start playback and add it to the stage
    animation.animationSpeed = 0.2
    animation.loop = false
    // animation.play()

    animation.alpha = 0 // hide the sprite

    container.addChild(animation)
  }

  initializeGrounds = (data) => {
    const tilemap = new CompositeTilemap()

    const [container] = this.getContainer('ground')

    container.addChild(tilemap)

    const { tileSize } = this.properties.ground

    const renderTileMap = (region) => {
      const { map: mapData } = region

      const fileNamePath = (file) => `${file}.png`

      for (let column = 0; column < region.map.length; column++) {
        for (let row = 0; row < region.map[column].length; row++) {
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
  }

  initializeControls = () => {
    window.addEventListener('keydown', this.keysDown)
    window.addEventListener('keyup', this.keysUp)
  }

  keysDown = (event) => {
    const { keyCode } = event

    if (movement[keyCode] && !this.controls.keys[movement[keyCode]]) {
      this.controls.keys[movement[keyCode]] = true
    }
  }

  keysUp = (event) => {
    const { keyCode } = event

    if (movement[keyCode] && this.controls.keys[movement[keyCode]]) {
      this.controls.keys[movement[keyCode]] = false

      if (this.activeCharacter) {
        this.activeCharacter.switchAnimation('stand')
      }
    }
  }

  getActiveMovementKeys = () => {
    let activeKeys = ''

    if (this.controls.keys.W) {
      activeKeys += 'W'
    }

    if (this.controls.keys.A) {
      activeKeys += 'A'
    }

    if (this.controls.keys.S) {
      activeKeys += 'S'
    }

    if (this.controls.keys.D) {
      activeKeys += 'D'
    }

    return activeKeys
  }

  moveControls = () => {
    const activeMovementKeys = this.getActiveMovementKeys()

    switch (activeMovementKeys) {
      case 'W':
        this.activeCharacter.switchAnimation('back')
        break

      case 'A':
      case 'AS':
      case 'AW':
      case 'SA':
      case 'WA':
        this.activeCharacter.switchAnimation('left')
        break

      case 'S':
        this.activeCharacter.switchAnimation('front')
        break

      case 'D':
      case 'DS':
      case 'DW':
      case 'SD':
      case 'WD':
        this.activeCharacter.switchAnimation('right')
        break

      case 'AD':
      case 'DA':
      case 'WS':
      case 'SW':
        this.activeCharacter.switchAnimation('stand')
        break

      default:
        break
    }

    /**
     * Math.round fixes animation blinking when move
     */

    // top
    if (!this.controls.keys.S && this.controls.keys.W) {
      this.activeCharacter.y = Math.round(
        this.activeCharacter.y - this.activeCharacter.characterAttributes.speed,
      )
    }

    // left
    if (!this.controls.keys.D && this.controls.keys.A) {
      this.activeCharacter.x = Math.round(
        this.activeCharacter.x - this.activeCharacter.characterAttributes.speed,
      )
    }

    // down
    if (!this.controls.keys.W && this.controls.keys.S) {
      this.activeCharacter.y = Math.round(
        this.activeCharacter.y + this.activeCharacter.characterAttributes.speed,
      )
    }

    // right
    if (!this.controls.keys.A && this.controls.keys.D) {
      this.activeCharacter.x = Math.round(
        this.activeCharacter.x + this.activeCharacter.characterAttributes.speed,
      )
    }
  }

  updateTarget = () => {
    if (!this.currentTargetTextInstance || !this.currentTargetInstance) {
      return
    }

    if (this.currentTarget && this.currentTargetTextInstance.text !== this.currentTarget.name) {
      this.currentTargetTextInstance.text = this.currentTarget.name
      this.currentTargetInstance.alpha = 1
    }

    if (this.currentTarget === null && this.currentTargetTextInstance.text !== '') {
      this.currentTargetTextInstance.text = ''
      this.currentTargetInstance.alpha = 0
    }
  }

  gameLoop = () => {
    this.moveControls()
    this.updateTarget()
  }
}

export default Game
