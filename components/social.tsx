import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Social = ({ iconSize = 'initial' }): JSX.Element => {
  return (
    <ul className={styles.list} style={{ ['--icon-size' as any]: iconSize }}>
      <li>
        <a href="https://twitter.com/takelog_tech" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/tkd-masa/blog" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  )
}

export default Social
