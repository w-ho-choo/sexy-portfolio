import Link from 'next/link'
import style from './page.module.css'
import { WorkData } from '@/app/api/project'

import Axios from '@/app/assets/stack/axios.svg'
import Css from '@/app/assets/stack/css.svg'
import Gnuboard from '@/app/assets/stack/gnuboard.svg'
import Html5 from '@/app/assets/stack/html5.svg'
import JQuery from '@/app/assets/stack/jquery.svg'
import Javascript from '@/app/assets/stack/js.svg'
import Ky from '@/app/assets/stack/ky.svg'
import React_SVG from '@/app/assets/stack/react.svg'
import Tanstack from '@/app/assets/stack/tanstack.svg'
import Typescript from '@/app/assets/stack/typescript.svg'
import Zustand from '@/app/assets/stack/zustand.svg'
import { JSX } from 'react'
import { MdArrowBack } from 'react-icons/md'
import Image from 'next/image'
import ProjectImg from '@/components/ProjectImg'

const STACK_ICONS: { [key: string]: JSX.Element } = {
  axios: <Axios key={'axios'} />,
  css: <Css key={'css'} />,
  gnuboard: (
    <Gnuboard
      key={'gnuboard'}
      viewBox='0 0 100 46'
    />
  ),
  html5: <Html5 key={'html5'} />,
  jquery: <JQuery key={'jquery'} />,
  javascript: <Javascript key={'javascript'} />,
  ky: <Ky key={'ky'} />,
  react: <React_SVG key={'react'} />,
  tanstackQuery: (
    <Tanstack
      key={'tanstackQuery'}
      viewBox='0 0 256 230'
    />
  ),
  typescript: (
    <Typescript
      key={'typescript'}
      viewBox='0 0 512 512'
    />
  ),
  zustand: <Zustand key={'zustand'} />,
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params
  const response = await fetch(`http://localhost:3000/api/project/${id}`)
  const data: WorkData = await response.json()

  const {
    id: projectId,
    category,
    description,
    images,
    isOnCompany,
    isServiceNow,
    leadTime,
    stack,
    title,
    url,
    mainTech,
    thumbnails,
  } = data

  const renderSlide = () => {
    if (!images || images.length === 0) {
      return (
        <div className={style.thumbnail_container}>
          <Image
            src={thumbnails}
            fill
            alt={title}
          />
        </div>
      )
    }
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <section className={style.section_container}>
        <ProjectImg
          thumbnails={thumbnails}
          images={images}
        />
      </section>
      <section className={style.section_container}>
        <p
          dangerouslySetInnerHTML={{ __html: description.work }}
          className={style.description}
        />
      </section>
      <section className={style.section_container}>
        <h2 className={style.isOnCompany}>
          {isOnCompany
            ? '회사 재직중 작업한 작업물 입니다'
            : '개인 프로젝트 및 수업에서 작업한 작업물입니다'}
        </h2>
        <dl className={style.info_list}>
          <div>
            <dt>종류</dt>
            <dd>{category}</dd>
          </div>
          <div>
            <dt>기간</dt>
            <dd>{leadTime ? leadTime : '작업기간 미상'}</dd>
          </div>
          <div>
            <dt>사용 기술</dt>
            <dd className={style.stack_container}>
              {stack.map((key) => STACK_ICONS[key])}
            </dd>
          </div>
          {mainTech && (
            <div>
              <dt>주요 기능</dt>
              <dd className={style.tech_container}>
                {mainTech.map((tech, index) => {
                  return <span key={index}>{tech}</span>
                })}
              </dd>
            </div>
          )}
          <div>
            <dt>링크</dt>
            <dd>
              {isServiceNow.status ? (
                url && (
                  <Link
                    href={url}
                    passHref
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <span className={style.on_service}>이동하기</span>
                  </Link>
                )
              ) : (
                <span className={style.not_service}>
                  {isServiceNow.comment}
                </span>
              )}
            </dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
