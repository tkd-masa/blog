import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ConvertDate from 'components/convert-date'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  posts: {
    title: string
    slug: string
    eyecatch: { url: string; width: number; height: number; blurDataURL: string }
    publishDate?: string
    categories: string[]
  }[]
}

const Posts = ({ posts }: Props) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(
        ({
          title,
          slug,
          eyecatch,
          publishDate,
          categories,
        }: {
          title: string
          slug: string
          eyecatch: { url: string; width: number; height: number; blurDataURL: string }
          publishDate?: string
          categories: string[]
        }) => (
          <article className={styles.post} key={slug}>
            <Link href={`/${slug}`}>
              <a>
                <figure>
                  <Image
                    src={eyecatch.url}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    width={eyecatch.width}
                    height={eyecatch.height}
                    sizes="(min-width: 1152px) 576px, 50vw"
                    placeholder="blur"
                    blurDataURL={eyecatch.blurDataURL}
                  />
                </figure>
                <span className={styles.tag}>{categories}</span>
                <h2>{title}</h2>
                {publishDate && (
                  <div className={styles.publish}>
                    <FontAwesomeIcon icon={faClock} size="lg" color="var(--black)" />
                    <ConvertDate dateISO={publishDate} />
                  </div>
                )}
              </a>
            </Link>
          </article>
        )
      )}
    </div>
  )
}

export default Posts
