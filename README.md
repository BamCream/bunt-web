# React + Vite Template

이 프로젝트는 React + Vite 기반의 프론트엔드 템플릿입니다.  
SCSS 기반 스타일링, 상태 관리로는 Zustand, 서버 통신은 Axios를 사용합니다.  
절대 경로는 `src` 형식으로 사용하며, 인증 토큰은 `sessionStorage` 기반으로 관리됩니다.

---

## 📦 기술 스택

```
- Vite
- React
- TypeScript
- SCSS
- Zustand
- Axios (libs/axios/CustomAxios.ts)
- React Router v6 (경로는 상수로 관리)
- .env 환경 변수 (VITE_SERVER_URL 사용)
- 절대 경로 alias: src/*
- 인증 토큰: sessionStorage 기반 관리
```

---

## 🗂️ 폴더 구조

```
src/
├── api/              # API 명세 정의
├── assets/           # 이미지, 폰트 등 정적 자산
├── components/       # 공통 컴포넌트
│   └── pageTemplate/ # 페이지 템플릿 레이아웃
├── constants/        # 상수 정의 (ex. path, token 등)
├── hooks/            # 커스텀 훅
├── libs/             # 라이브러리 설정 (axios, token 등)
│   └── axios/        # CustomAxios 구성
├── pages/            # 라우팅 기준 페이지 진입점
├── queries/          # React Query 관련 API 호출
├── stores/           # Zustand 상태 관리
├── styles/           # SCSS 전역 스타일 및 변수
├── types/            # 전역 타입 정의
└── utils/            # 유틸리티 함수
```

---

## 🔀 라우팅 구조

```
- 경로 상수: src/constants/path/path.ts
- 라우팅 컴포넌트: src/components/common/router.tsx

예시:

export const PATH = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
};
```

---

## 🔧 환경 변수

```
- 환경 변수 파일: .env
- 사용 예시: VITE_SERVER_URL=http://your.api.server.url
- 반드시 VITE_ prefix 사용 (Vite의 요구사항)
```

---

## 🌐 Axios 설정

```
- 위치: src/libs/axios/index.ts
- 기능:
  - 요청 시 인증 토큰 자동 주입
  - 응답 에러 핸들링
  - 토큰 만료 시 리프레시 처리
- 토큰은 libs/token/session.ts를 통해 sessionStorage에서 관리
```

---

## 🧠 상태 관리

```
- 상태 관리 라이브러리: Zustand
- 스토어 위치: src/stores/
- 전역 상태는 slice 단위로 관리
```

---

## 🎨 스타일링

```
- 스타일링 방식: SCSS
- 전역 스타일: src/styles/global.scss
- Vite 설정에서 additionalData 옵션으로 SCSS 변수 자동 주입
```

---

## 🧪 테스트

```
- 기본적으로 테스트 도구는 포함되어 있지 않음
- 향후 Jest 또는 Vitest 추가 가능
```

---

## 🧩 기타

```
- 공통 Provider 컴포넌트 위치: src/components/common/provider
  - React Query Provider
  - ToastContainer
- 코드 컨벤션 도구는 필요에 따라 설정 가능 (ESLint, Prettier, Husky 등)
```
