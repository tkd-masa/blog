import type { NextPage, GetStaticProps } from 'next'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import Posts from 'components/posts'
import { getAllPosts } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { PaginationBySlug as Pagination } from 'components/pagination'

type Props = {
  posts: {
    title: string
    slug: string
    eyecatch: { url: string; width: number; height: number; blurDataURL: string }
    categories: string[]
  }[]
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <Container>
      <Meta
        pageTitle="HOME"
        pageDesc="私が日々フロントエンドの技術について、勉強した際につまづいたポイントを記事にして共有するためのブログです。"
      />
      <Hero title="HOME" subtitle="ホーム" />
      <Posts posts={posts} />
      <Pagination nextUrl="/page/1" nextText="ブログの記事一覧" />
    </Container>
  )
}

export default Home

export const getStaticProps = async () => {
  const posts = await getAllPosts(6)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}
