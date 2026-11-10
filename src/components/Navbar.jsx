import { useState } from 'react'
import { Menu, X, Compass } from 'lucide-react'

const links = [['O guia', '#guia'], ['Destinos', '#destinos'], ['Conteúdo', '#conteudo'], ['Dúvidas', '#faq']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <a className="brand" href="#inicio" aria-label="Rota Brasil, início">
        <span className="brand-icon"><Compass size={21} /></span>
        <span>rota<span className="brand-accent">brasil</span></span>
      </a>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#oferta" onClick={() => setOpen(false)}>Quero meu guia <span>↗</span></a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}