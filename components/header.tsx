import { useRef ,useEffect, useState} from 'react'
import {useWindowSize} from 'react-use'
import Logo from 'components/logo'
import Nav from 'components/nav'
import Container from 'components/container'
import styles from 'styles/header.module.css'

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);

  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);

  const width = useWindowSize();
  useEffect(() => {
    setHeaderHeight(headerRef?.current?.offsetHeight)
  },[width])

  return (
    <header className={styles.header} ref={headerRef}>
      <style jsx global>{`
      body {
        margin-top: ${headerHeight}px;
      }
      `}</style>
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
