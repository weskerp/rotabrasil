import { Map, Lightbulb, Camera, Compass } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { benefits } from '../data/content'

const icons = [Map, Lightbulb, Camera, Compass]

export default function Benefits() {
  return (
    <section className="benefits section-pad" id="conteudo">
      <SectionHeading eyebrow="PLANEJE COM MAIS LEVEZA" title={<>Tudo o que você precisa para começar a <em>explorar.</em></>} description="Informações organizadas para deixar o planejamento mais simples e abrir espaço para o que realmente importa: viver a viagem." />
      <div className="benefit-grid">
        {benefits.map(([title, desc], i) => {
          const Icon = icons[i]
          return <article className="benefit-card" key={title}><span className="benefit-icon"><Icon size={22}/></span><span className="benefit-number">0{i + 1}</span><h3>{title}</h3><p>{desc}</p></article>
        })}
      </div>
    </section>
  )
}