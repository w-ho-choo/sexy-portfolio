import { RefObject } from 'react'

export const handleWheel = (
  e: WheelEvent | TouchEvent,
  outerDivRef: RefObject<HTMLDivElement | null>,
  setCurrentPage: (page: number) => void,
  setIsScrolling: (scroll: boolean) => void,
) => {
  const outerDiv = outerDivRef.current
  if (!outerDiv || window.innerWidth < 768) return // 모바일에서 풀스크롤 비활성화

  const pageHeight = window.innerHeight
  const pages = Array.from(outerDiv.children).filter(
    (child) => child instanceof HTMLElement,
  ) as HTMLElement[] // 페이지 요소들을 가져옴
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
  }

  // 스크롤 상태 업데이트
  setIsScrolling(true)
  setTimeout(() => setIsScrolling(false), 1000)
}
