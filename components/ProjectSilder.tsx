import Image from 'next/image'
import style from './ProjectSlider.module.css'
import { WorkData } from '@/app/api/project'

export default function ProjectSlider(project: WorkData) {
  return (
    <div className={style.container}>
      <h3>{project.title}</h3>
      <div className={style.img_container}>
        <Image
          src={project.thumbnails}
          fill
          alt={project.title}
        />
        dd
      </div>
    </div>
  )
}
