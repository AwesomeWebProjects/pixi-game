import * as PIXI from 'pixi.js'

export default function () {
  document.body.style.overflow = 'hidden'

  if (PIXI.utils.isWebGLSupported()) {
    console.log('Using WebGL')
  } else {
    console.log('Using Canvas')
  }

  this.initializeContainers()

  const prototypeKeys = Object.keys(this.constructor.prototype)

  // bind all methods into the same scope
  prototypeKeys.forEach((key) => {
    this.constructor.prototype[key] = this.constructor.prototype[key].bind(this)
  })

  // initialize game loop
  this.ticker.add(this.constructor.prototype.gameLoop)

  // attach the view to the DOM
  document.body.appendChild(this.view)
}
