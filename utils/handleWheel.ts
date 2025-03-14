import { RefObject } from 'react'

export const handleWheel = (
  e: WheelEvent,
  outerDivRef: RefObject<HTMLDivElement | null>,
  DIVIDER_HEIGHT: number,
  setCurrentPage: (page: number) => void,
  setIsScrolling: (scroll: boolean) => void,
) => {
  const { deltaY } = e
  const { scrollTop } = outerDivRef.current!
  const pageHeight = window.innerHeight

  const SCROLL_SENSITIVITY = 10
  if (Math.abs(deltaY) < SCROLL_SENSITIVITY) return

  if (deltaY > 0) {
    if (scrollTop >= 0 && scrollTop < pageHeight) {
      outerDivRef.current!.scrollTo({
        top: pageHeight + DIVIDER_HEIGHT,
        left: 0,
        behavior: 'smooth',
      })
      setCurrentPage(2)
    } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
      outerDivRef.current!.scrollTo({
        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
        left: 0,
        behavior: 'smooth',
      })
      setCurrentPage(3)
    } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
      outerDivRef.current!.scrollTo({
        top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
        left: 0,
        behavior: 'smooth',
      })
      setCurrentPage(4)
    }
  } else {
    if (scrollTop >= 0 && scrollTop < pageHeight) {
      outerDivRef.current!.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
      outerDivRef.current!.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
      setCurrentPage(1)
    } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
      outerDivRef.current!.scrollTo({
        top: pageHeight + DIVIDER_HEIGHT,
        left: 0,
        behavior: 'smooth',
      })
      setCurrentPage(2)
    } else {
      outerDivRef.current!.scrollTo({
        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
        left: 0,
        behavior: 'smooth',
      })
      setCurrentPage(3)
    }
  }

  setIsScrolling(true)
  setTimeout(() => setIsScrolling(false), 1000)
}
