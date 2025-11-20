import { Button } from 'actify'
import { useNavigate } from 'react-router-dom'
import { ImageCarousel } from '../../components/ImageCarousel'

export function InventoryManager() {
  const navigate = useNavigate()

  const scrollToContent = () => {
    const contentSection = document.getElementById('content')
    contentSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const images = [
    {
      src: '/images/lazy-prepper/storage-summary.png',
      alt: 'Storage Summary - Overview of inventory with storage locations and categories'
    },
    {
      src: '/images/lazy-prepper/add-item.png',
      alt: 'Add Item - Interface for adding new items to inventory'
    },
    {
      src: '/images/lazy-prepper/quotas.png',
      alt: 'Quotas - Track storage quotas for different item categories'
    },
    {
      src: '/images/lazy-prepper/quota-suggestions.png',
      alt: 'Quota Suggestions - Smart suggestions for maintaining optimal inventory levels'
    },
    {
      src: '/images/lazy-prepper/lazy-prep-recipes.png',
      alt: 'Lazy Prep Recipes - Browse recipes based on available inventory'
    },
    {
      src: '/images/lazy-prepper/lazy-prep-recipe.png',
      alt: 'Recipe Details - View recipe details with ingredient requirements'
    },
    {
      src: '/images/lazy-prepper/calorie-target.png',
      alt: 'Calorie Target - Set and monitor daily calorie targets'
    },
    {
      src: '/images/lazy-prepper/refill-forecast.png',
      alt: 'Refill Forecast - Predict the impact of adding food to inventory'
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
            <Button
            variant="outlined"
            onClick={scrollToContent}
            className="flex items-center gap-2"
          >
            <span>Learn More</span>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </Button>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={images} />

        {/* What is it */}
        <section id="content" className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">What is Lazy Prepper?</h2>
          <p className="text-on-surface-variant mb-4 leading-relaxed">
            Lazy Prepper is an adroid application built with Flutter that helps households track and manage their non-perishable food storage. 
            It aims to keep the food as fresh as possible in the event one has to rely on it for sustinance in a time of crisis. It aims to help users sustainably keep a large stock of food at home by preventing the event of being overwhelmed by waves of expiring food that has to be eaten in short intervals. Lazy Prepper provides an intuitive interface to keep track of what you have and helps you eat what you need.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Lazy Prepper schedules consumption quotas based on the user's inventory and preference of use-frequency that suits their preferred way of planning their meals. It uses tags on foods to recommend recipes that makes use of the scheduled ingredients. It provides a simple interface for creating and following recipes in the app and ships with a curated set of pre-installed recipes.
          </p>
        </section>

        {/* Problem it solves */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Problem & Solution</h2>
          <div className="bg-surface-container p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Problem</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Managing a home storage of non-perishable goods is challenging without a systematic approach. As the expiration date is often so far in the future, many face the problem of forgetting to eat from their inventory in a pace that prevents having to soley eat beans for a week or risk having to throw them all out at once. When sudden changes in inventory happens, such as throwing out a batch of food, gifting it, or purchasing new - the previously decided plan has to be redone in order to take into account this update. Having to do this manually is tedius at best, and a spreadsheet does not provide the cleanest interface.
              And this takes away from the user's intended vision: 
              
              <p>
                <b>
                Having enough fresh food at home to last a desired amount of time for themselves and their loved ones.
                </b>
              </p>
            </p>
          </div>
          <div className="bg-surface-container p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-on-surface">The Solution</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Lazy Prepper eliminates manual tracking by providing a digital inventory system that's always
              in your pocket. It does the calculation of what you have to eat and automatically adjusts when changes happen to your inventory. The recipe integration feature helps you cycle through your
              storage systematically easing the burden of actually doing the maintenance work of eating through your food, ensuring items are used before expiration and are as fresh as possible when it matters. To further the goal of being a helping hand in a time of crisis, none of the critical functionality relies on internet connection.
            </p>
          </div>
        </section>
        <section className='mb-8'>
          {/* Intended user */}
          <h2 className='text-on-surface text-3xl font-bold mb-4'>
            Who are you?
          </h2>
          <p className='text-on-surface'>
            You are someone that is tasked with keeping food at home in the event of a crisis and would like to spend as little time as possible worrying about the food after buying it.
          </p>
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

        {/* Technologies */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-on-surface">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-surface-container-lowest p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Flutter</h3>
              <p className="text-sm text-on-surface-variant">Front-end framework</p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-lg">
              <h3 className="font-semibold text-on-surface mb-1">Material Design</h3>
              <p className="text-sm text-on-surface-variant">Design system</p>
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
