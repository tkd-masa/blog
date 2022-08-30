import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'

const Social = ({ iconSize = 'initial' }) => {
  return (
    <ul className={styles.list} style={{ ['--icon-size' as any]: iconSize }}>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
    </ul>
  )
}

export default Social
