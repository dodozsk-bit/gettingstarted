# OX 한 입

웹앱과 AI의 기초를 배우는 한국어 OX 퀴즈입니다. React + TypeScript + Vite로 만들었으며 로그인, 데이터베이스, 외부 API 없이 실행됩니다.

## 로컬 실행

```sh
npm install
npm run dev
```

터미널에 표시되는 로컬 주소로 접속하세요. 기본 주소는 http://localhost:5173 입니다.

## 확인 및 빌드

```sh
npm run lint
npm run build
npm run preview
```

빌드 결과는 `dist` 폴더에 생성됩니다.

## 문제 수정

`src/App.tsx`의 `questions` 배열에서 문제, 정답, 해설을 수정할 수 있습니다. 현재 5문제이며 한 문제당 20점입니다. 새로고침하면 진행 상황이 초기화됩니다.

## Vercel 배포

1. 변경 사항을 GitHub 저장소에 커밋하고 push합니다.
2. Vercel에서 해당 저장소를 Import합니다.
3. 저장소 안에 `gettingstarted` 폴더가 있다면 Root Directory를 `gettingstarted`로 지정합니다. 이 프로젝트 자체가 저장소 루트라면 기본값을 사용합니다.
4. Framework Preset은 Vite, Build Command는 `npm run build`, Output Directory는 `dist`로 설정하고 배포합니다.

환경 변수는 필요하지 않습니다.
