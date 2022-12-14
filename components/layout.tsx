import Header from 'components/header'
import Footer from 'components/footer'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
