import styles from 'styles/hero.module.css'

type Props = {
  title: string
  subtitle: string
  imageOn?: boolean
}

const Hero = ({ title, subtitle, imageOn = false }: Props) => {
  return (
    <div>
      <div className={styles.text}>
        <h1>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {imageOn && <figure> [画像] </figure>}
      </div>
    </div>
  )
}

export default Hero
