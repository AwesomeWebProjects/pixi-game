import { movement } from 'utils/game/controls'

export default function (event) {
  const { keyCode } = event

  if (movement[keyCode] && this.controls.keys[movement[keyCode]]) {
    this.controls.keys[movement[keyCode]] = false

    if (this.activeCharacter) {
      this.activeCharacter.switchAnimation('stand')
    }
  }
}
