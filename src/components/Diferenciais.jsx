import { useInView } from 'react-intersection-observer'
import { CheckCircle, WhatsappLogo } from '@phosphor-icons/react'

const WA = 'https://wa.me/5548930304600?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Blanc%20Odontologia.'

const items = [
  'Localização privilegiada no centro de Florianópolis',
  'Equipe de dentistas especializados em diversas áreas',
  'Tecnologia de ponta: scanner intraoral 3D e radiografia digital',
  'Atendimento humanizado e acolhedor',
  'Planos de tratamento personalizados',
  'Facilidade de pagamento e condições especiais',
  'Nota 4.9 no Google com mais de 98 avaliações',
  'Mais de 13.000 seguidores no Instagram',
]

export default function Diferenciais() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="diferenciais" ref={ref} style={{
      padding: 'var(--section-padding)',
      background: 'linear-gradient(135deg, #0F2A3A 0%, #1A3A4A 100%)',
      color: 'var(--white)',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className={`reveal ${inView ? 'revealed' : ''}`}>
            <span className="section-label" style={{ color: '#3BA99E' }}>Diferenciais</span>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 500, lineHeight: 1.15, color: 'var(--white)', marginBottom: '20px',
            }}>
              Por que a <em style={{ color: '#3BA99E', fontStyle: 'italic' }}>Blanc</em> é a sua melhor escolha
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
              Combinamos expertise odontológica, tecnologia avançada e um atendimento
              verdadeiramente humanizado para transformar seu sorriso.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsappLogo size={18} weight="fill" />
              <span>Agendar Avaliação Gratuita</span>
            </a>
          </div>

          <div className={`reveal delay-2 ${inView ? 'revealed' : ''}`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px 20px', background: 'rgba(255,255,255,0.04)',
                  borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <CheckCircle size={20} weight="duotone" style={{ color: '#3BA99E', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #diferenciais > .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
