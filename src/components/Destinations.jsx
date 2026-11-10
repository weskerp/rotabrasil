import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { destinations } from '../data/content'

export default function Destinations() {
  return (
    <section className="destinations section-pad" id="destinos">
      <div className="destination-head">
        <SectionHeading eyebrow="UM PAÍS, MIL POSSIBILIDADES" title={<>Paisagens que dão vontade de <em>partir agora.</em></>} description="Uma prévia de destinos que podem inspirar a sua próxima aventura." />
        <span className="side-note">DESCUBRA O BRASIL<br/>NO SEU TEMPO ↘</span>
      </div>
      <div className="destination-grid">
        {destinations.map((item, i) => <article className={`destination-card destination-${i + 1}`} key={item.name}>
          <img src={item.image} alt={`Paisagem inspiradora para conhecer ${item.name}`} loading="lazy"/>
          <div className="destination-overlay"/>
          <span className="destination-index">{item.number} / DESTINO</span>
          <div className="destination-info"><span>{item.region}</span><h3>{item.name}</h3><p>{item.description}</p></div>
          <span className="destination-arrow"><ArrowUpRight size={20}/></span>
        </article>)}
      </div>
      <p className="image-disclaimer">Imagens ilustrativas. Os destinos são exemplos de inspiração para esta demonstração.</p>
    </section>
  )
}