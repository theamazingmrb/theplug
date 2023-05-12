// 'use client';
// import TalentSearch from './components/TalentSearch'
// import Signup from './components/SignupForm'
// import { useState, useEffect } from 'react'
// import Head from 'next/head'
// import Link from 'next/link'
// import { supabase } from '../utils/supabase'
// import { Session } from '@supabase/supabase-js'

export default async function HomePage() {

  // const [session, setSession] = useState<Session | null>(null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })

  //   return () => subscription.unsubscribe()
  // }, [])

  // if (!session) {
  //   <div> Login in please</div>
  // }

  return (
    <div className='bg-black min-h-screen'>

      <main className='container mx-auto py-10 px-4 flex flex-col items-center justify-center' >
        {/* <h1 className="text-4xl font-bold mb-x text-white">Talent Database</h1> */}
        {/* <TalentSearch />
        <Signup /> */}
      </main>
    </div>

  )
}
