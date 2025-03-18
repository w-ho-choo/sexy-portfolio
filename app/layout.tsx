import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '추원호 | 포트폴리오',
  description: '프론트엔드 개발자를 꿈꾸는 추원호의 포트폴리오 사이트입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
