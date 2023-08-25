import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Button from '../../../components/buttons/Button'
import GoogleMapReact from 'google-map-react'
import { BsFillChatSquareFill } from 'react-icons/bs'
import { API_KEY } from '../../../utils/const/apiKey'
import { FiChevronUp, FiCalendar } from 'react-icons/fi'
import Image from 'next/image'
import { hears } from '../../../utils/const/contacts'
import Link from 'next/link'
import { metaOffice } from '../../../utils/const/links'
import { useRouter } from 'next/router'

const generalTypes = [
  { id: 0, title: 'Corporate or SME' },
  { id: 1, title: 'Scaleup or Investor' },
  { id: 2, title: 'Startup or Entrepreneur' },
  { id: 3, title: 'Foreign Associates' },
  { id: -1, title: 'General User Type' },
]

const industryTypes = [
  { id: 0, title: 'Engineering' },
  { id: 1, title: 'HighTech' },
  { id: 2, title: 'Healthtech' },
  { id: 3, title: 'Other Industries' },
  { id: -1, title: 'All Industries' },
]

const ideas = [
  { id: 1, title: 'Chemical, Biotech, Pharmaceutical' },
  { id: 2, title: 'Civil & Construction' },
  { id: 3, title: 'Consumer Product' },
  { id: 4, title: 'Electrical Engineering & Electronics' },
  { id: 5, title: 'Fintech' },
  { id: 6, title: 'Mechanical Engineering' },
  { id: 7, title: 'Medical' },
  { id: 8, title: 'Physics & Optical Engineering' },
  { id: 9, title: 'Software, Apps & Computer' },
  { id: 10, title: 'Others' },
]

const enquiries = [
  { id: 1, title: 'IP Strategy' },
  { id: 2, title: 'Patents' },
  { id: 3, title: 'Trade Marks' },
  { id: 4, title: 'Opposition / Infringement / Disputes' },
]

const assistances = [
  { id: 1, title: 'Commercialisation advice' },
  { id: 2, title: 'Product design' },
  { id: 3, title: 'Software development' },
  { id: 4, title: 'Hardware development' },
  { id: 5, title: 'Website' },
  { id: 6, title: 'Presentation graphics' },
  { id: 7, title: 'Information memorandum' },
  { id: 8, title: 'IP Valuation' },
]

const InputField = forwardRef(function InputField(
  {
    name,
    defaultValue,
    className,
    fieldName,
    placeHolder,
    isRequired = false,
    inputHeight = '75px',
    onChange,
  },
  ref
) {
  const inputRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
      }
    },
    []
  )

  return (
    <div
      className={`flex flex-col items-start justify-center gap-4 w-full ${className}`}
    >
      <div className="flex flex-row gap-2">
        <span className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl text-[#404266]">
          {fieldName}
        </span>
        <span className="text-[#E42B15]">{isRequired ? '*' : ''}</span>
      </div>
      <input
        type="text"
        defaultValue={defaultValue}
        name={name}
        className={`w-full h-[51px] sm:h-[101px] md:h-[${inputHeight}] text-sm sm:text-2xl md:text-xl p-4 sm:p-8 md:p-6 rounded border-[1px] sm:border-[3px] md:border-[1px] border-[#E4E6F1] focus:border-0`}
        placeholder={placeHolder}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  )
})

const Checkbox = ({ name, title }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <input
        type="checkbox"
        name={name}
        value={title}
        className="w-6 h-6 rounded border-2 md:border-[1px] border-[#E4E6F1] checked:border-0 checked:bg-[#FFCE4F] cursor-pointer"
      />
      <span className="font-manrope font-medium text-sm sm:text-2xl md:text-xl text-[#404266]">
        {title}
      </span>
    </div>
  )
}

