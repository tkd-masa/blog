import Link from 'next/link'
import styles from 'styles/logo.module.css'

const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>
        TakeLog<span className={styles.logoSubtitle}>Engineering Blog</span>
      </a>
    </Link>
  )
}

export default Logo
