import React from 'react'

const Dropdown = ({ title, place, onChange, selectedPlace, selectedId }) => {
  const renderOptions = (id, item, key) => (
    <option
      key={`contact-${key}`}
      value={id}
      selected={id == selectedId ? 'selected' : ''}
      className="flex font-manrope font-semibold text-[#404266] sm:text-xl md:text-xl whitespace-nowrap"
    >
      {item}
    </option>
  )

  return (
    <>
      <div className="w-full flex flex-col items-center md:items-start px-4 sm:px-[76px] md:pl-40 py-28 md:py-48">
        <div className="w-full h-44 md:w-[558px] md:h-[185px] flex flex-col items-center gap-6 sm:gap-[60px] md:gap-6">
          <span className="font-lora font-medium text-3xl sm: md:text-[40px] md:leading-[51px] text-white text-center md:text-left">
            <h1>{title}</h1>
          </span>
          <div className="hidden sm:flex flex-row items-center justify-center md:justify-start h-14 sm:h-32 md:h-[59px] w-full">
            <select
              onChange={onChange}
              className="select-contact flex-row items-center px-5 py-4 sm:py-0 sm:px-5 md:px-6 md:py-4 gap-[10px] bg-[#FFCE4F] cursor-pointer h-full rounded-l-md flex font-manrope font-semibold text-[#404266] text-xl whitespace-nowrap"
              // value={'Call us Brisbane Office'}
            >
              {place?.map((item, index) =>
                renderOptions(item?.id, item?.place, index)
              )}
            </select>
            <div className="flex flex-row items-center px-5 py-4 sm:py-0 sm:px-6 gap-[10px] bg-black/30 cursor-pointer h-full rounded-r-md">
              <span className="font-manrope font-semibold items-center text-base sm:text-[20px] sm:leading-[44px] text-white whitespace-nowrap">
                {selectedPlace}
              </span>
            </div>
          </div>

          <div className="flex sm:hidden flex-col items-center justify-center md:justify-start h-14 sm:h-32 md:h-[59px] w-full">
            <div className='px-10 mt-10'>
              <select
                onChange={onChange}
                className="select-contact-sm flex-row items-center px-5 py-4 bg-[#FFCE4F] cursor-pointer h-full rounded-md flex font-manrope font-semibold text-[#404266] text-[16px] whitespace-nowrap"
                // value={'Call us Brisbane Office'}
              >
                {place?.map((item, index) =>
                  renderOptions(item?.id, item?.place, index)
                )}
              </select>
            </div>
            <div className="w-full flex flex-row items-center px-5 py-4 gap-[10px] bg-black/30 cursor-pointer h-full rounded-md">
              <span className="font-manrope font-semibold items-center text-base sm:text-[32px] sm:leading-[44px] md:text-xl text-white whitespace-nowrap">
                {selectedPlace}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dropdown
