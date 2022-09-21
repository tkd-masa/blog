import { getAllCategories, getAllPostsByCategory, getAllPostsByCategoryAndId } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import type { GetStaticProps } from 'next'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { range } from 'lib/range'
import { perPage } from 'lib/constants'
import { PaginationById as Pagination } from 'components/pagination'

type Props = {
  id: number
  cat: string
  totalCount: number
  posts: {
    title: string
    slug: string
    eyecatch: { url: string; width: number; height: number; blurDataURL: string }
    categories: string[]
  }[]
}

const Category = ({ posts, id, cat, totalCount }: Props) => {
  return (
    <Container>
      <Meta pageTitle={cat} pageDesc={`${cat}に関する記事`} />
      <Hero title={cat} subtitle={`${cat}に関する記事`} category />
      <Posts posts={posts} />
      <Pagination totalCount={totalCount} perPage={perPage} currentPage={id} cat={cat} />
    </Container>
  )
}

export default Category

export const getStaticPaths = async () => {
  const allCats = await getAllCategories()
  let paths: string[] = new Array()
  for (const cat of allCats) {
    const repos = await getAllPostsByCategory(cat.name)
    paths = paths.concat(
      range(1, Math.ceil(repos.length / perPage)).map((repo) => `/category/${cat.name}/page/${repo}`)
    )
  }

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = Number(context.params?.id)
  const cat = context.params?.slug
  const posts = await getAllPostsByCategoryAndId(cat, id)
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
      cat: cat,
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
  }
}
