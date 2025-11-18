import { Button } from 'actify'
import { useNavigate } from 'react-router-dom'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  slug: string
  featured?: boolean
}

export function ProjectCard({ title, description, technologies, slug, featured = false }: ProjectCardProps) {
  const navigate = useNavigate()

  return (
    <div
      className={`bg-surface-container p-4 lg:p-6 rounded-lg hover:bg-surface-container-high transition-colors ${
        featured ? 'border-2 border-primary' : ''
      }`}
    >
      <h2 className="text-2xl font-semibold mb-2 text-on-surface">
        {title}
      </h2>
      <p className="text-on-surface-variant mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <Button
        variant="text"
        onClick={() => navigate(`/projects/${slug}`)}
      >
        View Project →
      </Button>
    </div>
  )
}
