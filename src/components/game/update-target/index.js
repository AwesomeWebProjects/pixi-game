export default function () {
  if (!this.currentTargetTextInstance || !this.currentTargetInstance) {
    return
  }

  if (this.currentTarget && this.currentTargetTextInstance.text !== this.currentTarget.name) {
    this.currentTargetTextInstance.text = this.currentTarget.name
    this.currentTargetInstance.alpha = 1
  }

  if (this.currentTarget === null && this.currentTargetTextInstance.text !== '') {
    this.currentTargetTextInstance.text = ''
    this.currentTargetInstance.alpha = 0
  }
}
