import React from 'react'
import Link from 'next/link';
import SignIn from './SignIn';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function UserButtons() {
    const session = await auth();
    if (!session) return <SignIn />
  return (
    <div>
        <Link href="/dashboard"><Button>Dashboard</Button></Link>
    </div>
  )
}  