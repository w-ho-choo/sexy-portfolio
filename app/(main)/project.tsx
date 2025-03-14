'use client'
import { motion } from 'framer-motion'
import style from './project.module.css'
import { useEffect, useState } from 'react'
import { WorkData } from '../api/project'
import ProjectSlider from '@/components/ProjectSilder'

export default function Project() {
  const [projectData, setProjectData] = useState<WorkData[] | null>(null)

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
        {projectData &&
          projectData.map((project) => (
            <ProjectSlider
              key={project.id}
              {...project}
            />
          ))}
      </div>
    </section>
  )
}
