// =============================================================
// [2주차 실습용 베이스 프로젝트] React + Vite + Tailwind CSS
// =============================================================
//
// 이 프로젝트의 파일 흐름은 아래와 같습니다:
//
//   index.html  ←  브라우저가 가장 먼저 여는 파일. <div id="root"> 하나만 있습니다.
//       ↓
//   main.tsx    ←  지금 이 파일. React를 <div id="root">에 붙이는 시작점.
//       ↓
//   App.tsx     ←  최상위 컴포넌트. 화면 전체를 감싸는 껍데기입니다.
//       ↓
//   container/main.tsx  ←  실제로 수강생이 수정할 메인 화면입니다. 여기서 작업하세요!
//
// ---------------------------------------------------------------
// 실습 시작 방법
//   1. npm install        (패키지 설치, 처음 한 번만)
//   2. npm run dev        (로컬 서버 실행 → http://localhost:5173)
//   3. src/container/main.tsx 파일을 수정해서 화면을 만들어 보세요.
// ---------------------------------------------------------------

import { createRoot } from "react-dom/client";
// Tailwind CSS: bg-, text-, flex 등 유틸리티 클래스를 쓰기 위해 반드시 불러옵니다.
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(<App />);
