import Character from 'components/character'
import * as PIXI from 'pixi.js'

export default function (data) {
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
      playerSheet[`${direction}_stand`] = [resource.spritesheet.textures[`${resource.name}_1.png`]]
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
