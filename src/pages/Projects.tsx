import { Button } from 'actify'

export function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of this amazing project and what it does.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Another interesting project showcasing different skills.',
      technologies: ['Vite', 'Material Design 3', 'Actify'],
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'An innovative solution to a common problem.',
      technologies: ['Node.js', 'React', 'PostgreSQL'],
      link: '#',
    },
  ]

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-on-surface">My Projects</h1>
        <p className="text-lg mb-8 text-on-surface-variant">
          Here are some of the projects I've worked on recently. Each one represents
          a unique challenge and learning opportunity.
        </p>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-surface-container p-6 rounded-lg hover:bg-surface-container-high transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2 text-on-surface">
                {project.title}
              </h2>
              <p className="text-on-surface-variant mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button variant="text">View Project →</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
