import { Container } from '../templates/Container'
import Image from 'next/image'
import { urlForImage } from '../../lib/sanity'

export default function Banner({ layout, coverImage }) {
 
  return (
    <div
      className={`w-full flex ${
        layout === 3
          ? ''
          : layout === 2
          ? 'bg-ipNewsLog-banner2'
          : 'bg-ipNews-banner'
      } z-0 mt-100 absolute`}
    >
      {layout === 3 && (
        <div className="flex justify-center item-center w-full ">
          
          <Image
            style={{ height: 553, width: '100%', objectFit:'cover' }}
            alt={`Cover Image for ${coverImage?.title}`}
            width={0}
            height={0}
            // prettier-ignore
            src={urlForImage(coverImage?.asset?._ref)
          .url()}
            sizes="100vw"
            priority={coverImage?.priority}
          /> 
        </div>
      )}
      <div
        className={`${
          layout === 3
            ? 'bg-ipNewsLog-linear'
            : layout === 2
            ? 'bg-ipNewsLog-linear2'
            : 'bg-ipNewsLog-linearPlane'
        } `}
      />
    </div>
  )
}
