import { InnerContainer } from '../../components/templates/InnerContainer'
import { IoArrowForwardOutline } from 'react-icons/io5'
import Link from 'next/link'

export default function ContactUsBanner({ title }) {
  return (
    <div
      className={`w-full flex bg-contact-banner
       z-0`}
    >
      {/* <div className={`bg-contact-linear`} /> */}
      <InnerContainer>
        <div className="flex flex-col justify-center items-center text-center mt-40 px-10 gap-10">
          <div className="text-white font-lora text-2xl md:text-5xl">
            Your patent and trademark attorneys for infinite innovation &
            bussiness growth
          </div>
          <Link href="/contact-us">
            <div
              className="w-52 h-11 sm:w-[434px] sm:h-24 md:w-80 md:h-[88px] bg-[#816BD9] rounded-md flex flex-row justify-center items-center gap-6 sm:gap-x-14 md:gap-4 cursor-pointer hover:opacity-80"
              style={{
                boxShadow:
                  '0px 56px 114px rgba(150, 151, 169, 0.17), 0px 12.5083px 25.4634px rgba(150, 151, 169, 0.101338), 0px 3.72406px 7.58112px rgba(150, 151, 169, 0.0686618), 0px 1.54966px 3.15467px rgba(0, 0, 0, 0.0477948)',
              }}
            >
              <span className=" font-manrope font-semibold text-[10px] sm:text-xl text-white">
                {'Contact Us'}
              </span>
              <div className="rounded-full w-6 h-6 sm:w-10 sm:h-10 bg-white flex justify-center items-center">
                <IoArrowForwardOutline
                  className="w-3 h-3 sm:w-5 sm:h-5 md:w-4 md:h-4"
                  size={16}
                />
              </div>
            </div>
          </Link>
        </div>
      </InnerContainer>
    </div>
  )
}
