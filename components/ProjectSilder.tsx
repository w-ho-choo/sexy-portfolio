import Image from 'next/image'
import style from './ProjectSlider.module.css'
import { WorkData } from '@/app/api/project'
import Link from 'next/link'

export default function ProjectSlider(project: WorkData) {
  return (
    <div className={style.container}>
      <Link
        href={`/project/${project.id}`}
        prefetch
      >
        <h3 className={style.title}>{project.title}</h3>
        <div className={style.img_container}>
          <Image
            src={project.thumbnails}
            fill
            alt={project.title}
            loading='lazy'
            unoptimized
          />
        </div>
      </Link>
    </div>
  )
}
