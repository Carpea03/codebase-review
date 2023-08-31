import Avatar from './profile-avatar'
import Date from '../blog/date'
import CoverImage from '../blog/cover-image'
import Link from 'next/link'

export default function Card({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  type,
}) {
  return (
    <div>
      <Link href={`/ip-news/${slug}`} className="no-underline">
        <div
          className=""
          style={{ boxShadow: '0px 5px 17px 0px rgba(64, 76, 89, 0.06)' }}
        >
          <div className="cover-bg" style={{ width: 636, height: 320 }} />
          <CoverImage slug={slug} title={title} image={coverImage} />
          <div className="px-5 pb-2">
            {author && (
              <Avatar
                name={author.name}
                role={author.role}
                bio={author.bio}
                picture={author.picture}
              />
            )}
            <h3 className="mb-3 text-3xl leading-snug">{title}</h3>
            <div className="text-xl mb-4 text-[#ADAEBD] font-manrope">
              {type} · <Date dateString={date} />
            </div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
