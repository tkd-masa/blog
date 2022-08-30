import parse, { Element } from 'html-react-parser'
import Image from 'next/image'

type Props = {
  contentHTML: string
}

const ConvertBody = ({ contentHTML }: Props) => {
  const contentReact = parse(contentHTML, {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === 'img') {
        const { src, alt, width, height } = domNode.attribs
        return (
          <Image
            layout="responsive"
            src={src}
            width={width}
            height={height}
            alt={alt}
            sizes="(min-width: 842px) 842px 100vw"
          />
        )
      }
    },
  })
  return <>{contentReact}</>
}

export default ConvertBody
