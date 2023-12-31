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
import Link from 'next/link'
import Button from '../../components/buttons/Button'
import { MdArrowForward } from 'react-icons/md'
import SearchDropDown from './search'

export default function Content({ posts, title, subTitle }) {
  const [filteredData, setFilteredData] = useState()
  const [articlesPost, setArticlesPost] = useState()
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
    { title: 'General ', total: generalTotal, link: '/ip-news/general' },
    { title: 'Patents', total: patentsTotal, link: '/ip-news/patents' },
    {
      title: 'Trade marks',
      total: trademarksTotal,
      link: '/ip-news/trade-marks',
    },
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
    setArticlesPost(await combineData())
    setFilteredData(generalPost)
    checkPages(generalPost)
  }

  const patentsData = async () => {
    const patentsPost = filterHelper(posts, false, patents)
    setArticlesPost(await combineData())
    setFilteredData(patentsPost)
    checkPages(patentsPost)
  }

  const tradeMarksData = async () => {
    const tradeMarksPost = filterHelper(posts, false, tradeMarks)
    setArticlesPost(await combineData())
    setFilteredData(tradeMarksPost)
    checkPages(tradeMarksPost)
  }

  const forYouData = async () => {
    setArticlesPost(posts)
    const newData = await combineData()
    setFilteredData(newData)
    checkPages(newData)
  }

  const allData = async () => {
    setArticlesPost(await combineData())
    setFilteredData(posts)
    checkPages(posts)
  }

  const isNumber = (value) => {
    if (typeof value === 'string') {
      return !isNaN(value)
    }
  }

  const combineData = async () => {
    const generalSelected = await localStorage.getItem('selected-id')
    const industrySelected = await localStorage.getItem('selected-id-2')
    const newData = generalTags(generalSelected, posts).concat(
      industryTags(industrySelected, posts)
    )
    return newData
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
  const pageCount = Math.ceil(filteredData?.length || 0 / itemsPerPage)

  const handlePageClick = (event) => {
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
    checkPages(filteredData)

    if (newPage[4]) {
      const newLink = `/ip-news/${newPage[4]}/${parseInt(event.selected) + 1}`
      router.push({
        pathname: newLink,
      })
    } else {
      const newLink = `/ip-news/page/${parseInt(event.selected) + 1}`
      router.push({
        pathname: newLink,
      })
    }
  }

  return (
    <>
      <div className="px-5 sm:px-5 xl:px-40 flex flex-col sm:flex-col md:flex-row xl:flex-row">
        <div className="bg-transparent">
          <div className="mt-10">
            <span className="text-4xl text-black font-medium font-lora">
              {filteredData && title}
            </span>
          </div>
          <div className="flex md:hidden">
            <SearchDropDown data={filteredData} />
          </div>
          <div className="flow-col w-full md:w-[636px] bg-transparent ">
            {currentItems?.map((post) => (
              <Card
                key={post?.slug}
                title={post?.title}
                coverImage={post?.coverImage}
                date={post?.date}
                author={post?.author}
                slug={post.slug}
                metaDescription={post?.metaDescription}
                excerpt={post?.excerpt}
                type={
                  post?.category[0]?._ref === patents
                    ? 'Patents'
                    : post?.category[0]?._ref === tradeMarks
                    ? 'Trade Marks'
                    : 'General'
                }
              />
            ))}
          </div>
        </div>
        <div className="block md:hidden ">
          <div className="hidden sm:flex mt-10 ">
            <ReactPaginate
              breakLabel="..."
              forcePage={initialPage}
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
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
          <div className="flex sm:hidden mt-10 ml-[-30px]">
            <ReactPaginate
              forcePage={initialPage}
              nextLabel=">"
              breakLabel={false}
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              previousLabel="<"
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
        </div>
        <div className="w-full mt-10 md:m-10">
          <div className="hidden md:flex ">
            <SearchDropDown data={filteredData} />
          </div>
          <div className="mt-10 mb-5">
            <span className="font-lora text-4xl text-black">
              {subTitle || 'Articles for you'}
            </span>
            {articlesPost?.slice(0, 5).map((post, index) => (
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
          <div>
            <Link href="/ip-news/page" className="no-underline">
              <div className="flex flex-col items-center px-2">
                <div
                  className="w-full h-[87px] sm:h-24  md:h-[88px] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
                  style={{
                    boxShadow:
                      '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
                  }}
                >
                  <span className="font-manrope font-semibold text-[14px] sm:text-xl text-white ">
                    {'More aticles for you'}
                  </span>
                  <div
                    className="flex flex-row items-center justify-center w-6 h-6 sm:w-14 sm:h-14 md:h-12 md:w-12 bg-white rounded-full"
                    style={{
                      boxShadow: '1px 7px 16px rgba(44, 44, 44, 0.15)',
                    }}
                  >
                    <MdArrowForward
                      className="w-[9px] h-[9px] sm:w-5 sm:h-5"
                      color="#404266"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-10 mb-5">
            <span className="font-lora text-4xl text-black">Categories</span>
          </div>
          {category.map((item, index) => (
            <Link
              className="no-underline"
              key={`Link-${item.title}-${index}`}
              href={item.link}
            >
              <CategoryList
                key={`${item.title}-${index}`}
                title={item.title}
                total={item.total}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:block ">
        <div className="hidden xl:flex mt-10 md:px-45">
          <ReactPaginate
            breakLabel="..."
            forcePage={initialPage}
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={4}
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
        <div className="xl:hidden mt-10">
          <ReactPaginate
            breakLabel="..."
            forcePage={initialPage}
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            marginPagesDisplayed={5}
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
      </div>
    </>
  )
}
