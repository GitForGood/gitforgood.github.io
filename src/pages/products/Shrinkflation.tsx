import { Button } from 'actify'
import { useNavigate } from 'react-router-dom'
import { ImageCarousel } from '../../components/ImageCarousel'

export function Shrinkflation() {
  const navigate = useNavigate()

  const images = [
    {
      placeholder: '[App Screenshot - Barcode Scanning Interface]',
      suggestion: 'Screenshot showing the barcode scanner in action with product information overlay'
    },
    {
      placeholder: '[App Screenshot - Product Details & Report]',
      suggestion: 'Screenshot showing product details with size history and the report submission interface'
    },
    {
      placeholder: '[App Screenshot - Size Comparison]',
      suggestion: 'Screenshot showing before/after product size comparison with weight/volume data'
    },
    {
      placeholder: '[App Screenshot - Community Feed]',
      suggestion: 'Screenshot showing recent shrinkflation reports from other users in the community'
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
            Shrinkflation Tracker
          </h1>
          <p className="text-xl text-on-surface-variant mb-6">
            Crowdsourced Barcode Scanner for Detecting Product Shrinkflation
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="outlined"
              isDisabled
            >
              Private Repository
            </Button>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={images} />

        {/* What is it */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">What is Shrinkflation Tracker?</h2>
          <p className="text-on-surface-variant mb-4 leading-relaxed">
            Shrinkflation Tracker is a mobile Flutter application that empowers consumers to detect and report
            shrinkflation in real-time while shopping. Using barcode scanning technology, users can quickly check
            if a product has recently decreased in size or quantity while maintaining similar pricing. The app
            leverages crowdsourced data to build a comprehensive database of shrinkflation instances across
            various product categories.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Built on Firebase infrastructure, the app provides real-time data synchronization and secure user
            authentication, allowing shoppers to contribute their findings and help build a community-driven
            transparency tool for consumer advocacy.
          </p>
        </section>

        {/* Problem it solves */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Problem & Solution</h2>
          <div className="bg-surface-container p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Problem</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Manufacturers often reduce product sizes or quantities while keeping packaging and prices similar,
              making it difficult for consumers to notice the change. A chocolate bar that was once 100g becomes
              90g, or a bag of chips has more air and fewer chips. These changes represent hidden price increases
              that compound over time, affecting household budgets without consumers realizing it.
            </p>
          </div>
          <div className="bg-surface-container p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Solution</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Shrinkflation Tracker puts the power of information directly in consumers' hands while they shop.
              By simply scanning a barcode, users can instantly see if a product has been subject to recent
              shrinkflation. The crowdsourced approach means the database grows with every user contribution,
              creating a comprehensive and up-to-date resource. This real-time transparency helps consumers make
              informed purchasing decisions on the spot and encourages manufacturers to be more transparent about
              product changes.
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Flutter</h3>
              <p className="text-sm text-on-surface-variant">Cross-platform framework</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Dart</h3>
              <p className="text-sm text-on-surface-variant">Primary language</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Firebase</h3>
              <p className="text-sm text-on-surface-variant">Backend & database</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Firebase Auth</h3>
              <p className="text-sm text-on-surface-variant">User authentication</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Barcode Scanner</h3>
              <p className="text-sm text-on-surface-variant">Product identification</p>
            </div>
            <div className="bg-surface-container p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Real-time DB</h3>
              <p className="text-sm text-on-surface-variant">Live data sync</p>
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
                <strong className="text-on-surface">Barcode Scanning:</strong>
                <span className="text-on-surface-variant"> Instantly scan products in-store to check for shrinkflation reports</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Crowdsourced Data:</strong>
                <span className="text-on-surface-variant"> Community-driven database that grows with every user contribution</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Real-time Alerts:</strong>
                <span className="text-on-surface-variant"> Get instant notifications about recent size reductions while shopping</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Firebase Integration:</strong>
                <span className="text-on-surface-variant"> Secure authentication and real-time data synchronization across devices</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Report Submissions:</strong>
                <span className="text-on-surface-variant"> Easy interface for users to submit and verify shrinkflation findings</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Project Status */}
        <section className="mb-8">
          <div className="bg-surface-container p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-on-surface">Project Status</h2>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">Status:</strong> In Development
            </p>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">Platform:</strong> Mobile (iOS & Android)
            </p>
            <p className="text-on-surface-variant">
              <strong className="text-on-surface">Repository:</strong> Private
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
