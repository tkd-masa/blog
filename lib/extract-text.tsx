import { convert } from 'html-to-text'

export const extractText = (html: string): string => {
  const length: number = 80
  const more: string = '...'
  const text: string = convert(html, {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } },
    ],
  })

  return text.slice(0, length) + more
}
