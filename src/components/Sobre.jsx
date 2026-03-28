import { useInView } from 'react-intersection-observer'
import { ShieldCheck, UserCircleGear, Atom, Heart } from '@phosphor-icons/react'

export default function Sobre() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="sobre" ref={ref} style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className={`reveal ${inView ? 'revealed' : ''}`}>
            <span className="section-label">A Clínica</span>
            <h2 className="section-title">
              Cuidamos do seu sorriso com <em style={{ color: 'var(--teal)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>dedicação</em>
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
              A Blanc Odontologia nasceu com o propósito de oferecer odontologia de excelência
              no centro de Florianópolis. Liderada pela Dra. Daniela Regina Picanço Zen, nossa
              clínica reúne uma equipe de profissionais altamente qualificados e apaixonados
              pelo que fazem.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Com mais de 13 mil seguidores no Instagram e quase 100 avaliações 5 estrelas
              no Google, somos referência em implantes, alinhadores invisíveis, lentes de
              contato dental e harmonização orofacial.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              Utilizamos equipamentos de última geração e técnicas avançadas para garantir
              resultados excepcionais com o máximo de conforto e segurança.
            </p>
          </div>

          <div className={`reveal delay-2 ${inView ? 'revealed' : ''}`}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
            }}>
              {[
                { icon: ShieldCheck, title: 'Segurança', desc: 'Protocolos rigorosos de biossegurança e esterilização', color: '#2A8C82' },
                { icon: Atom, title: 'Tecnologia', desc: 'Equipamentos de última geração e técnicas avançadas', color: '#3B82F6' },
                { icon: UserCircleGear, title: 'Personalização', desc: 'Cada tratamento é único e pensado para você', color: '#C4A265' },
                { icon: Heart, title: 'Humanização', desc: 'Atendimento acolhedor e cuidadoso em cada etapa', color: '#EC4899' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.title} style={{
                    padding: '28px 20px', background: 'var(--bg-card)', borderRadius: '12px',
                    border: '1px solid #E5E7EB', textAlign: 'center',
                  }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '50%', margin: '0 auto 14px',
                      background: `${item.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={24} weight="duotone" style={{ color: item.color }} />
                    </div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          #sobre .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
