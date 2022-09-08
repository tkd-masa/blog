import styles from 'styles/tableOfContents.module.css'
import { Link as Scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

type Props = {
  toc: {
    text: string | undefined
    id: string
    name?: string
  }[]
}

const tableOfContents = ({ toc }: Props) => {
  return (
    <div className={styles.toc}>
      <p className={styles.tocHead}>
        <FontAwesomeIcon icon={faBookOpen} />
        目次
      </p>
      <ul>
        {toc.map((data) => (
          <li key={data.id} className={data.name === 'h3' ? `${styles.list} ${styles[data.name]}` : styles.list}>
            <Scroll to={`${data.id}`} smooth={true} duration={700} offset={-120}>
              {data.text}
            </Scroll>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default tableOfContents
