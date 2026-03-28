import { useInView } from 'react-intersection-observer'
import { Tooth, Smiley, SunHorizon, Sparkle, FirstAid, Heartbeat, WhatsappLogo } from '@phosphor-icons/react'

const WA = 'https://wa.me/5548930304600?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20da%20Blanc%20Odontologia.'

const services = [
  {
    icon: Tooth,
    title: 'Implantes Dentários',
    desc: 'Implantes unitários e protocolo. Tecnologia de ponta para devolver seu sorriso com segurança e conforto.',
    color: '#2A8C82',
  },
  {
    icon: Smiley,
    title: 'Alinhadores Invisíveis',
    desc: 'Correção ortodôntica discreta e eficaz. Alinhadores transparentes personalizados para cada paciente.',
    color: '#3B82F6',
  },
  {
    icon: Sparkle,
    title: 'Lentes de Contato Dental',
    desc: 'Transforme seu sorriso com laminados ultrafinos. Resultado natural e duradouro para um sorriso perfeito.',
    color: '#C4A265',
  },
  {
    icon: SunHorizon,
    title: 'Harmonização Orofacial',
    desc: 'Botox, preenchimento e bioestimuladores. Procedimentos estéticos para realçar a beleza do seu rosto.',
    color: '#EC4899',
  },
  {
    icon: FirstAid,
    title: 'Clareamento Dental',
    desc: 'Clareamento profissional em consultório e caseiro. Dentes mais brancos com segurança e acompanhamento.',
    color: '#8B5CF6',
  },
  {
    icon: Heartbeat,
    title: 'Endodontia e Cirurgias',
    desc: 'Tratamento de canal com tecnologia avançada, extrações de sisos e cirurgias bucais minimamente invasivas.',
    color: '#EF4444',
  },
]

export default function Servicos() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="servicos" ref={ref} style={{ padding: 'var(--section-padding)', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className={`reveal ${inView ? 'revealed' : ''}`} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Tratamentos</span>
          <h2 className="section-title">
            Odontologia de <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--teal)' }}>excelência</em>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Tratamentos modernos e personalizados para a saúde e estética do seu sorriso.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px',
        }}>
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.title}
                className={`reveal ${inView ? 'revealed' : ''}`}
                style={{
                  transitionDelay: `${0.1 + i * 0.06}s`,
                  padding: '36px 28px', background: 'var(--bg-card)', borderRadius: '12px',
                  border: '1px solid #E5E7EB', transition: 'all 0.4s', cursor: 'default',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
                  e.currentTarget.style.borderColor = `${s.color}30`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'
                  e.currentTarget.style.borderColor = '#E5E7EB'
                }}
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: `${s.color}10`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
                }}>
                  <Icon size={26} weight="duotone" style={{ color: s.color }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className={`reveal delay-4 ${inView ? 'revealed' : ''}`} style={{ textAlign: 'center' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsappLogo size={18} weight="fill" />
            <span>Agendar Sua Avaliação</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #servicos > .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
