import Layout from "../components/Layout"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    slug: "stellarator-optimization",
    title: "Stellarator Optimization",
    description: "Optimization framework for magnetic confinement devices using shape derivatives.",
    image: "/images/m0.png"
  },
  {
    slug: "deep-onets",
    title: "DeepONets",
    description: "Exploring Deep Operator Networks to solve partial differential equations efficiently.",
    image: "/images/heatdiff_BCs.png"
  }
]

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-10 text-center">My Research Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.slug}`} key={index} className="group">
            <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_#7f5af055] transition-all duration-300">
              {project.image && (
                <div className="w-full h-56 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#7f5af0] group-hover:text-[#ff6ac1] transition">
                  {project.title}
                </h2>
                <p className="text-gray-300">{project.description}</p>
                <p className="mt-4 text-sm text-[#7f5af0] group-hover:text-[#ff6ac1] underline transition">
  Read more →
</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
