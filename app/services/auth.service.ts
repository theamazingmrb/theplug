import { supabase } from '@/utils/supabase'
import { TalentProps } from '@/lib/common.types'


export async function signUp(email: string, password: string): Promise<TalentProps[] | Error> {
  const { data, error } = await supabase.auth.signUp({
    email: 'billie.heidelberg.jr@gmail.com',// email,
    password: '12345678910' //password,
  })

  return []
}

export async function signIn(email: string, password: string): Promise<TalentProps[] | Error> {
  const res = await supabase.auth.signInWithPassword({
    email: 'billie.heidelberg.jr@gmail.com',// email,
    password: '12345678910' //password,
  })

  return []
}
export async function signOut(email: string, password: string): Promise<TalentProps[] | Error> {
  const res = await supabase.auth.signOut();

  return []
}