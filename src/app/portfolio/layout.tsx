import { Roboto } from "next/font/google"
import Navbar from "@/components/portfolioPages/main/Navbar";

const roboto = Roboto({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})
export default function layoutHome({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='h-screen w-full'>
      <header className={`w-full ${roboto.className}`} >
        <Navbar />
      </header>
      <main className={`${roboto.className}`}>{children}</main>

    </div>
  )
}

