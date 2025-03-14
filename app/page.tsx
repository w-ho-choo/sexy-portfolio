'use client'
import { useEffect, useRef, useState } from 'react'
import Main from './(main)/main'
import Project from './(main)/project'
import About from './(main)/about'
import { handleWheel } from '@/utils/handleWheel'
import Skills from './(main)/skills'

const pages = [
  { component: <Main />, key: 'main' },
  { component: <About />, key: 'about' },
  { component: <Skills />, key: 'skills' },
  { component: <Project />, key: 'project' },
]

export default function Home() {
  const outerDivRef = useRef<HTMLDivElement | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (isScrolling) return
      handleWheel(e, outerDivRef, setCurrentPage, setIsScrolling)
    }

    const outerDiv = outerDivRef.current
    if (outerDiv) {
      outerDiv.addEventListener('wheel', wheelHandler, { passive: false })
    }

    return () => {
      if (outerDiv) {
        outerDiv.removeEventListener('wheel', wheelHandler)
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
      {pages.map(({ component, key }) => (
        <div
          key={key}
          style={{ height: '100vh' }}
        >
          {component}
        </div>
      ))}
    </div>
  )
}
