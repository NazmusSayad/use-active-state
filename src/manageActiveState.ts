let prevActiveSelector: any | string | Element = null
let prevActiveSetOpen: any | Function = null
const manageActiveState = (
  setState?: Function | any,
  selector?: string | Element
): void => {
  if (prevActiveSetOpen === setState) return

  if (prevActiveSetOpen) {
    prevActiveSetOpen(false)
    prevActiveSetOpen = null
    prevActiveSelector = null
  }

  if (setState instanceof Function) {
    prevActiveSetOpen = setState
    prevActiveSelector = selector
    setState(true)
  }
}

const handleInEvent = (e: any) => {
  if (
    (typeof prevActiveSelector === 'string' &&
      e.target.closest(prevActiveSelector)) ||
    (prevActiveSelector instanceof Element &&
      prevActiveSelector.contains(e.target))
  ) {
    return
  }

  manageActiveState()
}

window.addEventListener('contextmenu', manageActiveState)
window.addEventListener('blur', manageActiveState)
document.addEventListener('click', handleInEvent)
document.addEventListener('focusin', handleInEvent)

export default manageActiveState
