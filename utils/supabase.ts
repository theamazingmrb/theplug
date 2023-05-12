import { createClient } from '@supabase/supabase-js'
// import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import { headers, cookies } from 'next/headers'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// export const supabaseServerSide = createServerComponentSupabaseClient({
//   headers,
//   cookies,
// })