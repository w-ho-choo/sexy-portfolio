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
import ProjectImg from '@/components/ProjectImg'
import { Metadata } from 'next'

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

export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/project}`,
  )
  const projectList: WorkData[] = await response.json()

  return projectList.map((project) => ({
    id: project.id.toString(),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/project/${(await params).id}`,
  )
  const data: WorkData = await response.json()

  return {
    title: data.title + ' | 포트폴리오',
    description: '프로젝트 상세 페이지입니다.',
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/project/${id}`,
  )
  const data: WorkData = await response.json()

  const {
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
