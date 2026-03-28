import { useInView } from 'react-intersection-observer'
import { WhatsappLogo, Phone, MapPin, Clock, NavigationArrow, InstagramLogo } from '@phosphor-icons/react'

const WA = 'https://wa.me/5548930304600?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Blanc%20Odontologia.'

export default function Contato() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="contato" ref={ref} style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className={`reveal ${inView ? 'revealed' : ''}`} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Contato</span>
          <h2 className="section-title">Agende sua <em style={{ color: 'var(--teal)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>avaliação</em></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Entre em contato e descubra como podemos transformar seu sorriso.
            Primeira avaliação sem compromisso.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div className={`reveal delay-1 ${inView ? 'revealed' : ''}`}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                padding: '28px 20px', background: 'var(--bg-card)', borderRadius: '12px',
                border: '1px solid rgba(37, 211, 102, 0.15)', textAlign: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <WhatsappLogo size={28} weight="duotone" style={{ color: '#25D366', marginBottom: '10px' }} />
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>WhatsApp</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>(48) 3030-4600</p>
              </a>
              <a href="tel:+554830304600" style={{
                padding: '28px 20px', background: 'var(--bg-card)', borderRadius: '12px',
                border: '1px solid #E5E7EB', textAlign: 'center', transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <Phone size={28} weight="duotone" style={{ color: 'var(--teal)', marginBottom: '10px' }} />
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>Telefone</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>(48) 3030-4600</p>
              </a>
              <a href="https://instagram.com/blanc_odontologia_" target="_blank" rel="noopener noreferrer" style={{
                padding: '28px 20px', background: 'var(--bg-card)', borderRadius: '12px',
                border: '1px solid #E5E7EB', textAlign: 'center', transition: 'all 0.3s',
                gridColumn: 'span 2',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <InstagramLogo size={28} weight="duotone" style={{ color: '#E4405F', marginBottom: '10px' }} />
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>Instagram</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>@blanc_odontologia_ | 13K seguidores</p>
              </a>
            </div>

            <div style={{
              padding: '24px', background: 'var(--bg-card)', borderRadius: '12px',
              border: '1px solid #E5E7EB',
            }}>
              <div style={{ display: 'flex', gap: '14px', marginBottom: '16px' }}>
                <MapPin size={20} weight="duotone" style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>Endereço</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Rua Bento Gonçalves, 183, Sala 401<br />Centro, Florianópolis - SC
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <Clock size={20} weight="duotone" style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>Horário</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Segunda a sexta, 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`reveal delay-2 ${inView ? 'revealed' : ''}`} style={{
            borderRadius: '12px', overflow: 'hidden', border: '1px solid #E5E7EB', minHeight: '400px',
            position: 'relative',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5510!3d-27.5970!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sBlanc+Odontologia!5e0!3m2!1spt-BR!2sbr"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Blanc Odontologia"
            />
            <a href="https://maps.google.com/?q=Blanc+Odontologia+Florianópolis" target="_blank" rel="noopener noreferrer" style={{
              position: 'absolute', bottom: '16px', right: '16px',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', background: 'rgba(255,255,255,0.95)',
              border: '1px solid #E5E7EB', borderRadius: '50px',
              fontSize: '12px', fontWeight: 600, color: 'var(--teal)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}>
              <NavigationArrow size={14} weight="bold" />
              Abrir no Maps
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #contato > .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
