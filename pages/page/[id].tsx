import Container from 'components/container'
import Meta from 'components/meta'
import Hero from 'components/hero'
import Posts from 'components/posts'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { getAllPosts, getPostsById } from 'lib/api'
import type { GetStaticProps } from 'next'
import { PaginationById as Pagination } from 'components/pagination'
import { range } from 'lib/range'
import { perPage } from 'lib/constants'

type Props = {
  posts: {
    title: string
    slug: string
    eyecatch: { url: string; width: number; height: number; blurDataURL: string }
    categories: string[]
  }[]
  id: number
  totalCount: number
}

const pageId = ({ posts, totalCount, id }: Props) => {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="ブログの記事一覧" />
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} perPage={perPage} currentPage={id} />
    </Container>
  )
}

export default pageId

export const getStaticPaths = async () => {
  const repos = await getAllPosts()

  const paths = range(1, Math.ceil(repos.length / perPage)).map((repo) => `/page/${repo}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = Number(context.params?.id)
  const posts = await getPostsById(id, perPage)
  for (const post of posts.contents) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      id: id,
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
  }
}
