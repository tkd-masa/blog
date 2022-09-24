import styles from 'styles/container.module.css'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  large?: boolean
}

const Container = ({ children, large }: Props): JSX.Element => {
  return <div className={large !== undefined ? styles.large : styles.default}>{children}</div>
}

export default Container
