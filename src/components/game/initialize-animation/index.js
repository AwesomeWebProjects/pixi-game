import * as PIXI from 'pixi.js'

export default function (data) {
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
