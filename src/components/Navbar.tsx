import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  function toggleMenu() {
    setMenuOpen(prev => !prev)
  }

  const navClass = scrolled ? 'navbar navbar--scrolled' : 'navbar'
  const linksClass = menuOpen ? 'navbar__links navbar__links--open' : 'navbar__links'
  const burgerClass = menuOpen ? 'navbar__burger navbar__burger--open' : 'navbar__burger'

  return (
    <nav className={navClass}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          ds.
        </a>

        <ul className={linksClass}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className={burgerClass} onClick={toggleMenu} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
