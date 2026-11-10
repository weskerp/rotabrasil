import { ArrowUpRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="hero-tag"><span /> SEU PRÓXIMO DESTINO COMEÇA AQUI</div>
        <h1>O Brasil que você sonha <em>conhecer.</em></h1>
        <p>Inspire-se, planeje e descubra experiências incríveis com um guia feito para transformar vontade de viajar em uma viagem de verdade.</p>
        <div className="hero-actions">
          <a className="button button-lime" href="#oferta">Quero explorar o guia <ArrowUpRight size={18} /></a>
          <a className="text-link" href="#destinos"><PlayCircle size={18} /> Descobrir destinos</a>
        </div>
        <div className="hero-note"><span className="note-line" /> UM GUIA DIGITAL PARA VIAJAR MELHOR</div>
      </div>
      <div className="hero-stamp"><span>VIAJE</span><strong>+</strong><span>DESCUBRA</span><strong>+</strong><span>VIVA</span></div>
      <div className="hero-bottom"><span>BRASIL • 2026</span><span>01 / 04</span></div>
    </section>
  )
}