트러블 슈팅 : ##트랙패드에서 풀스크린 스크롤이 중첩되던 버그 수정 -> deltaY값을 절대값으로 치환하여 설정한 스크롤 민감도보다 작으면 작동되지않도록 수정함 ##이미지 임포트해서 API로 호출하면 안되던 증상 -> 이미지 임포트를 public경로로 string값으로 쓰니 됨
##project/[id]/page.tsx에서 api가 호출 안되던 증상 -> fetch에 절대주소를 넣으니까 해결됨.
##framer-motion 페이지 전환 애니메이션 app라우터부터는 Transition 컴포넌트를 만들어서 layout.tsx에 children 부모컴포넌트로 감싸면됌https://dev.to/joseph42a/nextjs-page-transition-with-framer-motion-33dg ##깃재배포
