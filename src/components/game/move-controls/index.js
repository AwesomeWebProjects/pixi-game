export default function () {
  const activeMovementKeys = this.getActiveMovementKeys()

  switch (activeMovementKeys) {
    case 'W':
      this.activeCharacter.switchAnimation('back')
      break

    case 'A':
    case 'AS':
    case 'AW':
    case 'SA':
    case 'WA':
      this.activeCharacter.switchAnimation('left')
      break

    case 'S':
      this.activeCharacter.switchAnimation('front')
      break

    case 'D':
    case 'DS':
    case 'DW':
    case 'SD':
    case 'WD':
      this.activeCharacter.switchAnimation('right')
      break

    case 'AD':
    case 'DA':
    case 'WS':
    case 'SW':
      this.activeCharacter.switchAnimation('stand')
      break

    default:
      break
  }

  /**
   * Math.round fixes animation blinking when move
   */

  // top
  if (!this.controls.keys.S && this.controls.keys.W) {
    this.activeCharacter.y = Math.round(
      this.activeCharacter.y - this.activeCharacter.characterAttributes.speed,
    )
  }

  // left
  if (!this.controls.keys.D && this.controls.keys.A) {
    this.activeCharacter.x = Math.round(
      this.activeCharacter.x - this.activeCharacter.characterAttributes.speed,
    )
  }

  // down
  if (!this.controls.keys.W && this.controls.keys.S) {
    this.activeCharacter.y = Math.round(
      this.activeCharacter.y + this.activeCharacter.characterAttributes.speed,
    )
  }

  // right
  if (!this.controls.keys.A && this.controls.keys.D) {
    this.activeCharacter.x = Math.round(
      this.activeCharacter.x + this.activeCharacter.characterAttributes.speed,
    )
  }
}
