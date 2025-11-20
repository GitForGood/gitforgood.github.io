import { Button } from 'actify'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export function Home() {
  const navigate = useNavigate()

  return (
      <div className='page block'>
        <div className='bg-surface-dim content-center max-w-full relative'>
          <div className='absolute inset-x-0 bottom-0 h-32 pointer-events-none'></div>
          <h1 aria-label="Portfolio" className='hero-display-animated text-6xl lg:text-8xl transition flex gap-1 pt-48 lg:pt-64 mb-4'>
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
          <p aria-label='Oliver Andersson' className='hero-display-animated text-xl lg:text-2xl transition flex gap-1 pt-4 lg:pt-8 pb-32 lg:pb-48'>
            OLIVER ANDERSSON
          </p>
        </div>
        <div className='gradient h-8 w-full bg-linear-to-b from-surface-dim to-transparent'></div>
        <div className='rest-of-page p-8 max-w-4xl mx-auto relative'>
          <p className='text-on-surface mb-6 text-xl'>Full-Stack Developer | UX Designer | Tinkerer</p>
          <p className='text-on-surface mb-6'>
            I'm currently launching an app and seeking new work opportunities to follow up with. Throughout my studies, I've worked with diverse technologies and am now focusing on deepening my expertise in React and Flutter.
          </p>
          <p className='text-on-surface mb-4'>
            I use software to help people go from "I want" to "I am".
          </p>
          <div className='w-4xl flex lg:gap-2 gap-1 mb-4'>
            <Button variant='filled' onClick={() => navigate('/contact')}>Contact</Button>
            <Button variant='outlined' onClick={() => navigate('/projects')}>Projects</Button>
          </div>

        </div> 
      </div>
  )
}
