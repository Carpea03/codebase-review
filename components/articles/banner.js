import { Container } from '../templates/Container'
import Image from 'next/image'
export default function Banner({ layout }) {
  return (
    <div 
      className={`w-full flex ${
        layout === 3? "bg-ipNewsLog-banner" : layout === 2 ? 'bg-ipNewsLog-banner2' : 'bg-ipNews-banner'
      } z-0 mt-100 absolute`}
    >
      <div
        className={`${
          layout === 3? "bg-ipNewsLog-linear" : layout === 2 ? 'bg-ipNewsLog-linear2' : 'bg-ipNewsLog-linearPlane'
        } `}
      />
    </div>
  )
}
