import { Button } from 'actify'
import { useNavigate } from 'react-router-dom'
import { ImageCarousel } from '../../components/ImageCarousel'

export function InventoryManager() {
  const navigate = useNavigate()

  const images = [
    {
      placeholder: '[App Screenshot - Main Dashboard]',
      suggestion: 'Screenshot showing the inventory list with items, categories, and quick actions'
    },
    {
      placeholder: '[App Screenshot - Recipe Integration]',
      suggestion: 'Screenshot showing the recipe feature with ingredient tracking'
    },
    {
      placeholder: '[App Screenshot - Add Item Interface]',
      suggestion: 'Screenshot showing the form for adding new items with category selection and expiration dates'
    },
    {
      placeholder: '[App Screenshot - Multi-Platform View]',
      suggestion: 'Screenshot showing the app running on different platforms (mobile, desktop, web)'
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
            Lazy Prepper
          </h1>
          <p className="text-xl text-on-surface-variant mb-6">
            Inventory Manager for Non-Perishable Goods
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              variant="filled"
              onClick={() => window.open('https://github.com/GitForGood/inventory_manager/releases', '_blank')}
            >
              Download App
            </Button>
            <Button
              variant="outlined"
              onClick={() => window.open('https://github.com/GitForGood/inventory_manager', '_blank')}
            >
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={images} />

        {/* What is it */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">What is Lazy Prepper?</h2>
          <p className="text-on-surface-variant mb-4 leading-relaxed">
            Lazy Prepper is a comprehensive cross-platform application built with Flutter that helps households
            track and manage their non-perishable food storage. Whether you're preparing for emergencies,
            managing a large pantry, or simply trying to reduce food waste, Lazy Prepper provides an intuitive
            interface to keep track of what you have and what you need.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            The app features recipe integration, allowing you to plan meals based on your current inventory
            and automatically track which items are being used. Available on iOS, Android, Web, Windows, macOS,
            and Linux, Lazy Prepper ensures your inventory is accessible wherever you need it.
          </p>
        </section>

        {/* Problem it solves */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Problem & Solution</h2>
          <div className="bg-surface-container p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Problem</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Managing a home storage of non-perishable goods is challenging without a systematic approach.
              People often lose track of what they have, leading to duplicate purchases, expired items, and
              wasted money. During times of crisis or supply chain disruptions, knowing exactly what resources
              you have available becomes even more critical.
            </p>
          </div>
          <div className="bg-surface-container p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Solution</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Lazy Prepper eliminates manual tracking by providing a digital inventory system that's always
              in your pocket or on your desktop. The recipe integration feature helps you cycle through your
              storage systematically, ensuring items are used before expiration. Multi-platform support means
              you can check your inventory while shopping or update it while cooking, making household
              management effortless.
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-surface-container-lowest p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Flutter</h3>
              <p className="text-sm text-on-surface-variant">Cross-platform framework</p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Dart</h3>
              <p className="text-sm text-on-surface-variant">Primary language (91.1%)</p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">SQLite</h3>
              <p className="text-sm text-on-surface-variant">Local data storage</p>
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
                <strong className="text-on-surface">Recipe Integration:</strong>
                <span className="text-on-surface-variant"> Plan meals based on current inventory and automatically track usage</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Inventory Tracking:</strong>
                <span className="text-on-surface-variant"> Manage quantities, categories, and expiration dates for all stored items</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">•</span>
              <div>
                <strong className="text-on-surface">Crisis Preparedness:</strong>
                <span className="text-on-surface-variant"> Ensure you're ready for emergencies with systematic storage cycling</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Project Status */}
        <section className="mb-8">
          <div className="bg-surface-container p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-on-surface">Project Status</h2>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">Status:</strong> Beta Release (Active Development)
            </p>
            <p className="text-on-surface-variant mb-2">
              <strong className="text-on-surface">License:</strong> MIT License (Open Source)
            </p>
            <p className="text-on-surface-variant">
              <strong className="text-on-surface">Latest Update:</strong> November 2025
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <Button
            variant="filled"
            onClick={() => window.open('https://github.com/GitForGood/inventory_manager/releases', '_blank')}
          >
            Download Now
          </Button>
          <Button
            variant="outlined"
            onClick={() => window.open('https://github.com/GitForGood/inventory_manager', '_blank')}
          >
            Contribute on GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}
