import { Button } from 'actify'
import { useNavigate } from 'react-router-dom'
import { ImageCarousel } from '../../components/ImageCarousel'

export function Debattnytt() {
  const navigate = useNavigate()

  const images = [
    {
      placeholder: '[App Screenshot - Swipe Interface]',
      suggestion: 'Screenshot showing the thesis card with swipe gestures and the main interface'
    },
    {
      placeholder: '[App Screenshot - Analytics View]',
      suggestion: 'Screenshot showing post-swipe analytics with charts and community consensus data'
    },
    {
      placeholder: '[App Screenshot - Related Content]',
      suggestion: 'Screenshot showing related articles and content recommendations after swiping'
    },
    {
      placeholder: '[App Screenshot - Thesis Feed]',
      suggestion: 'Screenshot showing the feed of theses with different categories and topics'
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
            Debattnytt
          </h1>
          <p className="text-xl text-on-surface-variant mb-6">
            Tinder-Like Debate Platform for Crowdsourced Truth Assessment
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outlined"
              disabled
            >
              Client Project
            </Button>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={images} />

        {/* What is it */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">What is Debattnytt?</h2>
          <p className="text-on-surface-variant mb-4 leading-relaxed">
            Debattnytt is an innovative social media platform that gamifies debate and critical thinking through
            a familiar swipe-based interface. Built as a freelance project in summer 2025, the web application
            presents users with theses and arguments, which they can evaluate by swiping left or right to indicate
            how likely they believe each thesis is to be true.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            After each swipe, users are presented with related articles, supporting content, and real-time analytics
            showing how others have rated the same thesis. This crowdsourced approach to debate creates an engaging
            platform where users can explore different viewpoints, see where they stand compared to the community,
            and discover content that challenges or supports their perspectives.
          </p>
        </section>

        {/* Problem it solves */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Problem & Solution</h2>
          <div className="bg-surface-container p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Problem</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Traditional debate platforms and news sites require significant time and mental effort to engage with
              arguments. Reading long articles, navigating complex comment sections, and analyzing different
              viewpoints can be overwhelming and time-consuming. This high barrier to entry means many people
              avoid engaging with important debates altogether, leading to echo chambers and reduced civic
              participation.
            </p>
          </div>
          <div className="bg-surface-container p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Solution</h3>
            <p className="text-on-surface-variant leading-relaxed">
              By adopting the familiar, low-friction swipe interface popularized by dating apps, Debattnytt makes
              engaging with arguments as easy and approachable as possible. Users can quickly form and express
              opinions on theses, see how their views compare to others through analytics, and discover related
              content—all with minimal cognitive load. This gamified approach lowers the barrier to civic engagement
              while maintaining the depth of traditional debate through curated content and analytics.
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Meteor.js</h3>
              <p className="text-sm text-on-surface-variant">Full-stack framework</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">JavaScript</h3>
              <p className="text-sm text-on-surface-variant">Primary language</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">MongoDB</h3>
              <p className="text-sm text-on-surface-variant">Database</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Real-time Sync</h3>
              <p className="text-sm text-on-surface-variant">Live analytics updates</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Responsive Design</h3>
              <p className="text-sm text-on-surface-variant">Mobile & desktop</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Swipe UI</h3>
              <p className="text-sm text-on-surface-variant">Gesture-based interaction</p>
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
                <strong className="text-on-surface">Swipe-Based Interface:</strong>
                <span className="text-on-surface-variant"> Familiar, low-friction interaction model for rating thesis truthfulness</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Real-time Analytics:</strong>
                <span className="text-on-surface-variant"> See how your judgments compare to community consensus after each swipe</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Content Discovery:</strong>
                <span className="text-on-surface-variant"> Get related articles and references that explore each thesis in depth</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Crowdsourced Truth:</strong>
                <span className="text-on-surface-variant"> Aggregate community opinions to identify consensus and controversial topics</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Approachable Debate:</strong>
                <span className="text-on-surface-variant"> Lower barriers to civic engagement through gamified interaction</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Project Status */}
        <section className="mb-8">
          <div className="bg-surface-container p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-on-surface">Project Status</h2>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">Status:</strong> Completed (Summer 2025)
            </p>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">Type:</strong> Freelance Client Project
            </p>
            <p className="text-on-surface-variant">
              <strong className="text-on-surface">Platform:</strong> Web Application
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 justify-center pt-4">
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
