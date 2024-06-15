import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
export const dynamic = 'force-dynamic'
export async function POST(request) {
  const ticket = await request.json()

  // get supabase instance
  const supabase = createRouteHandlerClient()

  // get current user session
  const { data: { session } } = await supabase.auth.getSession()

  // insert the data
  const { data, error } = await supabase.from('tickets')
    .insert({
      ...ticket,
      user_email: session.user.email  
    })
    .select()
    .single()

  return NextResponse.json({ data, error })
}