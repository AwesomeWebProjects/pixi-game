import * as PIXI from 'pixi.js'

export default function () {
  return {
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
  }
}
