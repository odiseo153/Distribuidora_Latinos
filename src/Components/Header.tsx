import {Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <div className="container mx-auto px-3 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 md:hidden" />
          <img src="dl_logo.png" alt="MiniMarket Logo" className="w-10 rounded-full transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>
     
      </div>
    </header>
  )
}