// ✏️ 이 파일이 실제 화면입니다. 아래 내용을 지우고 여러분의 서비스를 만들어 보세요!
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-6 sm:px-8 md:px-20 lg:px-40 sm:py-8">
      {/* 헤더 */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold text-neutral-900">
            React + Vite + Tailwind CSS
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-500">
            베이스 프로젝트입니다. 이 화면을 지우고 여러분만의 서비스를 채워
            보세요.
          </p>
        </div>
        <button
          onClick={() => navigate("/posts")}
          className="px-4 py-2 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors shrink-0"
        >
          Posts 하러가기 →
        </button>
      </div>

      {/* 도구 소개 2열 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Row 1: React + Vite */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <div className="text-blue-500 font-bold text-lg mb-1">React</div>
          <div className="text-xs text-neutral-400 mb-3">UI 라이브러리</div>
          <p className="text-base text-neutral-600 mb-4">
            화면을 <strong>컴포넌트</strong>라는 독립적인 블록 단위로 쪼개서
            만드는 JavaScript 도구입니다. 예를 들어 헤더, 카드, 버튼을 각각 별도
            파일로 만들고 레고처럼 조립해 전체 화면을 구성합니다. 이 프로젝트의{" "}
            <code className="mx-1 bg-neutral-100 rounded px-1">.tsx</code> 파일
            하나하나가 모두 컴포넌트입니다. 한 번 만든 컴포넌트는 여러 곳에서
            재사용할 수 있어 유지보수가 쉬워집니다.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-neutral-600">
            <p className="font-semibold text-neutral-800 mb-1">
              "파일을 왜 이렇게 쪼개나요? 하나에 다 써도 되지 않나요?"
            </p>
            <p>
              됩니다. 처음엔 하나의 파일에 다 써도 동작합니다. 하지만 화면이
              복잡해질수록 파일이 길어져 어디를 고쳐야 할지 찾기 어려워집니다.
              컴포넌트로 나누면 버튼은 버튼 파일만, 카드는 카드 파일만 수정하면
              되어 훨씬 관리하기 쉽습니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <div className="text-violet-500 font-bold text-lg mb-1">Vite</div>
          <div className="text-xs text-neutral-400 mb-3">
            개발 서버 · 빌드 도구
          </div>
          <p className="text-base text-neutral-600 mb-4">
            <code className="bg-neutral-100 rounded px-1">npm run dev</code>를
            실행하면 켜지는 로컬 개발 서버입니다. 코드를 저장하는 순간
            브라우저가 <strong>즉시 새로고침</strong>되어 변경 사항을 바로
            확인할 수 있습니다. 작업이 끝나고{" "}
            <code className="mx-1 bg-neutral-100 rounded px-1">
              npm run build
            </code>
            를 실행하면 Vercel 같은 서비스에 배포할 수 있는 파일 묶음을 만들어
            줍니다.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-neutral-600">
            <p className="font-semibold text-neutral-800 mb-1">
              "npm이 뭔가요?"
            </p>
            <p>
              Node Package Manager의 약자로, 다른 사람이 만들어 둔 코드
              묶음(패키지)을 설치하고 관리하는 도구입니다.{" "}
              <code className="mx-1 bg-neutral-100 rounded px-1">
                npm install
              </code>
              을 실행하면{" "}
              <code className="bg-neutral-100 rounded px-1">package.json</code>
              에 적힌 패키지들을 자동으로 내려받아 줍니다. 앱스토어와 비슷한
              개념입니다.
            </p>
          </div>
        </div>

        {/* Row 2: CSS + Tailwind CSS */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <div className="font-bold text-lg mb-1">CSS</div>
          <div className="text-xs text-neutral-400 mb-3">스타일 언어</div>
          <p className="text-base text-neutral-600 mb-4">
            HTML 요소에 색상, 크기, 여백, 배치 등 시각적 스타일을 입히는
            언어입니다. 원래는 별도의{" "}
            <code className="mx-1 bg-neutral-100 rounded px-1">.css</code>{" "}
            파일을 만들어 각 요소에 스타일을 하나씩 지정해야 합니다. 직접 쓰면
            강력하지만 파일이 많아질수록 관리가 복잡해진다는 단점이 있어, 이
            프로젝트에서는 <strong>Tailwind CSS</strong>로 대신합니다.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-neutral-600">
            <p className="font-semibold text-neutral-800 mb-1">
              "그럼 CSS 파일은 아예 안 쓰는 건가요?"
            </p>
            <p>
              폰트 불러오기처럼 전체에 한 번만 적용하는 스타일은{" "}
              <code className="mx-1 bg-neutral-100 rounded px-1">
                index.css
              </code>
              에 직접 씁니다. 하지만 개별 컴포넌트의 색상·크기·배치는 모두
              Tailwind 클래스로 처리하기 때문에, 별도 CSS 파일을 새로 만들 일은
              거의 없습니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <div className="text-teal-500 font-bold text-lg mb-1">
            Tailwind CSS
          </div>
          <div className="text-xs text-neutral-400 mb-3">
            CSS 유틸리티 프레임워크
          </div>
          <p className="text-base text-neutral-600 mb-4">
            별도의 CSS 파일 없이 태그의{" "}
            <code className="mx-1 bg-neutral-100 rounded px-1">className</code>
            에 직접 스타일을 적는 도구입니다.
            <code className="mx-1 bg-neutral-100 rounded px-1">
              bg-blue-500
            </code>
            이면 파란 배경,
            <code className="mx-1 bg-neutral-100 rounded px-1">text-white</code>
            면 흰 글자,
            <code className="mx-1 bg-neutral-100 rounded px-1">flex gap-4</code>
            면 가로 정렬입니다. 클래스 이름이 곧 스타일이라 별도 파일을 오가지
            않아도 되고, 수정하면 브라우저에 즉시 반영됩니다.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-neutral-600">
            <p className="font-semibold text-neutral-800 mb-1">
              "className이 너무 길어지지 않나요?"
            </p>
            <p>
              맞습니다. 스타일이 많아질수록 className이 길어지는 건 Tailwind의
              특성입니다. 그래서 자주 쓰는 조합은 컴포넌트로 분리해서 재사용하는
              방식으로 해결합니다. 길어 보여도 CSS 파일을 따로 열지 않아도 돼서
              전체적인 속도는 오히려 빠릅니다.
            </p>
          </div>
        </div>

        {/* Row 3: JavaScript + TypeScript */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <div className="font-bold text-lg mb-1">JavaScript</div>
          <div className="text-xs text-neutral-400 mb-3">프로그래밍 언어</div>
          <p className="text-base text-neutral-600 mb-4">
            웹을 <strong>움직이게</strong> 하는 프로그래밍 언어입니다. 버튼
            클릭에 반응하거나, 서버에서 데이터를 불러오거나, 화면을 동적으로
            바꾸는 등 모든 동작 로직을 JavaScript로 작성합니다. HTML이 뼈대,
            CSS가 옷이라면 JavaScript는 근육과 신경계입니다. React와 Vite 모두
            JavaScript를 기반으로 동작합니다.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-neutral-600">
            <p className="font-semibold text-neutral-800 mb-1">
              "코딩을 전혀 몰라도 할 수 있나요?"
            </p>
            <p>
              이 강의에서는 밑바닥부터 코드를 짜는 것이 아니라, 이미 만들어진
              코드를 읽고 원하는 부분만 수정하는 방식으로 진행합니다. 글자를
              바꾸거나 색상을 바꾸는 수준은 JavaScript를 몰라도 충분히 할 수
              있습니다. 4주차 DB 연동에서 비로소 간단한 동작 코드를 다루게
              됩니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <div className="font-bold text-lg mb-1">TypeScript</div>
          <div className="text-xs text-neutral-400 mb-3">
            JavaScript의 상위 버전
          </div>
          <p className="text-base text-neutral-600 mb-4">
            JavaScript에 <strong>타입</strong>이라는 규칙을 추가한 언어입니다.
            예를 들어 숫자가 들어와야 할 곳에 문자를 넣으면, 실행하기 전에
            오류를 미리 잡아줍니다. 이 프로젝트의 파일 확장자가
            <code className="mx-1 bg-neutral-100 rounded px-1">.ts</code> /
            <code className="mx-1 bg-neutral-100 rounded px-1">.tsx</code>인
            이유가 바로 TypeScript를 쓰기 때문입니다. JavaScript와 거의 동일하게
            작성하되, 더 안전하게 개발할 수 있습니다.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-neutral-600">
            <p className="font-semibold text-neutral-800 mb-1">
              "React에서 JavaScript는 못 쓰나요?"
            </p>
            <p>
              쓸 수 있습니다. React는 원래 JavaScript로 만들어졌고, 파일
              확장자를
              <code className="mx-1 bg-neutral-100 rounded px-1">.jsx</code>로
              바꾸면 그대로 동작합니다. 다만 실무에서는 협업과 오류 방지를 위해
              TypeScript를 함께 쓰는 것이 표준이 되었고, Vite로 프로젝트를 새로
              만들 때도 TypeScript 템플릿이 기본으로 권장됩니다. 문법은
              JavaScript와 거의 같으니 처음에는 크게 신경 쓰지 않아도 됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* 폴더 구조 + 시작 방법 2열 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <p className="text-xl font-bold text-neutral-900 mb-4">폴더 구조</p>
          <div className="text-sm text-neutral-700 flex flex-col gap-1.5">
            {[
              { depth: 0, name: "frontend/", desc: "프로젝트 루트" },
              { depth: 1, name: "public/", desc: "폰트·이미지 등 정적 파일" },
              { depth: 2, name: "fonts/", desc: "" },
              {
                depth: 1,
                name: "src/",
                desc: "실제 작성하는 소스 코드",
                bold: true,
              },
              {
                depth: 2,
                name: "components/",
                desc: "재사용할 컴포넌트를 여기에 만들어요",
                bold: true,
              },
              { depth: 2, name: "container/", desc: "", bold: true },
              {
                depth: 3,
                name: "main.tsx",
                desc: "← 여기를 수정하세요!",
                highlight: true,
              },
              {
                depth: 2,
                name: "App.tsx",
                desc: "최상위 컴포넌트",
                bold: true,
              },
              { depth: 2, name: "main.tsx", desc: "React 시작점" },
              { depth: 2, name: "index.css", desc: "전역 스타일 (폰트 등)" },
              {
                depth: 1,
                name: "index.html",
                desc: "브라우저가 가장 먼저 여는 파일",
              },
              { depth: 1, name: "package.json", desc: "설치된 패키지 목록" },
              { depth: 1, name: "vite.config.ts", desc: "Vite 설정" },
              {
                depth: 1,
                name: "tailwind.config.js",
                desc: "Tailwind CSS 설정",
              },
              { depth: 1, name: "tsconfig.json", desc: "TypeScript 설정" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {item.depth > 0 && (
                  <span
                    style={{ paddingLeft: `${(item.depth - 1) * 16}px` }}
                    className="text-neutral-500 shrink-0"
                  >
                    ㄴ
                  </span>
                )}
                <span
                  className={
                    item.highlight
                      ? "text-blue-600 font-semibold"
                      : item.bold
                        ? "font-bold"
                        : ""
                  }
                >
                  {item.name}
                </span>
                {item.desc && (
                  <span className="text-neutral-400 text-xs">{item.desc}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <p className="text-xl font-bold text-neutral-900 mb-4">
            실습 시작 방법
          </p>
          <div className="flex flex-col gap-5">
            {[
              {
                step: "1",
                cmd: "npm install",
                desc: "패키지 설치. 처음 한 번만 실행합니다.",
              },
              {
                step: "2",
                cmd: "npm run dev",
                desc: "로컬 서버 실행 → localhost:3000을 브라우저에서 열어보세요.",
              },
              {
                step: "3",
                cmd: "container/main.tsx 수정",
                desc: "이 화면을 지우고 내 서비스를 만드세요.",
              },
              {
                step: "4",
                cmd: "GitHub Push → Vercel 자동 배포",
                desc: "Push 하면 실제 URL에 즉시 반영됩니다.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-neutral-100 text-neutral-500 text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {item.step}
                </span>
                <div>
                  <code className="bg-neutral-100 text-neutral-700 rounded px-2 py-1 text-sm">
                    {item.cmd}
                  </code>
                  <p className="text-neutral-700 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HTML 태그 */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 mb-4">
        <p className="text-xl font-bold text-neutral-900 mb-6">
          자주 쓰는 HTML 태그
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-neutral-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <code className="bg-neutral-100 text-neutral-800 rounded px-2 py-0.5 text-sm">
                &lt;div&gt;
              </code>
              <span className="text-sm font-semibold text-neutral-800">
                레이아웃 상자
              </span>
            </div>
            <p className="text-sm text-neutral-700 mb-3">
              화면을 구역으로 나눌 때 쓰는 투명한 상자입니다. 직접 보이진 않지만
              flex나 grid와 함께 쓰면 레이아웃을 잡을 수 있습니다.
            </p>
            <div className="bg-neutral-50 rounded-lg p-3 flex gap-2">
              <div className="bg-blue-100 rounded p-2 text-xs text-blue-500">
                div A
              </div>
              <div className="bg-blue-100 rounded p-2 text-xs text-blue-500">
                div B
              </div>
              <div className="bg-blue-100 rounded p-2 text-xs text-blue-500">
                div C
              </div>
            </div>
            <code className="block mt-2 text-xs text-neutral-400">
              &lt;div className="flex gap-2"&gt;...&lt;/div&gt;
            </code>
          </div>

          <div className="border border-neutral-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <code className="bg-neutral-100 text-neutral-800 rounded px-2 py-0.5 text-sm">
                &lt;h1&gt; ~ &lt;h6&gt;
              </code>
              <span className="text-sm font-semibold text-neutral-800">
                제목
              </span>
            </div>
            <p className="text-sm text-neutral-700 mb-3">
              숫자가 작을수록 더 큰 제목입니다. 보통 h1은 페이지 제목, h2는 섹션
              제목에 씁니다.
            </p>
            <div className="bg-neutral-50 rounded-lg p-3 flex flex-col gap-0.5">
              <span className="text-2xl font-bold text-neutral-800 leading-tight">
                h1 제목
              </span>
              <span className="text-xl font-semibold text-neutral-700 leading-tight">
                h2 소제목
              </span>
              <span className="text-base font-semibold text-neutral-600 leading-tight">
                h3 소소제목
              </span>
            </div>
          </div>

          <div className="border border-neutral-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <code className="bg-neutral-100 text-neutral-800 rounded px-2 py-0.5 text-sm">
                &lt;p&gt;
              </code>
              <span className="text-sm font-semibold text-neutral-800">
                문단 텍스트
              </span>
            </div>
            <p className="text-sm text-neutral-700 mb-3">
              일반 본문 텍스트를 쓸 때 사용합니다. h1이 제목이라면 p는 그 아래
              설명 글입니다.
            </p>
            <div className="bg-neutral-50 rounded-lg p-3">
              <p className="text-base text-neutral-700">
                안녕하세요, 이것이 p 태그로 쓴 문단입니다.
              </p>
            </div>
            <code className="block mt-2 text-xs text-neutral-400">
              &lt;p className="text-base text-neutral-700"&gt;내용&lt;/p&gt;
            </code>
          </div>

          <div className="border border-neutral-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <code className="bg-neutral-100 text-neutral-800 rounded px-2 py-0.5 text-sm">
                &lt;button&gt;
              </code>
              <span className="text-sm font-semibold text-neutral-800">
                버튼
              </span>
            </div>
            <p className="text-sm text-neutral-700 mb-3">
              클릭 이벤트가 필요한 곳에 씁니다. onClick을 달아서 동작을
              연결합니다.
            </p>
            <div className="bg-neutral-50 rounded-lg p-3 flex gap-2">
              <button className="bg-blue-500 text-white text-sm rounded-lg px-4 py-2 cursor-pointer">
                클릭!
              </button>
              <button className="border border-neutral-300 text-neutral-600 text-sm rounded-lg px-4 py-2 cursor-pointer">
                취소
              </button>
            </div>
            <code className="block mt-2 text-xs text-neutral-400">
              {"<button onClick={() => alert('클릭!')}>클릭!</button>"}
            </code>
          </div>

          <div className="border border-neutral-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <code className="bg-neutral-100 text-neutral-800 rounded px-2 py-0.5 text-sm">
                &lt;input&gt;
              </code>
              <span className="text-sm font-semibold text-neutral-800">
                입력창
              </span>
            </div>
            <p className="text-sm text-neutral-700 mb-3">
              사용자가 텍스트를 입력할 수 있는 필드입니다. 4주차 DB 연동 때
              핵심적으로 사용합니다.
            </p>
            <div className="bg-neutral-50 rounded-lg p-3">
              <input
                className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm text-neutral-700 outline-none"
                placeholder="여기에 입력하세요"
              />
            </div>
            <code className="block mt-2 text-xs text-neutral-400">
              &lt;input placeholder="여기에 입력하세요" /&gt;
            </code>
          </div>

          <div className="border border-neutral-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <code className="bg-neutral-100 text-neutral-800 rounded px-2 py-0.5 text-sm">
                &lt;span&gt;
              </code>
              <span className="text-sm font-semibold text-neutral-800">
                텍스트 일부 꾸미기
              </span>
            </div>
            <p className="text-sm text-neutral-700 mb-3">
              문장 안에서 특정 단어만 색깔이나 굵기를 다르게 줄 때 씁니다.
            </p>
            <div className="bg-neutral-50 rounded-lg p-3 text-base text-neutral-700">
              안녕 <span className="text-blue-500 font-semibold">세상</span>아,
              반가워!
            </div>
            <code className="block mt-2 text-xs text-neutral-400">
              안녕 &lt;span className="text-blue-500"&gt;세상&lt;/span&gt;아
            </code>
          </div>
        </div>
      </div>

      {/* Tailwind 참고 — 3열 */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6">
        <p className="text-xl font-bold text-neutral-900 mb-6">
          Tailwind CSS 클래스 참고
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 레이아웃 */}
          <div>
            <p className="font-bold text-lg text-neutral-900 mb-4">레이아웃</p>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex gap-2 mb-1">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    flex
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    가로로 나란히
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 flex gap-2">
                  {["A", "B", "C"].map((l) => (
                    <div
                      key={l}
                      className="bg-blue-200 rounded px-3 py-1 text-sm text-blue-700"
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-1">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    flex flex-col
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    세로로 쌓기
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 flex flex-col gap-2 w-20">
                  {["A", "B", "C"].map((l) => (
                    <div
                      key={l}
                      className="bg-violet-200 rounded px-3 py-1 text-sm text-violet-700 text-center"
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-1">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    gap-2 / gap-6
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    요소 사이 간격
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 flex flex-col gap-2">
                  <div className="flex gap-2">
                    {["A", "B", "C"].map((l) => (
                      <div
                        key={l}
                        className="bg-teal-200 rounded px-3 py-1 text-sm text-teal-700"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {["A", "B", "C"].map((l) => (
                      <div
                        key={l}
                        className="bg-teal-200 rounded px-3 py-1 text-sm text-teal-700"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  <div className="flex text-xs text-neutral-400 gap-1">
                    <span className="w-24 text-center">gap-2</span>
                    <span className="ml-2">gap-6</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-1">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    grid grid-cols-3
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    격자 배치
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 grid grid-cols-3 gap-2">
                  {["1", "2", "3", "4", "5", "6"].map((l) => (
                    <div
                      key={l}
                      className="bg-orange-200 rounded px-2 py-1 text-sm text-orange-700 text-center"
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-1">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    justify-between
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    양 끝으로 분산
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 flex justify-between">
                  {["로고", "메뉴"].map((l) => (
                    <div
                      key={l}
                      className="bg-neutral-200 rounded px-3 py-1 text-sm text-neutral-600"
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-2">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    padding
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    요소 안쪽 여백
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 flex flex-col gap-2">
                  {[
                    { cls: "p-4", label: "p-4", desc: "상하좌우 전체" },
                    { cls: "px-4", label: "px-4", desc: "좌우(가로)만" },
                    { cls: "py-4", label: "py-4", desc: "상하(세로)만" },
                    {
                      cls: "pt-4",
                      label: "pt-4",
                      desc: "위만  (pb=아래, pl=왼, pr=오른)",
                    },
                  ].map((item) => (
                    <div key={item.cls} className="flex items-center gap-2">
                      <code className="bg-blue-100 text-blue-700 rounded px-2 py-0.5 text-xs shrink-0 w-12 text-center">
                        {item.label}
                      </code>
                      <span className="text-xs text-neutral-600">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 bg-neutral-50 rounded-lg p-3 flex gap-3 items-center">
                  <div className="bg-blue-200 rounded-lg p-4 text-xs text-blue-700 text-center leading-tight">
                    p-4
                    <br />
                    <span className="text-blue-400">(사방 여백)</span>
                  </div>
                  <div className="bg-blue-200 rounded-lg px-6 py-1 text-xs text-blue-700 text-center leading-tight">
                    px-6
                    <br />
                    <span className="text-blue-400">(좌우만)</span>
                  </div>
                  <div className="bg-blue-200 rounded-lg px-2 py-4 text-xs text-blue-700 text-center leading-tight">
                    py-4
                    <br />
                    <span className="text-blue-400">(상하만)</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-2">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    margin
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    요소 바깥쪽 여백
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 flex flex-col gap-2">
                  {[
                    { cls: "m-4", label: "m-4", desc: "상하좌우 전체" },
                    { cls: "mx-4", label: "mx-4", desc: "좌우(가로)만" },
                    { cls: "my-4", label: "my-4", desc: "상하(세로)만" },
                    {
                      cls: "mt-4",
                      label: "mt-4",
                      desc: "위만  (mb=아래, ml=왼, mr=오른)",
                    },
                  ].map((item) => (
                    <div key={item.cls} className="flex items-center gap-2">
                      <code className="bg-orange-100 text-orange-700 rounded px-2 py-0.5 text-xs shrink-0 w-12 text-center">
                        {item.label}
                      </code>
                      <span className="text-xs text-neutral-600">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 bg-neutral-50 rounded-lg p-3">
                  <p className="text-xs text-neutral-500 mb-2">
                    mt-4 — 위쪽에만 바깥 여백
                  </p>
                  <div className="border-2 border-dashed border-orange-200 rounded-lg p-2">
                    <div className="bg-white rounded border border-neutral-200 text-xs text-neutral-500 px-2 py-1 text-center">
                      다른 요소
                    </div>
                    <div className="mt-4 bg-orange-100 rounded border border-orange-200 text-xs text-orange-700 px-2 py-1 text-center">
                      mt-4 적용된 요소
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 타이포 + 텍스트 정렬 + hover */}
          <div>
            <p className="font-bold text-lg text-neutral-900 mb-4">
              타이포그래피
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex gap-2 mb-2">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    text-{"{크기}"}
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    글자 크기
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 flex flex-col gap-1">
                  {[
                    {
                      cls: "text-xs",
                      label: "text-xs",
                      sample: "아주 작은 글자",
                    },
                    { cls: "text-sm", label: "text-sm", sample: "작은 글자" },
                    {
                      cls: "text-base",
                      label: "text-base",
                      sample: "기본 크기",
                    },
                    {
                      cls: "text-lg",
                      label: "text-lg",
                      sample: "조금 큰 글자",
                    },
                    { cls: "text-xl", label: "text-xl", sample: "소제목" },
                    { cls: "text-2xl", label: "text-2xl", sample: "제목" },
                    { cls: "text-3xl", label: "text-3xl", sample: "큰 제목" },
                  ].map((item) => (
                    <div key={item.cls} className="flex items-baseline gap-2">
                      <code className="text-blue-700 text-xs shrink-0 w-20">
                        {item.label}
                      </code>
                      <span
                        className={`text-neutral-800 ${item.cls} leading-tight`}
                      >
                        {item.sample}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-2">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    font-{"{굵기}"}
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    글자 굵기
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 flex flex-col gap-1.5">
                  {[
                    {
                      cls: "font-normal",
                      label: "font-normal",
                      sample: "기본 굵기",
                    },
                    {
                      cls: "font-medium",
                      label: "font-medium",
                      sample: "약간 굵게",
                    },
                    {
                      cls: "font-semibold",
                      label: "font-semibold",
                      sample: "소제목에 추천",
                    },
                    {
                      cls: "font-bold",
                      label: "font-bold",
                      sample: "제목에 추천",
                    },
                  ].map((item) => (
                    <div key={item.cls} className="flex items-center gap-2">
                      <code className="text-blue-700 text-xs shrink-0 w-28">
                        {item.label}
                      </code>
                      <span
                        className={`text-neutral-800 text-base ${item.cls}`}
                      >
                        {item.sample}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-neutral-700 mb-2 font-semibold text-neutral-800">
                  텍스트 정렬
                </p>
                <div className="bg-neutral-50 rounded-lg p-3 flex flex-col gap-2">
                  {[
                    { cls: "text-left", label: "text-left" },
                    { cls: "text-center", label: "text-center" },
                    { cls: "text-right", label: "text-right" },
                  ].map((item) => (
                    <div
                      key={item.cls}
                      className="bg-white border border-neutral-100 rounded-lg px-3 py-2"
                    >
                      <p className={`text-sm text-neutral-700 ${item.cls}`}>
                        <code className="text-blue-600 text-xs mr-2">
                          {item.label}
                        </code>
                        안녕하세요 반갑습니다
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-2">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    hover:
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    마우스 올렸을 때 적용
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 flex gap-3 flex-wrap">
                  <button className="bg-blue-500 text-white text-sm rounded-lg px-4 py-2 hover:bg-blue-700 cursor-pointer">
                    hover:bg-blue-700
                  </button>
                  <button className="border border-neutral-300 text-neutral-700 text-sm rounded-lg px-4 py-2 hover:bg-neutral-100 cursor-pointer">
                    hover:bg-neutral-100
                  </button>
                </div>
                <code className="block mt-2 text-xs text-neutral-400">
                  {'className="bg-blue-500 hover:bg-blue-700"'}
                </code>
              </div>

              <div>
                <div className="flex gap-2 mb-2">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    transition
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    hover 변화를 부드럽게
                  </span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-3 flex gap-3">
                  <button className="bg-blue-500 text-white text-sm rounded-lg px-4 py-2 hover:bg-blue-700 cursor-pointer">
                    없음 (딱딱)
                  </button>
                  <button className="bg-blue-500 text-white text-sm rounded-lg px-4 py-2 hover:bg-blue-700 transition cursor-pointer">
                    있음 (부드럽게)
                  </button>
                </div>
                <code className="block mt-2 text-xs text-neutral-400">
                  {'className="... hover:bg-blue-700 transition"'}
                </code>
              </div>
            </div>
          </div>

          {/* 색상 + 모양 */}
          <div>
            <p className="font-bold text-lg text-neutral-900 mb-4">색상</p>
            <div className="flex flex-col gap-5 mb-6">
              <div>
                <div className="flex gap-2 mb-2">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    bg-{"{색}-{숫자}"}
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    배경색 — 숫자가 클수록 진해요
                  </span>
                </div>
                <div className="flex gap-1">
                  {[100, 200, 300, 400, 500, 600, 700].map((n) => (
                    <div
                      key={n}
                      className="flex-1 h-8 rounded bg-blue-500"
                      style={{ opacity: n / 700 }}
                    />
                  ))}
                </div>
                <div className="flex gap-1 mt-1">
                  {[100, 200, 300, 400, 500, 600, 700].map((n) => (
                    <div
                      key={n}
                      className="flex-1 text-center text-xs text-neutral-400"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-2">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    text-{"{색}-{숫자}"}
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    글자색
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  {[
                    {
                      cls: "text-neutral-900",
                      label: "text-neutral-900",
                      sample: "기본 글자 (거의 검정)",
                    },
                    {
                      cls: "text-neutral-500",
                      label: "text-neutral-500",
                      sample: "중간 회색",
                    },
                    {
                      cls: "text-neutral-400",
                      label: "text-neutral-400",
                      sample: "연한 회색 (보조)",
                    },
                    {
                      cls: "text-blue-500",
                      label: "text-blue-500",
                      sample: "포인트 컬러",
                    },
                  ].map((item) => (
                    <div key={item.cls} className="flex items-center gap-2">
                      <code className="bg-neutral-100 rounded px-1.5 text-xs text-blue-700 shrink-0 w-36">
                        {item.label}
                      </code>
                      <span className={`text-sm ${item.cls}`}>
                        {item.sample}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-bold text-lg text-neutral-900 mb-4">
              모양 · 효과
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex gap-2 mb-2">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    rounded
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    모서리 둥글기
                  </span>
                </div>
                <div className="flex gap-3">
                  {[
                    { cls: "", label: "없음" },
                    { cls: "rounded", label: "rounded" },
                    { cls: "rounded-lg", label: "rounded-lg" },
                    { cls: "rounded-full", label: "rounded-full" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className={`w-10 h-10 bg-blue-400 ${item.cls}`} />
                      <span className="text-xs text-neutral-400">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex gap-2 mb-2">
                  <code className="bg-neutral-100 rounded px-2 py-0.5 text-sm text-blue-700">
                    shadow
                  </code>
                  <span className="text-sm font-semibold text-neutral-800">
                    그림자
                  </span>
                </div>
                <div className="flex gap-4 p-2">
                  {[
                    { cls: "", label: "없음" },
                    { cls: "shadow", label: "shadow" },
                    { cls: "shadow-md", label: "shadow-md" },
                    { cls: "shadow-lg", label: "shadow-lg" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-2"
                    >
                      <div
                        className={`w-10 h-10 bg-white rounded-lg border border-neutral-100 ${item.cls}`}
                      />
                      <span className="text-xs text-neutral-400">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
