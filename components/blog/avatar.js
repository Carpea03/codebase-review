import Image from 'next/image'
import { urlForImage } from '../../lib/sanity'

export default function Avatar({ name, picture, role, bio }) {
  return (
    <div className="flex items-center">
      <div className="relative w-16 h-16 mr-4">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture)
                  // prettier-ignore
                  .height(96)
                  .width(96)
                  .fit('crop')
                  .url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">
        <p>{name}</p>
        {/* <p>{role}</p>
        <p>{bio}</p> */}
      </div>
    </div>
  )
}