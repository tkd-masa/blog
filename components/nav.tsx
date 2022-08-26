import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.css'

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a onClick={closeNav}>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a onClick={closeNav}>ABOUT</a>
          </Link>
        </li>
        <li>
          <Link href="HTML_CSS">
            <a onClick={closeNav}>HTML/CSS</a>
          </Link>
        </li>
        <li>
          <Link href="/Vue">
            <a>Vue.js</a>
          </Link>
        </li>
        <li>
          <Link href="/React">
            <a>React</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
