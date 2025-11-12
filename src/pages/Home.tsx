import { Button } from 'actify'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()

  return (
    <div className="p-8 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-on-surface">Welcome to My Portfolio</h1>
        <p className="text-lg mb-6 text-on-surface-variant">
          Hi! I'm a developer passionate about creating beautiful and functional web applications.
          This portfolio showcases my work and provides information about my skills and experience.
        </p>

        <div className="flex gap-4 mb-8">
          <Button variant="filled" onClick={() => navigate('/projects')}>View Projects</Button>
          <Button variant="outlined" onClick={() => navigate('/contact')}>Contact Me</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-surface-container p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-on-surface">Projects</h2>
            <p className="text-on-surface-variant">
              Explore my latest work and side projects
            </p>
          </div>

          <div className="bg-surface-container p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-on-surface">About Me</h2>
            <p className="text-on-surface-variant">
              Learn more about my background and skills
            </p>
          </div>

          <div className="bg-surface-container p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-on-surface">Get in Touch</h2>
            <p className="text-on-surface-variant">
              Let's connect and discuss opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
