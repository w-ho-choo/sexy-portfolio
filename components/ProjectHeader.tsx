import style from './ProjectHeader.module.css'
import Link from 'next/link'
import { MdArrowBack } from 'react-icons/md'

export default function ProjectHeader() {
  return (
    <div className={style.header}>
      <Link
        href={'/?page=project'}
        scroll={false}
        className={style.link}
      >
        <MdArrowBack className={style.icon} />
      </Link>
    </div>
  )
}
