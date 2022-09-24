import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.css'

const Nav = (): JSX.Element => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = (): void => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = (): void => {
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
          <Link href="/category/html_css/page/1">
            <a onClick={closeNav}>HTML_CSS</a>
          </Link>
        </li>
        <li>
          <Link href="/category/vue/page/1">
            <a onClick={closeNav}>Vue.js</a>
          </Link>
        </li>
        <li>
          <Link href="/category/react/page/1">
            <a onClick={closeNav}>React</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
