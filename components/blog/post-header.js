import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="pb-4 lg:mb-6 not-format">
        <address className="pb-4 flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            {author && <Avatar picture={author.picture} />}
            <div>
              <a
                href="#"
                rel="author"
                className="text-xl font-bold text-gray-900 dark:text-white">
                {author.name}
              </a>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                {author.role || '*** Add staff role to schema ***'}
              </p>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                <Date dateString={date} />
              </p>
            </div>
          </div>
        </address>
        <CoverImage
          title={title}
          image={coverImage}
          priority
        />
      </div>
    </>
  )
}
