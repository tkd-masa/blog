import * as cheerio from 'cheerio'

export const renderToc = (body: string | Buffer) => {
  const $ = cheerio.load(body)
  const headings = $('h1, h2, h3').toArray()
  const toc = headings.map((data) => ({
    //@ts-ignore
    text: data.children[0].data,
    //@ts-ignore
    id: data.attribs.id,
  }))

  return toc
}
