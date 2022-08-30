import type { NextPage, GetStaticProps } from 'next'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import { getPostBySlug } from 'lib/api'

type Props = {
  title: string
  publish: string
}

const Home: NextPage<Props> = (props) => {
  return (
    <Container>
      <Meta pageTitle="HOME" pageDesc="ブログの記事一覧" />
      <Hero title="HOME" subtitle="ホーム" />
      <h2>{props.title}</h2>
      <p>{props.publish}</p>
    </Container>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const slug = 'react'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
    },
  }
}
