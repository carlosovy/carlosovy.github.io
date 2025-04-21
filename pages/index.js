import Image from "next/image"
import Link from "next/link"
import { Outfit } from "next/font/google"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})

export default function Home() {
  return (
    <main
      className={`${outfit.variable} font-sans bg-[#0e0e0e] text-white min-h-screen flex flex-col items-center justify-center px-6 text-center`}
    >
      {/* PROFILE IMAGE */}
      <div className="w-40 h-40 relative mb-6 rounded-full overflow-hidden border-4 border-[#7f5af0] shadow-lg">
        <Image
          src="/images/profile.png"
          alt="Profile picture"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* HEADLINE */}
      <h1 className="text-5xl font-bold mb-4 text-[#7f5af0] tracking-tight">
        🚀 Welcome to My Portfolio
      </h1>

      {/* INTRO PARAGRAPH */}
      <p className="text-gray-400 max-w-xl mb-10 leading-relaxed text-lg">
        I’m a master student passionate about nuclear fusion, stellarator optimization, scientific computing,
        and machine learning for surrogate modeling.
      </p>

      {/* CTA BUTTON */}
      <Link
        href="/projects"
        className="px-6 py-3 rounded-full bg-[#7f5af0] text-white font-medium hover:bg-[#ff6ac1] transition duration-300 shadow-[0_0_20px_#7f5af055]"
      >
        View My Projects →
      </Link>
    </main>
  )
}