const CheckBoxBlock = ({ title, name, items }) => {
  return (
    <div className="flex flex-col items-start justify-center px-6 gap-4">
      <span className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl items-center text-[#404266]">
        {title}
      </span>
      {items.map((item, index) => (
        <Checkbox key={index} name={name} title={item.title} />
      ))}
    </div>
  )
}

const AnyReactComponent = ({ icon }) => <div>{icon}</div>

export default function Contact({ contactDetails }) {
  const router = useRouter()
  const contact = useRef(null)
  const firstNameFocus = useRef(null)
  const lastNameFocus = useRef(null)
  const phoneNumberFocus = useRef(null)
  const emailFocus = useRef(null)
  const [selectOptional, setSelectOptional] = useState(true)
  const [startDate, setStartDate] = useState(new Date())
  const [openMap, setOpenMap] = useState(true)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [website, setWebsite] = useState('')
  const [hearUs, setHearUs] = useState('')
  const [enquiry, setEnquiry] = useState('')
  const [generalType, setGeneralType] = useState([])
  const [industryType, setIndustryType] = useState([])

  const defaultProps = {
    center: {
      lat: contactDetails?.lat,
      lng: contactDetails?.lng,
    },
    zoom: 18,
  }

  const CustomerInput = forwardRef(function CustomerInput(
    { name, value, onChange, placeholder, onClick },
    ref
  ) {
    return (
      <div className="flex flex-row items-center w-full" ref={ref}>
        <input
          className="flex-1 p-6 gap-4 text-sm sm:text-2xl md:text-xl border-[1px] border-[#E4E6F1] rounded-tl-md rounded-bl-md"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <div
          className="flex flex-row items-center justify-center w-[75px] h-[75px] bg-[#E4E6F1] rounded-tr-md rounded-br-md cursor-pointer"
          onClick={onClick}
        >
          <FiCalendar size={24} />
        </div>
      </div>
    )
  })

  const handleDateChange = (date) => {
    setStartDate(date)
  }

  const checkEmailValid = (email) => {
    setEmail(email)
    let reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (reg.test(email) === false) {
      setIsValidEmail(false)
      return
    }

    setIsValidEmail(true)
  }

  useEffect(() => {
    const generalType = JSON.parse(localStorage.getItem('selected-id'))
    const industryType = JSON.parse(localStorage.getItem('selected-id-2'))

    if (generalType) {
      setGeneralType(
        generalTypes.filter((value) => value.id === generalType)[0].title
      )
    }

    if (industryType) {
      setIndustryType(
        industryTypes.filter((value) => value.id === industryType)[0].title
      )
    }
  }, [])

  const onSubmit = () => {
    if (!firstName || !lastName || !phoneNumber || !email) {
      if (!firstName) firstNameFocus.current.focus()
      else if (!lastName) lastNameFocus.current.focus()
      else if (!phoneNumber) phoneNumberFocus.current.focus()
      else if (!email) emailFocus.current.focus()

      return false
    } else {
      contact.current.requestSubmit()

      router.push('/thank-you')
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start px-4 sm:px-16 md:px-4 xl:px-20 2xl:px-40 pt-16 pb-32 gap-6">
      <div
        className="flex flex-col items-start p-6 gap-9 bg-white w-full"
        style={{
          boxShadow: '0px 5px 17px rgba(64, 76, 89, 0.06)',
        }}
      >
        <span className="font-lora font-medium text-3xl sm:text-5xl md:text-[40px] text-[#272940]">
          Send us a message
        </span>
        <form 
          id="ActionStepWebform10"
          name="ActionStepWebform10"
          enctype="application/x-www-form-urlencoded"
          method="post"
          action="https://go.actionstep.com/frontend/application/webform/post"
          ref={contact}
        >
          <div className="flex flex-col items-start gap-6 sm:gap-9 w-full">
            <InputField 
              type="text"
              id="organization_key"
              name="organization_key"
              defaultValue="sq9162"
              className="hidden"
            />
            <InputField 
              type="text"
              id="uid"
              name="uid"
              defaultValue="6344f7cad4e589f0366f8e5810af571a9ed85029"
              className="hidden"
            />
            <InputField 
              type="text"
              id="dc100__user_id"
              name="dc100__user_id"
              defaultValue=""
              className="hidden"
            />
            <InputField 
              type="text"
              id="dc100__geo_location"
              name="dc100__geo_location"
              defaultValue=""
              className="hidden"
            />
            <InputField 
              type="text"
              id="dc100__Location"
              name="dc100__Location"
              defaultValue={contactDetails?.name}
              className="hidden"
            />
            <InputField
              type="text"
              id="dc100__user_type"
              name="dc100__user_type"
              defaultValue={generalType}
              className="hidden"
            />
            <InputField
              type="text"
              id="dc100__industry_type"
              name="dc100__industry_type"
              defaultValue={industryType}
              className="hidden"
            />
            <InputField
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="p50__first_name"
              name="p50__first_name"
              fieldName="First Name"
              placeHolder="First Name"
              isRequired={firstName.length === 0 ? true : false}
              ref={firstNameFocus}
            />
            <InputField
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="p50__last_name"
              name="p50__last_name"
              fieldName="Last Name"
              placeHolder="Last Name"
              isRequired={lastName.length === 0 ? true : false}
              ref={lastNameFocus}
            />
            <InputField
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              id="p50__phone1"
              name="p50__phone1"
              fieldName="Phone Number"
              placeHolder="Phone Number"
              isRequired={phoneNumber.length === 0 ? true : false}
              ref={phoneNumberFocus}
            />
            <InputField
              onChange={(e) => checkEmailValid(e.target.value)}
              type="text"
              id="p50__e_mail"
              name="p50__e_mail"
              fieldName="Email Address"
              placeHolder="Your@email.com"
              isRequired={
                email.length === 0 ? true : isValidEmail ? false : true
              }
              ref={emailFocus}
            />
            <div className="flex flex-col items-start justify-center gap-4 w-full">
              <div className="flex flex-row gap-2">
                <span className="font-manrope font-semibold text-sm sm:text-2xl md:text-xl text-[#404266]">
                  Any other comments?
                </span>
              </div>
              <textarea
                id="dc100__Initial_Comments"
                name="dc100__Initial_Comments"
                className="w-full h-72 p-6 rounded text-sm sm:text-2xl md:text-xl border-[1px] sm:border-[3px] md:border-[1px] border-[#E4E6F1] focus:border-0"
              />
            </div>
          </div>
          <div className="flex flex-col items-start pt-8 bg-white border-[1px] border-[#F3F3FA] rounded w-full gap-9 pb-9">
            <InputField
              type="text"
              id="p50__company_name"
              name="p50__company_name"
              className="px-6"
              fieldName="Company or Business Name (if applicable)"
              placeHolder="Company or Business Name"
            />
            <InputField
              type="text"
              id="p50__website"
              name="p50__website"
              className="px-6"
              fieldName="Website"
              placeHolder="www.your-website.com"
            />
            <div className="flex flex-col items-start justify-center px-6 gap-4 w-full">
              <span className="font-manrope font-medium text-sm sm:text-2xl md:text-xl text-[#404266]">
                How did you hear about us?
              </span>
              <select
                defaultValue=""
                id="dc100__Referral"
                name="dc100__Referral"
                className="w-full h-[75px] p-4 sm:p-6 gap-4 border-[1px] sm:border-[3px] md:border-[1px] border-[#E4E6F1] rounded cursor-pointer"
              >
                <option value="">Select one</option>
                {hears.map((item, index) => (
                  <option key={`option-${index}`} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <CheckBoxBlock title="Enquiry about:" id="dc100__Enquiry_Type" name="dc100__Enquiry_Type[]" items={enquiries} />
            <div className="flex flex-col items-start justify-center px-6 gap-4 w-full cursor-pointer">
              <span className="font-manrope font-medium text-sm sm:text-xl text-[#404266]">
                Do you have a preferred time to get a call from us?
              </span>
              <DatePicker
                selected={startDate}
                showTimeSelect
                onChange={handleDateChange}
                placeholderText="Tue 10 Jan, 12:30 PM"
                dateFormat="EEE d MMMM, hh:mm aa"
                id="dc100__Meeting_Preferences"
                name="dc100__Meeting_Preferences"
                customInput={<CustomerInput placeholder="Tue 10 Jan, 12:30 PM" />}
              />
            </div>
            <CheckBoxBlock title="Would you also like assistance with:" id="dc100__assistance" name="dc100__assistance" items={assistances} />
          </div>
          <Button
            type="button"
            onClick={() => onSubmit()}
            className="w-full h-14 sm:h-[75px]"
            title="Submit"
          />
        </form>
      </div>
      <div className="flex flex-col items-start gap-9 h-full">
        <span className="font-lora font-medium text-2xl sm:text-[32px] text-[#272940]">
          Contact our Patent & Trade Mark Office
        </span>
        <div className="w-full border-[3px] border-[#816BD9] mx-auto">
          <div
            className="p-5 w-full"
            style={{
              background:
                'linear-gradient(111.36deg, #61638D 0%, #494B70 98.54%), #505278',
            }}
          >
            <div
              className="flex flex-row items-center justify-between px-5 w-full cursor-pointer"
              onClick={() => setOpenMap(!openMap)}
            >
              <span className="font-manrope font-medium text-xl text-white">
                {`${contactDetails?.name} office`}
              </span>
              <FiChevronUp
                className={`w-6 h-6 sm:w-8 sm:h-8 stroke-white ${
                  openMap ? 'rotate-180' : ''
                }`}
                color={'white'}
              />
            </div>
          </div>
          <div className="w-full h-80">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: API_KEY,
                language: 'en',
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              center={{ lat: contactDetails?.lat, lng: contactDetails?.lng }}
            >
              <AnyReactComponent
                lat={contactDetails?.lat}
                lng={contactDetails?.lng}
                icon={
                  <>
                    <BsFillChatSquareFill
                      color="white"
                      size={50}
                      style={{
                        width: '80px',
                        height: '80px',
                        position: 'relative',
                        top: '-50px',
                        left: '-25px',
                      }}
                    />
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        position: 'absolute',
                        top: '-50px',
                        left: '-18px',
                      }}
                    >
                      <Image
                        src="/contactus/logo-marker.svg"
                        width={60}
                        height={60}
                        alt=""
                      />
                    </div>
                  </>
                }
              />
            </GoogleMapReact>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <span className="uppercase font-manrope font-semibold text-base sm:text-3xl md:text-xl text-[#7A7B94]">
            address
          </span>
          <span className="font-manrope font-medium text-base sm:text-3xl md:text-xl text-[#272940]">
            {contactDetails?.address}
          </span>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <span className="uppercase font-manrope font-semibold text-base sm:text-3xl md:text-xl text-[#7A7B94]">
            Phone
          </span>
          <span className="font-manrope font-medium text-base sm:text-3xl md:text-xl text-[#8C79D9]">
            {contactDetails?.number}
          </span>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <span className="uppercase font-manrope font-semibold text-base sm:text-3xl md:text-xl text-[#7A7B94]">
            postal address
          </span>
          <span className="font-manrope font-medium text-base sm:text-3xl md:text-xl text-[#272940]">
            {contactDetails?.addressPostal}
          </span>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <span className="uppercase font-manrope font-semibold text-base sm:text-3xl md:text-xl text-[#7A7B94]">
            email
          </span>
          <span className="font-manrope font-medium text-base sm:text-3xl md:text-xl text-[#8C79D9]">
            mail@baxterip.com.au
          </span>
        </div>
        <div className="flex flex-col items-start gap-9 h-full w-full">
          <span className="font-lora font-medium text-2xl sm:text-[32px] text-[#272940]">
            Meet us on Baxter IP Meta Office
          </span>
          <div className="w-full h-[343px] sm:h-[432px] flex justify-center items-center rounded-sm bg-contactus-metaoffice !bg-cover px-6">
            <Link href={metaOffice}>
              <div className="flex flex-row justify-center items-center gap-[10px] h-[75px] p-5 bg-white/20 backdrop-blur-xl cursor-pointer">
                <Image
                  src="/contactus/arrow-outward.svg"
                  className="h-8 w-8"
                  width={32}
                  height={32}
                  alt=""
                />
                <p className="font-manrope font-semibold text-xl text-white">
                  Visit meta office
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
