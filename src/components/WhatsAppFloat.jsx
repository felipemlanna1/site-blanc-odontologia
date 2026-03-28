import { WhatsappLogo } from '@phosphor-icons/react'

const WA = 'https://wa.me/5548930304600?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Blanc%20Odontologia.'

export default function WhatsAppFloat() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      className="whatsapp-float" aria-label="Fale conosco pelo WhatsApp">
      <WhatsappLogo size={28} weight="fill" />
    </a>
  )
}
