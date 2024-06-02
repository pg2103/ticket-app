import Link from 'next/link'

export default function layout({children}) {
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
