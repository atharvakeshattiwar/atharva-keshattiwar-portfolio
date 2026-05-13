import MonofHero from '../components/MonofHero'

export default function HeroTest() {
  return (
    <>
      <MonofHero />
      {/* Spacer so there's content after the hero */}
      <div style={{ height: '100vh', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '48px', fontWeight: 600 }}>
          Next Section
        </h2>
      </div>
    </>
  )
}
