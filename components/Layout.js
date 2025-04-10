import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="bg-[#0e0e0e] min-h-screen text-white">
      <Navbar />
      <main className="px-4 py-10 max-w-6xl mx-auto">{children}</main>
    </div>
  )
}
