import Loader from '@/components/Loader'
import style from './loading.module.css'

export default function Loading() {
  return (
    <div className={style.container}>
      <Loader />
    </div>
  )
}
