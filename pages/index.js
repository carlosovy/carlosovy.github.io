import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-300 text-white">
      <h1 className="text-4xl font-bold mb-6">🚀 Portfolio Starter Works!</h1>
      <Link
        href="/projects"
        className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        View My Projects →
      </Link>
    </div>
  );
}


