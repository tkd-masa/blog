import styles from 'styles/contentsList.module.css'

type Props = {
  contentsLists: Array<string>
}

const contentsList = ({ contentsLists }: Props) => {
  return (
    <div className={styles.contentsList}>
      <h2>Contents</h2>
      <ol>
        {contentsLists.map((contentList, i) => (
          <li key={i}>{contentList}</li>
        ))}
      </ol>
    </div>
  )
}

export default contentsList
