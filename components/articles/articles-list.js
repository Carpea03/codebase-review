import Avatar from './profile-avatar'
import Date from '../blog/date'
import CoverImage from '../blog/cover-image'
import Link from 'next/link'

export default function ArticlesList({
  title,
  index,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="p-2 border-b-2 flex flex-row">
        <div className="text-[#ADAEBD] font-manrope text-2xl font-extrabold pt-8">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="px-5 pb-2">
          <div>
            {author && (
              <Avatar
                name={author.name}
                role={author.role}
                bio={author.bio}
                picture={author.picture}
              />
            )}
            <h3 className="mb-3 text-xl font-manrope font-medium">
              <Link href={`/ip-news/${slug}`} className="no-underline">
                {title}
              </Link>
            </h3>
            <div className="mb-4 text-xl text-[#ADAEBD] font-manrope">
              <Date dateString={date} />
            </div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
