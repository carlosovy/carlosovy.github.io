import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="p-6 max-w-4xl mx-auto">{children}</main>
    </div>
  )
}
