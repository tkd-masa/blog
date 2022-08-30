import type { GetStaticProps } from 'next'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import { getPostBySlug } from 'lib/api'
import Image from 'next/image'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Profile from 'components/profile'
import PostBody from 'components/post-body'
import ConvertBody from 'components/convert-body'
import Meta from 'components/meta'
import { extractText } from 'lib/extract-text'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替キャッチ画像
import { eyecatchLocal } from 'lib/constants'

type Props = {
  title: string
  publish: string
  eyecatch: {
    url: string
    width: number
    height: number
    blurDataURL: string
  }
  content: string,
  description: string
}

const Post = (props: Props) => {
  return (
    <Container large>
      <Meta 
        pageTitle={props.title}
        pageDesc={props.description}
        pageImg={props.eyecatch.url}
        pageImgW={props.eyecatch.width}
        pageImgH={props.eyecatch.height}
      />
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
            placeholder='blur'
            blurDataURL={props.eyecatch.blurDataURL}
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <Container>
            <PostBody>
              <ConvertBody contentHTML={props.content} />
            </PostBody>
            </Container>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Profile />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

export default Post

export const getStaticPaths = async () => {
  return {
    paths: ['/react', '/vue', '/HTML_CSS'],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug

  const post = await getPostBySlug(slug);

  const description = extractText(post.content)

  const eyecatch = post.eyecatch ?? eyecatchLocal

  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      eyecatch: eyecatch,
      content: post.content,
      description: description
    },
  }
}
