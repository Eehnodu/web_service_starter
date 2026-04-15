// App.tsx — 앱 전체를 감싸는 최상위 컴포넌트입니다.
// 라우팅, 전역 상태, 공통 레이아웃이 필요해지면 이 파일에 추가하게 됩니다.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./container/main";
import Posts from "./container/posts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
