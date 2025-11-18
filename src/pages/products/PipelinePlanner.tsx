import { Button } from 'actify'
import { useNavigate } from 'react-router-dom'
import { ImageCarousel } from '../../components/ImageCarousel'

export function PipelinePlanner() {
  const navigate = useNavigate()

  const images = [
    {
      placeholder: '[App Screenshot - Pipeline Visualization]',
      suggestion: 'Screenshot showing a production pipeline diagram with resource flow and machine connections'
    },
    {
      placeholder: '[App Screenshot - Bottleneck Analysis]',
      suggestion: 'Screenshot showing bottleneck detection and analysis features with performance metrics'
    },
    {
      placeholder: '[App Screenshot - Item Flow Chart]',
      suggestion: 'Screenshot showing detailed item flow with processing speeds and buffer capacities'
    },
    {
      placeholder: '[App Screenshot - Create Mod Integration]',
      suggestion: 'Screenshot showing Create mod specific machinery and their throughput calculations'
    }
  ]

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Button
          variant="text"
          onClick={() => navigate('/projects')}
          className="mb-6"
        >
          ← Back to Projects
        </Button>

        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-on-surface">
            Pipeline Planner
          </h1>
          <p className="text-xl text-on-surface-variant mb-6">
            Production Pipeline Analysis for Create Mod
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="filled"
              onClick={() => window.open('https://github.com/GitForGood/pipeline-planner', '_blank')}
            >
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={images} />

        {/* What is it */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">What is Pipeline Planner?</h2>
          <p className="text-on-surface-variant mb-4 leading-relaxed">
            Pipeline Planner is a specialized web-based analysis tool designed for Minecraft's Create mod enthusiasts.
            The Create mod introduces complex machinery and automation systems, and Pipeline Planner helps players
            design and optimize their production chains before building them in-game.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Built with modern web technologies, the tool provides an intuitive interface for planning production
            pipelines, identifying potential bottlenecks, and ensuring efficient resource flow. Whether you're
            building a simple item sorter or a complex automated factory, Pipeline Planner helps you plan it right
            the first time.
          </p>
        </section>

        {/* Problem it solves */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Problem & Solution</h2>
          <div className="bg-surface-container p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Problem</h3>
            <p className="text-on-surface-variant leading-relaxed">
              In Minecraft's Create mod, production pipelines can become incredibly complex. Players often spend
              hours building intricate machinery only to discover bottlenecks that halt production or cause resource
              backups. Identifying these issues requires careful planning and calculations that are difficult to do
              mentally or on paper. Trial and error in-game is time-consuming and resource-intensive.
            </p>
          </div>
          <div className="bg-surface-container p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Solution</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Pipeline Planner provides a visual, analytical approach to production planning. By modeling your
              production chains in the tool, you can identify bottlenecks, balance resource flows, and optimize
              your designs before committing resources in-game. The web-based interface makes it accessible from
              any device, letting you plan your factory while away from your game or collaborate with others on
              complex designs.
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Vue.js</h3>
              <p className="text-sm text-on-surface-variant">Frontend framework</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Vite</h3>
              <p className="text-sm text-on-surface-variant">Build tool & dev server</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Tailwind CSS</h3>
              <p className="text-sm text-on-surface-variant">Styling framework</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">JavaScript</h3>
              <p className="text-sm text-on-surface-variant">Primary language (97.4%)</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">PostCSS</h3>
              <p className="text-sm text-on-surface-variant">CSS processing</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">ESLint</h3>
              <p className="text-sm text-on-surface-variant">Code quality tools</p>
            </div>
          </div>
        </section>


        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Bottleneck Detection:</strong>
                <span className="text-on-surface-variant"> Automatically identify constraints in your production pipelines</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Visual Planning:</strong>
                <span className="text-on-surface-variant"> Design and visualize complex production chains before building</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Web-Based:</strong>
                <span className="text-on-surface-variant"> Access from any device with a browser - no installation required</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Create Mod Optimized:</strong>
                <span className="text-on-surface-variant"> Specifically designed for Minecraft Create mod mechanics and constraints</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Project Status */}
        <section className="mb-8">
          <div className="bg-surface-container p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-on-surface">Project Status</h2>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">Status:</strong> Early Development
            </p>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">Repository:</strong> Open Source
            </p>
            <p className="text-on-surface-variant">
              <strong className="text-on-surface">Development:</strong> Active
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <Button
            variant="filled"
            onClick={() => window.open('https://github.com/GitForGood/pipeline-planner', '_blank')}
          >
            View on GitHub
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/projects')}
          >
            See Other Projects
          </Button>
        </div>
      </div>
    </div>
  )
}
