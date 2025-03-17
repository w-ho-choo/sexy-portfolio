import { RefObject } from 'react'

export const handleWheel = (
  e: WheelEvent | TouchEvent,
  outerDivRef: RefObject<HTMLDivElement | null>,
  setCurrentPage: (page: number) => void,
  setIsScrolling: (scroll: boolean) => void,
) => {
  const outerDiv = outerDivRef.current
  if (!outerDiv) return

  const pageHeight = window.innerHeight
  const pages = Array.from(outerDiv.children).filter(
    (child) => child instanceof HTMLElement,
  ) as HTMLElement[]
  const pageCount = pages.length

  const currentScroll = outerDiv.scrollTop
  const currentPageIndex = Math.round(currentScroll / pageHeight)

  if (e instanceof WheelEvent) {
    const { deltaY } = e
    if (deltaY > 0 && currentPageIndex < pageCount - 1) {
      // Scroll down
      outerDiv.scrollTo({
        top: (currentPageIndex + 1) * pageHeight,
        left: 0,
        behavior: 'smooth',
      })
      setCurrentPage(currentPageIndex + 2) // 페이지는 1부터 시작
    } else if (deltaY < 0 && currentPageIndex > 0) {
      // Scroll up
      outerDiv.scrollTo({
        top: (currentPageIndex - 1) * pageHeight,
        left: 0,
        behavior: 'smooth',
      })
      setCurrentPage(currentPageIndex)
    }
  } else if (e instanceof TouchEvent) {
    const touchStartY = e.touches[0].clientY // 터치 시작 위치
    let touchEndY = 0

    const handleTouchMove = (moveEvent: TouchEvent) => {
      touchEndY = moveEvent.touches[0].clientY // 터치 이동 위치
    }

    const handleTouchEnd = () => {
      const touchDelta = touchStartY - touchEndY

      if (Math.abs(touchDelta) > 30) {
        // 터치 이동 거리가 충분히 커야만 이동
        const currentScroll = outerDiv.scrollTop
        const currentPageIndex = Math.round(currentScroll / pageHeight)

        if (touchDelta > 0 && currentPageIndex < pageCount - 1) {
          // Scroll down
          outerDiv.scrollTo({
            top: (currentPageIndex + 1) * pageHeight,
            left: 0,
            behavior: 'smooth',
          })
          setCurrentPage(currentPageIndex + 2) // 페이지는 1부터 시작
        } else if (touchDelta < 0 && currentPageIndex > 0) {
          // Scroll up
          outerDiv.scrollTo({
            top: (currentPageIndex - 1) * pageHeight,
            left: 0,
            behavior: 'smooth',
          })
          setCurrentPage(currentPageIndex)
        }
      }
    }

    // 터치 이벤트 추가
    if (e.touches.length === 1) {
      // 한 손가락으로만 스크롤
      outerDiv.addEventListener('touchmove', handleTouchMove)
      outerDiv.addEventListener('touchend', handleTouchEnd)
    }
  }

  setIsScrolling(true)
  setTimeout(() => setIsScrolling(false), 1000)
}
