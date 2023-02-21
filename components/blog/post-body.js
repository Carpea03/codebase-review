import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlForImage } from '../../lib/sanity'
import Image from 'next/image'

const SanityImage = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value)
  return (
    <>
      <figure>
        <Image
          src={urlForImage(value)
            .width(isInline ? 100 : 800)
            .fit('max')
            .auto('format')
            .url()}
          height={height}
          width={width}
          alt={value.caption || ''}
          loading="lazy"
          style={{
            display: isInline ? 'inline-block' : 'block',
            aspectRatio: width / height,
          }}
        />
        <div className="pt-1 text-right text-xs italic">
          {value.attribution && 'Source: ' + value.attribution}
        </div>
        <figcaption>{value.caption} ⤴</figcaption>
      </figure>
    </>
  )
}

export default function PostBody({ content }) {
  return (
    <div className={`mx-auto max-w-2xl ${markdownStyles.markdown}`}>
      <PortableText
        value={content}
        components={{
          types: {
            image: SanityImage,
          },
        }}
      />
    </div>
  )
}
