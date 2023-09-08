import Card from './card'
import ArticlesList from './articles-list'
import { Search } from 'react-feather'
import CategoryList from './category-list'
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  filterHelper,
  generalTags,
  industryTags,
} from '../../utils/utility.helper'
import { general, patents, tradeMarks } from '../../utils/const/ids'

export default function Content({ posts }) {
  const [filteredData, setFilteredData] = useState()
  const [initialPage, setInitialPage] = useState()
  const itemsPerPage = 6
  const [itemOffset, setItemOffset] = useState(0)
  const router = useRouter()

  const generalTotal = posts
    .map((item) => item.category)
    .filter((val) => val[0]._ref === general).length

  const patentsTotal = posts
    .map((item) => item.category)
    .filter((val) => val[0]._ref === patents).length

  const trademarksTotal = posts
    .map((item) => item.category)
    .filter((val) => val[0]._ref === tradeMarks).length

  const category = [
    { title: 'General ', total: generalTotal },
    { title: 'Patents', total: patentsTotal },
    { title: 'Trade marks', total: trademarksTotal },
  ]

  useEffect(() => {
    init()
  }, [posts])

  const init = async () => {
    const url = window.location
    const newPage = url.toString().substring().split('/')
    switch (newPage[4]) {
      case 'general':
        generalData()
        break
      case 'patents':
        patentsData()
        break
      case 'trade-marks':
        tradeMarksData()
        break
      case 'for-you':
        forYouData()
        break
      default:
        allData()
        break
    }
  }

  const generalData = async () => {
    const generalPost = filterHelper(posts, false, general)
    setFilteredData(generalPost)
    checkPages(generalPost)
  }

  const patentsData = async () => {
    const patentsPost = filterHelper(posts, false, patents)
    setFilteredData(patentsPost)
    checkPages(patentsPost)
  }

  const tradeMarksData = async () => {
    const tradeMarksPost = filterHelper(posts, false, tradeMarks)
    setFilteredData(tradeMarksPost)
    checkPages(tradeMarksPost)
  }

  const forYouData = async () => {
    const generalSelected = await localStorage.getItem('selected-id')
    const industrySelected = await localStorage.getItem('selected-id-2')
    await combineData(generalSelected, industrySelected)
  }

  const allData = async () => {
    setFilteredData(posts)
    checkPages(posts)
  }

  const isNumber = (value) => {
    if (typeof value === 'string') {
      return !isNaN(value)
    }
  }

  const combineData = (generalSelected, industrySelected) => {
    const newData = generalTags(generalSelected, posts).concat(
      industryTags(industrySelected, posts)
    )
    setFilteredData(newData)
    checkPages(newData)
  }

  const checkPages = (data) => {
    const url = window.location
    const pages = url
      .toString()
      .substring(url.toString().lastIndexOf('/') + 1)
      .toLowerCase()

    if (isNumber(pages)) {
      const newValue = parseInt(pages) - 1
      setInitialPage(newValue)
      const newOffset = (newValue * itemsPerPage) % data?.length
      setItemOffset(newOffset)
      return
    }
  }
  const endOffset = itemOffset + itemsPerPage
  const currentItems = filteredData?.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(filteredData?.length / itemsPerPage)

  const handlePageClick = (event) => {
    console.log("filteredData",filteredData)
    const url = window.location
    const pages = url
      .toString()
      .substring(url.toString().lastIndexOf('/') + 1)
      .toLowerCase()

    if (parseInt(pages) === event.selected + 1) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      return
    }

    const newPage = url.toString().substring().split('/')
    router.push({
      pathname: `/ip-news/${newPage[4]}/[pid]`,
      query: { pid: event.selected + 1 },
    })

    const newOffset =
      (parseInt(pages) - 1 * itemsPerPage) % filteredData?.length
    setItemOffset(newOffset)
  }

  return (
    <section>
      <div className="px-5 sm:px-5 md:px-40 flex flex-col sm:flex-col md:flex-row xl:flex-row">
        <div className="">
          <div className="mt-10">
            <span className="text-4xl text-black font-medium font-lora">
              {filteredData && 'Fresh content'}
            </span>
          </div>
          <div style={{ width: 636 }} className="flow-col">
            {currentItems?.map((post) => (
              <Card
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                metaDescription={post.metaDescription}
                excerpt={post.excerpt}
                type={
                  post.category[0]._ref === patents
                    ? 'Patents'
                    : post.category[0]._ref === tradeMarks
                    ? 'Trade Marks'
                    : 'General'
                }
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
            {filteredData
              ?.sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((post, index) => (
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
          {category.map((item, index) => (
            <CategoryList
              key={`${item.title}-${index}`}
              title={item.title}
              total={item.total}
            />
          ))}
        </div>
      </div>
      <div className="hidden xl:flex mt-10 md:px-45">
        <ReactPaginate
          breakLabel="..."
          forcePage={initialPage}
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
      <div className=" xl:hidden mt-10 md:px-45">
        <ReactPaginate
          breakLabel="..."
          forcePage={initialPage}
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          marginPagesDisplayed={3}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
          breakLinkClassName="break-dot"
          previousClassName="previous1"
          nextClassName="next1"
        />
      </div>
    </section>
  )
}
