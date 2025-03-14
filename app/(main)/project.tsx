'use client'
import style from './project.module.css'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { WorkData } from '../api/project'
import ProjectSlider from '@/components/ProjectSilder'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { A11y, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { MdArrowBack, MdArrowForward } from 'react-icons/md'

export default function Project() {
  const paginationRef = useRef<HTMLDivElement | null>(null)
  const [projectData, setProjectData] = useState<WorkData[] | null>(null)
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const pagination = {
    el: paginationRef.current,
    clickable: true,
  }

  const handlePrev = () => {
    swiper?.slidePrev()
  }

  const handleNext = () => {
    swiper?.slideNext()
  }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/project')
        if (!response.ok) {
          throw new Error('오류 발생')
        }
        const data = await response.json()
        console.log(data)
        setProjectData(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section className={style.container}>
      <motion.h1
        animate={{ rotate: [0, 2, -1, 0] }}
        transition={{
          duration: 1,
          times: [0.2, 0.5, 0.7, 1],
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className={style.title}
      >
        project
      </motion.h1>
      <div className={style.project_container}>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={pagination}
          onSlideChange={(e) => {
            setIsBeginning(e.isBeginning)
            setIsEnd(e.isEnd)
          }}
          onSwiper={(e) => {
            setSwiper(e)
          }}
          breakpoints={{
            768: {
              spaceBetween: 50,
              slidesPerView: 2,
            },
          }}
        >
          {projectData &&
            projectData.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectSlider {...project} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className={style.swiper_custom_container}>
          <div
            className={style.swiper_custom_pagination}
            ref={paginationRef}
          ></div>
          <div className={style.swiper_navigation}>
            <button disabled={isBeginning}>
              <MdArrowBack
                onClick={handlePrev}
                direction='left'
              />
            </button>
            <button disabled={isEnd}>
              <MdArrowForward
                onClick={handleNext}
                direction='right'
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
