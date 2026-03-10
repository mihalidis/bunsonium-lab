'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './AppNav.module.css'

export default function AppNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <span className={styles.bracket}>[</span>
        bunsonium
        <span className={styles.accent}>lab</span>
        <span className={styles.bracket}>]</span>
      </Link>

      <div className={styles.right}>
        <Link href="/#projeler" className={styles.link}>Projects</Link>
        <Link href="/about" className={styles.link}>Who am I?</Link>
        <a
          href="https://github.com/mihalidis"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}
