# Create Chrome Main Display

#log
2021.07.26
방해되는 백그라운드 이미지랑 명언 숨기기
각 섹션과 박스들 구분하기
월일 추가

2021.09.11
기본적인 홈페이지 구성완료.
디자인을 어떻게 해야할지 감도 안잡혀서 다양한 웹사이트 들어가보면서 디자인 찾는중
기능부터 우선 구형할 예정

2021.09.13
크롬 기본 사이트와 같은 바로가기 기능 구성 시작
:HTML + CSS 로 틀잡기 완료

2021.10.13
바로가기 기능 아이콘 자동 추가 기능 구성
:dialog로 생성 + Javascript 이용해서 구현중
:favicon을 가져와서 아이콘이 생성될수 있게 구현중
!shortcut.js:20 Uncaught TypeError: dialog__button.addEventListener is not a function 에러 조치 완료
: 생성을 눌러도 생성이 안되는 오류 조치중

2021.10.15
생성오류 해결중 => 생성관련 모든 에러 해결완료
CSS 넣기
1. 구글 기본페이지의 디자인 참고
2. 마우스로 당기면 위치를 옮길수 있게
3. 겹치면..?

2021.10.18 
부분수정
shorcut.html 기능 대부분 완료하였으나

2021.10.27 
shorcut.html 기능을 포함한 하루의 루틴을 설정하고 체크할수 있는
Routine.html 개발 시작!(TodoList를 만들고 shortcut 기능을 넣어서 바로 링크될수 있는 기능 추가) 
(한번에 완성된 페이지를 만들 생각하니까 어디서부터 어떻게 만들어야 할지 모르겠어서 루틴부터 만들어 가면서 최종형태는 일/부/월 별로 목표를 설정하고 관리할수 있는 페이지가 될예정)

index.html 은 스와이프 갤러리 형태로 간단하게 만들어서 routine.html 로 들어갈수 있는 소개 페이지로 만들려고 생각중....

2021.11.08
Routine.html routine 왼쪽 toDoList 중앙 실제로 한거 체크할수 있는방식? 오른쪽
내일 CSS로 정리할 예정 + div를 마우스 드레그로 위치를 바꿀수 있게 알아볼예정

2021.11.10
CSS 작업 진행중..
예쁘지는 않아도 깔끔한 디자인을 하고싶어서 다양한 사이트 어플리케이션 참고중..

2021.11.11
CSS 작업 진행중..
좌상단 옅은 글씨로 시간 추가도 좋을듯 ✔
루틴 추가 버튼이 제일 아래로 갈수있게 ✔


2021.11.12
CSS 작업 진행중..
좌상단 시간 추가 완료

2021.11.15
time.js 가 로딩이 오래걸리는 문제 있음 ✔ 해결
루틴 추가버튼 제일 아래 배치 완료

과제)
1. 루틴 항목끼리 마우스 드래그로 순서를 바꿀수 있게 (JS)
2. 루틴 저장공간은 어떻게 할것인가?
3. Interactive Webpage
4. 