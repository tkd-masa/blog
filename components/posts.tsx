import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    posts: { title: string; slug: string, eyecatch:{ url: string, width: number, height: number, blurDataURL: string} }[]
}

const Posts = ({ posts }: Props) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }: {title: string, slug: string, eyecatch:{ url: string, width: number, height: number, blurDataURL: string}}) => (
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
              <h2>{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  )
}

export default Posts
