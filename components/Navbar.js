import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-between p-4 text-sm font-medium">
        <Link href="/" className="hover:underline">Home</Link>
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/research" className="hover:underline">Research</Link>
          <Link href="/skills" className="hover:underline">Skills</Link>
          <Link href="/cv" className="hover:underline">CV</Link>
        </div>
      </div>
    </nav>
  )
}
