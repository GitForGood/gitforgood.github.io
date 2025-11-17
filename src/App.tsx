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
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Side Navigation Rail - hidden on mobile */}
        <nav className="hidden md:flex h-full bg-surface-container border-r border-outline-variant flex-col py-4 gap-2">
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
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      {/* Mobile Bottom Navigation Bar - hidden on desktop */}
      <nav className="flex md:hidden bg-surface-container border-t border-outline-variant px-2 py-2 justify-around gap-2">
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
      {/* Footer - hidden on mobile */}
      <div className="hidden md:block">
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
