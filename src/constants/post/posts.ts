export interface Post {
  id: number
  username: string
  image: string
  title: string
  content: string
  date: string
}

export const posts: Post[] = [
  {
    id: 1,
    username: 'sogochoo',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTFfMTc2%2FMDAxNzMzOTIzNjA1NjE0.EaNEJ76M2Qso4lJWnHT7HhfoOmLt56_VbaYq4T9ceQ0g.P_JVhgGbS41mwJ9ZK5fstlCdXiRiUO047ixAYC2fICQg.PNG%2F5.PNG&type=sc960_832',
    title: '멜 웨하스 주니오르 선수 햄보카세요~',
    content: `오늘따라 더 듬직한 로하스 선수 😘
오늘 수원야구장 가서 KT 경기 보고 왔는데요,
아니 로하스… 진짜 뭐 저런 선수가 있죠?
볼 때마다 느낌이 있어요. 타석에 서기만 해도 뭔가
“아 저건 친다” 싶은 그런 느낌 알잖아요~~

오늘도 한 방 딱 쳐주는데 소리부터 달라요.
맞는 순간 애들 다 “와~” 하고,
옆에 앉은 아저씨는 “역시 로하스는 로하스네” 이러시더라고요.
그 말이 딱 맞는 말 같았어요.

수비할 때도 잘 뛰고 웃으면서 팬서비스도 하고
KT 위즈팬은 아니어도, 로하스 때문에 KT 좋아질 것 같은 느낌이랄까…
예전 로하스 생각나서 괜히 울컥했네요.
진짜 야구장 오길 잘했다 싶은 하루였습니다.`,
    date: '2025.07.27',
  },
  {
    id: 2,
    username: 'KoreaBestCatcherMinho',
    image:
      'https://postfiles.pstatic.net/MjAyNTA3MjJfNjQg/MDAxNzUzMTcyNDExMDk1.3pzJ4c3FBHBrzM9gwHM43v8rxCEDK3gSRj5lZSa-TwIg.j32xAY7cTdvwSqqtBuvXAywJS1yCA-QsPG4hIrfPymog.JPEG/SE-f6779128-e20a-4f2b-b29e-c71f8f8c7322.jpg?type=w3840',
    title: '나는 오늘의 승요💖',
    content: `오늘도 강민호 선수의 멋진 활약 덕분에 승리할 수 있었습니다!
포수로서의 리더십이 정말 대단했고, 투수들을 잘 이끌어주는 모습이 인상적이었어요. 
매번 중요한 순간에 강민호 선수의 침착한 리드를 보면 역시 최고라는 생각이 듭니다.
오늘 경기 끝나고 팬들에게 손 흔들어주는 모습도 너무 감동적이었어요🐯
앞으로도 계속 응원할게요!`,
    date: '2025.07.27',
  },
  {
    id: 3,
    username: 'baseballFan99',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F003%2F2024%2F09%2F25%2FNISI20240925_0020533224_web_20240925184814_20240925184923639.jpg&type=sc960_832',
    title: '기아 타이거즈 역전승!',
    content: `와 오늘 9회말 진짜 손에 땀을 쥐게 하는 경기였어요!
끝내기 안타로 역전승이라니… 현장에서 다 같이 소리 지르며 응원했던 감동이 아직도 남아있네요🔥
타이거즈 선수들 모두 수고 많았고, 오늘처럼만 하면 올 시즌도 기대해볼만 할 것 같아요!
다음 경기엔 꼭 직관 가고 싶습니다!`,
    date: '2025.07.20',
  },
  {
    id: 4,
    username: 'lionheart',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F117%2F2024%2F10%2F28%2F0003883689_001_20241028225807849.jpg&type=sc960_832',
    title: '삼성 팬이라 행복합니다',
    content: `요즘 삼성 야구 보는 재미에 푹 빠졌어요.
경기력이 점점 좋아지고, 선수들 표정도 밝아진 것 같아서 팬으로서 너무 행복합니다.
특히 오늘 홈런 장면은 두고두고 기억에 남을 것 같아요.
올해는 꼭 좋은 성적 내길 바라며, 계속 응원할게요! 파이팅 삼성!`,
    date: '2025.07.18',
  },
  {
    id: 5,
    username: 'cheerleader23',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5400%2F2020%2F09%2F10%2F0000183252_003_20200910184301058.jpg&type=sc960_832',
    title: '치어리더 직캠 공유',
    content: `오늘 경기장 분위기 정말 최고였어요!
중간중간 치어리더 분들 덕분에 응원 열기가 더 뜨거웠던 것 같아요💃
신나는 댄스와 함께 팬들도 신나서 따라 부르고 소리 지르고!
현장 직캠 찍은 거 같이 공유해요. 다들 오늘 경기 어땠나요?`,
    date: '2025.07.10',
  },
  {
    id: 6,
    username: 'rookiePitcher',
    image:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA5MjZfMjU4%2FMDAxNzI3Mjc3NTI2Mjg5.8hxMo3yoaJNtYvC7DOFRBqYULOjwxMK0J1xtdU4v6DIg.236AkUSTX1FEGWMyixGtpbgOVN9JY9CpgaaaHRFcO1og.PNG%2Fimage.png&type=sc960_832',
    title: '신인 투수 데뷔전🔥',
    content: `오늘 신인 투수의 데뷔전 정말 감동이었습니다!
첫 등판이라 긴장 많았을 텐데, 위기 상황마다 침착하게 잘 넘기는 모습이 인상 깊었어요.
첫 승까지 챙기다니 앞으로가 더 기대됩니다!
야구팬으로서 이런 순간을 함께할 수 있어서 행복했어요. 앞으로도 화이팅!`,
    date: '2025.07.01',
  },
]
