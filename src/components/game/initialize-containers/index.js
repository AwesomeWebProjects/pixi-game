import * as PIXI from 'pixi.js'

export default function () {
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
