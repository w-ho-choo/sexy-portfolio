'use client'

import style from './ProjectImg.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function ProjectImg({
  thumbnails,
  images,
}: {
  thumbnails: string
  images: string[] | null
}) {
  const renderImages = () => {
    if (!images || images.length === 0) {
      return (
        <div className={style.thumbnail_container}>
          <Image
            fill
            src={thumbnails}
            alt='시연 이미지'
          />
        </div>
      )
    } else {
      return (
        <Swiper
          modules={[Navigation]}
          navigation={true}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide
                key={index}
                className={style.swiper_img_container}
              >
                <Image
                  src={image}
                  fill
                  alt='시연 이미지'
                  loading='lazy'
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      )
    }
  }

  return <div>{renderImages()}</div>
}
