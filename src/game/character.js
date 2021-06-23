import * as PIXI from 'pixi.js'

class Character extends PIXI.AnimatedSprite {
  constructor({ game, name, avatar, spritesheet, spritesheetDirection = 'front_stand' }) {
    super(spritesheet[spritesheetDirection])

    this.game = game

    this.name = name
    this.avatar = avatar

    this.characterNameInstance = null
    this.characterLifeInstance = null

    this.interactive = true
    this.buttonMode = true

    this.characterAttributes = {
      healthPoints: 100,
      speed: 1.75,
    }

    this.characterAnimations = {
      spritesheet,
      spritesheetDirection,
    }

    this.initialize()

    game.ticker.add(this.characterLoop)
  }

  initialize = () => {
    if (this.parent === null) {
      setTimeout(() => {
        this.initialize()
      }, 30)
      return
    }

    this.initializeName()
    this.initializeLife()
    this.initializeEvents()
  }

  initializeEvents = () => {
    this
      // Mouse & touch events are normalized into
      // the pointer* events for handling different
      // button events.
      .on('pointerdown', this.onButtonDown)
      .on('pointerup', this.onButtonUp)
      .on('pointerupoutside', this.onButtonUp)
      .on('pointerover', this.onButtonOver)
      .on('pointerout', this.onButtonOut)

    // Use mouse-only events
    // .on('mousedown', onButtonDown)
    // .on('mouseup', onButtonUp)
    // .on('mouseupoutside', onButtonUp)
    // .on('mouseover', onButtonOver)
    // .on('mouseout', onButtonOut)

    // Use touch-only events
    // .on('touchstart', onButtonDown)
    // .on('touchend', onButtonUp)
    // .on('touchendoutside', onButtonUp)
  }

  initializeName = () => {
    this.characterNameInstance = new PIXI.Text(this.name, {
      fontFamily: 'Arial',
      fontSize: 16,
      fill: 0xffffff,
    })

    this.characterNameInstance.anchor.set(0.5, 0.5)
    this.characterNameInstance.x = this.x
    this.characterNameInstance.y = this.y - 36
    this.characterNameInstance.name = `${this.name}_textName`

    this.parent.addChild(this.characterNameInstance)
  }

  initializeLife = () => {
    const x = this.characterNameInstance.x
    const y = this.characterNameInstance.y - 20
    const width = 58
    const height = 8

    this.characterLifeInstance = new PIXI.Container()
    this.characterLifeInstance.position.set(x - width / 2, y)

    // Create the red background rectangle
    const innerBar = new PIXI.Graphics()
    innerBar.beginFill(0xff3300)
    innerBar.drawRect(0, 0, width, height)
    innerBar.endFill()
    innerBar.name = 'health-background'
    this.characterLifeInstance.addChild(innerBar)

    // Create the front green rectangle
    const outerBar = new PIXI.Graphics()
    outerBar.beginFill(0x33ff00)
    outerBar.drawRect(0, 0, width, height)
    outerBar.endFill()
    outerBar.name = 'health'
    this.characterLifeInstance.addChild(outerBar)

    this.parent.addChild(this.characterLifeInstance)
  }

  switchAnimation = (sheetDirection) => {
    const spritesheetDirection = this.characterAnimations.spritesheetDirection
    let direction = sheetDirection

    if (sheetDirection === 'stand') {
      direction = `${spritesheetDirection}_stand`
    }

    if (this.characterAnimations.spritesheet[direction] && spritesheetDirection !== direction) {
      this.characterAnimations.spritesheetDirection = direction

      this.textures = this.characterAnimations.spritesheet[direction]
      this.play()
    }
  }

  /**
   * Update health points
   */
  updateHP = () => {
    const [hp] = this.characterLifeInstance.children.filter((item) => item.name === 'health')
    hp.width = (58 * this.characterAttributes.healthPoints) / 100 // 58 width = 100%
  }

  /**
   * Events
   */
  onButtonDown = (event) => {
    // console.log(event)
    this.game.currentTarget = this
  }

  onButtonUp = (event) => {
    // console.log(event)
  }

  onButtonUp = (event) => {
    // console.log(event)
  }

  onButtonOver = (event) => {
    // console.log(event)
  }

  onButtonOut = (event) => {
    // console.log(event)
  }

  /**
   * Every game tick will call this function
   */
  characterLoop = (delta) => {
    if (this.characterNameInstance) {
      this.characterNameInstance.x = this.x
      this.characterNameInstance.y = this.y - 36
    }

    if (this.characterLifeInstance) {
      const width = 58
      const x = Math.round(this.characterNameInstance.x - width / 2)
      const y = Math.round(this.characterNameInstance.y - 20)

      this.characterLifeInstance.position.set(x, y)

      this.updateHP()
    }
  }
}

export default Character
