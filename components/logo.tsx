import Link from 'next/link'
import styles from 'styles/logo.module.css'
import IconImage from 'images/logo.svg'

type Props = {
  height: number
}

const Logo = ({height}: Props) => {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <IconImage height={`${height}px`}/>
      </a>
    </Link>
  )
}

export default Logo
