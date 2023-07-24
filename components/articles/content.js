import Link from 'next/link'
import Image from 'next/image'
import CoverImage from '../blog/cover-image'
import Avatar from '../blog/avatar'
export default function Content({ posts }) {
  return (
    <div className="px-40">
      <div className="py-10">
        <span className="text-4xl text-black font-medium font-lora">
          {'Fresh content'}
        </span>
      </div>
      <div className="flex flex-col">
        <div>
          {posts.slice(0, 50).map((post) => (
            // key={post.slug}
            // title={post.title}
            // coverImage={post.coverImage}
            // date={post.date}
            // author={post.author}
            // slug={post.slug}
            // excerpt={post.excerpt}
            // <div
            // className=""
            //   style={{
            //     width: 650,
            //     clipPath:
            //       'polygon(90% 5px, calc(100% - 5px) 10%, calc(100% - 5px) calc(100% - 5px), 5px calc(100% - 5px), 5px 5px)',
            //   }}
            // >

            <div
              className="bg-white rounded-sm cursor-pointer"
              style={{
                width: 636,
                boxShadow: '0px 5px 17px 0px rgba(64, 76, 89, 0.06)',
              }}
            >
              <Link href={`/ip-news/${post.slug}`} className="no-underline">
                <div>
                  <div
                    className="cover-bg"
                    style={{ width: 636, height: 320 }}
                  />
                  <CoverImage
                    slug={post.slug}
                    title={post.title}
                    image={post.coverImage}
                  />
                </div>
                <div className="px-5 pb-10">
                  <Avatar
                    name={post.author.name}
                    picture={post.author.picture}
                  />
                  <div className="text-[#404266] text-3xl text-black font-medium font-manrope">
                    {post.title}
                  </div>
                  <Date dateString={post.date} />
                </div>
              </Link>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  )
}
