import { Button } from 'actify'
import { useNavigate } from 'react-router-dom'

export function Terapiverkstaden() {
  const navigate = useNavigate()

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
            Terapiverkstaden
          </h1>
          <p className="text-xl text-on-surface-variant mb-6">
            Professional Therapy Practice Website
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outlined"
              isDisabled
            >
              Client Project
            </Button>
          </div>
        </div>

        {/* What is it */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">What is Terapiverkstaden?</h2>
          <p className="text-on-surface-variant mb-4 leading-relaxed">
            Terapiverkstaden is a professional website for a Swedish psychotherapy practice offering therapy,
            supervision, and education services. Built as a freelance client project using modern Vue 3 framework,
            the application provides a clean, accessible platform for clients to learn about services, read
            frequently asked questions, and get in touch with the practice.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The website features multiple service categories, an integrated contact form, and comprehensive SEO
            optimization to help the practice reach Swedish-speaking clients seeking mental health support. The
            focus throughout the design was on professionalism, accessibility, and creating a welcoming digital
            presence for a healthcare service.
          </p>
        </section>

        {/* Problem it solves */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Problem & Solution</h2>
          <div className="bg-surface-container p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Problem</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Therapy practices need a professional online presence with clear service information, easy contact
              methods, and strong SEO to reach clients who are actively seeking mental health support. Traditional
              website builders often create sites that lack proper accessibility features, have poor performance,
              or don't rank well in search engines—all critical factors for healthcare services where trust and
              discoverability are paramount.
            </p>
          </div>
          <div className="bg-surface-container p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Solution</h3>
            <p className="text-on-surface-variant leading-relaxed">
              A custom-built Vue 3 application that combines modern web development best practices with healthcare-
              specific needs. The site features multiple service pages, an integrated contact form, comprehensive
              FAQ section, and full SEO metadata including Open Graph and Twitter cards. The responsive design
              ensures accessibility across all devices, while TypeScript provides code reliability and maintainability
              for long-term success.
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Vue 3</h3>
              <p className="text-sm text-on-surface-variant">Modern reactive framework</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">TypeScript</h3>
              <p className="text-sm text-on-surface-variant">Type-safe development</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Vue Router</h3>
              <p className="text-sm text-on-surface-variant">Client-side routing</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Vite</h3>
              <p className="text-sm text-on-surface-variant">Fast build tool</p>
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
                <strong className="text-on-surface">Multi-Page Application:</strong>
                <span className="text-on-surface-variant"> 8 distinct pages including services, about, contact, and FAQ sections</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Vue 3 Composition API:</strong>
                <span className="text-on-surface-variant"> Modern reactive state management and component architecture</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">TypeScript Integration:</strong>
                <span className="text-on-surface-variant"> Full type safety for robust, maintainable codebase</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">SEO & Accessibility:</strong>
                <span className="text-on-surface-variant"> Comprehensive meta tags, semantic HTML, and WCAG compliance</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Responsive Design:</strong>
                <span className="text-on-surface-variant"> Mobile-first approach ensuring optimal experience on all devices</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Framework Highlights */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Why Vue 3?</h2>
          <div className="bg-surface-container-high p-6 rounded-lg border-l-4 border-primary">
            <p className="text-on-surface-variant mb-4 leading-relaxed">
              Vue 3 was chosen for this project to take advantage of its modern features and excellent developer experience:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-primary">→</span>
                <div>
                  <strong className="text-on-surface">Composition API:</strong>
                  <span className="text-on-surface-variant"> Better code organization and reusability compared to Options API</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">→</span>
                <div>
                  <strong className="text-on-surface">TypeScript Support:</strong>
                  <span className="text-on-surface-variant"> First-class TypeScript integration for type safety and IDE support</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">→</span>
                <div>
                  <strong className="text-on-surface">Performance:</strong>
                  <span className="text-on-surface-variant"> Smaller bundle size and faster runtime performance than Vue 2</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">→</span>
                <div>
                  <strong className="text-on-surface">Vue Router 4:</strong>
                  <span className="text-on-surface-variant"> Modern client-side routing with improved TypeScript support</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">→</span>
                <div>
                  <strong className="text-on-surface">Vite Integration:</strong>
                  <span className="text-on-surface-variant"> Instant dev server startup and optimized production builds</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Project Status */}
        <section className="mb-8">
          <div className="bg-surface-container p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-on-surface">Project Status</h2>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">Status:</strong> Completed (2024)
            </p>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">Type:</strong> Freelance Client Project
            </p>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">Platform:</strong> Web Application
            </p>
            <p className="text-on-surface-variant">
              <strong className="text-on-surface">Language:</strong> Swedish
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <Button
            variant="filled"
            onClick={() => window.open('https://terapiverkstaden.se', '_blank')}
          >
            Visit Live Site
          </Button>
          <Button
            variant="outlined"
            onClick={() => window.open('https://github.com/GitForGood/mustafa', '_blank')}
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
