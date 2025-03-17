import { motion } from 'framer-motion'
import style from './about.module.css'
import Image from 'next/image'
import imgSrc from '@/public/myImg.jpg'

const MY_INFO = [
  {
    keyword: '이름',
    value: '추원호',
  },
  {
    keyword: '생년월일',
    value: '1998-02-13',
  },
  {
    keyword: '학력',
    value: '구성고등학교 졸업',
  },
  {
    keyword: '경력',
    value: '위플 - 2022.10 ~ 2023.12 / 웹 퍼블리셔 근무',
  },
  {
    keyword: '이수사항',
    value: [
      '두드림아카데미 UX/UI 디자인 과정 수료',
      '프로그래머스 데브코스 프론트엔드 과정 수료',
    ],
  },
  {
    keyword: '수상사항',
    value: [
      '데브코스 최종프로젝트 인기프로젝트상',
      '데브코스 최종프로젝트 우수프로젝트상',
    ],
  },
]

export default function About() {
  return (
    <section
      className={style.container}
      id='about'
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
        about
      </motion.h1>
      <div className={style.img_container}>
        <div className={style.img}>
          <Image
            src={imgSrc}
            fill
            alt='프로필 이미지'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={style.about_text}>
          <p>
            <span>안녕하세요</span>
            <br />
            프론트엔드 개발자를 꿈꾸며 열심히 점진하고 있는 추원호 라고합니다.
            <br />
            배우기 위하여 노력을 꾸준히 한다면
            <br />
            좋은 결과가 있을것이라는 신념으로 열심히 노력하고 있습니다.
            <br />
            <br />
            회사와 개인 프로젝트, 수업에서 다양한 작업물들을 만들며
            <br />
            새로운 경험을 쌓고 그 경험을 기반으로 또 다른 지식을 쌓기위한 길을
            찾고 있습니다.
          </p>
        </div>
      </div>
      <div className={style.more_about}>
        {MY_INFO.map((info, index) => (
          <div key={index}>
            <h3>{info.keyword}</h3>
            <p>
              {Array.isArray(info.value)
                ? info.value.map((a, i) => (
                    <span key={i}>
                      {a}
                      <br />
                    </span>
                  ))
                : info.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
