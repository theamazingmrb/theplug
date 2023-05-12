import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      About Team Page
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio soluta voluptatibus consequuntur impedit nihil deleniti fugit quia asperiores consequatur voluptate! Aut modi ratione cupiditate neque ipsam optio libero repellat natus!</p>
    </main>
  )
}
