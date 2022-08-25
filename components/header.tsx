import Logo from 'components/logo'
import Nav from 'components/nav'
import Container from 'components/container'
import styles from 'styles/header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header
