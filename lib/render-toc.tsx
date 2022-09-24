import * as cheerio from 'cheerio'

type Toc = Array<{
  text: string | undefined
  id: string
  name: string
}>

export const renderToc = (body: string | Buffer): Toc => {
  const $ = cheerio.load(body)
  const headings = $('h1, h2, h3').toArray()
  const toc = headings.map((data) => ({
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name,
  }))

  return toc
}
