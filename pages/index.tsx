import type { NextPage, GetStaticProps } from 'next'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import Posts from 'components/posts'
import { getAllPostsById } from 'lib/api'
import { eyecatchLocal, perPage } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { PaginationById as Pagination } from 'components/pagination'

type Props = {
  posts: Array<{
    title: string
    slug: string
    eyecatch: { url: string; width: number; height: number; blurDataURL: string }
    categories: string[]
  }>
  id: number
  totalCount: number
}

const Home: NextPage<Props> = ({ posts, totalCount, id }: Props) => {
  return (
    <Container>
      <Meta
        pageTitle="HOME"
        pageDesc="私が日々フロントエンドの技術について、勉強した際につまづいたポイントを記事にして共有するためのブログです。"
      />
      <Hero title="HOME" subtitle="ブログの記事一覧" />
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} perPage={perPage} currentPage={id} />
    </Container>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const id = 1
  const posts = await getAllPostsById(id, perPage)
  for (const post of posts.contents) {
    if (!Object.prototype.hasOwnProperty.call(post, 'eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      id,
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
  }
}
