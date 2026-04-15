# 베이스 프로젝트

React + Vite + Tailwind CSS + Supabase로 구성된 프런트엔드 스타터 템플릿입니다.  
이 프로젝트를 기반으로 진행합니다.

---

## 기술 스택

| 도구               | 역할                                |
| ------------------ | ----------------------------------- |
| **React 19**       | 컴포넌트 기반 UI 라이브러리         |
| **Vite**           | 로컬 개발 서버 및 빌드 도구         |
| **Tailwind CSS 3** | 유틸리티 기반 스타일링              |
| **TypeScript**     | 타입 안전성을 갖춘 JavaScript       |
| **Supabase**       | DB 연동 (조회 · 추가 · 수정 · 삭제) |
| **React Router**   | 페이지 라우팅                       |

---

## 시작 방법

```bash
# 1. 패키지 설치 (처음 한 번만)
npm install

# 2. 환경변수 파일 생성 (처음 한 번만)
cp .env.local.example .env.local
# → .env.local 파일을 열어 Supabase URL과 KEY를 채워넣으세요.

# 3. 로컬 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 화면이 나타납니다.

---

## 환경변수

`.env.local` 파일을 `frontend/` 폴더에 만들고 아래 두 값을 채워 넣으세요.  
값은 Supabase 프로젝트 설정 → **Project Settings → API** 에서 확인할 수 있습니다.

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> `.env.local`은 Git에 올라가지 않습니다. 키가 외부에 노출되지 않도록 주의하세요.

---

## 페이지 구조

| 경로     | 파일                  | 설명                             |
| -------- | --------------------- | -------------------------------- |
| `/`      | `container/main.tsx`  | ✏️ 메인 화면 (여기를 수정하세요) |
| `/posts` | `container/posts.tsx` | Supabase CRUD 실습 페이지        |

---

## 폴더 구조

```
frontend/
├── public/
│   └── fonts/              # 폰트 파일
├── src/
│   ├── components/         # 재사용할 컴포넌트 (여기에 만들어요)
│   ├── container/
│   │   ├── main.tsx        # ✏️ 메인 화면 (여기를 수정하세요)
│   │   └── posts.tsx       # Supabase CRUD 실습 페이지
│   ├── lib/
│   │   └── superbase.ts    # Supabase 클라이언트 초기화
│   ├── App.tsx             # 최상위 컴포넌트 (라우팅 설정)
│   ├── main.tsx            # React 시작점
│   └── index.css           # 전역 스타일 (폰트 등)
├── .env.local              # 환경변수 (Git 제외)
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 수정 시작하기

`src/container/main.tsx` 파일을 열어 기존 내용을 지우고 여러분의 서비스를 만들어 보세요.

```tsx
const Main = () => {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-neutral-900">나의 서비스</h1>
    </main>
  );
};

export default Main;
```

---

## 배포

GitHub에 Push하면 Vercel을 통해 자동으로 배포됩니다.  
Vercel 환경변수 설정에서 `VITE_SUPABASE_URL`과 `VITE_SUPABASE_ANON_KEY`를 동일하게 등록해 주세요.
