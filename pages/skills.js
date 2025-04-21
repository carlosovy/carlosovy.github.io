import Layout from "../components/Layout"

export default function Skills() {
  return (
    <Layout>
      <section className="text-gray-300 space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#7f5af0] tracking-tight mb-2">
            🛠️ My Skills
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A snapshot of the tools, languages, and strengths I bring to research and collaboration.
          </p>
        </div>

        {/* Programming & Tech */}
        <div>
          <h2 className="text-2xl font-semibold text-[#ff6ac1] mb-4">Programming & Technical Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <span>Python</span>
            <span>NumPy</span>
            <span>Matplotlib</span>
            <span>Scikit-Learn</span>
            <span>TensorFlow</span>
            <span>PyTorch (basic)</span>
            <span>JAX / Flax (basic)</span>
            <span>Fortran</span>
            <span>Gnuplot</span>
            <span>Geant4 (Monte Carlo)</span>
            <span>VMEC</span>
            <span>STELLOPT & SIMSOPT</span>
            <span>Bash / Shell</span>
            <span>Linux (CLI)</span>
            <span>C (basic)</span>
            <span>MATLAB (basic)</span>
            <span>Git & GitHub</span>
          </div>
        </div>

        {/* Productivity & Platforms */}
        <div>
          <h2 className="text-2xl font-semibold text-[#ff6ac1] mb-4">Productivity Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <span>Overleaf & LaTeX</span>
            <span>Microsoft Word</span>
            <span>PowerPoint</span>
            <span>Excel</span>
            <span>Outlook</span>
            <span>Google Docs</span>
            <span>Google Drive</span>
            <span>Zoom</span>
          </div>
        </div>

        {/* Graphics & Simulation */}
        <div>
          <h2 className="text-2xl font-semibold text-[#ff6ac1] mb-4">Graphics & Modeling</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <span>Unity (basics)</span>
            <span>3D Modeling (Blender - basic)</span>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-2xl font-semibold text-[#ff6ac1] mb-4">Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <span>Spanish (native)</span>
            <span>English (C1)</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-[#ff6ac1] mb-4">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <span>Flexibility and cultural adaptability</span>
            <span>Curious and self-driven</span>
            <span>Organizational and planning skills</span>
            <span>Teamwork-oriented</span>
          </div>
        </div>
      </section>
    </Layout>
  )
}
