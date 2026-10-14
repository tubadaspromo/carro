import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

const WHATSAPP_GROUP = 'https://chat.whatsapp.com/DOLSW6M001yKXV7uUyJQHD?s=cl&p=i&mlu=4&ilr=4&iam=0'

function trackEvent(name) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', name)
    return true
  }

  return false
}

export default function App() {
  const [loading, setLoading] = useState(false)

  function enterGroup() {
    if (loading) return

    setLoading(true)
    trackEvent('Lead')

    // Pequeno intervalo para permitir o envio do evento antes do redirecionamento.
    window.setTimeout(() => {
      window.location.href = WHATSAPP_GROUP
    }, 500)
  }

  return (
    <main className="landing">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="card">
        <div className="topline">
          <span className="status-dot" /> ACHADINHOS AUTOMOTIVOS
        </div>

        <img className="brand-logo" src={logo} alt="Tubarão das Promos" />
        <div className="car-icon" aria-hidden="true">🚘</div>

        <p className="eyebrow">TUBARÃO CAR</p>

        <h1>
          SEU PRÓXIMO ACHADO<br />
          <span>PODE ESTAR AQUI.</span>
        </h1>

        <p className="intro">
          Ofertas de acessórios, cuidados automotivos, ferramentas e produtos para quem é apaixonado por carros.
        </p>

        <div className="benefits">
          <div><span>✓</span> Ofertas selecionadas</div>
          <div><span>✓</span> Promoções compartilhadas no grupo</div>
          <div><span>✓</span> Entrada gratuita</div>
        </div>

        <button className="cta" onClick={enterGroup} disabled={loading}>
          {loading
            ? 'ABRINDO WHATSAPP…'
            : <>ENTRAR NO GRUPO GRÁTIS <span aria-hidden="true">↗</span></>}
        </button>

        <p className="disclaimer">
          Você será direcionado ao grupo no WhatsApp.
        </p>

        <div className="divider" />

        <div className="footer-brand">
          <span className="footer-shark">🦈</span>
          <div>
            <strong>TUBARÃO DAS PROMOS</strong>
            <small>Achadinhos que valem a pena.</small>
          </div>
        </div>
      </section>

      {loading && (
        <div className="loading-overlay">
          <div className="spinner" />
          <p>Abrindo o convite do grupo…</p>
        </div>
      )}
    </main>
  )
}