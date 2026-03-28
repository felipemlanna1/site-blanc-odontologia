import { useState, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { Star, Quotes, CaretLeft, CaretRight } from '@phosphor-icons/react'

const reviews = [
  { name: 'Carolina M.', rating: 5, text: 'Experiência incrível! Fiz lentes de contato dental e o resultado ficou absolutamente natural. A Dra. Daniela é extremamente cuidadosa e atenciosa. Recomendo de olhos fechados!', date: 'Fev 2026' },
  { name: 'Rafael S.', rating: 5, text: 'Tinha muito medo de dentista, mas a equipe da Blanc me deixou completamente à vontade. Fiz implante e não senti nada. Profissionalismo de altíssimo nível.', date: 'Jan 2026' },
  { name: 'Juliana P.', rating: 5, text: 'Comecei o tratamento com alinhadores invisíveis e estou encantada com os resultados. A clínica é linda, moderna e o atendimento é impecável do início ao fim.', date: 'Mar 2026' },
  { name: 'Marcos L.', rating: 5, text: 'Melhor clínica odontológica de Florianópolis. Fiz harmonização orofacial e o resultado superou todas as minhas expectativas. Equipe excepcional!', date: 'Dez 2025' },
  { name: 'Amanda R.', rating: 5, text: 'A Blanc transformou meu sorriso e minha autoestima. Clareamento + lentes foi a melhor decisão. Clínica impecável, ambiente acolhedor e resultado perfeito.', date: 'Jan 2026' },
]

export default function Depoimentos() {
  const [cur, setCur] = useState(0)
  const [fading, setFading] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const goTo = useCallback((i) => {
    if (fading) return
    setFading(true)
    setTimeout(() => { setCur(i); setFading(false) }, 300)
  }, [fading])

  const next = useCallback(() => goTo((cur + 1) % reviews.length), [cur, goTo])

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const r = reviews[cur]

  return (
    <section id="depoimentos" ref={ref} style={{ padding: 'var(--section-padding)', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className={`reveal ${inView ? 'revealed' : ''}`} style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Depoimentos</span>
          <h2 className="section-title">Sorrisos que <em style={{ color: 'var(--teal)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>contam histórias</em></h2>
        </div>

        <div className={`reveal delay-2 ${inView ? 'revealed' : ''}`} style={{
          display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'center',
        }}>
          <button onClick={() => goTo((cur - 1 + reviews.length) % reviews.length)} style={{
            width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
            border: '1px solid #E5E7EB', color: 'var(--teal)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <CaretLeft size={20} weight="bold" />
          </button>

          <div style={{
            maxWidth: '600px', textAlign: 'center', padding: '48px 40px',
            background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid #E5E7EB',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            opacity: fading ? 0 : 1, transform: fading ? 'translateY(10px)' : 'translateY(0)',
            transition: 'all 0.3s',
          }}>
            <Quotes size={32} weight="duotone" style={{ color: 'var(--teal)', opacity: 0.3, marginBottom: '16px' }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '16px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} weight="fill" style={{ color: i < r.rating ? '#F59E0B' : '#D1D5DB' }} />
              ))}
            </div>
            <blockquote style={{
              fontFamily: 'var(--font-display)', fontSize: '18px', fontStyle: 'italic',
              lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '20px',
            }}>
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>{r.name}</p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{r.date} via Google</p>
          </div>

          <button onClick={next} style={{
            width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
            border: '1px solid #E5E7EB', color: 'var(--teal)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <CaretRight size={20} weight="bold" />
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: cur === i ? '24px' : '8px', height: '8px', borderRadius: '4px',
              background: cur === i ? 'var(--teal)' : '#D1D5DB', transition: 'all 0.3s',
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}
