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
            <span>창의적인 웹 개발자를 꿈꾸는 추원호입니다.</span>
            <br />
            웹 퍼블리셔로 1년 3개월 동안 쌓아온 HTML, CSS 지식을 바탕으로 사용자
            경험을 최우선으로 생각하는 프론트엔드 개발자로 성장하기 위하여
            노력하고 있습니다.
            <br />
            <br />
            빠르게 변화하는 트렌드를 주시하며 새로운 기술을 습득하는 데 열정을
            쏟고 있습니다.
            <br />
            <br />
            도전을 두려워하지 않고 문제 해결 과정에서 끊임없이 배우며 성장하는
            개발자가 되겠습니다.
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
