import { Button } from 'actify'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-surface p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-on-surface">Portfolio</h1>
        <p className="text-lg mb-6 text-on-surface-variant">
          Welcome to your Vite + React + Actify project with Material Design 3!
        </p>

        <div className="flex gap-4">
          <Button variant="filled">Filled Button</Button>
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="elevated">Elevated Button</Button>
          <Button variant="tonal">Tonal Button</Button>
        </div>
      </div>
    </div>
  )
}

export default App
