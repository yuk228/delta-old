import React from 'react'
import Link from 'next/link'
import Theme from './Theme'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full px-5 py-3 md:px-30 lg:px-60 flex items-center justify-between bg-opacity-11 rounded-lg  backdrop-blur-[8.9px]">
        <div className="flex items-center gap-6">
            <Link href="/" className="block font-bold text-xl transition-transform duration-300 ease-in-out transform hover:scale-105">Delta</Link>
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
        </div>
        <div className="ml-auto flex items-center gap-5">
          <Button>Login</Button>
          <Theme />
        </div>
    </header>
  )
}

export default Header