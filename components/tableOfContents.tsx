import styles from 'styles/tableOfContents.module.css'
import { Link as Scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

type Props = {
  toc: {
    text: string | undefined
    id: string
  }[]
}

const tableOfContents = ({ toc }: Props) => {
  return (
    <div className={styles.toc}>
      <p className={styles.tocHead}>
        <FontAwesomeIcon icon={faBookOpen} />
        目次
      </p>
      <ol>
        {toc.map((data) => (
          <li key={data.id}>
            <Scroll to={`${data.id}`} smooth={true} duration={700} offset={-120}>
              {data.text}
            </Scroll>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default tableOfContents
