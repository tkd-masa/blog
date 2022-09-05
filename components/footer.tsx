import Logo from 'components/logo'
import Container from 'components/container'
import Social from 'components/social'
import styles from 'styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo height={40} />
          <Social iconSize="30px" />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
