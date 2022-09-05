import type { GetStaticProps } from 'next'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import { getPostBySlug, getAllSlugs } from 'lib/api'
import Image from 'next/image'
import PostBody from 'components/post-body'
import ConvertBody from 'components/convert-body'
import Meta from 'components/meta'
import { extractText } from 'lib/extract-text'
import { getPlaiceholder } from 'plaiceholder'
import { prevNextPost } from 'lib/prev-next-post'
import Pagination from 'components/pagination'
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/magula.css';

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
  content: string
  description: string
  prevPost: {
    title: string
    slug: string
  }
  nextPost: {
    title: string
    slug: string
  }
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
      <article
        style={{ backgroundColor: 'var(--white)', borderRadius: '20px', padding: 'var(--space-xs) 0 var(--space-l)' }}
      >
        <Container>
          <PostHeader title={props.title} subtitle="Blog Article" publish={props.publish} />
          <figure>
            <Image
              key={props.eyecatch.url}
              src={props.eyecatch.url}
              alt=""
              layout="responsive"
              width={props.eyecatch.width}
              height={props.eyecatch.height}
              sizes="(min-width: 1280px) 1280px, 100vw"
              priority
              placeholder="blur"
              blurDataURL={props.eyecatch.blurDataURL}
            />
          </figure>
          <PostBody>
            <ConvertBody contentHTML={props.content} />
          </PostBody>
          <Pagination
            prevText={props.prevPost.title}
            prevUrl={`/${props.prevPost.slug}`}
            nextText={props.nextPost.title}
            nextUrl={`/${props.nextPost.slug}`}
          />
        </Container>
      </article>
    </Container>
  )
}

export default Post

export const getStaticPaths = async () => {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }: { slug: string }) => `/${slug}`),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug

  const post = await getPostBySlug(slug)

// シンタックスハイライトを適用する処理
  const $ = cheerio.load(post.content)

  $('pre code').each((_, element) => {
    const result = hljs.highlightAuto($(element).text());
    $(element).html(result.value);
    $(element).addClass('hljs');
  });

  const description = extractText(post.content)

  const eyecatch = post.eyecatch ?? eyecatchLocal

  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64

  const allSlugs = await getAllSlugs()

  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      eyecatch: eyecatch,
      content: $('body').html() ?? post.content,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  }
}
