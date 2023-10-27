import Image from 'next/image'
import { urlForImage } from '../../lib/sanity'
import Date from '../blog/date'

export default function Avatar({ name, picture, date, bio, size, body }) {
  const parse = require('html-react-parser');
  return (
    <div className="flex flex-row items-center">
      <span className={`${body ? 'w-20' : 'w-10'}`}>
       {name && <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture)
                  .height(size || 32)
                  .width(size || 32)
                  .fit('crop')
                  .url()
              : picture || `https://source.unsplash.com/96x96/?face-${name}`
          }
          className="rounded-full"
          height={size || 32}
          width={size || 32}
          alt={name}
        />}
      </span>
      <div className={`${body ? 'ml-1' : 'ml-2'}`}>
        <div
          className={`text-xl font-manrope text-black font-semibold
          `}
        >
          {name}
        </div>
        {body && (
          <div>
            {parse(body)} <Date dateString={date} />
          </div>
        )}
      </div>
    </div>
  )
}
