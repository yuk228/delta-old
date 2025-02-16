import React from 'react'
import Link from 'next/link'
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
import UserButtons from './UserButtons'

export default async function Header () {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
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
            <UserButtons />
          </div>
      </div>
    </header>
  )
}
