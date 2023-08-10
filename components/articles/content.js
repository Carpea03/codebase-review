import Card from './card'
import ArticlesList from './articles-list'
import { Search } from 'react-feather'
import CategoryList from './category-list'
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'

const general = '676965b3-8ec8-43b1-b1a9-1e88f11c65fc'
const patents = '07830fcf-e52a-449b-a873-771207400afb'
const tradeMarks = '350407f4-914c-4d6d-93b7-75c0e1cb0a1b'
//General Types
const corporateOrSME = '17c82d5a-0303-40e7-8897-31cb8fc998a2'
const scaleupOrInvestor = 'f3ae2cc0-56db-4049-a3aa-be654ddd41c4'
const startupOrEntrepreneur = '57580353-cb18-4618-8824-de3a99d441f2'
const foreignAssociates = 'fdbab480-08f8-418d-aa24-b930940e5c5e'
const generalUserType = 'e2641235-19ce-4406-8124-d3cec617da0c'
//Industry Types
const engineering = '4ed84108-ae9f-4d7c-8ee8-98ca9205cacd'
const highTech = '510d7804-bc26-4ff8-9f6e-a694ecf03373'
const healthtech = '63bf9a5a-b8ce-4197-98e8-c8ff280ee3cd'
const otherIndustries = 'b1a0ad48-81a5-45d0-84d9-605d0dc12b90'
const allIndustries = 'f9106bb6-b232-4f2c-8923-96a3414c58b0'

export default function Content({ posts }) {
  const [filteredData, setFilteredData] = useState()
  const [currentItems, setCurrentItems] = useState()
  const [pageCount, setPageCount] = useState()
  const itemsPerPage = 6
  const [itemOffset, setItemOffset] = useState(0)
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
    const generalSelected = await localStorage.getItem('selected-id')
    const industrySelected = await localStorage.getItem('selected-id-2')
    await combineData(generalSelected, industrySelected)
  }

  const combineData = (generalSelected, industrySelected) => {
    let generalTags
    let industryTags

    if (Number(generalSelected) === 0) {
      generalTags = filterHelper(posts, corporateOrSME)
    } else if (Number(generalSelected) === 1) {
      generalTags = filterHelper(posts, scaleupOrInvestor)
    } else if (Number(generalSelected) === 2) {
      generalTags = filterHelper(posts, startupOrEntrepreneur)
    } else if (Number(generalSelected) === 3) {
      generalTags = filterHelper(posts, foreignAssociates)
    } else {
      generalTags = filterHelper(posts, generalUserType)
    }

    if (Number(industrySelected) === 0) {
      industryTags = filterHelper(posts, engineering)
    } else if (Number(industrySelected) === 1) {
      industryTags = filterHelper(posts, highTech)
    } else if (Number(industrySelected) === 2) {
      industryTags = filterHelper(posts, healthtech)
    } else if (Number(industrySelected) === 3) {
      industryTags = filterHelper(posts, otherIndustries)
    } else {
      industryTags = filterHelper(posts, allIndustries)
    }

    const newData = generalTags.concat(industryTags)
    setFilteredData(newData)
    pagination(newData)
  }

  const pagination = (data) => {
    const endOffset = itemOffset + itemsPerPage
    const currentItems = data
      ?.sort(() => Math.random() - 0.5)
      ?.slice(itemOffset, endOffset)
    setCurrentItems(currentItems)
    const pageCount = Math.ceil(data?.length / itemsPerPage)
    setPageCount(pageCount)
  }

  const filterHelper = (morePosts, tags) => {
    const resultTags = morePosts.map((item) => {
      let exist = false
      item.tag.filter((val) => {
        if (val?._ref === tags) {
          exist = true
          return
        }
      })
      return { ...item, selected: exist }
    })

    return resultTags.filter((item) => item.selected === true)
  }

  const handlePageClick = (event) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    const newOffset = (event.selected * itemsPerPage) % filteredData?.length
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
            {currentItems?.map((post) => (
              <Card
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
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
