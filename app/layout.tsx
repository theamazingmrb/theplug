import './globals.css'
import { Poppins } from 'next/font/google'
import { Header } from './components/Header'

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"]
})
export const metadata = {
  title: 'The Plug',
  description: 'Find the Talent you need',
  keywords: ['black', 'talent', 'entertainment']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
