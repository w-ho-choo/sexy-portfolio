'use client'
import { useEffect, useRef, useState } from 'react'
import Main from './(main)/main'
import Project from './(main)/project'
import About from './(main)/about'
import { handleWheel } from '@/utils/handleWheel'
import Skills from './(main)/skills'

export default function Home() {
  const DIVIDER_HEIGHT = 5
  const outerDivRef = useRef<HTMLDivElement | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (isScrolling) return
      handleWheel(
        e,
        outerDivRef,
        DIVIDER_HEIGHT,
        setCurrentPage,
        setIsScrolling,
      )
    }

    const outerDivRefCurrent = outerDivRef.current

    if (outerDivRefCurrent) {
      outerDivRefCurrent.addEventListener('wheel', wheelHandler, {
        passive: false,
      })
    }

    return () => {
      if (outerDivRefCurrent) {
        outerDivRefCurrent.removeEventListener('wheel', wheelHandler)
      }
    }
  }, [isScrolling])
  return (
    <div
      ref={outerDivRef}
      style={{
        height: '100vh',
        overflowY: 'hidden',
      }}
    >
      <Main />
      <div style={{ height: `${DIVIDER_HEIGHT}px` }} />
      <About />
      <div style={{ height: `${DIVIDER_HEIGHT}px` }} />
      <Skills />
      <div style={{ height: `${DIVIDER_HEIGHT}px` }} />
      <Project />
    </div>
  )
}
