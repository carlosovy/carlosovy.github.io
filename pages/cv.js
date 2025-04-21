import Layout from "../components/Layout"

export default function CV() {
  return (
    <Layout>
      <section className="text-gray-300 space-y-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#7f5af0] tracking-tight mb-4">
          📄 Curriculum Vitae
        </h1>

        <p>
          You can download or view my full CV below. It includes academic background, technical skills, project work, and relevant research experience.
        </p>

        {/* Download Link */}
        <a
          href="/files/CV_Carlos_Sovy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#7f5af0] text-white px-6 py-3 rounded-full hover:bg-[#ff6ac1] transition shadow-lg"
        >
          📥 Download CV (PDF)
        </a>

        {/* Embedded PDF Viewer */}
        <div className="mt-10 aspect-video">
          <iframe
            src="/files/2025q12.pdf"
            title="CV PDF"
            width="100%"
            height="600"
            className="rounded-xl shadow-lg border border-[#2d2d2d]"
          />
        </div>
      </section>
    </Layout>
  )
}
