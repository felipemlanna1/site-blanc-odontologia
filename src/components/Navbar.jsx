import { useState, useEffect } from 'react'
import { List, X, WhatsappLogo } from '@phosphor-icons/react'

const WA = 'https://wa.me/5548930304600?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Blanc%20Odontologia.'

const links = [
  { href: '#servicos', label: 'Tratamentos' },
  { href: '#sobre', label: 'A Clínica' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? 'rgba(250, 251, 253, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(42, 140, 130, 0.08)' : 'none',
      transition: 'all 0.4s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
          fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600,
          color: scrolled ? 'var(--text-primary)' : 'var(--white)',
          letterSpacing: '2px', transition: 'color 0.3s',
        }}>
          Blanc
        </a>

        <div style={{
          ...(open ? {
            display: 'flex', position: 'fixed', inset: 0, background: 'rgba(250, 251, 253, 0.98)',
            zIndex: 200, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px',
          } : {
            display: 'flex', alignItems: 'center', gap: '28px',
          }),
        }}>
          {open && <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: '20px', right: '24px', color: 'var(--text-primary)' }}><X size={28} weight="bold" /></button>}
          <div className="nav-links" style={{ display: 'flex', gap: '28px', ...(open ? { flexDirection: 'column', gap: '24px', alignItems: 'center' } : {}) }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                fontSize: open ? '18px' : '13px', fontWeight: 500,
                color: scrolled || open ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--teal)'}
              onMouseLeave={e => e.target.style.color = scrolled || open ? 'var(--text-secondary)' : 'rgba(255,255,255,0.8)'}
              >{l.label}</a>
            ))}
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setOpen(false)} style={{ padding: '12px 24px', fontSize: '11px' }}>
            <WhatsappLogo size={16} weight="fill" />
            <span>Agendar Avaliação</span>
          </a>
        </div>

        <button className="nav-toggle" onClick={() => setOpen(!open)} style={{ display: 'none', color: scrolled ? 'var(--text-primary)' : 'var(--white)' }}>
          <List size={24} weight="bold" />
        </button>
      </div>
      <style>{`
        @media (max-width: 968px) {
          .nav-links { display: ${open ? 'flex' : 'none'} !important; }
          nav .btn-primary { display: ${open ? 'inline-flex' : 'none'} !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
