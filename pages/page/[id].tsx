import Container from 'components/container'
import Meta from 'components/meta'
import Hero from 'components/hero'
import Posts from 'components/posts'
import { eyecatchLocal, perPage } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { getAllPosts, getAllPostsById } from 'lib/api'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { PaginationById as Pagination } from 'components/pagination'
import { range } from 'lib/range'

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

const pageId = ({ posts, totalCount, id }: Props): JSX.Element => {
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

export default pageId

export const getStaticPaths: GetStaticPaths = async () => {
  const repos = await getAllPosts()

  const paths = range(1, Math.ceil(repos.length / perPage)).map((repo) => `/page/${repo}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = Number(context.params?.id)
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
