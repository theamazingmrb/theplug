import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

export const metadata = {
  title: 'About The Plug'
}

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      About Page
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas voluptas odio, maxime aliquid accusamus asperiores facilis necessitatibus quod veniam, delectus consequuntur hic architecto sit sint magnam enim incidunt debitis.</p>
    </main>
  )
}
