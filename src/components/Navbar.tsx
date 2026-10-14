import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setMenuOpen(false)
  const handleNavigationKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu()
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={handleNavigationKeyDown}>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Gireesh S Bhajantri, home">GSB<span>.</span></a>
        <div className={`nav-links${menuOpen ? ' nav-links-open' : ''}`} id="primary-navigation">
          {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
        </div>
        <div className="nav-actions">
          <button className="icon-button theme-button" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={onToggleTheme}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
          <button ref={menuButtonRef} className="icon-button menu-button" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-controls="primary-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
