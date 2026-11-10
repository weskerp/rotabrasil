import { ArrowUpRight, Check } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function EbookShowcase() {
  return (
    <section className="showcase section-pad" id="guia">
      <div className="showcase-visual">
        <div className="sun-disc" />
        <div className="book">
          <div className="book-cover">
            <span className="cover-kicker">GUIA DE VIAGEM • EDIÇÃO DIGITAL</span>
            <div className="cover-title">ROTA<br/><i>BRASIL</i></div>
            <span className="cover-subtitle">Descubra lugares que ficam para sempre na memória.</span>
            <div className="cover-photo" />
            <span className="cover-bottom">EXPLORE • SINTA • DESCUBRA</span>
          </div>
          <div className="book-pages" />
        </div>
        <span className="visual-caption">SEU COMPANHEIRO DE VIAGEM</span>
      </div>
      <div className="showcase-copy">
        <SectionHeading eyebrow="MAIS QUE UM E-BOOK" title={<>Viajar começa muito antes de <em>fazer as malas.</em></>} description="Um guia pensado para ajudar você a sair da inspiração e chegar ao planejamento — com ideias, informações e caminhos para viver o melhor do Brasil." />
        <ul className="check-list">
          {['Inspiração para escolher seu próximo destino', 'Sugestões para montar um roteiro', 'Dicas práticas para se preparar', 'Conteúdo digital para consultar onde estiver'].map(x => <li key={x}><span><Check size={15}/></span>{x}</li>)}
        </ul>
        <a className="inline-link" href="#conteudo">Conheça o que você vai encontrar <ArrowUpRight size={17}/></a>
      </div>
    </section>
  )
}