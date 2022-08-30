import { convert } from 'html-to-text'

type Props = {
    html: string,
    length: number,
    more: string
}

export const extractText = ({html, length = 80, more = '...'}: Props) => {
    const text = convert(html, {
        selectors: [
            {selector: 'img', format: 'skip'},
            {selector: 'a', options: {ignoreHref: true}}
        ],
    })

    return text.slice(0, length) + more
}