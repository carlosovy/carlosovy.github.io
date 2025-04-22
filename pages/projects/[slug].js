import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import Image from "next/image"
import katex from "katex";
import Latex from "../../components/Latex"


const projectDetails = {
  "stellarator-optimization": {
  title: "Stellarator Optimization",
  image: "/images/m0.png",
  content: (
    <>
      <p className="mb-4">
        This project, developed as part of my bachelor thesis, under the tutelage of Luis Raúl Sánchez Fernández, focuses on the optimization of a stellarator configuration known as the <span className="text-[#7f5af0] font-medium">Quasi-Poloidal Stellarator (QPS)</span>. Originally designed at Oak Ridge National Laboratory, QPS was a stellarator configuration to exhibit <span className="text-[#7f5af0] font-medium">quasi-poloidal symmetry</span>,a magnetic symmetry thought to reduce turbulence and improve plasma confinement by reducing degrees of freedom and exciting poloidal shear flows.
      </p>

      <p className="mb-4">
        The optimization was performed using the <span className="text-[#7f5af0] font-medium">STELLOPT suite of codes</span>, maintained by the Princeton Plasma Physics Laboratory (PPPL). This cutting-edge code allowed me to characterize and optimize critical physical properties of the configuration, including <span className="text-[#ff6ac1]">stability</span>, <span className="text-[#ff6ac1]">confinement</span>, <span className="text-[#ff6ac1]">volume</span>, and <span className="text-[#ff6ac1]">quasi-symmetry</span>, while exploring the complex trade-offs occuring throughout the stellarator optimization process.
      </p>

      <p className="mb-4">
        A key aspect of this work was the modification and extension of STELLOPT to include functionality for optimizing a geometric quantity of interest: the <span className="text-[#7f5af0] font-medium">average triangularity</span> of the stellarator surface. This parameter may play a role in influencing plasma turbulence and transport.
      </p>

      <p className="mb-6">
        As part of the results, several interesting configurations were discovered — including candidates with <span className="text-[#2cb67d] font-medium">average triangularity</span>, that may exhibit desirable physical characteristics. These configurations offer potential pathways for future studies in reduced turbulence and improved confinement in stellarators.
      </p>
      {/* Image 3: Magnetic Field 3D */}
    <div>
      <Image
        src="/images/profile.png"
        alt="3D plot of magnetic field of a configuration"
        width={600}
        height={300}
        className="rounded-xl shadow-lg mx-auto"
      />
      <p className="text-sm text-gray-400 text-center mt-2">
        <em>3D plot of magnetic field of a configuration using S.Lazerson&apos;s MatlabVMEC</em>
      </p>
    </div>

      {/* Optimization Targets */}
      <h3 className="text-2xl font-semibold text-[#7f5af0] mt-12 mb-4">
        Optimization Targets
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Plasma volume</li>
        <li>Neoclassical transport (effective ripple)</li>
        <li>Ballooning stability</li>
        <li>Degree of Quasi-symmetry (poloidal)</li>
        <li>Average triangularity (new addition)</li>
      </ul>

        {/* Image 1: Flux Surfaces */}
    <div>
      <Image
        src="/images/fluxplots_B.png"
        alt="Flux surfaces of initial and final configuration"
        width={500}
        height={250}
        className="rounded-xl shadow-lg mx-auto"
      />
      <p className="text-sm text-gray-400 text-center mt-2">
        <em>Flux surfaces of initial (blue) and final (red) for volume optimization</em>
      </p>
    </div>


      {/* Code Infrastructure */}
      <h3 className="text-2xl font-semibold text-[#7f5af0] mt-12 mb-4">
        Used Libraries
      </h3>

      <div className="space-y-6 text-gray-300">
        <div>
          <h4 className="text-lg font-semibold text-[#ff6ac1] mb-1">STELLOPT</h4>
          <p>
            The core library that coordinates physics codes, computes gradients, and applies constraints. I modified its code to introduce an inexpensive geometric target such as the average triangularity metric.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#ff6ac1] mb-1">BOOZ_XFORM</h4>
          <p>
            Used to transform VMEC-generated equilibria into Boozer coordinates. This is essential for evaluating <span className="text-[#7f5af0]"> the degree of quasi-symmetry</span>, a property beneficial for confinement. Quasi-poloidal symmetry was computed at three different surfaces.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#ff6ac1] mb-1">NEO</h4>
          <p>
            A drift-kinetic code for evaluating <span className="text-[#7f5af0]">neoclassical transport</span>. It computes the <em>effective ripple</em> of the magnetic field configuration, which is proportional to the diffusion coefficient of the low collisionality (1/nu regime). This regime dominates the Neoclassical losses and are therefore crucial in stellarator optimization.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#ff6ac1] mb-1">COBRAVMEC</h4>
          <p>
            This module assesses <span className="text-[#7f5af0]">ballooning instability</span>,a form of MHD instability that sets limits on achievable pressure gradients. Configurations were optimized to have negative ballooning mode growth rates to enhance core plasma stability.
          </p>
        </div>
      </div>

      {/* Image 2: Quasi-Poloidal Symmetry */}
      <div>
        <Image
          src="/images/symmetry_f.png"
          alt="Degree of quasipoloidal symmetry for initial and final configuration"
          width={500}
          height={250}
          className="rounded-xl shadow-lg mx-auto"
        />
        <p className="text-sm text-gray-400 text-center mt-2">
          <em>Degree of quasipoloidal symmetry for initial and final configuration</em>
        </p>
      </div>

      {/* Average Triangularity */}
        <h3 className="text-2xl font-semibold text-[#7f5af0] mt-12 mb-4">
          Average Triangularity
        </h3>
        <p className="text-gray-300">
          The average triangularity used in this work is a custom geometrical target computed from the Fourier representation of the plasma boundary. Specifically, it is defined as the <span className="text-[#ff6ac1] font-medium">toroidally averaged triangularity</span> derived from the <span className="text-[#2cb67d] font-medium">(m, 0)</span> modes of the boundary shape. More work is needed in order to verify that this property leads to desirable properties in stellarators, and to understand the trade-offs that happen with this new target, however with this new code it is possible to obtain such configurations
        </p>
      {/* Outro */}
      <p className="mt-10 text-[#2cb67d] font-medium">
        This project highlights the different aspects of stellarator optimization, plasma physics, and code development of stellarator optimization by using STELLOPT, while maintaining enough simplicity to perform it on a conventional laptop.
      </p>
    </>
  )
}
,
 "deep-onets": {
  title: "Separable DeepONets for PDE operator learning",
  image: "/images/heatdiff_BCs.png",
  content: (
    <>
      {/* Intro */}
      <p className="mb-4">
      This project involved the use of <span className="text-[#7f5af0] font-medium">Separable Physics-Informed Deep Operator Networks (Sep-PI-DeepONets)</span> <a href="https://doi.org/10.1016/j.cma.2024.117586" target="_blank" rel="noopener noreferrer" className="text-[#2cb67d] underline hover:text-[#ff6ac1] transition">(Mandl et al., 2025)</a>
      for solving high-dimensional partial differential equations (PDEs) more efficiently. My work was part of a research assistantship under Luis Mandl at the <span className="text-[#ff6ac1]">University of Stuttgart</span>, focused on extending this framework to support more flexible and performant learning of boundary conditions.
      </p>

      <p className="mb-6">
        DeepONets are a type of architecture designed to learn function operators, approximating the mapping between initial or boundary conditions to solutions of PDEs. The architecture is composed of two networks: a <span className="text-[#7f5af0] font-medium">branch network</span>, which encodes the input function (e.g., an initial or boundary condition), and a <span className="text-[#7f5af0] font-medium">trunk network</span>, which encodes the coordinates at which we want to evaluate the output function. Approximating an operator is more useful than approximating a single function, as it allows us to evaluate the function at any point in the domain, not restricted to a grid of points or set of conditions.
      </p>

      <p className="mb-6">
        In <span className="text-[#7f5af0] font-medium">Separable DeepONets</span>, each coordinate dimension (e.g., <code className="text-[#ff6ac1] font-mono">x</code>, <code className="text-[#ff6ac1] font-mono">t</code>) is processed by its own dedicated sub-network within the trunk. This reduces the forward passes from{" "}
      <Latex math="\mathcal{O}(N n^d)" inline /> to <Latex math="\mathcal{O}(nd)" inline />, where{" "}
      <Latex math="N" inline /> is the number of input functions and <Latex math="d" inline /> is the number of spatial dimensions. It also uses Forward-Mode Auto Differentiation to compute the gradients of the PDE. In the separable architecture, the Jacobian matrix size is <Latex math="nd \times k n^d" inline />, and forward-mode AD requires only{" "}
      <Latex math="\mathcal{O}(nd)" inline /> evaluations, compared to{" "}
      <Latex math="\mathcal{O}(k n^d)" inline /> with reverse-mode AD. The outputs of the individual sub-networks are then combined using an operation known as the <span className="text-[#2cb67d] font-medium">eigensum</span>. This method reduces the computational cost of forward passes through the trunk network from being proportional to <Latex math="\mathcal{O}(k n^d)" inline /> to <Latex math="\mathcal{O}(n d)" inline />.
      </p>

      <div className="my-10 text-center">
        <img
          src="/images/deeponet.png"
          alt="Diagram of Separable DeepONet architecture"
          className="rounded-xl shadow-lg mx-auto max-w-xl"
        />
        <p className="text-sm text-gray-400 mt-2">
          <em>
            Architecture of Separable DeepONets.
            Source: {" "}
            <a
              href="https://doi.org/10.1016/j.cma.2024.117586"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2cb67d] underline hover:text-[#ff6ac1] transition"
            >
              Mandl et al., 2025
            </a>
          </em>
        </p>
      </div>


      <p className="mb-6">
        To further enhance training efficiency, this framework is extended into a <span className="text-[#ff6ac1] font-medium">Physics-Informed DeepONet</span> (PI-DeepONet). Instead of relying solely on data, the network is trained using a loss function that includes the <span className="text-[#2cb67d]">residual of the PDE</span>, the <span className="text-[#2cb67d]">initial condition</span>, and the <span className="text-[#2cb67d]">boundary condition</span>. This incorporation of physical constraints directly into the loss enables the model to generalize better and avoids the limitations from the data source, such as noise or numerical errors, and encourages physically meaningful outputs.
      </p>

      <p className="mb-6">
        While the separable approach has primarily been applied to the trunk network, my contribution focused on trying to apply this concept to the <span className="text-[#7f5af0] font-medium">branch network</span> as well, enabling independent learning of branch inputs such as different boundary conditions.
      </p>

      {/* Tasks and Methodology */}
      <h3 className="text-2xl font-semibold text-[#7f5af0] mt-10 mb-3">
        🛠️ Tasks & Implementation
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
        <li>Adapted the 2D DeepONet architecture to support a simpler 1D heat equation model with fixed conductivity.</li>
        <li>Reworked the data generation pipeline to simulate multiple boundary condition scenarios with different temperature values at the domain ends.</li>
        <li>Created a new class, <code className="text-[#ff6ac1] font-mono">SeparableBranchDeepONet</code>, to enable factorized learning of boundary conditions alongside the input functions.</li>
        <li>Integrated selection flags (<code className="text-[#ff6ac1] font-mono">args.separable_branch</code>) into the training setup to toggle between regular and separable architectures.</li>
      </ul>

      <p className="mb-6 text-gray-300">
        Due to limited time, the separable branch implementation could not be fully done. While the network trained and ran, further work is needed to ensure it properly learns the boundary value problem behavior.
      </p>

      {/* Conclusion */}
      <h3 className="text-2xl font-semibold text-[#7f5af0] mb-3">
        🎓 Outcomes & Learnings
      </h3>

      <p className="mb-6">
        Through this work, I gained experience with advanced neural operator architectures and learned to use <span className="text-[#2cb67d] font-medium">JAX</span>, a high-performance machine learning framework. I successfully adapted the DeepONet code for 1D Heat Equation, the data generation code for different end temperatures, and began extending the <span className="text-[#7f5af0] font-medium">separable concept to the branch network</span>, an ongoing avenue for future work in this area.
      </p>

      <p className="text-[#2cb67d] font-medium">
        This project gave me hands-on experience in bridging machine learning and physics-based modeling, and taught me how machine learning research codes are developed and tested, and the thought process behind typical research work.
      </p>
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
          width={500}
          height={250}
          className="rounded shadow"
        />
      </div>
      <div className="prose max-w-none">{project.content}</div>
    </Layout>
  )
}
