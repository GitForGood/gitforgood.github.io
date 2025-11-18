import { ProjectCard } from '../components/ProjectCard'

export function Projects() {
  const projects = [
    {
      title: 'Lazy Prepper',
      description: 'A cross-platform Flutter app for managing home storage of non-perishable food. Track inventory, plan meals with recipe integration, and ensure you\'re prepared for emergencies.',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Multi-Platform'],
      slug: 'inventory-manager',
    },
    {
      title: 'Debattnytt',
      description: 'Tinder-like debate platform where users swipe on theses to rate truthfulness. Features real-time analytics and content discovery to make civic engagement approachable.',
      technologies: ['Meteor.js', 'JavaScript', 'MongoDB', 'Real-time'],
      slug: 'debattnytt',
    },
    {
      title: 'Pipeline Planner',
      description: 'Web-based analysis tool for Minecraft Create mod production pipelines. Identify bottlenecks and optimize your automated factories before building them in-game.',
      technologies: ['Vue.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
      slug: 'pipeline-planner',
    },
    {
      title: 'Shrinkflation Tracker',
      description: 'Mobile app with barcode scanning to detect shrinkflation in real-time while shopping. Crowdsourced data helps consumers identify products that have decreased in size.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Barcode Scanner'],
      slug: 'shrinkflation',
    },
  ]

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-on-surface">My Projects</h1>
        <p className="text-lg mb-8 text-on-surface-variant">
          Here are some of the projects I've worked on recently. Each one represents
          a unique challenge and learning opportunity in solving real-world problems.
        </p>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
