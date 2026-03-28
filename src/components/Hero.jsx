import { useEffect, useState } from 'react'
import { WhatsappLogo, ArrowDown, Star, Tooth } from '@phosphor-icons/react'

const WA = 'https://wa.me/5548930304600?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Blanc%20Odontologia.'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t) }, [])

  return (
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'linear-gradient(135deg, #1A3A4A 0%, #0F2A3A 50%, #0A1F2E 100%)',
      overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(42, 140, 130, 0.08) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-5%', width: '400px', height: '400px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(196, 162, 101, 0.05) 0%, transparent 70%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '120px', paddingBottom: '80px' }}>
        <div className={`reveal ${loaded ? 'revealed' : ''}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '8px 16px', background: 'rgba(42, 140, 130, 0.1)',
          border: '1px solid rgba(42, 140, 130, 0.2)', borderRadius: '50px', marginBottom: '32px',
        }}>
          <Star size={14} weight="fill" style={{ color: '#F59E0B' }} />
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '1px' }}>
            4.9 estrelas | 98 avaliações no Google
          </span>
        </div>

        <h1 className={`reveal delay-1 ${loaded ? 'revealed' : ''}`} style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 5.5vw, 64px)', fontWeight: 500,
          lineHeight: 1.1, color: 'var(--white)', maxWidth: '680px', marginBottom: '28px',
        }}>
          Seu sorriso é nossa
          <br /><em style={{ color: '#3BA99E', fontStyle: 'italic' }}>missão</em>
        </h1>

        <p className={`reveal delay-2 ${loaded ? 'revealed' : ''}`} style={{
          fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)',
          maxWidth: '540px', marginBottom: '40px',
        }}>
          Clínica odontológica premium no centro de Florianópolis.
          Referência em implantes, alinhadores invisíveis, lentes de contato dental
          e harmonização orofacial.
        </p>

        <div className={`reveal delay-3 ${loaded ? 'revealed' : ''}`} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsappLogo size={18} weight="fill" />
            <span>Agendar Avaliação</span>
          </a>
          <a href="#servicos" className="btn-secondary" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.2)' }}>
            <span>Nossos Tratamentos</span>
          </a>
        </div>

        <div className={`reveal delay-4 ${loaded ? 'revealed' : ''}`} style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          {[
            { icon: Tooth, label: 'Implantes' },
            { label: 'Alinhadores Invisíveis' },
            { label: 'Lentes de Contato' },
            { label: 'Harmonização Orofacial' },
          ].map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--teal)' }} />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.5px' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#servicos" style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        color: 'rgba(255,255,255,0.4)', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase',
      }}>
        <span>Conheça</span>
        <ArrowDown size={16} weight="bold" />
      </a>
    </section>
  )
}
