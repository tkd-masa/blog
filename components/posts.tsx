import styles from 'styles/posts.module.css'
import Link from 'next/link'

type Props = {
    posts: { title: string; slug: string }[]
}

const Posts = ({ posts }: Props) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug }: {title: string, slug: string}) => (
        <article className={styles.post} key={slug}>
          <Link href={`/${slug}`}>
            <a>
              <h2>{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  )
}

export default Posts
