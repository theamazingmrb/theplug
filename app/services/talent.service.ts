import { supabase } from '@/utils/supabase'
import { TalentProps } from '@/lib/common.types'


export async function getTalent(): Promise<TalentProps[]> {
  const res = await supabase.from("profiles").select("*");
  console.log(res)
  if (res.error) {
    console.error(res.error);
    return [];
  }
  const talent = [...res.data] as TalentProps[]

  return talent;
}

export async function getSingleTalent(id: string): Promise<TalentProps> {
  const res = await supabase.from("profiles").select("*").eq('id', id);

  if (res.error) {
    // console.error(res.error);
    throw res.error
  }
  const talent = [...res.data] as TalentProps[]

  return talent[0];
}