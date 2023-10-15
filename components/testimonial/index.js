import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Avatar from '../../components/articles/profile-avatar'
import { profiles } from '../../utils/const/people'

const Testimonial = ({ content, name }) => {
  const [people, setPeople] = useState()
  const [picture, setPicture] = useState()
  const [position, setPosition] = useState()
  useEffect(() => {
    const getProfiles = profiles[0]?.teamMembers?.filter(
      (people) => people.name === name
    )[0]
    setPeople(getProfiles.name)
    setPicture(getProfiles.url)
    setPosition(getProfiles.positions[0])
  }, [name])

  return (
    <div className="w-full">
      <div className="flex justify-center items-start">
        <Image src={'/testimonial/left.svg'} height={32} width={29} />
        <span className="text-[#272940] font-lora not-italic font-semibold text-base md:text-4xl p-5">
          {`${content}.`}
        </span>
        <Image
          src={'/testimonial/right.svg'}
          height={32}
          width={29}
          style={{ top: 0 }}
        />
      </div>
      <div className="flex justify-center items-start">
        <Avatar name={people} picture={picture} body={position} size={60} />
      </div>
    </div>
  )
}

export default Testimonial
