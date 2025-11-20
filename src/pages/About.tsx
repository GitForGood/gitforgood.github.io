import { useState } from 'react'

export function About() {
  const [languagesExpanded, setLanguagesExpanded] = useState(false)

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Material Design 3', 'Flutter'] },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'MongoDB', 'SQLite'] },
    { category: 'Design & Research', items: ['Figma', 'User Interviews', 'Usability Testing', 'Prototyping', 'User Journey Mapping'] },
    { category: 'Accessibility', items: ['WCAG 2.1', 'Screen Reader Testing', 'Keyboard Navigation'] },
    { category: 'Tools', items: ['Git', 'Vite', 'Docker'] },
  ]

  // High priority languages - always visible
  const highlightedLanguages = [
    { name: 'TypeScript', proficiency: 'Advanced' },
    { name: 'C#', proficiency: 'Advanced' },
    { name: 'Kotlin', proficiency: 'Advanced' },
    { name: 'Java', proficiency: 'Advanced' },
  ]

  // Additional languages - shown when expanded (ordered by proficiency)
  const additionalLanguages = [
    // Intermediate
    { name: 'HTML/JS/CSS', proficiency: 'Intermediate' },
    { name: 'Dart', proficiency: 'Intermediate' },
    { name: 'Python 3', proficiency: 'Intermediate' },
    { name: 'GDScript', proficiency: 'Intermediate' },
    { name: 'C', proficiency: 'Intermediate' },
    // Basic
    { name: 'Rust', proficiency: 'Basic' },
    { name: 'C++', proficiency: 'Basic' },
    { name: 'Haskell', proficiency: 'Basic' },
    { name: 'Erlang', proficiency: 'Basic' },
    { name: 'Sass', proficiency: 'Basic' },
    { name: 'MATLAB', proficiency: 'Basic' },
    { name: 'GLSL', proficiency: 'Basic' },
  ]

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-on-surface">About Me</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-on-surface">Who I Am</h2>
          <p className="text-lg text-on-surface-variant mb-4">
            I'm a full-stack developer and UX designer with a passion for creating intuitive and
            accessible user experiences. I focus on building applications that bridge the gap between
            user needs and technical possibilities.
          </p>
          <p className="text-lg text-on-surface-variant">
            My approach combines technical expertise with human-centered design, ensuring that
            solutions are not only functional but truly serve their users.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-on-surface">Education</h2>
          <div className="space-y-4">
            <div className="bg-surface-container p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-on-surface mb-2">Master's in Interaction Design</h3>
              <p className="text-on-surface-variant">
                Advanced studies in user-centered design, research methodologies, and creating
                accessible digital experiences.
              </p>
            </div>
            <div className="bg-surface-container p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-on-surface mb-2">Bachelor's in IT</h3>
              <p className="text-on-surface-variant">
                Foundation in software development, system design, and modern web technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-on-surface">Skills & Technologies</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Programming Languages - with highlighted section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-on-surface">Programming Languages</h2>
          <div className="bg-surface-container rounded-lg p-6">
            {/* Highlighted languages - always visible */}
            <div className="grid gap-3 md:grid-cols-2 mb-4">
              {highlightedLanguages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-outline-variant">
                  <span className="text-on-surface font-medium">{lang.name}</span>
                  <span className="text-sm text-on-surface-variant">{lang.proficiency}</span>
                </div>
              ))}
            </div>

            {/* Expandable section for additional languages */}
            <div className="border-t border-outline-variant pt-4">
              <button
                onClick={() => setLanguagesExpanded(!languagesExpanded)}
                className="w-full flex justify-between items-center text-left p-2 hover:bg-surface-container-high rounded transition-colors"
                aria-expanded={languagesExpanded}
              >
                <span className="text-on-surface-variant">
                  {languagesExpanded ? 'Show less' : `View ${additionalLanguages.length} more languages`}
                </span>
                <span className="material-symbols-outlined text-on-surface-variant transition-transform" style={{ transform: languagesExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  expand_more
                </span>
              </button>
              {languagesExpanded && (
                <div className="mt-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    {additionalLanguages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-outline-variant last:border-b-0">
                        <span className="text-on-surface">{lang.name}</span>
                        <span className="text-sm text-on-surface-variant">{lang.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-surface-container p-4 lg:p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-on-surface">Current Focus</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-on-surface">Development</h3>
              <p className="text-on-surface-variant">
                Building modern, accessible web and mobile applications with React, Flutter, and TypeScript.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-on-surface">Design & Research</h3>
              <p className="text-on-surface-variant">
                Conducting user research, creating prototypes in Figma, and ensuring WCAG/EAA compliance
                in all digital products.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-on-surface">Interests</h3>
              <p className="text-on-surface-variant">
                Accessibility-first design, user experience research, performance optimization, and
                creating systems that empower users to achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
