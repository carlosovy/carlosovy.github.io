import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#0e0e0e] border-b border-[#1f1f1f] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4 text-sm font-medium text-gray-300">
        <Link href="/" className="text-[#7f5af0] text-lg font-semibold hover:text-[#ff6ac1] transition">
          My Portfolio
        </Link>
        <div className="flex gap-5">
          <Link href="/about" className="hover:text-[#ff6ac1] transition">About</Link>
          <Link href="/projects" className="hover:text-[#ff6ac1] transition">Projects</Link>
          <Link href="/skills" className="hover:text-[#ff6ac1] transition">Skills</Link>
          <Link href="/cv" className="hover:text-[#ff6ac1] transition">CV</Link>
        </div>
      </div>
    </nav>
  )
}
