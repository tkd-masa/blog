import Link from 'next/link'
import styles from 'styles/nav.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
        <li>
          <Link href="HTML_CSS">
            <a>HTML/CSS</a>
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
