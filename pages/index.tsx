import type { NextPage, GetStaticProps } from 'next'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import Posts from 'components/posts'
import { getAllPosts } from 'lib/api'

type Props = {
  posts: { title: string; slug: string }[]
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

  return {
    props: {
      posts: posts
    }
  }
}
