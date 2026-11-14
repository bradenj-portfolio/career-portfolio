import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) {
      setTheme(stored)
      document.documentElement.setAttribute('data-theme', stored)
    }
    const onScroll = () => {
      const y = window.innerHeight + window.scrollY
      const get = (id: string) => document.getElementById(id)?.offsetTop ?? 0
      let next = '#hero'
      if (y >= get('contact') - 100) next = '#contact'
      else if (y >= get('education') - 100) next = '#education'
      else if (y >= get('skills') - 100) next = '#skills'
      else if (y >= get('experience') - 100) next = '#experience'
      else if (y >= get('about') - 100) next = '#about'
      if (next !== active) setActive(next)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
      }}
    >
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="nav-bar">
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="nav-logo" aria-label="Home">B.J.</a>
            <div className="nav-links">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`nav-link ${active === l.href ? 'nav-link-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.getElementById(l.href.slice(1))
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {l.label}
                </a>
              ))}
              <Button variant="ghost" size="sm" className="theme-btn" onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>
                {theme === 'light' ? '🌙' : '☀️'}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}
