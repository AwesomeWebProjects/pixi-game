export default function () {
  let activeKeys = ''

  if (this.controls.keys.W) {
    activeKeys += 'W'
  }

  if (this.controls.keys.A) {
    activeKeys += 'A'
  }

  if (this.controls.keys.S) {
    activeKeys += 'S'
  }

  if (this.controls.keys.D) {
    activeKeys += 'D'
  }

  return activeKeys
}
