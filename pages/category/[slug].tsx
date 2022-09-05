import { getAllCategories, getAllPostsByCategory } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import type { GetStaticProps } from 'next'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

type Props = {
  name: string
  posts: {
    title: string
    slug: string
    eyecatch: { url: string; width: number; height: number; blurDataURL: string }
    categories: string[]
  }[]
}

const Category = ({ posts, name }: Props) => {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <Hero title={name} subtitle={`${name}に関する記事`} />
      <Posts posts={posts} />
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
  const catSlug = context.params?.slug

  const posts = await getAllPostsByCategory(catSlug)

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
      name: catSlug,
    },
  }
}
