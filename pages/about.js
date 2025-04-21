import Layout from "../components/Layout"
import { Mail, Github, Linkedin } from "lucide-react" // optional icons


export default function About() {
  return (
    <Layout>
      <section className="text-gray-300 space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#7f5af0] tracking-tight mb-2">
            About Me
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A brief look into my interests, and what drives me.
          </p>
        </div>

        {/* Bio Sections */}
        <div className="space-y-8 max-w-3xl mx-auto text-[15px] leading-relaxed">

          {/* Introduction */}
          <p>
            I’m Carlos, a FUSION-EP master student interested in Nuclear Fusion, Plasma Physics, Optimization and Machine Learning.
          </p>

          {/* Academic Background */}
          <p>
            I hold a Bachelor's degree in Physics Engineering from UC3M. My academic path has centered around the study of Plasma Physics, Fusion Engineering, and Numerical Methods while also exploring the applications of Machine Learning.
          </p>

          {/* Research Focus */}
          <p>
            I’m particularly interested in stellarator optimization, that is obtaining an optimum shape of the stellarator equilibrium that optimizes several quantities of interest, such as stability, fusion performance, transport and cost. I am also interested in leveraging Machine Learning techniques to accelerate resolution of High-Dimensional PDEs, or as surrogate models to be used as optimization proxies of quantities expensive to compute (for instance turbulent heat flux).
          </p>

          {/* Beyond Research */}
          <p>
            Outside of research, I enjoy studying new languages, meeting people from different cultures, traveling, working out and learning new things.
          </p>

          {/* Call to action */}
          <p className="text-[#7f5af0] font-medium">
            Feel free to check out my projects or reach out — I’m always up for a good research conversation or collaborative opportunity.
          </p>
          <div className="flex justify-center gap-6 text-[#7f5af0]">
            <a
              href="mailto:carlosovy2@gmail.com"
              className="hover:text-[#ff6ac1] transition"
            >
              <Mail className="w-6 h-6 inline-block mr-1" />
              Email
            </a>
            <a
              href="https://github.com/carlosovy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff6ac1] transition"
            >
              <Github className="w-6 h-6 inline-block mr-1" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-oviedo-rodriguez-09525b263/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff6ac1] transition"
            >
              <Linkedin className="w-6 h-6 inline-block mr-1" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
