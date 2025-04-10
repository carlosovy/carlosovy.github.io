import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import Image from "next/image"

const projectDetails = {
  "stellarator-optimization": {
    title: "Stellarator Optimization",
    image: "/images/m0.png",
    content: (
      <>
        <p className="mb-4">
          This project explores how natural language processing can assist researchers in querying academic content. I used GPT-like models to summarize, filter, and explore thousands of papers.
        </p>
        <p className="mb-4">
          Below is a visualization of topic clusters based on abstracts from over 10,000 papers.
        </p>
        <Image
          src="/images/topic-clusters.png"
          alt="Topic Clusters"
          width={800}
          height={400}
          className="rounded shadow"
        />
      </>
    )
  },
  "deep-onets": {
    title: "DeepONets",
    image: "/images/heatdiff_BCs.png",
    content: (
      <>
        <p className="mb-4">
          This dashboard aggregates climate data from multiple sources and allows users to explore trends through an interactive UI.
        </p>
        <Image
          src="/images/climate-chart.png"
          alt="Climate Plot"
          width={800}
          height={400}
          className="rounded shadow"
        />
      </>
    )
  }
}

export default function ProjectPage() {
  const router = useRouter()
  const { slug } = router.query
  const project = projectDetails[slug]

  if (!project) return <Layout><p>Loading...</p></Layout>

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <div className="mb-6">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded shadow"
        />
      </div>
      <div className="prose max-w-none">{project.content}</div>
    </Layout>
  )
}
