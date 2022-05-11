import * as PIXI from 'pixi.js'

export default function (gui) {
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
