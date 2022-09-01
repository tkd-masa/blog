import type { NextPage, GetStaticProps } from 'next'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import Posts from 'components/posts'
import { getAllPosts } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

type Props = {
  posts: { title: string; slug: string, eyecatch:{ url: string, width: number, height: number, blurDataURL: string} }[]
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <Container>
      <Meta pageTitle="HOME" pageDesc="ブログの記事一覧" />
      <Hero title="HOME" subtitle="ホーム" />
      <Posts posts={posts} />
    </Container>
  )
}

export default Home

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts
    }
  }
}
