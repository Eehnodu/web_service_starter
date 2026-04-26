import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

type Post = {
  id: number;
  content: string;
  created_at: string;
};

const BackendPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputText, setInputText] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");
  const [loading, setLoading] = useState(false);

  const readData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/posts`);
      const data = await res.json();
      setPosts(data);
    } catch (e) {
      console.error("조회 실패:", e);
    } finally {
      setLoading(false);
    }
  };

  const createData = async () => {
    if (!inputText.trim()) return;
    try {
      await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: inputText }),
      });
      setInputText("");
      readData();
    } catch (e) {
      console.error("추가 실패:", e);
    }
  };

  const updateData = async (id: number) => {
    try {
      await fetch(`${API_URL}/posts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: editingText }),
      });
      setEditingId(null);
      setEditingText("");
      readData();
    } catch (e) {
      console.error("수정 실패:", e);
    }
  };

  const deleteData = async (id: number) => {
    try {
      await fetch(`${API_URL}/posts/${id}`, { method: "DELETE" });
      readData();
    } catch (e) {
      console.error("삭제 실패:", e);
    }
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-6 sm:px-8 md:px-20 lg:px-40 sm:py-8">
      {/* 헤더 */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-100 text-violet-600">
            FastAPI
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600">
            Supabase
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-neutral-900 mt-2">
          Posts
        </h1>
        <p className="mt-2 text-base sm:text-lg text-neutral-500">
          FastAPI + Supabase 백엔드 CRUD 실습 페이지입니다.
        </p>
      </div>

      {/* 아키텍처 흐름 */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-5 mb-6">
        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">
          데이터 흐름
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { label: "브라우저", color: "bg-blue-50 border-blue-200 text-blue-700" },
            { label: "→", color: "text-neutral-300", plain: true },
            { label: "Vercel (FE)", color: "bg-blue-50 border-blue-200 text-blue-700" },
            { label: "→", color: "text-neutral-300", plain: true },
            { label: "Vercel (FastAPI)", color: "bg-violet-50 border-violet-200 text-violet-700" },
            { label: "→", color: "text-neutral-300", plain: true },
            { label: "Supabase", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
          ].map((item, i) =>
            item.plain ? (
              <span key={i} className={`font-bold ${item.color}`}>
                {item.label}
              </span>
            ) : (
              <span
                key={i}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${item.color}`}
              >
                {item.label}
              </span>
            )
          )}
        </div>
      </div>

      {/* 입력 영역 */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 mb-6">
        <p className="font-semibold text-neutral-800 mb-3">새 글 추가</p>
        <div className="flex gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && createData()}
            placeholder="내용을 입력하세요"
            className="flex-1 border border-neutral-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-200"
          />
          <button
            onClick={createData}
            className="px-5 py-2 bg-violet-500 text-white rounded-xl text-sm font-semibold hover:bg-violet-600 transition-colors"
          >
            추가
          </button>
        </div>
      </div>

      {/* 목록 */}
      <div className="flex flex-col gap-3">
        {loading && (
          <p className="text-neutral-400 text-sm text-center py-10">
            불러오는 중...
          </p>
        )}
        {!loading && posts.length === 0 && (
          <p className="text-neutral-400 text-sm text-center py-10">
            아직 글이 없습니다.
          </p>
        )}
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl border border-neutral-200 p-5 flex items-center gap-3"
          >
            {editingId === post.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && updateData(post.id)}
                  className="flex-1 border border-neutral-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-200"
                  autoFocus
                />
                <button
                  onClick={() => updateData(post.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors"
                >
                  저장
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="px-4 py-2 border border-neutral-200 rounded-xl text-sm text-neutral-500 hover:bg-neutral-100 transition-colors"
                >
                  취소
                </button>
              </>
            ) : (
              <>
                <p className="flex-1 text-neutral-800 text-sm">{post.content}</p>
                <span className="text-xs text-neutral-400 shrink-0">
                  {new Date(post.created_at).toLocaleString("ko-KR")}
                </span>
                <button
                  onClick={() => {
                    setEditingId(post.id);
                    setEditingText(post.content);
                  }}
                  className="px-4 py-2 border border-neutral-200 rounded-xl text-sm text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  수정
                </button>
                <button
                  onClick={() => deleteData(post.id)}
                  className="px-4 py-2 border border-red-200 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-colors"
                >
                  삭제
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default BackendPosts;
