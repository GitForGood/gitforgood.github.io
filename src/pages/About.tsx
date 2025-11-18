export function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Material Design 3'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Vite', 'npm'] },
  ]

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-on-surface">About Me</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-on-surface">Who I Am</h2>
          <p className="text-lg text-on-surface-variant mb-4">
            I'm a passionate developer with a love for creating intuitive and beautiful
            user experiences. With expertise in modern web technologies, I focus on
            building applications that are both functional and delightful to use.
          </p>
          <p className="text-lg text-on-surface-variant">
            I believe in continuous learning and staying up-to-date with the latest
            technologies and best practices in web development.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-on-surface">Skills & Technologies</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-surface-container p-4 lg:p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-on-surface-variant">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container p-4 lg:p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-on-surface">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-on-surface">Current Focus</h3>
              <p className="text-on-surface-variant">
                Building modern web applications with React, TypeScript, and Material Design 3.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-on-surface">Interests</h3>
              <p className="text-on-surface-variant">
                User experience design, accessibility, performance optimization, and clean code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
