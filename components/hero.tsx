import styles from 'styles/hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faVuejs, faHtml5 } from '@fortawesome/free-brands-svg-icons'

type Props = {
  title: string
  subtitle?: string
  category?: boolean
}

const Hero = ({ title, subtitle, category = false }: Props): JSX.Element => {
  return (
    <div>
      <div className={styles.text}>
        <h1>
          {category && (
            <FontAwesomeIcon icon={title === 'Vue' ? faVuejs : title === 'React' ? faReact : faHtml5} size="lg" />
          )}
          {title}
        </h1>
        {subtitle !== undefined && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  )
}

export default Hero
