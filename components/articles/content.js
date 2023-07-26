import Card from './card'
import ArticlesList from './articles-list'
import { Search } from 'react-feather'
import CategoryList from './category-list'
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'

export default function Content({ posts }) {
  const category = [
    { title: 'Case studies', total: 20 },
    { title: 'Chemical, Biotech, Pharmaceutical Patents', total: 20 },
    { title: 'Designs', total: 20 },
    { title: 'Case studies', total: 20 },
    { title: 'Chemical, Biotech, Pharmaceutical Patents', total: 20 },
    { title: 'Designs', total: 20 },
    { title: 'Case studies', total: 20 },
    { title: 'Chemical, Biotech, Pharmaceutical Patents', total: 20 },
    { title: 'Designs', total: 20 },
  ]
  const itemsPerPage = 6
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage

  const currentItems = posts.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(posts.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length
    setItemOffset(newOffset)
  }

  return (
    <section>
      <div className="px-5 sm:px-5 md:px-40 flex flex-col sm:flex-col md:flex-row xl:flex-row">
        <div className="">
          <div className="mt-10">
            <span className="text-4xl text-black font-medium font-lora">
              {'Fresh content'}
            </span>
          </div>
          <div style={{ width: 636 }} className="flow-col">
            {currentItems.map((post) => (
              <Card
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
        <div className="w-full mt-10 md:m-10">
          <div className="flex items-center w-full h-14 pl-6 rounded-sm border-solid border-[1px] border-[#F1F2F8] overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <Search color="#404266" size={24} />
            </div>
            <input
              className="h-full w-full outline-none text-sm text-[#7A7B94] pl-2 focus:outline-none border-none"
              type="text"
              id="search"
              placeholder="Search..."
            />
          </div>
          <div className="mt-10 mb-5">
            <span className="font-lora text-4xl text-black">
              Articles relevant to you
            </span>
            {posts.slice(0, 3).map((post, index) => (
              <ArticlesList
                key={post.slug}
                title={post.title}
                index={index}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
          <div className="mt-10 mb-5">
            <span className="font-lora text-4xl text-black">Categories</span>
          </div>
          {category.map((item) => (
            <CategoryList title={item.title} total={item.total} />
          ))}
        </div>
      </div>
      <div className="mt-10 md:px-45">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
          breakLinkClassName="break-dot"
          previousClassName="previous"
          nextClassName="next"
        />
      </div>
    </section>
  )
}
