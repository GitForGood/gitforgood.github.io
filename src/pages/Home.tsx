import { Button } from 'actify'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export function Home() {
  const navigate = useNavigate()

  return (
      <div className='page block'>
        <div className='bg-surface-dim content-center max-w-full relative'>
          <div className='absolute inset-x-0 bottom-0 h-32 pointer-events-none'></div>
          <h1 aria-label="Portfolio" className='hero-display-animated text-6xl lg:text-8xl transition flex gap-1 pt-48 lg:pt-64 pb-40 lg:pb-56'>
            <span aria-hidden="true">P</span>
            <span aria-hidden="true">O</span>
            <span aria-hidden="true">R</span>
            <span aria-hidden="true">T</span>
            <span aria-hidden="true">F</span>
            <span aria-hidden="true">O</span>
            <span aria-hidden="true">L</span>
            <span aria-hidden="true">I</span>
            <span aria-hidden="true">O</span>
          </h1>
        </div>
        <div className='gradient h-8 w-full bg-linear-to-b from-surface-dim to-transparent'></div>
        <div className='rest-of-page p-8 max-w-4xl mx-auto relative'>
          <p className='text-on-surface'>A collection of my projects and a showcase of me as a designer</p>
          <div className='w-4xl flex lg:gap-2 gap-1 mx-auto mb-4'>
            <Button variant='filled'>Contact</Button>
            <Button variant='outlined'>Projects</Button>
          </div>

        </div> 
      </div>
  )
}
