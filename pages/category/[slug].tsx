import { getAllCategories, getAllPostsByCategoryAndId } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import type { GetStaticProps } from 'next'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { PaginationById as Pagination } from 'components/pagination'
import { perPage } from 'lib/constants'

type Props = {
  id: number
  name: string
  totalCount: number
  posts: {
    title: string
    slug: string
    eyecatch: { url: string; width: number; height: number; blurDataURL: string }
    categories: string[]
  }[]
}

const Category = ({ posts, id, name, totalCount }: Props) => {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <Hero title={name} subtitle={`${name}に関する記事`} category />
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} perPage={perPage} currentPage={id} cat={name} />
    </Container>
  )
}

export default Category

export const getStaticPaths = async () => {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }: { slug: string }) => `/category/${slug}`),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = 1
  const catSlug = context.params?.slug
  const posts = await getAllPostsByCategoryAndId(catSlug, id)

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
      name: catSlug,
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
  }
}
