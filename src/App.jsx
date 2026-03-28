import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import Diferenciais from './components/Diferenciais'
import Depoimentos from './components/Depoimentos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import './App.css'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Blanc Odontologia | Dentista em Florianópolis - Implantes, Alinhadores, Lentes de Contato</title>
        <meta name="description" content="Blanc Odontologia - Clínica odontológica premium em Florianópolis. Implantes, alinhadores invisíveis, lentes de contato dental, harmonização orofacial. Agende sua avaliação." />
      </Helmet>
      <Hero />
      <Servicos />
      <Sobre />
      <Diferenciais />
      <Depoimentos />
      <Contato />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
