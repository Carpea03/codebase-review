import { Search } from 'react-feather'
import { useState } from 'react'
import Date from '../blog/date'
import Link from 'next/link'

export default function SearchDropDown({ data }) {
  const [searchItem, setSearchItem] = useState()

  const onSearch = (event) => {
    const query = event.target.value
    if (!query) {
      setSearchItem([])
      return
    }
    const updatedList = data.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    setSearchItem(updatedList)
  }

  return (
    <div className="w-full">
      <div className="flex items-center w-full h-14 mt-5 pl-6 rounded-sm border-solid border-[1px] border-[#F1F2F8] overflow-hidden">
        <div className="w-full flex flex-row">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <Search color="#404266" size={24} />
          </div>

          <input
            className="h-full w-full outline-none text-sm text-[#7A7B94] pl-2 focus:outline-none border-none relative mt-1"
            type="text"
            id="search"
            placeholder="Search news"
            onChange={onSearch}
          />
        </div>
      </div>
      <div className="z-40 absolute flex flex-col w-[92%] lg:w-[405px] ">
        {searchItem?.slice(0, 20).map((item) => (
          <Link
            key={`searchTitle-${item.title}`}
            href={`/ip-news/${item.slug}`}
            className="no-underline"
          >
            <div className="p-5 bg-[#FFFEF8] border-[1px] border-[#F8D36F] cursor-pointer">
              <span className="text-[#000] font-manrope font-semibold">
                {item.title}
              </span>
              <p className="line-clamp-2 font-manrope text-base font-medium text-[#7A7B94]">
                {item.metaDescription}
              </p>
              <div className="text-[#ADAEBD] text-base font-manrope">
                <Date dateString={item.date} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
