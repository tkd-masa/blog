import type { GetStaticProps } from 'next'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import { getPostBySlug } from 'lib/api'
import Image from 'next/image'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Profile from 'components/profile'
import PostBody from 'components/post-body'
import ConvertBody from 'components/convert-body'

type Props = {
  title: string
  publish: string
  eyecatch: {
    url: string
    width: string
    height: string
  }
  content: string
}

const React = (props: Props) => {
  return (
    <Container>
      <article>
        <PostHeader title={props.title} subtitle="Blog Article" publish={props.publish} />
        <figure>
          <Image
            src={props.eyecatch.url}
            alt=""
            layout="responsive"
            width={props.eyecatch.width}
            height={props.eyecatch.height}
            sizes="(min-width: 1280px) 1280px, 100vw"
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={props.content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Profile />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

export default React

export const getStaticProps: GetStaticProps<Props> = async () => {
  const slug = 'react'

  const post = await getPostBySlug(slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      eyecatch: post.eyecatch,
      content: post.content,
    },
  }
}
