import Avatar from './profile-avatar'
import Date from '../blog/date'
import CoverImage from '../blog/cover-image'
import Link from 'next/link'

export default function CategoryList({ title, total }) {
  return (
    <div>
      <div className="pt-2 pb-8 border-t-2 gap-10 flex flex-row justify-between ">
        <span className="flex items-center">{title}</span>
        <span
          style={{ width: 50, height: 50 }}
          className="rounded-full bg-[#ADAEBD] text-white flex items-center justify-center"
        >
          {total}
        </span>
      </div>
    </div>
  )
}
