import Avatar from './profile-avatar'
import Date from '../blog/date'
import CoverImage from '../blog/cover-image'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '../../lib/sanity'

export default function CardAvatar({ name, picture, position, details }) {
  return (
    <div style={{}} className="bg-[#F6F6F8] rounded-md">
      <div className="w-full flex flex-col md:flex-row ">
        <div className="px-5">
          <Image
            src={
              picture?.asset?._ref
                ? urlForImage(picture).height(150).width(150).fit('crop').url()
                : picture || 'https://source.unsplash.com/96x96/?face'
            }
            className="rounded-md"
            style={{
              clipPath:
                'polygon(80% 0px, calc(100% - 0px) 20%, calc(100% - 0px) calc(100% - 5px), 0px calc(100% - 5px), 0px 0px)',
            }}
            height={150}
            width={150}
          />
        </div>
        <div className="px-5 py-6">
          <div className="flex flex-col justify-center item-center">
            <div className="text-[#404266] font-manrope text-xl font-semibold">
              {name}
            </div>
            <div className="text-[#404266] font-manrope  font-medium">
              {position}
            </div>
            <div className="text-[#7A7B94] font-manrope  font-medium mt-2">
              {details}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
