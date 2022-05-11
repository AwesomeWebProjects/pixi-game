import { generatePlainMap } from 'utils/game/generate-map'

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
        map: generatePlainMap('Outside_A2-0'),
        // map: mapObject,
      },
    ],
  },
]

export default function () {
  assetsToLoad.forEach((item) => {
    item.assets.forEach((assetsItem) => {
      this.loader.add(assetsItem.name, assetsItem.path)
    })
  })

  this.loader.load(this.handleAssetsLoaded)
}
