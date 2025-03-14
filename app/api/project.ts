export type WorkData = {
  id: number
  title: string
  category: '퍼블리싱' | '프론트엔드'
  leadTime: string | null
  mainTech?: string[]
  stack: string[]
  description: {
    work: string
    troubleShooting: string
  }
  thumbnails: string
  images: string[] | null
  isServiceNow: {
    status: boolean
    comment: string
  }
  url: string | null
  isOnCompany: boolean
}

export const projectData: WorkData[] = [
  {
    id: 0,
    title: '오꾸꼬',
    category: '퍼블리싱',
    stack: ['html', 'css', 'jquery'],
    leadTime: null,
    description: {
      work: `
      오븐치킨 브랜드인 오X꼬의 가맹점 모집 랜딩사이트 작업물입니다. HTML, CSS, JS로 작업하였으며, <br/>AOS.js와 Splide.js같은 자바스크립트 라이브러리들을 주로 활용하여 제작하였습니다.
      <br/>
      <br/>또한 브라우저 크기에 따른 균일한 디자인이 보일수있도록 반응형 웹페이지 작업에 중요도를 높게하여 작업하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: '/okuko/okuko-01.png',
    images: [
      '/okuko/okuko-02.png',
      '/okuko/okuko-03.png',
      '/okuko/okuko-04.png',
      '/okuko/okuko-05.png',
      '/okuko/okuko-06.png',
    ],
    isServiceNow: {
      status: true,
      comment: '',
    },
    url: 'https://www.okuko.co.kr/',
    isOnCompany: true,
  },
  {
    id: 1,
    title: '오름IMC',
    category: '퍼블리싱',
    stack: ['html5', 'css', 'jquery'],
    leadTime: null,
    description: {
      work: `
      광고대행사인 오름IMC의 웹사이트 마크업 작업물입니다
      <br/>HTML, CSS, JS, 그누보드를 사용하여 작업을 하였으며 다른 사이트들과의 차별점을 위하여 여러 효과나 디자인적인 요소들을 신경쓰며 작업하였습니다.
      <br/>
      <br/>Swiper나 GSAP같은 자바스크립트 라이브러리들을 중점적으로 사용하였으며 모바일의 경우 그누보드의 모바일 사이트 기능을 이용하여 반응형 웹이 아닌 PC, 모바일 따로 나뉘게끔 작업하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: '/ormimc/ormimc-01.png',
    images: [
      '/ormimc/ormimc-01.png',
      '/ormimc/ormimc-02.png',
      '/ormimc/ormimc-03.png',
      '/ormimc/ormimc-04.png',
      '/ormimc/ormimc-05.png',
      '/ormimc/ormimc-06.png',
    ],
    isServiceNow: {
      status: true,
      comment: '',
    },
    url: 'https://orm-imc.co.kr/',
    isOnCompany: true,
  },
  {
    id: 2,
    title: '코카카 랜딩사이트',
    category: '퍼블리싱',
    stack: ['html5', 'css', 'jquery'],
    leadTime: null,
    description: {
      work: `
      광고대행사인 오름IMC의 웹사이트 마크업 작업물입니다
      <br/>HTML, CSS, jQuery를 사용하여 작업을 하였으며 슬라이드 쇼 처럼 보이길 원하여 그에 맞춰 디자인 & 퍼블리싱 작업을 진행하였습니다.
      <br/>
      <br/>jQuery를 이용하여 마치 파워포인트 문서처럼 버튼을 누르면 해당하는 페이지로 이동하게끔 함수를 작성하여 작업하였으며
      <br/>전국 회원기관 페이지에서는 지도의 해당하는 영역에 마우스를 올리면 해당하는 지역의 기관들이 우측에 나오게 끔 작업하였습니다.
      <br/>접속한 기기의 뷰포트에 따라 모바일 페이지로 리다이렉트 되게끔 작업하였으며 영문버전의 사이트도 제작하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: '/kocaca/kocaca-00.gif',
    images: null,
    isServiceNow: {
      status: true,
      comment: '',
    },
    url: null,
    isOnCompany: true,
  },
  {
    id: 3,
    title: '알스퀘어 X IBK기업은행 랜딩페이지',
    category: '퍼블리싱',
    stack: ['html5', 'css', 'jquery'],
    leadTime: null,
    description: {
      work: `
      사무실 부동산 중개 회사인 알스퀘어와 기업은행 제휴 이벤트 랜딩페이지입니다.
      <br/>HTML, CSS, jQuery를 사용하여 작업을 하였습니다.
      <br/>
      <br/>php서버와의 form 데이터 전송을 중점적으로 두고 작업하였으며 입력폼 유효성 검사, 팝업 등의 작업을 진행하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: '/rsqure/rsqure-00.gif',
    images: null,
    isServiceNow: {
      status: true,
      comment: '',
    },
    url: null,
    isOnCompany: true,
  },
  {
    id: 4,
    title: '트래디셔널 코리아 현장 랜딩페이지',
    category: '퍼블리싱',
    stack: ['html5', 'css', 'jquery'],
    leadTime: null,
    description: {
      work: `
      트래디셔널 코리아의 현장 이벤트 안내를 위한 랜딩페이지입니다.
      <br/>HTML, CSS, jQuery를 사용하여 작업을 하였습니다.
      <br/>SVG이미지를 이용하여 마치 팜플렛을 보는듯한 느낌으로 제작하였습니다.
      <br/>PC에서는 좌측 네비게이션을 통하여 페이지를 이동할 수 있으며
      <br/>접속한 기기의 뷰포트에 따라서 모바일 페이지로 리다이렉팅되도록 하였습니다.
      <br/>지도 페이지에서 위치배너를 클릭시 해당하는 위치를 알려주는 구글지도로 넘어가게끔 처리하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: '/trk/trk-00.gif',
    images: null,
    isServiceNow: {
      status: true,
      comment: '',
    },
    url: null,
    isOnCompany: true,
  },
  {
    id: 5,
    title: '더 뉴원 회사 소개 사이트',
    category: '퍼블리싱',
    stack: ['html5', 'css', 'jquery', 'gnuboard'],
    leadTime: null,
    description: {
      work: `
      더뉴원 회사 소개페이지입니다
      <br/>HTML, CSS, jQuery, 그누보드를 사용하여 작업을 하였습니다.
      <br/>슬라이드와 반응형 웹을 중점적으로 사용하여 개발하였습니다.
      <br/>공지사항 페이지에서는 그누보드를 이용하여 출력, 관리자 계정으로 글쓰기 등을 구현하였으며
      <br/>사업제안 페이지에서의 유효성 검사와 php 서버와의 폼 데이터 전송을 처리하였습니다.
      <br/>회사소개 페이지에서 회사의 위치를 구글맵으로 보여줄수 있게끔 처리하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: '/thenew1/thenew1-00.gif',
    images: null,
    isServiceNow: {
      status: true,
      comment: '',
    },
    url: null,
    isOnCompany: true,
  },
  {
    id: 6,
    title: '트립 포레스트',
    category: '퍼블리싱',
    stack: ['html5', 'css', 'jquery', 'gnuboard'],
    leadTime: null,
    description: {
      work: `
      여행 플랫폼 트립포레스트 사이트입니다.
      <br/>HTML, CSS, jQuery, 그누보드를 사용하여 작업을 하였습니다.
      <br/>헤더에선 언어설정, 통화설정을 개발하였으며 메인 상단의 모달창 검색기능을 구현하였습니다.
      <br/>상세페이지에서 이미지 상세보기와 날짜 설정, 옵션 설정 및 해당 가격 계산등의 기능을 구현하였습니다.
      <br/>그외 결제 페이지, 로그인 팝업, 마이 페이지, 지원 페이지등을 마크업하였으며
      <br/>반응형 웹도 작업하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: '/trip4rest/trip4rest.gif',
    images: null,
    isServiceNow: {
      status: true,
      comment: '',
    },
    url: null,
    isOnCompany: true,
  },
  {
    id: 7,
    title: '박스오피스 랭킹 앱',
    category: '프론트엔드',
    stack: ['html5', 'css', 'javascript', 'react', 'axios'],
    leadTime: '2024.01 ~ 2024.01',
    mainTech: ['API 통신', '슬라이드'],
    description: {
      work: `
      리액트를 사용하였으며 비동기 함수를 사용하여 박스오피스 api를 호출후
      <br/>영화정보 api에서 불러온 정보와 일치하는 영화의 세부정보들을 불러와 보여주는 기능을 구현하였습니다.
      <br/>
      <br/>비동기 함수를 이용하여 서로 다른 api를 이용하여 쿼리값을 임의로 추출해내 원하는 값을 얻을수있게끔 학습할수있었던 작업물입니다.`,
      troubleShooting: '',
    },
    thumbnails: '/boxoffice/boxoffice-01.png',
    images: [],
    isServiceNow: {
      status: true,
      comment: '',
    },
    url: 'https://w-ho-choo.github.io/boxoffice-rank/',
    isOnCompany: false,
  },
  {
    id: 8,
    title: 'FLOG',
    category: '프론트엔드',
    stack: ['html5', 'css', 'typescript', 'react', 'zustand', 'axios'],
    leadTime: '2024.10 ~ 2024.11',
    mainTech: [
      'API 통신',
      '게시물 작성',
      '댓글 기능',
      '로그인 기능',
      '알림 기능',
    ],
    description: {
      work: `
      데브코스 수업 3차 프로젝트로 진행한 작업물 입니다.
      <br/>블로그 프로젝트이며 기본 제공 API외의 필요한 기능들은 express로 개발하였으며
      <br/>전체적인 디자인 시안을 제작하였습니다. 
      <br/>목록 페이지 기능구현, 게시물 리스트 정렬 기능, 게시물 리스트 무한 스크롤
      <br/>알림 기능 및 공통 컴포넌트(헤더, 사이드바)등을 제작 하였습니다.
      <br/>Intersection Observer를 이용하여 각 페이지별 게시글 무한 스크롤 기능을 구현하였으며
      <br/>Zustand를 이용한 헤더 로그인 기능, 웹소켓을 이용하여 실시간 알림기능을 구현하였습니다.
      `,
      troubleShooting: '',
    },
    thumbnails: '/flog/flog-00.png',
    images: [
      '/flog/flog-01.png',
      '/flog/flog-02.png',
      '/flog/flog-03.png',
      '/flog/flog-04.png',
      '/flog/flog-05.png',
      '/flog/flog-06.png',
    ],
    isServiceNow: {
      status: false,
      comment: '프로그래머스 AWS 배포 서버 지원종료',
    },
    url: 'https://github.com/prgrms-fe-devcourse/NFE1_2_3_FLOG',
    isOnCompany: false,
  },
  {
    id: 9,
    title: 'Catch Mi',
    category: '프론트엔드',
    stack: [
      'html5',
      'css',
      'typescript',
      'react',
      'zustand',
      'ky',
      'tanstack-query',
    ],
    leadTime: '2024.11 ~ 2024.12',
    mainTech: ['API 통신', '게시글 CRUD', '프로필 CRUD', '실시간 채팅', '지도'],
    description: {
      work: `
      데브코스 수업 최종프로젝트로 진행한 작업물 입니다.
      <br/>야구 직관 메이트 찾기 라는 주제를 가지고 제작하였으며
      <br/>프로필 페이지 & 하위페이지들, 굿즈거래 게시글 페이지, 공통 컴포넌트, 로그인 상태유지들을 작업하였습니다.
      <br/>
      <br/>ky와 tanstack-query를 이용하여 프로필 페이지 및 하위 페이지들에서 CRUD를 구성하였고
      <br/>굿즈거래 게시글 페이지에서는 불러온 값에 맞게 렌더링과 로그인 조건에 따른 렌더링 유무 들을 작업하였습니다.
      <br/>
      <br/>로그인 상태유지의 경우 zustand와 localStorage를 활용하여 현재 로그인한 정보와 로그인 상태유무들을 판단할수있게끔 작업하였습니다.`,
      troubleShooting: '',
    },
    thumbnails: '/catch-mi/catch-mi-01.gif',
    images: [
      '/catch-mi/catch-mi-01.gif',
      '/catch-mi/catch-mi-02.gif',
      '/catch-mi/catch-mi-03.png',
      '/catch-mi/catch-mi-04.png',
      '/catch-mi/catch-mi-05.gif',
      '/catch-mi/catch-mi-06.gif',
      '/catch-mi/catch-mi-07.gif',
      '/catch-mi/catch-mi-08.gif',
      '/catch-mi/catch-mi-09.gif',
      '/catch-mi/catch-mi-10.gif',
      '/catch-mi/catch-mi-11.gif',
      '/catch-mi/catch-mi-12.gif',
      '/catch-mi/catch-mi-13.gif',
    ],
    isServiceNow: {
      status: false,
      comment: '프로그래머스 AWS 배포 서버 지원종료',
    },
    url: 'http://catchmi-web-page.s3-website.ap-northeast-2.amazonaws.com/',
    isOnCompany: false,
  },
]
