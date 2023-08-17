import { Container } from '../templates/Container'
import Image from 'next/image'
export default function Banner({ layout }) {
  return (
    <div
      className={`w-full flex ${
        layout === 2 ? 'bg-ipNewsLog-banner2' : 'bg-ipNewsLog-banner'
      } z-0 mt-100 absolute`}
    >
      <div
        className={`${
          layout === 2 ? 'bg-ipNewsLog-linear2' : 'bg-ipNewsLog-linear'
        } `}
      />
    </div>
  )
}
