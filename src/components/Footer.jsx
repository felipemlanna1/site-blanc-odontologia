import { WhatsappLogo, Phone, MapPin, InstagramLogo, FacebookLogo } from '@phosphor-icons/react'

const WA = 'https://wa.me/5548930304600?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Blanc%20Odontologia.'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ padding: '64px 0 32px', background: '#0F1B2D', color: 'rgba(255,255,255,0.7)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px',
          paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--white)', marginBottom: '16px', letterSpacing: '2px' }}>
              Blanc
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', maxWidth: '300px', color: 'rgba(255,255,255,0.5)' }}>
              Clínica odontológica premium em Florianópolis. Seu sorriso é nossa missão.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://instagram.com/blanc_odontologia_" target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#3BA99E'; e.currentTarget.style.borderColor = '#3BA99E' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                <InstagramLogo size={18} />
              </a>
              <a href="https://facebook.com/blanc.odontosc" target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#3BA99E'; e.currentTarget.style.borderColor = '#3BA99E' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                <FacebookLogo size={18} />
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#25D366'; e.currentTarget.style.borderColor = '#25D366' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                <WhatsappLogo size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#3BA99E', marginBottom: '20px' }}>Contato</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)' }}>
                <WhatsappLogo size={16} weight="duotone" style={{ color: '#3BA99E' }} />(48) 3030-4600
              </a>
              <a href="tel:+554830304600" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)' }}>
                <Phone size={16} weight="duotone" style={{ color: '#3BA99E' }} />(48) 3030-4600
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#3BA99E', marginBottom: '20px' }}>Endereço</h4>
            <div style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
              <MapPin size={16} weight="duotone" style={{ color: '#3BA99E', flexShrink: 0, marginTop: '3px' }} />
              <span>R. Bento Gonçalves, 183<br />Sala 401 - Centro<br />Florianópolis - SC</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#3BA99E', marginBottom: '20px' }}>Navegação</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '#servicos', label: 'Tratamentos' },
                { href: '#sobre', label: 'A Clínica' },
                { href: '#diferenciais', label: 'Diferenciais' },
                { href: '#depoimentos', label: 'Depoimentos' },
                { href: '#contato', label: 'Contato' },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = '#3BA99E'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >{l.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            &copy; {year} Blanc Odontologia. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', marginTop: '6px' }}>
            CNPJ: 33.805.412/0001-58 | R. Bento Gonçalves, 183 - Centro, Florianópolis - SC
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) { footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { footer .container > div:first-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
