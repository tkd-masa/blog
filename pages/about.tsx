import Hero from 'components/hero'
import Profile from 'components/profile'
import Container from 'components/container'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import PostBody from 'components/post-body'
import TableOfContents from 'components/tableOfContents'
import Meta from 'components/meta'
import eyecatch from 'images/about.jpg'

const About = () => {
  // TableOfContentsのprops
  const toc = [
    {
      id: 'about_blog',
      text: 'このブログについて',
    },
    {
      id: 'reason',
      text: 'ブログを作成した理由',
    },
    {
      id: 'purpose',
      text: 'ブログの目的',
    },
  ]
  return (
    <Container large>
      <Meta
        pageTitle="ABOUT"
        pageDesc="TakeLogについての詳細ページ"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <TwoColumn>
        <TwoColumnMain>
          <Container>
            <Hero title="ABOUT" subtitle="このブログについて" />
            <PostBody>
              <TableOfContents toc={toc} />
              <h2 id="about_blog">このブログについて</h2>
              <p>
                初めまして、このブログを作成したTakeといいます。このブログは私が日々フロントエンドの技術について、勉強した際につまづいたポイントを記事にして共有するためのブログです。自分と同じ個所でつまづいた人たちにとって助けとなる記事をこれから少しずつ投稿していきます。
              </p>

              <h2 id="reason">このブログを作成した理由</h2>
              <p>このブログを作成した理由2つあります。</p>
              <p>
                1つ目はblogページを作成することreact/next.jsのアウトプットを図りたかったためです。現在フロントエンドエンジニアになるために勉強しながら就職活動中なのでこのブログを作成することで技術力のアピールができると考えました。
              </p>
              <p>
                2つ目は、自分が学んだことを、備忘録として残しておきたかったためです。せっかく学んだことでも時間がたつと忘れてしまうので、react/next.jsのアウトプットを機会にこのブログに、適宜記事を書いていこうと思います。
              </p>

              <h2 id="purpose">ブログの目的</h2>
              <p>このブログの目的は以下の3つです。</p>
              <ol>
                <li>フロントエンドの勉強で学んだことを発信する。</li>
                <li>学んだことをいつでも振り返るための備忘録。</li>
                <li>フロントエンドの就職に役立てる。</li>
              </ol>
              <p>
                フロントエンド技術の勉強で学んだことを発信することで、私と同じ個所でつまづいた人たちの役に立ちたいと思っています。
              </p>

              <p>
                実務や勉強で覚えたことは時間がたつと忘れていきます。忘れたときに、いつでも学んだことを振り返れるように備忘録を残しておくことで思い出すことができます。いちいち同じことをまたインターネットで調べるという手間を省くために学んだことを適宜ストックしていきます。
              </p>

              <p>
                現在、フロントエンドエンジニアになるために就職活動中なので、このブログを通して、自分の技術力をアピールできればと思います。
              </p>
            </PostBody>
          </Container>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Profile />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}

export default About
