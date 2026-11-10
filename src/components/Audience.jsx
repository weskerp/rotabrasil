import SectionHeading from './SectionHeading'

export default function Audience() {
  return (
    <section className="audience section-pad">
      <div className="audience-photo"><img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85" alt="Viajantes contemplando uma paisagem de montanhas" loading="lazy"/><span className="photo-label">O MUNDO ESPERA POR VOCÊ</span></div>
      <div className="audience-copy">
        <SectionHeading eyebrow="FEITO PARA QUEM AMA DESCOBRIR" title={<>Sua próxima viagem merece um bom <em>começo.</em></>} description="Este guia é para quem gosta de conhecer lugares novos, mas prefere viajar com informação e planejamento."/>
        <div className="audience-points"><div><b>01</b><span>Para quem está escolhendo o próximo destino.</span></div><div><b>02</b><span>Para quem quer organizar melhor o roteiro.</span></div><div><b>03</b><span>Para quem busca novas ideias para viajar pelo Brasil.</span></div></div>
        <a className="button button-dark" href="#oferta">Quero começar a planejar <span>↗</span></a>
      </div>
    </section>
  )
}