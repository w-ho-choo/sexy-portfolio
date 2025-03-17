import { RefObject } from 'react'

export const handleButton = (
  type: 'up' | 'down',
  outerDivRef: RefObject<HTMLDivElement | null>,
  setCurrentPage: (page: number) => void,
) => {
  console.log('hey')
  const outerDiv = outerDivRef.current
  if (!outerDiv || window.innerWidth >= 768) return

  const pageHeight = window.innerHeight
  const pages = Array.from(outerDiv.children).filter(
    (child) => child instanceof HTMLElement,
  ) as HTMLElement[]
  const pageCount = pages.length

  const currentScroll = outerDiv.scrollTop
  const currentPageIndex = Math.round(currentScroll / pageHeight)

  if (type === 'down' && currentPageIndex < pageCount - 1) {
    // Scroll down
    outerDiv.scrollTo({
      top: (currentPageIndex + 1) * pageHeight,
      left: 0,
      behavior: 'smooth',
    })
    setCurrentPage(currentPageIndex + 2) // 페이지는 1부터 시작
  } else if (type === 'up' && currentPageIndex > 0) {
    // Scroll up
    outerDiv.scrollTo({
      top: (currentPageIndex - 1) * pageHeight,
      left: 0,
      behavior: 'smooth',
    })
    setCurrentPage(currentPageIndex)
  }
}
