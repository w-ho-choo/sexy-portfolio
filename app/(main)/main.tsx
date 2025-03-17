'use client'
import { motion } from 'framer-motion'
import style from './main.module.css'
import ScrollDown from '@/components/scrollDown'

const WORD_LIST = [
  {
    key: 0,
    keyword: 'front end',
    class: 'justi_start',
    rotate: [0, 1, -1, 2, 0],
  },
  {
    key: 1,
    keyword: 'publisher',
    class: 'justi_center',
    rotate: [0, -1, -2, 1, 0],
  },
  {
    key: 2,
    keyword: 'user experience',
    class: 'justi_end',
    rotate: [0, 1, 2, -2, 0],
  },
  {
    key: 3,
    keyword: 'user interface',
    class: 'justi_start',
    rotate: [0, 1, 2, -1, 0],
  },
]

export default function Main() {
  return (
    <section
      className={style.container}
      id='main'
    >
      {WORD_LIST.map((word) => (
        <motion.div
          key={word.key}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <motion.div
            animate={{
              rotate: word.rotate,
              y: 0,
            }}
            transition={{
              times: [0.25, 0.4, 0.5, 1, 1.5],
              repeat: Infinity,
              repeatDelay: 2,
              delay: 2,
            }}
            className={style[word.class]}
          >
            {word.keyword}
          </motion.div>
        </motion.div>
      ))}
      <ScrollDown />
    </section>
  )
}
