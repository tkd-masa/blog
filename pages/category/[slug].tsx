import { getAllCategories, getAllPostsByCategoryAndId, getCategoryName } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { eyecatchLocal, perPage } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { PaginationById as Pagination } from 'components/pagination'

type Props = {
  id: number
  catName: string
  catSlug: string
  totalCount: number
  posts: Array<{
    title: string
    slug: string
    eyecatch: { url: string; width: number; height: number; blurDataURL: string }
    categories: string[]
  }>
}

const Category = ({ posts, id, catName, catSlug, totalCount }: Props): JSX.Element => {
  return (
    <Container>
      <Meta pageTitle={catName} pageDesc={`${catName}に関する記事`} />
      <Hero title={catName} subtitle={`${catName}に関する記事`} category />
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} perPage={perPage} currentPage={id} catSlug={catSlug} />
    </Container>
  )
}

export default Category

export const getStaticPaths: GetStaticPaths = async () => {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }: { slug: string }) => `/category/${slug}`),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = 1
  const catSlug = context.params?.slug as string
  const catName = await getCategoryName(catSlug)
  const posts = await getAllPostsByCategoryAndId(catName, id)

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
      catSlug,
      catName,
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
  }
}
