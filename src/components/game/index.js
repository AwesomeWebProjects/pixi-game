import Constructor from './constructor'
import gameLoop from './game-loop'
import getActiveMovementKeys from './get-active-movement-keys'
import getContainer from './get-container'
import graphicUserInterface from './graphic-user-interface'
import handleAssetsLoaded from './handle-assets-loaded'
import initialize from './initialize'
import initializeAnimation from './initialize-animation'
import initializeCharacter from './initialize-character'
import initializeContainers from './initialize-containers'
import initializeControls from './initialize-controls'
import initializeGrounds from './initialize-grounds'
import initializeLoadAssets from './initialize-load-assets'
import initializeUI from './initialize-ui'
import keysDown from './keys-down'
import keysUp from './keys-up'
import moveControls from './move-controls'
import updateTarget from './update-target'

Constructor.prototype.gameLoop = gameLoop
Constructor.prototype.getActiveMovementKeys = getActiveMovementKeys
Constructor.prototype.getContainer = getContainer
Constructor.prototype.graphicUserInterface = graphicUserInterface
Constructor.prototype.handleAssetsLoaded = handleAssetsLoaded
Constructor.prototype.initialize = initialize
Constructor.prototype.initializeAnimation = initializeAnimation
Constructor.prototype.initializeCharacter = initializeCharacter
Constructor.prototype.initializeContainers = initializeContainers
Constructor.prototype.initializeControls = initializeControls
Constructor.prototype.initializeGrounds = initializeGrounds
Constructor.prototype.initializeLoadAssets = initializeLoadAssets
Constructor.prototype.initializeUI = initializeUI
Constructor.prototype.keysDown = keysDown
Constructor.prototype.keysUp = keysUp
Constructor.prototype.moveControls = moveControls
Constructor.prototype.updateTarget = updateTarget

export default Constructor
