import { useState } from 'react'
import { Plus } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { faqs } from '../data/content'

export default function FAQ() {
  const [active, setActive] = useState(0)
  return <section className="faq section-pad" id="faq">
    <div className="faq-intro"><SectionHeading eyebrow="AINDA TEM DÚVIDAS?" title={<>Antes de partir, vamos <em>esclarecer.</em></>} description="As respostas para algumas perguntas comuns sobre o guia digital."/></div>
    <div className="faq-list">{faqs.map(([q, a], i) => <article className={`faq-item ${active === i ? 'active' : ''}`} key={q}><button onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}><span>{q}</span><Plus size={19}/></button>{active === i && <p>{a}</p>}</article>)}</div>
  </section>
}