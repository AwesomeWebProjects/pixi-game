import Game from './game'

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

    // Todo: delete this line or add only in dev
    window.game = game
  }
}

initializeGame()
