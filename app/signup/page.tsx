"use client"

import { ChangeEvent, FormEvent, useState } from 'react'
import { SearchBarProps } from "@/lib/common.types";
import { signUp } from '../services/auth.service';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await signUp('billie.heidelberg.jr@gmail.com', 'test12345678')

  }
  return (
    <div className="container mx-auto text-center w-72">
      <div className="col-6 form-widget" aria-live="polite">
        <p className="text-xs text-gray-500 pb-3">Sign in via magic link with your email below</p>
        {loading ? (
          'Sending magic link...'
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="your@email.com"
              id="website"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="my-3 w-36 text-xs h-8 rounded-full text-gray-50 bg-indigo-600 hover:bg-indigo-700" >
              Send magic link
            </button>

          </form>
        )}
      </div>
    </div>
  )
}

export default Signup;