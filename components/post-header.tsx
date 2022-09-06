import ConvertDate from 'components/convert-date'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'styles/post-header.module.css'

type Props = {
  title: string
  tag: string[]
  publish?: string
}

const PostHeader = ({ title, tag, publish = '' }: Props) => {
  return (
    <div className={styles.stack}>
      <p className={styles.tag}>{tag}</p>
      {publish && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-50)" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default PostHeader
