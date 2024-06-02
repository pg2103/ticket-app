import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center p-4">
        <h2 className="text-3xl mb-4">Oops! We hit a brick wall.</h2>
        <p className="mb-4">We couldn&apos;t find the ticket you were looking for.</p>
        <p>
          <Link href="/tickets">
            <p className="inline-block bg-blue-500 text-white px-4 py-2 rounded">
              Go back to all tickets
            </p>
          </Link>
        </p>
    </main>
  )
}