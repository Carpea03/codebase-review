import Image from 'next/image'
import { urlForImage } from '../../lib/sanity'

export default function Avatar({ name, picture, role, bio }) {
  return (
    <div className="flex flex-row items-center">
      <span className="w-10">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(32).width(32).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={32}
          width={32}
          alt={name}
        />
      </span>
      <div className="text-xl font-manrope text-black font-semibold">{name}</div>
    </div>
  )
}
