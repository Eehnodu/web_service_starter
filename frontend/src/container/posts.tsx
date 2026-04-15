import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/superbase";

type Post = {
  id: number;
  content: string;
  created_at: string;
};

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputText, setInputText] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  // 조회
  const readData = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("조회 실패:", error.message);
    else setPosts(data ?? []);
  };

  // 추가
  const createData = async () => {
    if (!inputText.trim()) return;
    const { error } = await supabase
      .from("posts")
      .insert([{ content: inputText }]);

    if (error) console.error("추가 실패:", error.message);
    else {
      setInputText("");
      readData();
    }
  };

  // 수정
  const updateData = async (id: number) => {
    const { error } = await supabase
      .from("posts")
      .update({ content: editingText })
      .eq("id", id);

    if (error) console.error("수정 실패:", error.message);
    else {
      setEditingId(null);
      setEditingText("");
      readData();
    }
  };

  // 삭제
  const deleteData = async (id: number) => {
    const { error } = await supabase.from("posts").delete().eq("id", id);

    if (error) console.error("삭제 실패:", error.message);
    else readData();
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 px-40 py-8">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900">Posts</h1>
          <p className="mt-3 text-lg text-neutral-500">
            Supabase CRUD 실습 페이지입니다.
          </p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-600 hover:bg-neutral-100 transition-colors"
        >
          ← 돌아가기
        </button>
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
            className="flex-1 border border-neutral-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            onClick={createData}
            className="px-5 py-2 bg-blue-500 text-white rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors"
          >
            추가
          </button>
        </div>
      </div>

      {/* 목록 */}
      <div className="flex flex-col gap-3">
        {posts.length === 0 && (
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
                  className="flex-1 border border-neutral-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
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
                <span className="text-xs text-neutral-400">
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

export default Posts;
