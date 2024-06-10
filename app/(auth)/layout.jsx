import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function layout({children}) {
  const supabase=createServerComponentClient({cookies})
  const {data}=await supabase.auth.getSession()
  if(data.session){
    redirect('/')
  }
  return (
    <>
        <nav>
            <h1>Dojo HelpDesk</h1>
            <Link href="/signup">Sign up</Link>
            <Link href="/login"> Log in</Link>
        </nav>
        {children}
    </>
  )
}
