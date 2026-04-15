import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 프로젝트 어디서든 불러와서 쓸 수 있는 supabase 객체
export const supabase = createClient(supabaseUrl, supabaseKey);
