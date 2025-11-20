import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { NavigationButton } from './components/NavigationButton'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { InventoryManager } from './pages/products/InventoryManager'
import { PipelinePlanner } from './pages/products/PipelinePlanner'
import { Shrinkflation } from './pages/products/Shrinkflation'
import { Debattnytt } from './pages/products/Debattnytt'

const navigation_items = [
  {
    label: 'Home',
    icon: 'home',
    path: '/'
  },
  {
    label: 'Projects',
    icon: 'bookmarks',
    path: '/projects'
  },
  {
    label: 'About',
    icon: 'person',
    path: '/about'
  },
  {
    label: 'Contact',
    icon: 'mail',
    path: '/contact'
  }
]

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeIndex, setActiveIndex] = useState(0)

  // Update active index based on current path
  useEffect(() => {
    const currentIndex = navigation_items.findIndex(item => item.path === location.pathname)
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex)
    }
  }, [location.pathname])

  const handleNavigation = (path: string, index: number) => {
    navigate(path, { replace: false })
    setActiveIndex(index)
  }

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Skip link - only visible when focused */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Mobile Bottom Navigation Bar - moved early in DOM for keyboard navigation, but displayed at bottom via order-3 */}
      <nav className="flex sm:hidden bg-surface-container border-t border-outline-variant px-2 py-2 justify-around gap-2 order-3" aria-label="Main navigation">
        {navigation_items.map((item, index) => (
          <NavigationButton
            key={item.path}
            label={item.label}
            icon={item.icon}
            isActive={activeIndex === index}
            onClick={() => handleNavigation(item.path, index)}
            variant="bottom"
          />
        ))}
      </nav>

      <div className="order-1">
        <Header />
      </div>
      <div className="flex flex-1 overflow-hidden order-2">
        {/* Desktop Side Navigation Rail - hidden on mobile */}
        <nav className="hidden sm:flex h-full bg-surface-container border-r border-outline-variant flex-col py-4 gap-2" aria-label="Main navigation">
          {navigation_items.map((item, index) => (
            <NavigationButton
              key={item.path}
              label={item.label}
              icon={item.icon}
              isActive={activeIndex === index}
              onClick={() => handleNavigation(item.path, index)}
            />
          ))}
        </nav>
        <main className="flex-1 overflow-y-auto max-w-full" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/inventory-manager" element={<InventoryManager />} />
            <Route path="/projects/debattnytt" element={<Debattnytt />} />
            <Route path="/projects/pipeline-planner" element={<PipelinePlanner />} />
            <Route path="/projects/shrinkflation" element={<Shrinkflation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      {/* Footer - hidden on mobile */}
      <div className="hidden sm:block order-4">
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router basename="/portfolio/">
      <AppContent />
    </Router>
  )
}

export default App
