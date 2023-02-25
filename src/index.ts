import { useCallback, useRef, useState } from 'react'
import manageActiveState from './manageActiveState.js'

type Selector = string | { current: Element | undefined }
type Result = [
  boolean,
  (boolean?: boolean) => boolean,
  React.MutableRefObject<Element | undefined>
]

export default (selector?: Selector): Result => {
  const [active, setActive] = useState(false)
  const contentRef = useRef<Element>()
  const activeRef = useRef({ active, selector })
  activeRef.current.active = active
  activeRef.current.selector = selector

  const manageState = useCallback((showOrHide?: boolean): boolean => {
    const containerInfo =
      contentRef.current ??
      // @ts-ignore
      activeRef.current.selector?.current ??
      activeRef.current.selector

    if (
      typeof containerInfo !== 'string' &&
      !(containerInfo instanceof Element)
    ) {
      return false
    }

    if (typeof showOrHide !== 'boolean') {
      showOrHide = !activeRef.current.active
    }

    showOrHide
      ? manageActiveState(setActive, containerInfo)
      : manageActiveState()
    return showOrHide
  }, [])

  return [active, manageState, contentRef]
}
