import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '../../lib/sanity'

export default function CoverImage({ title, slug, image: source, priority }) {
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    >
      <div className="cover-bg w-[636px] h-[300px] z-50" />
      <Image
        style={{ height: 300, width: '100%', objectFit: 'cover' }}
        width={0}
        height={0}
        alt={`Cover Image for ${title}`}
        // prettier-ignore
        src={urlForImage(source)
          .url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return <div className="sm:mx-0">{slug ? <div>{image}</div> : image}</div>
}
