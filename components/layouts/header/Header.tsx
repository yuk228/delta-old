import React from 'react'
import Link from 'next/link'
import Theme from './Theme'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full px-5 py-3 md:px-30 lg:px-60 flex items-center justify-between bg-opacity-11 rounded-lg  backdrop-blur-[8.9px]">
        <div className="flex items-center gap-6">
          <div className="flex md:hidden lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-30">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="/features">Features</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/pricing">Pricing</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
            <Link href="/" className="block font-bold text-xl transition-transform duration-300 ease-in-out transform hover:scale-105">Delta</Link>
            <div className="hidden md:flex lg:flex">
                <Link href="/features"><Button variant="ghost">Features</Button></Link>
                <Link href="/pricing"><Button variant="ghost">Pricing</Button></Link>
            </div>
        </div>
        <div className="ml-auto flex items-center gap-5">
          <Link href="/login"><Button>Login</Button></Link>
          <Theme />
        </div>
    </header>
  )
}

export default Header