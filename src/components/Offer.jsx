import { useState } from 'react'
import { ArrowUpRight, ShieldCheck, Smartphone, Download } from 'lucide-react'

export default function Offer() {
  const [showDemo, setShowDemo] = useState(false)
  return (
    <section className="offer section-pad" id="oferta">
      <div className="offer-card">
        <div className="offer-copy">
          <span className="eyebrow">SEU PRÓXIMO CAPÍTULO COMEÇA AQUI</span>
          <h2>Descubra o Brasil.<br/><em>Viva a sua rota.</em></h2>
          <p>Tenha inspiração e informação para começar a planejar experiências que combinam com você.</p>
          <div className="price-line"><span>Oferta especial</span><div><small>R$</small> 29<sup>,90</sup></div></div>
          <button className="button button-lime offer-button" onClick={() => setShowDemo(true)}>Quero meu e-book <ArrowUpRight size={18}/></button>
          <div className="offer-assurances"><span><ShieldCheck size={15}/> Compra digital</span><span><Download size={15}/> Acesso em PDF</span><span><Smartphone size={15}/> Leia onde quiser</span></div>
        </div>
        <div className="offer-art"><div className="offer-orbit orbit-one"/><div className="offer-orbit orbit-two"/><div className="mini-book"><span>ROTA</span><b>BRASIL</b><i>GUIA DE VIAGEM</i><div/></div><span className="art-note">EXPLORE SEM PRESSA.</span></div>
      </div>
      {showDemo && <div className="modal-backdrop" role="presentation" onClick={() => setShowDemo(false)}><div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-title" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setShowDemo(false)} aria-label="Fechar">×</button><span className="eyebrow">MODO DEMONSTRAÇÃO</span><h3 id="demo-title">Checkout ainda não conectado</h3><p>Esta é uma demonstração de portfólio. Em um projeto real, este botão será configurado com o link de checkout fornecido pelo cliente na Hotmart.</p><button className="button button-dark" onClick={() => setShowDemo(false)}>Entendi</button></div></div>}
    </section>
  )
}