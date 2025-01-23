import Link from 'next/link'
import { Play } from 'lucide-react'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-950
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-8">Bienvenido</h1>
        <Link href="/easy" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2">
          <Play size={20} />
          <span>Comenzar juego</span>
          </Link>
      </div>
      <Footer />
    </main>
  )
}

