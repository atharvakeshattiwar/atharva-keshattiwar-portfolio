import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

// Change this to: 'text', 'counter', 'logo', or 'curtain'
const LOADER_TYPE = 'curtain'

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    const timers = []
    timers.push(setTimeout(() => setPhase('visible'), 100))
    timers.push(setTimeout(() => setPhase('exit'), 2000))
    timers.push(setTimeout(() => onComplete(), 2800))
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  if (LOADER_TYPE === 'text') return <TextLoader phase={phase} />
  if (LOADER_TYPE === 'counter') return <CounterLoader phase={phase} />
  if (LOADER_TYPE === 'logo') return <LogoLoader phase={phase} />
  if (LOADER_TYPE === 'curtain') return <CurtainLoader phase={phase} />
  return null
}

function TextLoader({ phase }) {
  return (
    <div className={`loader-screen loader-${phase}`}>
      <div className="loader-text-wrap">
        <div className={`loader-text-name ${phase === 'visible' || phase === 'exit' ? 'loader-text-show' : ''}`}>
          Atharva K.
        </div>
        <div className={`loader-text-role ${phase === 'visible' || phase === 'exit' ? 'loader-text-show' : ''}`}>
          Product Designer
        </div>
      </div>
    </div>
  )
}

function CounterLoader({ phase }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        return prev + 2
      })
    }, 35)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`loader-screen loader-${phase}`}>
      <div className="loader-counter-wrap">
        <div className="loader-counter">{count}%</div>
      </div>
    </div>
  )
}

function LogoLoader({ phase }) {
  return (
    <div className={`loader-screen loader-${phase}`}>
      <div className="loader-logo-wrap">
        <img
          src={logo}
          alt="AK"
          className={`loader-logo ${phase === 'visible' || phase === 'exit' ? 'loader-logo-show' : ''}`}
        />
      </div>
    </div>
  )
}

function CurtainLoader({ phase }) {
  return (
    <div className={`loader-curtain loader-curtain-${phase}`}>
      <div className="loader-curtain-text">
        <span className={phase === 'visible' || phase === 'exit' ? 'loader-text-show' : ''}>
          Atharva K.
        </span>
      </div>
    </div>
  )
}
