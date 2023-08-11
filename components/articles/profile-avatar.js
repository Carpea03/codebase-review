import Image from 'next/image'
import { urlForImage } from '../../lib/sanity'
import Date from '../blog/date'

export default function Avatar({ name, picture, date, bio, size, body }) {
  return (
    <div className="flex flex-row items-center">
      <span className={`${body ? 'w-20' : 'w-10'}`}>
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture)
                  .height(size || 32)
                  .width(size || 32)
                  .fit('crop')
                  .url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={size || 32}
          width={size || 32}
          alt={name}
        />
      </span>
      <div className={`${body ? 'ml-1' : ''}`}>
        <div
          className={`text-xl font-manrope text-black font-semibold
          `}
        >
          {name}
        </div>
        {body && (
          <div>
            {body} <Date dateString={date} /> • 4 min read
          </div>
        )}
      </div>
    </div>
  )
}
