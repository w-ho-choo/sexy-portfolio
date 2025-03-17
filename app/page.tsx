'use client'
import style from './page.module.css'
import { useEffect, useRef, useState } from 'react'
import Main from './(main)/main'
import Project from './(main)/project'
import About from './(main)/about'
import { handleWheel } from '@/utils/handleWheel'
import Skills from './(main)/skills'
import { useSearchParams } from 'next/navigation'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { handleButton } from '@/utils/handleButton'

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
  const searchParams = useSearchParams()

  const mobileUp = () => {
    handleButton('up', outerDivRef, setCurrentPage)
  }

  const mobileDown = () => {
    handleButton('down', outerDivRef, setCurrentPage)
  }

  // Wheel 이벤트 핸들러
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (isScrolling || window.innerWidth <= 768) return
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

  // 페이지 URL 파라미터에 따른 스크롤 처리
  useEffect(() => {
    const pageParam = searchParams.get('page')
    if (pageParam && outerDivRef.current) {
      const pageIndex = pages.findIndex((page) => page.key === pageParam)
      if (pageIndex !== -1) {
        setTimeout(() => {
          outerDivRef.current?.scrollTo({
            top: window.innerHeight * pageIndex,
            left: 0,
            behavior: 'smooth',
          })
          setCurrentPage(pageIndex + 1) // 페이지는 1부터 시작
        }, 100)
      }
    }
  }, [searchParams])

  return (
    <div
      ref={outerDivRef}
      className={style.div_ref}
    >
      <div className={style.navigation}>
        <FaChevronUp onClick={mobileUp} />
        <FaChevronDown onClick={mobileDown} />
      </div>
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
