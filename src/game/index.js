import Game from 'components/game'

const initializeGame = async () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const game = new Game()

    new Promise((resolve) => {
      game.initialize()

      resolve()
    })
      .then(() => {
        game.initializeLoadAssets()
      })
      .then(() => {
        game.initializeControls()
      })

    if (process.env.NODE_ENV === 'development') {
      window.game = game
    }
  }
}

initializeGame()
