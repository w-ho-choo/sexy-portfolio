import { motion } from 'framer-motion'
import style from './skills.module.css'

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5'
import { PiDotsThreeCircle } from 'react-icons/pi'

const MY_SKILL = [
  {
    keyword: 'html',
    list: ['웹 표준', '웹 접근성'],
    icon: <IoLogoHtml5 />,
  },
  {
    keyword: 'css',
    list: ['CSS3', '반응형 웹', 'SCSS', 'Bootstrap', 'Tailwind', 'shad/cn'],
    icon: <IoLogoCss3 />,
  },
  {
    keyword: 'javascript',
    list: ['ES6', 'jQuery', 'React', 'TypeScript', 'Next.js'],
    icon: <IoLogoJavascript />,
  },
  {
    keyword: 'etc',
    list: ['Git', 'Vercel', 'Figma', 'PhotoShop', 'Adobe XD', 'Illustrator'],
    icon: <PiDotsThreeCircle />,
  },
]

export default function Skills() {
  return (
    <section
      className={style.container}
      id='skills'
    >
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
        skills
      </motion.h1>
      <div className={style.content_container}>
        <div className={style.skill_description}>
          웹 에이전시에서 1년간 근무하며 웹 표준, 웹 접근성을 비롯한 HTML, CSS,
          JavaScript 지식을 쌓으며 웹 퍼블리셔로써 근무하였습니다.
          <br />
          현재는 더욱 나아가 개인학습과 수업을 통하여 React, TypeScript 등을
          학습하며 프론트엔드 개발자를 목표로 열심히 노력하고 있습니다.
        </div>
        <ul className={style.skill_container}>
          {MY_SKILL.map((skill, index) => (
            <li
              key={index}
              className={style.skill_list}
            >
              <h3>
                <span className={style[skill.keyword]}>{skill.icon}</span>{' '}
                {skill.keyword}
              </h3>
              <div>
                {skill.list.map((value, index) => (
                  <p key={index}>{value}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
