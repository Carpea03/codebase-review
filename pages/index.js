import Blog from '../components/blocks/blog'
import Contact from '../components/blocks/contact'
import ContentCard from '../components/blocks/content-card'
import Features from '../components/blocks/features'
import FeaturesImages from '../components/blocks/features-images'
import Footer from '../components/footer'
import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/blocks/hero'
import Logos from '../components/blocks/logos'
import ImagesHeadingDescription from '../components/blocks/images-heading-description'
import Newsletter from '../components/blocks/newsletter'
import SocialProof from '../components/blocks/social-proof'
import CardCta from '../components/blocks/card-cta'
import FeatureListCta from '../components/blocks/feature-list-cta'
import Image from 'next/image'

export default function Index() {
  return (
    <>
      <Head>
        <title>Baxter IP</title>
      </Head>
      <div className="w-[1440px]- w-full h-full- h-[22109px] relative overflow-hidden bg-[#fffef8]">
        {/* <svg
          width={1440}
          height={3628}
          viewBox="0 0 1440 3628"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[-3px] top-[4304px]"
          preserveAspectRatio="none">
          <path
            d="M0 0H1440V3572L0 3627.5V0Z"
            fill="url(#paint0_linear_2250_11015)"
          />
          <defs>
            <lineargradient
              id="paint0_linear_2250_11015"
              x1="654.5"
              y1={1397}
              x2="7829.51"
              y2="11743.7"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFFEF8" />
              <stop
                offset={1}
                stop-color="#FFBF15"
              />
            </lineargradient>
          </defs>
        </svg> */}
        <div className="flex flex-col justify-start items-center absolute left-[531px] top-[4427px] gap-2.5">
          <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left uppercase text-[#40320f]/50">
            Services
          </p>
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-5 px-2.5 py-5">
            <p className="flex-grow-0 flex-shrink-0 text-5xl font-medium text-center text-[#272940]">
              Our Services for
            </p>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 py-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-5xl text-center text-[#5f618c]">
                Corporate /SME
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center absolute left-[561px] top-[7591px] gap-6 pl-8 pr-6 py-6 rounded-[5px] bg-[#816bd9]"
          style={{
            boxShadow:
              '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
          }}>
          <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
            Discover more service
          </p>
          <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-10 h-10"
            preserveAspectRatio="none">
            <circle
              cx={20}
              cy={20}
              r={20}
              fill="white"
            />
            <path
              d="M19.7666 26.066C19.5999 25.8993 19.5166 25.702 19.5166 25.474C19.5166 25.2465 19.5999 25.0493 19.7666 24.8827L24.6499 19.9994L19.7499 15.0993C19.5944 14.9438 19.5166 14.7493 19.5166 14.516C19.5166 14.2827 19.5999 14.0827 19.7666 13.916C19.9333 13.7493 20.1306 13.666 20.3586 13.666C20.5862 13.666 20.7833 13.7493 20.9499 13.916L26.5499 19.5327C26.6166 19.5994 26.6639 19.6716 26.6919 19.7494C26.7195 19.8271 26.7333 19.9105 26.7333 19.9994C26.7333 20.0882 26.7195 20.1716 26.6919 20.2494C26.6639 20.3271 26.6166 20.3994 26.5499 20.466L20.9333 26.0827C20.7777 26.2382 20.5862 26.316 20.3586 26.316C20.1306 26.316 19.9333 26.2327 19.7666 26.066Z"
              fill="black"
            />
            <path
              d="M25.5 20L13.5 20"
              stroke="black"
              strokeWidth="1.8"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="flex justify-start items-center absolute left-[156px] top-[4710px] gap-[116px]">
          <div className="flex-grow-0 flex-shrink-0 w-[562px] h-[476px] rounded-[5px] bg-white" />
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[446px] gap-10">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[30px]">
                <p className="flex-grow w-[446px] text-4xl font-medium text-left text-[#272940]">
                  Track record with multiple successful projects
                </p>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow w-[446px] h-[100px] text-xl font-semibold text-left text-[#7a7b94]">
                  We&apos;ve delivered successful projects spanning multiple
                  industries and functions and can pull on our knowledge to help
                  you too
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 pr-[60px] py-5 rounded-[5px]">
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#272940]">
                Learn more
              </p>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  d="M12.7 15.3L15.3 12.7C15.5 12.5 15.6 12.2667 15.6 12C15.6 11.7333 15.5 11.5 15.3 11.3L12.675 8.675C12.4917 8.49167 12.2627 8.404 11.988 8.412C11.7127 8.42067 11.4833 8.51667 11.3 8.7C11.1167 8.88333 11.025 9.11667 11.025 9.4C11.025 9.68333 11.1167 9.91667 11.3 10.1L12.2 11H8.975C8.69167 11 8.45833 11.0957 8.275 11.287C8.09167 11.479 8 11.7167 8 12C8 12.2833 8.096 12.5207 8.288 12.712C8.47933 12.904 8.71667 13 9 13H12.2L11.275 13.925C11.0917 14.1083 11.004 14.3377 11.012 14.613C11.0207 14.8877 11.1167 15.1167 11.3 15.3C11.4833 15.4833 11.7167 15.575 12 15.575C12.2833 15.575 12.5167 15.4833 12.7 15.3V15.3ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
                  fill="#8069D8"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center absolute left-[156px] top-[5287px] gap-[116px]">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[450px] gap-10">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[30px]">
                <p className="flex-grow w-[450px] text-4xl font-medium text-left text-[#272940]">
                  Experienced brand awareness team{' '}
                </p>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow w-[450px] text-xl font-semibold text-left text-[#7a7b94]">
                  We understand that brand equity is a very valuable commodity.
                  Our experienced team create thought leading materials and
                  collateral to reflect this and we work hard to maximise
                  opportunities or exposure.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 pr-[60px] py-5 rounded-[5px]">
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#272940]">
                Learn more
              </p>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  d="M12.7 15.3L15.3 12.7C15.5 12.5 15.6 12.2667 15.6 12C15.6 11.7333 15.5 11.5 15.3 11.3L12.675 8.675C12.4917 8.49167 12.2627 8.404 11.988 8.412C11.7127 8.42067 11.4833 8.51667 11.3 8.7C11.1167 8.88333 11.025 9.11667 11.025 9.4C11.025 9.68333 11.1167 9.91667 11.3 10.1L12.2 11H8.975C8.69167 11 8.45833 11.0957 8.275 11.287C8.09167 11.479 8 11.7167 8 12C8 12.2833 8.096 12.5207 8.288 12.712C8.47933 12.904 8.71667 13 9 13H12.2L11.275 13.925C11.0917 14.1083 11.004 14.3377 11.012 14.613C11.0207 14.8877 11.1167 15.1167 11.3 15.3C11.4833 15.4833 11.7167 15.575 12 15.575C12.2833 15.575 12.5167 15.4833 12.7 15.3V15.3ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
                  fill="#8069D8"
                />
              </svg>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[558px] h-[476px] rounded-[5px] bg-white" />
        </div>
        <div className="flex justify-start items-center absolute left-[156px] top-[6439px] gap-[116px]">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[450px] gap-10">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[30px]">
                <p className="flex-grow w-[450px] text-4xl font-medium text-left text-[#272940]">
                  ROI Foccussed
                </p>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow w-[450px] text-xl font-semibold text-left text-[#7a7b94]">
                  We always get results and don&apos;t just spend your budget.
                  By putting in place rigid KPIs, we can track the success of
                  our projects and you can see it&apos;s been money will spent.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 pr-[60px] py-5 rounded-[5px]">
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#272940]">
                Learn more
              </p>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  d="M12.7 15.8L15.3 13.2C15.5 13 15.6 12.7667 15.6 12.5C15.6 12.2333 15.5 12 15.3 11.8L12.675 9.175C12.4917 8.99167 12.2627 8.904 11.988 8.912C11.7127 8.92067 11.4833 9.01667 11.3 9.2C11.1167 9.38333 11.025 9.61667 11.025 9.9C11.025 10.1833 11.1167 10.4167 11.3 10.6L12.2 11.5H8.975C8.69167 11.5 8.45833 11.5957 8.275 11.787C8.09167 11.979 8 12.2167 8 12.5C8 12.7833 8.096 13.0207 8.288 13.212C8.47933 13.404 8.71667 13.5 9 13.5H12.2L11.275 14.425C11.0917 14.6083 11.004 14.8377 11.012 15.113C11.0207 15.3877 11.1167 15.6167 11.3 15.8C11.4833 15.9833 11.7167 16.075 12 16.075C12.2833 16.075 12.5167 15.9833 12.7 15.8V15.8ZM12 22.5C10.6167 22.5 9.31667 22.2373 8.1 21.712C6.88333 21.1873 5.825 20.475 4.925 19.575C4.025 18.675 3.31267 17.6167 2.788 16.4C2.26267 15.1833 2 13.8833 2 12.5C2 11.1167 2.26267 9.81667 2.788 8.6C3.31267 7.38333 4.025 6.325 4.925 5.425C5.825 4.525 6.88333 3.81233 8.1 3.287C9.31667 2.76233 10.6167 2.5 12 2.5C13.3833 2.5 14.6833 2.76233 15.9 3.287C17.1167 3.81233 18.175 4.525 19.075 5.425C19.975 6.325 20.6873 7.38333 21.212 8.6C21.7373 9.81667 22 11.1167 22 12.5C22 13.8833 21.7373 15.1833 21.212 16.4C20.6873 17.6167 19.975 18.675 19.075 19.575C18.175 20.475 17.1167 21.1873 15.9 21.712C14.6833 22.2373 13.3833 22.5 12 22.5ZM12 20.5C14.2167 20.5 16.1043 19.721 17.663 18.163C19.221 16.6043 20 14.7167 20 12.5C20 10.2833 19.221 8.39567 17.663 6.837C16.1043 5.279 14.2167 4.5 12 4.5C9.78333 4.5 7.896 5.279 6.338 6.837C4.77933 8.39567 4 10.2833 4 12.5C4 14.7167 4.77933 16.6043 6.338 18.163C7.896 19.721 9.78333 20.5 12 20.5Z"
                  fill="#8069D8"
                />
              </svg>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[558px] h-[476px] rounded-[5px] bg-white" />
        </div>
        <div className="flex justify-start items-center absolute left-40 top-[5863px] gap-[74px]">
          <div className="flex-grow-0 flex-shrink-0 w-[600px] h-[600px] relative overflow-hidden">
            <div className="w-[679px] h-[679px]">
              <Image
                src="/1-(1)-1.png"
                className="w-[679px] h-[679px] absolute left-[-79.31px] top-[-79.31px] object-cover"
                alt=""
                width={1438}
                height={848}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[446px] gap-10">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[30px]">
                <p className="flex-grow w-[446px] text-4xl font-medium text-left text-[#272940]">
                  We have a fantastic mixture of analytical, creative, technical
                  and managerial talent.
                </p>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <pre>
                  Failed to transform TEXT All team mmebers are the best in
                  their industries, are highly educated and undergo rigorous
                  ongoing development to keep them at the top of their game.
                  Meet our team.
                </pre>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 pr-[60px] py-5 rounded-[5px]">
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#272940]">
                Learn more
              </p>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  d="M12.7 15.3L15.3 12.7C15.5 12.5 15.6 12.2667 15.6 12C15.6 11.7333 15.5 11.5 15.3 11.3L12.675 8.675C12.4917 8.49167 12.2627 8.404 11.988 8.412C11.7127 8.42067 11.4833 8.51667 11.3 8.7C11.1167 8.88333 11.025 9.11667 11.025 9.4C11.025 9.68333 11.1167 9.91667 11.3 10.1L12.2 11H8.975C8.69167 11 8.45833 11.0957 8.275 11.287C8.09167 11.479 8 11.7167 8 12C8 12.2833 8.096 12.5207 8.288 12.712C8.47933 12.904 8.71667 13 9 13H12.2L11.275 13.925C11.0917 14.1083 11.004 14.3377 11.012 14.613C11.0207 14.8877 11.1167 15.1167 11.3 15.3C11.4833 15.4833 11.7167 15.575 12 15.575C12.2833 15.575 12.5167 15.4833 12.7 15.3V15.3ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
                  fill="#8069D8"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center absolute left-[181px] top-[7004px] gap-[74px]">
          <div className="flex-grow-0 flex-shrink-0 w-[558px] h-[476px] rounded-[5px] bg-white" />
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[446px] gap-10">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[30px]">
                <p className="flex-grow w-[446px] text-4xl font-medium text-left text-[#272940]">
                  Awward winning
                </p>
              </div>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow w-[446px] text-xl font-semibold text-left text-[#7a7b94]">
                  Our team have established a reptuation for being the best and
                  have won some of the world&apos;s most highly regarded IP
                  awards.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 pr-[60px] py-5 rounded-[5px]">
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#272940]">
                Learn more
              </p>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  d="M12.7 15.8L15.3 13.2C15.5 13 15.6 12.7667 15.6 12.5C15.6 12.2333 15.5 12 15.3 11.8L12.675 9.175C12.4917 8.99167 12.2627 8.904 11.988 8.912C11.7127 8.92067 11.4833 9.01667 11.3 9.2C11.1167 9.38333 11.025 9.61667 11.025 9.9C11.025 10.1833 11.1167 10.4167 11.3 10.6L12.2 11.5H8.975C8.69167 11.5 8.45833 11.5957 8.275 11.787C8.09167 11.979 8 12.2167 8 12.5C8 12.7833 8.096 13.0207 8.288 13.212C8.47933 13.404 8.71667 13.5 9 13.5H12.2L11.275 14.425C11.0917 14.6083 11.004 14.8377 11.012 15.113C11.0207 15.3877 11.1167 15.6167 11.3 15.8C11.4833 15.9833 11.7167 16.075 12 16.075C12.2833 16.075 12.5167 15.9833 12.7 15.8V15.8ZM12 22.5C10.6167 22.5 9.31667 22.2373 8.1 21.712C6.88333 21.1873 5.825 20.475 4.925 19.575C4.025 18.675 3.31267 17.6167 2.788 16.4C2.26267 15.1833 2 13.8833 2 12.5C2 11.1167 2.26267 9.81667 2.788 8.6C3.31267 7.38333 4.025 6.325 4.925 5.425C5.825 4.525 6.88333 3.81233 8.1 3.287C9.31667 2.76233 10.6167 2.5 12 2.5C13.3833 2.5 14.6833 2.76233 15.9 3.287C17.1167 3.81233 18.175 4.525 19.075 5.425C19.975 6.325 20.6873 7.38333 21.212 8.6C21.7373 9.81667 22 11.1167 22 12.5C22 13.8833 21.7373 15.1833 21.212 16.4C20.6873 17.6167 19.975 18.675 19.075 19.575C18.175 20.475 17.1167 21.1873 15.9 21.712C14.6833 22.2373 13.3833 22.5 12 22.5ZM12 20.5C14.2167 20.5 16.1043 19.721 17.663 18.163C19.221 16.6043 20 14.7167 20 12.5C20 10.2833 19.221 8.39567 17.663 6.837C16.1043 5.279 14.2167 4.5 12 4.5C9.78333 4.5 7.896 5.279 6.338 6.837C4.77933 8.39567 4 10.2833 4 12.5C4 14.7167 4.77933 16.6043 6.338 18.163C7.896 19.721 9.78333 20.5 12 20.5Z"
                  fill="#8069D8"
                />
              </svg>
            </div>
          </div>
          <Image
            src="/service-5-1.png"
            className="flex-grow-0 flex-shrink-0 w-[534px] h-[482px] object-none mix-blend-multiply"
            alt=""
            width={1438}
            height={848}
          />
        </div>
        <Image
          src="/service-1.jpeg"
          className="w-[479px] h-[479px] absolute left-[190px] top-[4707px] object-cover mix-blend-multiply"
          alt=""
          width={1438}
          height={848}
        />
        <Image
          src="/service-2.jpeg"
          className="w-[454px] h-[454px] absolute left-[780px] top-[5284px] object-cover mix-blend-multiply"
          alt=""
          width={1438}
          height={848}
        />
        <Image
          src="/service-4-1.jpeg"
          className="w-[500px] h-[500px] absolute left-[748px] top-[6436px] object-cover mix-blend-multiply"
          alt=""
          width={1438}
          height={848}
        />
        <svg
          width={1440}
          height={1042}
          viewBox="0 0 1440 1042"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1440px] h-[1042px]"
          preserveAspectRatio="none">
          <path
            d="M0 0H1440V991L0 1042V0Z"
            fill="url(#paint0_linear_2250_11346)"
          />
          <defs>
            <lineargradient
              id="paint0_linear_2250_11346"
              x1={720}
              y1="425.044"
              x2="815.582"
              y2="1026.82"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFFEF8" />
              <stop
                offset={1}
                stop-color="#FFF3D0"
              />
            </lineargradient>
          </defs>
        </svg>
        <div className="w-[1440px] h-[893px] absolute left-0 top-[21216px] bg-[#404266]">
          <div className="flex justify-between items-center w-[1280px] absolute left-20 top-[50px]">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 pt-2.5 pb-1">
                <svg
                  width={172}
                  height={41}
                  viewBox="0 0 172 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[172px] h-[41px]"
                  preserveAspectRatio="none">
                  <path
                    d="M40.5229 28.0302V13.1091L39.4304 13.1055C38.8383 13.1091 38.3599 19.98 38.3599 20.5651C38.3599 21.1502 38.8383 28.0212 39.4304 28.0248L40.5229 28.0284V28.0302Z"
                    fill="white"
                  />
                  <path
                    d="M45.6591 31.0383L51.5524 20.5408L45.6591 10.0433L45.6572 9.02344L53.5138 20.5317L45.6572 32.0419L45.6591 31.0383Z"
                    fill="#FFD15B"
                    fill-opacity="0.85"
                  />
                  <path
                    d="M45.6605 30.0422L49.5907 20.5573L45.6605 11.0725L45.6587 10.0508L51.5521 20.5483L45.6587 31.0458L45.6605 30.0422Z"
                    fill="#FFD15B"
                    fill-opacity="0.7"
                  />
                  <path
                    d="M45.6643 29.0403L47.6275 20.5662L45.6643 12.0921L45.6606 11.0723L49.5908 20.5572L45.6606 30.042L45.6643 29.0403Z"
                    fill="#FFD15B"
                    fill-opacity="0.55"
                  />
                  <path
                    d="M45.6678 28.0364V13.1117L45.666 12.0918L47.6292 20.5659L45.666 29.04L45.6678 28.0364Z"
                    fill="#FFD15B"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M45.6652 13.1133H44.3784V28.0362H45.6652V13.1133Z"
                    fill="#FFD15B"
                    fill-opacity="0.25"
                  />
                  <path
                    d="M44.3811 13.1133H43.0942V28.0362H44.3811V13.1133Z"
                    fill="#FFD15B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M43.0959 13.1133H41.8091V28.0344H43.0959V13.1133Z"
                    fill="white"
                  />
                  <path
                    d="M41.8098 13.1133H40.5229V28.0344H41.8098V13.1133Z"
                    fill="white"
                  />
                  <path
                    d="M45.6571 32.0481L53.5137 20.5379L45.6571 9.02963L45.6553 8.00977L55.4769 20.5289L45.6553 33.0498L45.6571 32.0481Z"
                    fill="white"
                  />
                  <path
                    d="M45.6571 32.0481L53.5137 20.5379L45.6571 9.02963L45.6553 8.00977L55.4769 20.5289L45.6553 33.0498L45.6571 32.0481Z"
                    fill="#FFD15B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M52.5503 8.01367L58.7897 16.3375L65.029 8.01367H71.8577L61.9787 20.5508L71.7883 33.0537H64.9597L58.7203 24.7299L52.481 33.0537H45.6523L55.462 20.5508L45.6523 8.01367H52.5503Z"
                    fill="white"
                  />
                  <path
                    d="M87.4222 29.4242C86.2783 27.1634 86.2783 27.1634 86.2783 27.1634H86.2436C86.209 27.1634 86.1743 27.1976 86.1396 27.2319C86.0356 27.2661 85.897 27.3347 85.7583 27.4032C85.6197 27.4717 85.4464 27.5402 85.3077 27.6087C85.2384 27.6429 85.1691 27.6429 85.1344 27.6772C85.0997 27.6772 85.0997 27.6772 85.0651 27.7115H85.0304H84.9957C84.9611 27.7115 84.9264 27.7457 84.8571 27.7457C84.7531 27.78 84.6145 27.78 84.4758 27.8142C84.3718 27.8142 84.2678 27.8485 84.1638 27.8485C84.0945 27.8485 83.9905 27.8485 83.8865 27.8142C83.6092 27.78 83.2626 27.6772 82.9506 27.5059C82.6387 27.3689 82.4307 27.1634 82.2574 26.9236C82.1187 26.6838 81.9107 26.2728 81.9107 25.4849V13.0848H87.4915V8.01512H81.9107V1.98633H76.7806V8.01512H72.1011V13.0848H76.7806V25.4849C76.7806 27.1291 77.1966 28.5678 77.9591 29.6982C78.7217 30.8286 79.6923 31.548 80.6282 32.0275C81.5294 32.4728 82.396 32.6784 83.02 32.8154C83.3319 32.8839 83.6092 32.8839 83.8172 32.9181C83.9212 32.9181 83.9905 32.9181 84.0598 32.9181C84.0945 32.9181 84.1292 32.9181 84.1292 32.9181H84.1638C84.1638 32.9181 84.2332 32.9181 84.3025 32.9181H84.3372H84.3718C84.4065 32.9181 84.4758 32.9181 84.5105 32.9181C84.6491 32.9181 84.8224 32.8839 84.9957 32.8839C85.3424 32.8496 85.9317 32.7469 86.4863 32.6098C86.9369 32.4728 87.4915 32.233 87.8035 32.0618C87.9768 31.9933 88.1501 31.8905 88.2541 31.8562C88.3234 31.822 88.3581 31.7877 88.3927 31.7877C88.3927 31.7877 88.4274 31.7877 88.4274 31.7535H88.4621C88.566 31.685 88.566 31.685 87.4222 29.4242Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M119.417 20.5498C119.417 16.4392 122.814 13.1165 126.973 13.1165C128.048 13.1165 129.053 13.3221 129.989 13.7331L132.034 9.07451C130.474 8.42367 128.776 8.04688 126.973 8.04688C119.971 8.04688 114.287 13.6646 114.287 20.584L114.321 22.9133V33.0869H119.451V22.8448L119.417 20.5498Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M144.235 8.01367V33.0537H139.104V8.01367H144.235Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M159.313 8.01367C156.471 8.01367 153.871 8.93854 151.757 10.48V8.01367H146.626V41.0008H151.757V30.6216C153.871 32.1631 156.471 33.088 159.313 33.088C166.315 33.088 172 27.4702 172 20.5508C172 13.6314 166.315 8.01367 159.313 8.01367ZM159.313 27.984C155.154 27.984 151.757 24.6614 151.757 20.5166C151.757 16.3718 155.119 13.0491 159.313 13.0491C163.473 13.0491 166.87 16.3718 166.87 20.5166C166.87 24.6614 163.473 27.984 159.313 27.984Z"
                    fill="white"
                  />
                  <path
                    d="M144.235 2.53483C144.235 3.93927 143.091 5.06967 141.67 5.06967C140.248 5.06967 139.104 3.93927 139.104 2.53483C139.104 1.1304 140.248 0 141.67 0C143.091 0 144.235 1.1304 144.235 2.53483Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M112.587 20.5499C112.587 19.9333 112.553 19.3168 112.449 18.7002C112.449 18.6659 112.449 18.6659 112.449 18.6317C112.414 18.4604 112.379 18.2891 112.345 18.1178C112.345 18.0836 112.345 18.0493 112.31 17.9808V17.9466C111.131 12.2603 106.001 7.97852 99.9006 7.97852C92.8986 7.97852 87.2139 13.5963 87.2139 20.5157C87.2139 27.4351 92.8986 33.0528 99.9006 33.0528C101.703 33.0528 103.436 32.676 104.996 31.9909C106.521 31.3401 107.908 30.381 109.052 29.2163L105.343 25.6881C104.649 26.3732 103.852 26.9555 102.951 27.3666C102.015 27.7776 101.01 27.9831 99.9352 27.9831C96.6769 27.9831 93.8692 25.9279 92.8293 23.0505H112.345C112.483 22.2284 112.587 21.4063 112.587 20.5499ZM99.9006 13.0824C103.159 13.0824 105.932 15.1377 107.007 17.9808H92.8293C93.8692 15.1377 96.6422 13.0824 99.9006 13.0824Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.5243 25.1572C40.5243 25.1572 38.8809 22.9997 38.8809 20.5804C38.8809 18.1612 40.5243 16 40.5243 16H42.2228C42.2228 16 40.6072 18.1534 40.6072 20.5786C40.6072 23.0038 42.2228 25.1572 42.2228 25.1572H40.5243Z"
                    fill="#C5A65F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M38.8094 25.1572C38.8094 25.1572 37.166 22.9997 37.166 20.5804C37.166 18.1612 38.8094 16 38.8094 16H40.508C40.508 16 38.8923 18.1534 38.8923 20.5786C38.8923 23.0038 40.508 25.1572 40.508 25.1572H38.8094Z"
                    fill="#A99160"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M43.9593 25.1572C43.9593 25.1572 42.3159 22.9997 42.3159 20.5804C42.3159 18.1612 43.9593 16 43.9593 16H45.6579C45.6579 16 44.0422 18.1534 44.0422 20.5786C44.0422 23.0038 45.6579 25.1572 45.6579 25.1572H43.9593Z"
                    fill="#FFD15B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.2406 25.1572C42.2406 25.1572 40.5972 22.9997 40.5972 20.5804C40.5972 18.1612 42.2406 16 42.2406 16H43.9391C43.9391 16 42.3235 18.1534 42.3235 20.5786C42.3235 23.0038 43.9391 25.1572 43.9391 25.1572H42.2406Z"
                    fill="#E3BC5D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.6513 25.1529V33.0554H40.5212V30.5891C38.4067 32.1648 35.7723 33.0897 32.93 33.0897C28.805 33.0897 25.1308 31.1372 22.8083 28.1228C20.4859 31.1372 16.8116 33.0897 12.6867 33.0897C5.68475 33.0897 0 27.472 0 20.5525V0.0683594H5.09548V10.4817C7.20992 8.94028 9.80966 8.01541 12.652 8.01541C16.7769 8.01541 20.4512 9.96792 22.7737 12.9823C25.0961 9.96792 28.7704 8.01541 32.8953 8.01541C35.7377 8.01541 38.3721 8.94028 40.4865 10.516V8.01541H45.6513V15.9967H38.8227C37.4708 14.2497 35.3217 13.1193 32.8953 13.1193C28.7011 13.1193 25.3387 16.4763 25.3387 20.5868C25.3387 24.6973 28.7357 28.02 32.8953 28.02C35.3169 28.02 37.4624 26.8941 38.8492 25.1529H45.6513ZM12.6867 28.02C16.8809 28.02 20.2433 24.6631 20.2433 20.5525C20.2086 16.4078 16.8463 13.0851 12.6867 13.0851C8.49246 13.0851 5.13014 16.442 5.13014 20.5525C5.13014 24.6973 8.52713 28.02 12.6867 28.02Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[445px] text-base font-medium text-left text-white">
                Your patent and trademark attorneys for infinite innovation
                &amp; bussiness growth
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[460px] relative gap-4 p-6 rounded-[5px] bg-white/5 border border-[#797b94]">
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none">
                <path
                  d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
                  stroke="#7A7B94"
                  strokeWidth={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9999 21.5004L16.6499 17.1504"
                  stroke="#7A7B94"
                  strokeWidth={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#7a7b94]">
                Search ..
              </p>
            </div>
          </div>
          <svg
            width={1280}
            height={2}
            viewBox="0 0 1280 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[79px] top-[214px]"
            preserveAspectRatio="none">
            <path
              d="M0 1L1280 0.999888"
              stroke="white"
              stroke-opacity="0.3"
            />
          </svg>
          <svg
            width={1280}
            height={2}
            viewBox="0 0 1280 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[79px] top-[790px]"
            preserveAspectRatio="none">
            <path
              d="M0 1L1280 0.999888"
              stroke="white"
              stroke-opacity="0.3"
            />
          </svg>
          <div className="flex flex-col justify-start items-start absolute left-20 top-[265px] gap-10">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-white">
                Contact Us
              </p>
              <svg
                width={50}
                height={2}
                viewBox="0 0 50 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none">
                <path
                  d="M0 1H50"
                  stroke="#FFD15B"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-px">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                  Email
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#9fa0b2]">
                  mail@baxterip.com.au
                </p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-px">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                  Phone
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#9fa0b2]">
                  +61 2 9264 6716
                </p>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[292px] h-[250.19px]">
                <Image
                  src="/image-49.png"
                  className="w-[292px] h-[250.19px] absolute left-[-0.5px] top-[142.5px] object-cover"
                  alt=""
                  width={1438}
                  height={848}
                />
                <svg
                  width={56}
                  height={56}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[54.84px] h-[54.84px]"
                  preserveAspectRatio="none">
                  <path
                    d="M0.873047 12.5117C0.873047 5.8843 6.24563 0.511719 12.873 0.511719H43.7087C50.3361 0.511719 55.7087 5.8843 55.7087 12.5117V43.3474C55.7087 49.9748 50.3361 55.3474 43.7087 55.3474H12.873C6.24563 55.3474 0.873047 49.9748 0.873047 43.3474V12.5117Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.4106 34.855C42.4106 34.855 41.0996 33.1133 41.0996 31.1604C41.0996 29.2075 42.4106 27.4629 42.4106 27.4629H43.7656C43.7656 27.4629 42.4767 29.2012 42.4767 31.1589C42.4767 33.1167 43.7656 34.855 43.7656 34.855H42.4106Z"
                    fill="#FFDF8D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.0414 34.855C41.0414 34.855 39.7305 33.1133 39.7305 31.1604C39.7305 29.2075 41.0414 27.4629 41.0414 27.4629H42.3964C42.3964 27.4629 41.1076 29.2012 41.1076 31.1589C41.1076 33.1167 42.3964 34.855 42.3964 34.855H41.0414Z"
                    fill="#FFE6A5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.1489 34.855C45.1489 34.855 43.8379 33.1133 43.8379 31.1604C43.8379 29.2075 45.1489 27.4629 45.1489 27.4629H46.5039C46.5039 27.4629 45.215 29.2012 45.215 31.1589C45.215 33.1167 46.5039 34.855 46.5039 34.855H45.1489Z"
                    fill="#FFD15B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M43.7797 34.855C43.7797 34.855 42.4688 33.1133 42.4688 31.1604C42.4688 29.2075 43.7797 27.4629 43.7797 27.4629H45.1347C45.1347 27.4629 43.8459 29.2012 43.8459 31.1589C43.8459 33.1167 45.1347 34.855 45.1347 34.855H43.7797Z"
                    fill="#FFD874"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M46.4972 34.8508V41.23H42.4048V39.2391C40.718 40.5111 38.6165 41.2577 36.3491 41.2577C33.0585 41.2577 30.1275 39.6816 28.2748 37.2482C26.4222 39.6816 23.4911 41.2577 20.2006 41.2577C14.6149 41.2577 10.0801 36.7228 10.0801 31.1372V14.6016H14.1449V23.0077C15.8316 21.7633 17.9055 21.0167 20.1729 21.0167C23.4634 21.0167 26.3945 22.5929 28.2472 25.0262C30.0998 22.5929 33.0309 21.0167 36.3214 21.0167C38.5889 21.0167 40.6904 21.7633 42.3771 23.0353V21.0167H46.4972V27.4596H41.0499C39.9714 26.0493 38.257 25.1368 36.3214 25.1368C32.9756 25.1368 30.2934 27.8467 30.2934 31.1649C30.2934 34.4831 33.0032 37.1653 36.3214 37.1653C38.2532 37.1653 39.9647 36.2563 41.071 34.8508H46.4972ZM20.2006 37.1653C23.5464 37.1653 26.2286 34.4554 26.2286 31.1372C26.2009 27.7914 23.5187 25.1092 20.2006 25.1092C16.8547 25.1092 14.1725 27.819 14.1725 31.1372C14.1725 34.4831 16.8824 37.1653 20.2006 37.1653Z"
                    fill="#404266"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start absolute left-[575px] top-[265px] gap-10">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-white">
                Company
              </p>
              <svg
                width={50}
                height={2}
                viewBox="0 0 50 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none">
                <path
                  d="M0 1H50"
                  stroke="#FFD15B"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                About Us
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                Contact
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                Privacy Policy
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                Term &amp; condition
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start absolute left-[575px] top-[595px] gap-4">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-white">
                Connect with us
              </p>
              <svg
                width={50}
                height={2}
                viewBox="0 0 50 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none">
                <path
                  d="M0 1H50"
                  stroke="#FFD15B"
                />
              </svg>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3 px-4 py-2.5 rounded-[5px] bg-[#6a6da9]">
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                LinkedIn
              </p>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM6.15 9.975V18H8.7V9.975H6.15ZM6 7.425C6 8.25 6.6 8.85 7.425 8.85C8.25 8.85 8.85 8.25 8.85 7.425C8.85 6.6 8.25 6 7.425 6C6.675 6 6 6.6 6 7.425ZM15.45 18H17.85V13.05C17.85 10.575 16.35 9.75 14.925 9.75C13.65 9.75 12.75 10.575 12.525 11.1V9.975H10.125V18H12.675V13.725C12.675 12.6 13.425 12 14.175 12C14.925 12 15.45 12.375 15.45 13.65V18Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start absolute left-[932px] top-[595px] gap-4">
            <p className="flex-grow-0 flex-shrink-0 w-[341px] text-xl font-medium text-left text-white">
              Baxter IP, Patent &amp; Trade Mark Attorneys is a member of
            </p>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[27px]">
              <svg
                width={55}
                height={50}
                viewBox="0 0 55 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[54.25px] h-[50px] relative"
                preserveAspectRatio="none">
                <g clip-path="url(#clip0_1_1031)">
                  <path
                    d="M10.0814 18.2754H0.349609V20.7184H10.0814V18.2754Z"
                    fill="white"
                  />
                  <path
                    d="M14.9479 20.7207H10.082V23.1557H14.9479V20.7207Z"
                    fill="white"
                  />
                  <path
                    d="M10.0821 13.4473H7.73242V15.7969H10.0821V13.4473Z"
                    fill="white"
                  />
                  <path
                    d="M29.8091 6.00195C26.984 6.00062 24.245 6.97494 22.055 8.76026C19.865 10.5456 18.3584 13.0324 17.7897 15.8005H20.3439V13.4482H23.8447C24.8409 12.2167 26.1936 11.3237 27.7173 10.8916C29.241 10.4596 30.861 10.5098 32.3551 11.0352C33.8492 11.5606 35.1441 12.5356 36.0623 13.8264C36.9804 15.1172 37.4768 16.6605 37.4834 18.2447C37.4899 19.8289 37.0062 21.3763 36.0988 22.6746C35.1913 23.9729 33.9044 24.9585 32.4147 25.4963C30.925 26.034 29.3055 26.0975 27.7783 25.6781C26.2511 25.2586 24.891 24.3768 23.8847 23.1535H20.3439V20.7212H22.5356C21.9952 19.1255 21.9952 17.3962 22.5356 15.8005H20.3439V18.2702H17.5391C17.5391 20.6966 18.2584 23.0686 19.606 25.0861C20.9537 27.1036 22.8692 28.676 25.1103 29.6046C27.3514 30.5331 29.8174 30.7761 32.1965 30.3027C34.5756 29.8293 36.761 28.6609 38.4762 26.9451C40.1915 25.2294 41.3596 23.0434 41.8328 20.6636C42.306 18.2838 42.0632 15.8171 41.1349 13.5753C40.2066 11.3336 38.6346 9.41758 36.6177 8.06952C34.6008 6.72147 32.2295 6.00195 29.8038 6.00195H29.8091Z"
                    fill="white"
                  />
                  <path
                    d="M12.5156 15.8003V18.2699H17.5388C17.5392 17.4386 17.6232 16.6094 17.7895 15.7949L12.5156 15.8003Z"
                    fill="white"
                  />
                  <path
                    d="M27.2108 15.7996V13.4473H23.8434C23.2747 14.1482 22.835 14.9447 22.5449 15.7996H27.2108Z"
                    fill="white"
                  />
                  <path
                    d="M29.8087 20.7207H22.5352C22.8325 21.6071 23.2898 22.4315 23.8843 23.153H29.8087V20.7207Z"
                    fill="white"
                  />
                  <path
                    d="M32.1888 15.8008H27.2109V18.2758H32.1888V15.8008Z"
                    fill="white"
                  />
                  <path
                    d="M49.4329 15.8008H44.5137V18.2758H49.4329V15.8008Z"
                    fill="white"
                  />
                  <path
                    d="M54.2516 18.2754H51.918V20.609H54.2516V18.2754Z"
                    fill="white"
                  />
                  <path
                    d="M7.33216 43.9983H10.7689L7.43615 35.5332H3.46611L0 43.9983H3.57543L3.89005 42.9315H6.99355L7.33216 43.9983ZM4.40996 41.2059L5.38581 37.9282L6.43364 41.2059H4.40996Z"
                    fill="white"
                  />
                  <path
                    d="M18.7049 35.5332H15.3711V43.9983H18.7049V35.5332Z"
                    fill="white"
                  />
                  <path
                    d="M54.2517 35.5332H50.918V43.9983H54.2517V35.5332Z"
                    fill="white"
                  />
                  <path
                    d="M28.7958 35.5329H24.5059V43.998H27.7053V41.4723H28.7958C28.7958 41.4723 33.0005 42.0804 33.0005 38.6666C33.0005 35.2529 28.7958 35.5329 28.7958 35.5329ZM28.6092 39.7388H27.7293V37.4105H28.5292C28.5292 37.4105 29.9583 37.3038 29.9583 38.512C29.9583 39.7201 28.6199 39.7388 28.6199 39.7388H28.6092Z"
                    fill="white"
                  />
                  <path
                    d="M42.0116 35.5329H37.7109V43.998H40.9238V41.4723H42.0116C42.0116 41.4723 46.2162 42.0804 46.2162 38.6666C46.2162 35.2529 42.0116 35.5329 42.0116 35.5329ZM41.8249 39.7388H40.9238V37.4105H41.745C41.745 37.4105 43.1741 37.3038 43.1741 38.512C43.1741 39.7201 41.8249 39.7388 41.8249 39.7388Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_1031">
                    <rect
                      width="54.25"
                      height={50}
                      fill="white"
                    />
                  </clippath>
                </defs>
              </svg>
              <svg
                width={36}
                height={50}
                viewBox="0 0 36 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[35.42px] h-[50px] relative"
                preserveAspectRatio="none">
                <g clip-path="url(#clip0_1_1048)">
                  <path
                    d="M23.2836 43.9984H24.9373C27.7807 43.9867 30.5042 42.8519 32.5148 40.8413C34.5254 38.8307 35.6601 36.1072 35.6719 33.2638V21.6721C35.6601 17.5192 34.0052 13.5398 31.0686 10.6033C28.1321 7.66674 24.1527 6.01179 19.9998 6L15.9221 6C11.7692 6.01179 7.78981 7.66674 4.85327 10.6033C1.91674 13.5398 0.261793 17.5192 0.25 21.6721V33.2638C0.261765 36.1072 1.39651 38.8307 3.4071 40.8413C5.41769 42.8519 8.14125 43.9867 10.9846 43.9984H12.7593V42.2133C10.8594 42.1106 9.07065 41.2852 7.75965 39.9063C6.44865 38.5273 5.71464 36.6992 5.70802 34.7966V23.5545C5.71703 20.6819 6.86234 17.9296 8.89381 15.8987C10.9253 13.8677 13.6779 12.723 16.5504 12.7147H19.3715C22.2454 12.721 25 13.8647 27.0332 15.8959C29.0664 17.9271 30.2127 20.6806 30.2218 23.5545V34.7966C30.2157 36.6784 29.4978 38.4883 28.2123 39.8626C26.9267 41.2369 25.1687 42.0739 23.2915 42.2054L23.2836 43.9984Z"
                    fill="white"
                  />
                  <path
                    d="M17.9603 32.8641C21.827 32.8641 24.9616 28.9114 24.9616 24.0356C24.9616 19.1597 21.827 15.207 17.9603 15.207C14.0936 15.207 10.959 19.1597 10.959 24.0356C10.959 28.9114 14.0936 32.8641 17.9603 32.8641Z"
                    fill="white"
                  />
                  <path
                    d="M11.1958 38.4262L10.67 40.0247H9.97852L11.7032 34.9453H12.4919L14.2271 40.0247H13.5383L12.9967 38.4262H11.1958ZM12.86 37.9004L12.3631 36.4386C12.2501 36.1074 12.1738 35.805 12.1002 35.5106H12.0818C12.0056 35.8129 11.9241 36.1232 11.8189 36.4308L11.322 37.9004H12.86Z"
                    fill="white"
                  />
                  <path
                    d="M14.7656 35.0039C15.1817 34.9344 15.6031 34.9009 16.025 34.904C16.5356 34.8669 17.0423 35.0174 17.4499 35.3272C17.5954 35.4602 17.7104 35.6229 17.7871 35.8045C17.8638 35.986 17.9004 36.1819 17.8943 36.3789C17.904 36.5768 17.8744 36.7746 17.8071 36.961C17.7399 37.1474 17.6364 37.3186 17.5025 37.4647C17.2945 37.6576 17.0496 37.8064 16.7826 37.9022C16.5156 37.998 16.2319 38.0388 15.9487 38.0221C15.7723 38.0274 15.5959 38.0124 15.4229 37.9774V40.0123H14.7656V35.0039ZM15.4229 37.4516C15.6004 37.4925 15.7824 37.5101 15.9645 37.5041C16.7532 37.5041 17.237 37.1203 17.237 36.4209C17.237 35.7216 16.7637 35.4245 16.0407 35.4245C15.8335 35.4194 15.6263 35.437 15.4229 35.4771V37.4516Z"
                    fill="white"
                  />
                  <path
                    d="M18.7458 38.4262L18.22 40.0247H17.5391L19.2638 34.9453H20.0525L21.7877 40.0247H21.0884L20.5468 38.4262H18.7458ZM20.41 37.9004L19.9131 36.4386C19.8001 36.1074 19.7238 35.805 19.6502 35.5106H19.6345C19.5582 35.8129 19.4767 36.1232 19.3715 36.4308L18.8746 37.9004H20.41Z"
                    fill="white"
                  />
                  <path
                    d="M23.1384 38.4262L22.6126 40.0247H21.9316L23.6484 34.9453H24.4372L26.1698 40.0247H25.4888L24.9472 38.4262H23.1384ZM24.8026 37.9004L24.3057 36.4386C24.1927 36.1074 24.1164 35.805 24.0428 35.5106H24.027C23.9508 35.8129 23.8693 36.1232 23.7641 36.4308L23.2646 37.9004H24.8026Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_1048">
                    <rect
                      width="35.4219"
                      height={50}
                      fill="white"
                      transform="translate(0.25)"
                    />
                  </clippath>
                </defs>
              </svg>
              <svg
                width={98}
                height={50}
                viewBox="0 0 98 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[96.69px] h-[50px] relative"
                preserveAspectRatio="none">
                <g clip-path="url(#clip0_1_1056)">
                  <path
                    d="M19.4655 43.9989C19.0325 43.8968 18.5889 43.9038 18.1488 43.844C16.7438 43.6484 15.3678 43.2831 14.0508 42.7561H14.3183C16.8145 42.7561 19.3141 42.7561 21.8103 42.7561C21.906 42.7704 22.0038 42.7551 22.0906 42.7124C22.1775 42.6696 22.2492 42.6013 22.2961 42.5167C22.3384 42.4392 22.4123 42.3758 22.4581 42.3019C22.5062 42.2126 22.5808 42.1404 22.6715 42.095C22.7622 42.0496 22.8647 42.0334 22.9651 42.0484C24.9789 42.0484 26.9927 42.0484 29.0065 42.0484H29.267C28.7275 42.3591 28.1577 42.6139 27.5665 42.8089C25.8165 43.4444 23.9851 43.8284 22.1271 43.9496C22.0849 43.9496 22.0356 43.9496 22.011 43.9918L19.4655 43.9989Z"
                    fill="white"
                  />
                  <path
                    d="M97.3585 24.8641C97.0874 24.8641 96.8198 24.8641 96.5523 24.8641C96.3938 24.8641 96.334 24.8219 96.334 24.6529C96.334 22.7494 96.334 20.8447 96.334 18.9389C96.334 18.7699 96.3938 18.7241 96.5523 18.7312C96.8198 18.7312 97.0874 18.7312 97.3585 18.7312V24.8641Z"
                    fill="white"
                  />
                  <path
                    d="M33.3892 43.9994C33.2208 43.927 33.0563 43.8459 32.8963 43.7565C32.5743 43.5639 32.3269 43.2683 32.194 42.9175C32.061 42.5667 32.0505 42.1812 32.164 41.8237C32.2913 41.4525 32.5413 41.1358 32.8729 40.9258C33.2044 40.7159 33.5977 40.6253 33.9877 40.6689C34.3566 40.7141 34.7002 40.8801 34.9649 41.1412C35.2295 41.4022 35.4003 41.7435 35.4506 42.1118C35.5008 42.4801 35.4277 42.8546 35.2427 43.177C35.0577 43.4994 34.7711 43.7514 34.4277 43.8938C34.3468 43.9255 34.2482 43.9149 34.1954 43.9994H33.3892ZM33.7764 43.7389C33.9611 43.7435 34.1448 43.7099 34.316 43.6403C34.4872 43.5708 34.6422 43.4667 34.7714 43.3345C34.9005 43.2024 35.0011 43.0451 35.0667 42.8723C35.1324 42.6996 35.1618 42.5152 35.153 42.3307C35.1624 42.1461 35.1342 41.9616 35.07 41.7884C35.0059 41.6151 34.9071 41.4567 34.7799 41.3228C34.6526 41.1889 34.4994 41.0822 34.3296 41.0094C34.1598 40.9365 33.977 40.8989 33.7923 40.8989C33.6075 40.8989 33.4247 40.9365 33.2549 41.0094C33.0851 41.0822 32.9319 41.1889 32.8047 41.3228C32.6774 41.4567 32.5787 41.6151 32.5145 41.7884C32.4504 41.9616 32.4221 42.1461 32.4315 42.3307C32.423 42.5116 32.4511 42.6925 32.5142 42.8623C32.5773 43.0322 32.674 43.1875 32.7987 43.3191C32.9233 43.4506 33.0732 43.5556 33.2394 43.6277C33.4056 43.6999 33.5847 43.7377 33.7659 43.7389H33.7764Z"
                    fill="white"
                  />
                  <path
                    d="M14.4659 25.8969C14.5997 25.1927 14.7229 24.5907 14.8426 23.9781C15.1665 22.3023 15.4893 20.6264 15.8108 18.9506C15.8425 18.7957 15.8847 18.7218 16.0678 18.7253C16.9726 18.7253 17.8774 18.7253 18.7787 18.7253C18.997 18.7253 19.0111 18.8028 18.9759 18.9788C18.5065 21.4432 18.037 23.9077 17.5676 26.3721C17.2719 27.9177 16.9726 29.4633 16.6875 31.0088C16.6522 31.2095 16.5818 31.2694 16.3776 31.2694C15.494 31.2694 14.6173 31.2694 13.7195 31.2694C13.6398 31.2785 13.5593 31.2601 13.4914 31.2172C13.4235 31.1743 13.3723 31.1095 13.3464 31.0335C12.3324 28.7239 11.3126 26.4179 10.2869 24.1154C10.2482 24.0274 10.2024 23.9394 10.132 23.788C10.0334 24.2809 9.94541 24.7069 9.86444 25.1329C9.48421 27.1068 9.10515 29.0819 8.72727 31.0581C8.69559 31.2236 8.63221 31.2764 8.46322 31.2729C7.55138 31.2729 6.63601 31.2729 5.72416 31.2729C5.55517 31.2729 5.4918 31.2729 5.53052 31.0511C6.30741 27.0258 7.08196 22.997 7.85415 18.9647C7.88936 18.7781 7.95625 18.7218 8.14636 18.7253C9.04413 18.7253 9.93837 18.7253 10.8361 18.7253C10.9116 18.7206 10.9866 18.7403 11.05 18.7815C11.1134 18.8227 11.1619 18.8832 11.1882 18.9541C12.2327 21.198 13.2889 23.4394 14.3568 25.6786L14.4659 25.8969Z"
                    fill="white"
                  />
                  <path
                    d="M26.9531 31.2677C27.3686 30.4791 27.7523 29.7432 28.1361 29.0074C29.8987 25.6558 31.6591 22.3006 33.417 18.9419C33.4451 18.873 33.4943 18.8147 33.5576 18.7755C33.6208 18.7363 33.6949 18.7181 33.7691 18.7236C34.7549 18.7236 35.7407 18.7236 36.7264 18.7236C36.9166 18.7236 36.987 18.7729 37.0222 18.963C37.7099 22.7066 38.4011 26.4503 39.0958 30.1939C39.1486 30.4755 39.1874 30.7607 39.2543 31.0388C39.293 31.2043 39.2543 31.2571 39.0817 31.2536C38.1429 31.2536 37.2041 31.2536 36.2652 31.2536C36.0892 31.2536 36.0329 31.1867 36.0047 31.0318C35.8991 30.472 35.7829 29.9122 35.6843 29.3489C35.6597 29.2046 35.6069 29.1553 35.459 29.1588H31.5053C31.4492 29.1531 31.3927 29.1662 31.3449 29.1962C31.297 29.2262 31.2606 29.2712 31.2413 29.3243C30.9385 29.9122 30.6287 30.4967 30.3189 31.0846C30.2766 31.1691 30.252 31.2712 30.1182 31.2712L26.9531 31.2677ZM34.5401 23.0646L32.4946 26.9126C33.3501 26.9126 34.1564 26.9126 34.9591 26.9126C35.2231 26.9126 35.2583 26.8387 35.2126 26.6063C34.9837 25.4551 34.7725 24.3074 34.5401 23.0646Z"
                    fill="white"
                  />
                  <path
                    d="M25.4611 18.7291C27.1721 18.7291 28.8832 18.7291 30.5942 18.7291C30.8195 18.7291 30.8794 18.7573 30.823 19.0073C30.6576 19.7642 30.5167 20.5317 30.3794 21.2957C30.3477 21.4858 30.2668 21.5351 30.0802 21.5316C29.0486 21.5316 28.0206 21.5316 26.989 21.5316C26.8201 21.5316 26.7461 21.5703 26.7109 21.7569C26.1312 24.8527 25.5444 27.945 24.9506 31.0338C24.9154 31.2098 24.8661 31.2873 24.6654 31.2873C23.7606 31.2873 22.8558 31.2873 21.951 31.2873C21.7644 31.2873 21.7116 31.2626 21.7538 31.0514C22.3547 27.965 22.9556 24.8879 23.5564 21.8203C23.6022 21.5949 23.574 21.514 23.3135 21.5175C22.1482 21.5175 20.9828 21.5175 19.8175 21.5175C19.6168 21.5175 19.5499 21.4752 19.5922 21.264C19.7506 20.493 19.9055 19.7219 20.0428 18.9474C20.078 18.7538 20.159 18.7115 20.3421 18.715C22.039 18.7326 23.7501 18.7291 25.4611 18.7291Z"
                    fill="white"
                  />
                  <path
                    d="M38.4451 32.9906C38.1125 33.7138 37.7253 34.4106 37.2868 35.0749C37.2657 35.114 37.2332 35.1458 37.1935 35.1659C37.1539 35.186 37.109 35.1936 37.065 35.1875C37.0028 35.184 36.9405 35.184 36.8784 35.1875C26.1662 35.1875 15.4529 35.1875 4.73842 35.1875C4.61872 35.1875 4.46733 35.2509 4.38636 35.1418C4.254 34.9675 4.13625 34.7826 4.03429 34.589C3.99909 34.5256 4.05542 34.4975 4.11879 34.4975H14.4554C14.7758 34.4975 14.7758 34.4975 14.6737 34.1982C14.4836 33.6384 14.4836 33.6384 15.0856 33.6384C18.9466 33.6384 22.8076 33.6384 26.6685 33.6384C26.9115 33.6384 27.0206 33.5716 27.0558 33.3286C27.091 33.0857 27.2248 32.9766 27.5029 32.9766C31.1128 32.9766 34.7226 32.9766 38.3324 32.9766L38.4451 32.9906Z"
                    fill="white"
                  />
                  <path
                    d="M4.01953 15.4683C4.15332 15.2536 4.26246 15.0916 4.3716 14.9191C4.3901 14.8792 4.421 14.8463 4.4597 14.8254C4.49839 14.8044 4.54282 14.7966 4.58636 14.8029C4.63916 14.8029 4.6955 14.8029 4.7483 14.8029C15.4863 14.8029 26.2254 14.8029 36.9657 14.8029C37.0654 14.7949 37.1653 14.8163 37.2529 14.8645C37.3405 14.9126 37.4121 14.9855 37.4586 15.074C37.8464 15.7006 38.199 16.3482 38.5148 17.0139H38.1944C34.6315 17.0139 31.0675 17.0139 27.5022 17.0139C27.2558 17.0139 27.1255 16.9435 27.1114 16.7076C27.0903 16.3555 26.9037 16.3168 26.601 16.3203C22.686 16.3203 18.771 16.3203 14.8561 16.3203H14.504L14.7857 15.4613L4.01953 15.4683Z"
                    fill="white"
                  />
                  <path
                    d="M15.6869 13.2981L16.0883 12.3968H6.23047L6.87475 11.7772C6.97333 11.6821 7.09655 11.7173 7.20921 11.7173H17.8099C23.3443 11.7173 28.88 11.7173 34.4168 11.7173C34.5169 11.7133 34.6168 11.7306 34.7097 11.7683C34.8026 11.8059 34.8863 11.863 34.9554 11.9356C35.5283 12.5159 36.0567 13.1384 36.5362 13.798C36.5644 13.8403 36.6172 13.8719 36.596 13.9424C36.5138 13.9723 36.425 13.9795 36.339 13.9635C33.0261 13.9635 29.7132 13.9635 26.4003 13.9635C26.182 13.9635 26.0482 13.9072 26.013 13.6994C25.939 13.3685 25.7348 13.2875 25.3969 13.2875C22.2705 13.3051 19.1442 13.2875 16.0214 13.2875L15.6869 13.2981Z"
                    fill="white"
                  />
                  <path
                    d="M6.30469 37.612C6.39853 37.5659 6.50504 37.5522 6.60746 37.5732C9.65869 37.5732 12.7099 37.5732 15.7611 37.5732C16.0921 37.5732 16.0921 37.5732 15.9548 37.281C15.6802 36.6966 15.6802 36.6966 16.328 36.6966C19.4027 36.6966 22.475 36.6966 25.545 36.6966C25.7703 36.6966 25.8971 36.6367 25.9429 36.4149C25.9992 36.0946 26.1893 36.0206 26.5062 36.0206C29.7592 36.0206 33.0088 36.0206 36.2619 36.0206C36.3804 35.9977 36.5032 36.0112 36.6139 36.0594C36.1915 36.6332 35.7443 37.1754 35.2866 37.7105C35.1304 37.8986 34.9309 38.0461 34.7054 38.1405C34.4798 38.235 34.2347 38.2734 33.991 38.2527C25.1167 38.2363 16.24 38.2363 7.36088 38.2527C7.22794 38.2688 7.0931 38.25 6.96963 38.1982C6.84616 38.1463 6.73833 38.0632 6.65675 37.957C6.53001 37.8408 6.41031 37.7352 6.30469 37.612Z"
                    fill="white"
                  />
                  <path
                    d="M2.24186 31.2681C1.79474 31.2681 1.34409 31.2681 0.896972 31.2681C0.706857 31.2681 0.639964 31.2681 0.685733 31.0216C1.45323 27.0316 2.21369 23.0415 2.96711 19.0514C3.01288 18.812 3.08329 18.6994 3.35438 18.724C4.22046 18.7452 5.09006 18.724 5.95966 18.724C6.15682 18.724 6.22723 18.7592 6.18498 18.974C5.71556 21.4384 5.24614 23.9029 4.77672 26.3674C4.48099 27.9094 4.18173 29.455 3.89656 31.0005C3.85783 31.2188 3.77334 31.2751 3.56562 31.2681C3.1361 31.2575 2.67842 31.2681 2.24186 31.2681Z"
                    fill="white"
                  />
                  <path
                    d="M17.3038 10.2249L17.8319 9.34121H9.94922C10.4245 9.05252 10.7836 8.63709 11.4314 8.63709C17.7686 8.66173 24.1057 8.63709 30.4429 8.63709C30.6304 8.63189 30.8154 8.68209 30.9745 8.78143C31.9034 9.35649 32.7905 9.9965 33.6291 10.6967C33.6947 10.7407 33.7423 10.807 33.7629 10.8833H33.5094C30.6436 10.8833 27.7778 10.8833 24.912 10.8833C24.6796 10.8833 24.5317 10.8234 24.4578 10.6122C24.3451 10.2847 24.1057 10.2073 23.7783 10.2108C21.7434 10.2249 19.6838 10.2249 17.6383 10.2249H17.3038Z"
                    fill="white"
                  />
                  <path
                    d="M33.8088 39.0938C32.8719 39.8973 31.8698 40.6216 30.8127 41.2589C30.7592 41.2928 30.6964 41.3088 30.6332 41.3047H30.5276L11.0514 41.3223C10.9714 41.3298 10.8911 41.3113 10.8225 41.2695L9.82617 40.6604H17.8251C17.6667 40.4175 17.5399 40.2274 17.4202 40.0338C17.3815 39.9704 17.2864 39.9105 17.3287 39.8296C17.3709 39.7486 17.473 39.7873 17.5469 39.7873H20.0114C21.3 39.7873 22.592 39.7873 23.8841 39.7873C23.9802 39.8043 24.0792 39.7862 24.1631 39.7365C24.2471 39.6868 24.3105 39.6086 24.3418 39.5162C24.465 39.1642 24.6939 39.0938 25.0459 39.0938C27.8413 39.0938 30.6332 39.0938 33.4286 39.0938H33.8088Z"
                    fill="white"
                  />
                  <path
                    d="M29.3057 7.93061H25.3591C24.75 7.93061 24.1374 7.89188 23.5319 7.93061C22.9263 7.96934 22.4757 7.88836 22.2081 7.3145C22.1623 7.21592 22.0673 7.19831 21.9581 7.19831H14.0684C14.7725 6.62445 19.1522 5.90272 21.7504 6.00129C24.3718 6.10723 26.9455 6.73689 29.3198 7.85315L29.3057 7.93061Z"
                    fill="white"
                  />
                  <path
                    d="M68.4057 29.1915C68.5513 28.9533 68.7598 28.7599 69.0082 28.6326C69.2567 28.5052 69.5355 28.4489 69.8139 28.4698C70.0303 28.4561 70.2463 28.5012 70.4391 28.6004C70.6319 28.6996 70.7942 28.8491 70.9088 29.0331C71.0004 29.1915 71.0461 29.1247 71.1306 29.0331C71.3907 28.7445 71.7388 28.5501 72.1209 28.48C72.503 28.41 72.8975 28.4683 73.243 28.6458C73.4394 28.7403 73.6031 28.8913 73.7129 29.0796C73.8227 29.2678 73.8736 29.4846 73.8591 29.702C73.8803 30.7582 73.8591 31.8144 73.8591 32.846C73.8591 32.9974 73.8028 33.0396 73.6549 33.0467C72.8874 33.0748 72.891 33.0783 72.8874 32.3108C72.8874 31.6454 72.8874 30.9836 72.8874 30.3217C72.8845 30.1257 72.8657 29.9302 72.8311 29.7372C72.8158 29.629 72.7672 29.5283 72.6922 29.4488C72.6171 29.3694 72.5193 29.3151 72.4121 29.2936C71.708 29.1739 71.2081 29.3887 71.1764 30.2231C71.1447 31.0575 71.1764 31.906 71.1764 32.7474C71.1764 32.9798 71.1236 33.0537 70.8807 33.0467C70.2012 33.0467 70.2012 33.0467 70.2012 32.3425C70.2012 31.7546 70.2012 31.1631 70.2012 30.5822C70.1964 30.3468 70.18 30.1118 70.1519 29.8781C70.1306 29.7449 70.0731 29.6202 69.9855 29.5177C69.8979 29.4152 69.7837 29.3389 69.6555 29.2972C69.4732 29.2526 69.2818 29.2621 69.1048 29.3246C68.9278 29.3872 68.773 29.5 68.6591 29.6492C68.5115 29.8755 68.432 30.1395 68.4303 30.4097C68.4303 31.2054 68.4303 32.001 68.4303 32.8002C68.4303 32.9833 68.381 33.0467 68.1909 33.0467C67.4551 33.0467 67.4551 33.0467 67.4551 32.3425C67.4551 31.1948 67.4551 30.0506 67.4551 28.9029C67.4551 28.6881 67.5184 28.6071 67.7297 28.6353C67.7742 28.6389 67.819 28.6389 67.8635 28.6353C68.3634 28.6212 68.3634 28.6212 68.4057 29.1915Z"
                    fill="white"
                  />
                  <path
                    d="M45.2223 35.0781C45.8032 35.0781 45.7926 35.0781 46.0003 35.6238C46.6646 37.3583 47.3335 39.0916 48.0071 40.8238C48.0353 40.8977 48.0634 40.9752 48.0951 41.0491C48.1268 41.123 48.0951 41.204 47.993 41.204H47.1058C46.9756 41.204 46.9509 41.1125 46.9192 41.0174C46.7819 40.6196 46.6341 40.2253 46.5073 39.8239C46.4927 39.7497 46.4503 39.684 46.3888 39.6401C46.3272 39.5962 46.2512 39.5776 46.1764 39.588C45.5251 39.588 44.8702 39.588 44.2154 39.588C44.1459 39.5779 44.0752 39.5954 44.0186 39.6369C43.9619 39.6784 43.9239 39.7405 43.9126 39.8098C43.7859 40.2112 43.631 40.602 43.5007 40.9998C43.496 41.0322 43.4848 41.0634 43.4678 41.0914C43.4508 41.1194 43.4283 41.1437 43.4017 41.1627C43.375 41.1818 43.3448 41.1953 43.3128 41.2024C43.2808 41.2095 43.2477 41.21 43.2155 41.204C42.9832 41.204 42.7473 41.204 42.5114 41.204C42.3635 41.204 42.3001 41.204 42.3706 41.0139C42.8869 39.6737 43.3998 38.33 43.9091 36.9827C44.1133 36.4476 44.3316 35.9265 44.5146 35.3773C44.5223 35.3253 44.5409 35.2756 44.5691 35.2313C44.5973 35.187 44.6346 35.1491 44.6785 35.1202C44.7223 35.0913 44.7718 35.0719 44.8237 35.0635C44.8755 35.055 44.9286 35.0576 44.9794 35.071C45.06 35.0806 45.1413 35.083 45.2223 35.0781ZM45.1906 36.1589C44.8913 37.0356 44.6167 37.8453 44.3386 38.6515C44.2823 38.8135 44.4055 38.7818 44.4865 38.7818C44.9336 38.7818 45.3807 38.7818 45.8243 38.7818C46.0496 38.7818 46.1165 38.7325 46.032 38.5037C45.8349 37.9685 45.6588 37.4263 45.4723 36.8877C45.3842 36.6694 45.3033 36.4511 45.1906 36.1589Z"
                    fill="white"
                  />
                  <path
                    d="M59.6751 32.5279C59.3057 32.9116 58.7994 33.1333 58.2669 33.1445C57.7344 33.1557 57.2192 32.9555 56.8339 32.5878C56.4804 32.1786 56.2735 31.6632 56.246 31.1232C56.1782 30.6063 56.2474 30.0806 56.4467 29.5988C56.5642 29.3144 56.7503 29.0636 56.9884 28.8687C57.2265 28.6738 57.5092 28.541 57.8112 28.482C58.1132 28.4231 58.4251 28.4399 58.7191 28.5309C59.013 28.622 59.2798 28.7844 59.4956 29.0038L59.5801 29.0742C59.6681 29.0284 59.6258 28.9475 59.6258 28.8841C59.6258 28.3102 59.6258 27.7399 59.6258 27.166C59.6258 26.9794 59.6575 26.8984 59.8723 26.8984C60.6398 26.8984 60.6398 26.8984 60.6398 27.6624C60.6398 29.3453 60.6398 31.0282 60.6398 32.711C60.6398 32.961 60.5905 33.0842 60.3194 33.0384C60.2749 33.0349 60.2301 33.0349 60.1856 33.0384C59.6962 33.0384 59.6962 33.0384 59.6751 32.5279ZM58.4746 29.2678C58.3318 29.2492 58.1867 29.2651 58.0513 29.3141C57.9159 29.3631 57.7943 29.4438 57.6965 29.5495C57.4165 29.8707 57.2474 30.2737 57.2144 30.6986C57.1815 31.1235 57.2863 31.5477 57.5134 31.9083C57.6181 32.0571 57.7575 32.178 57.9196 32.2606C58.0816 32.3432 58.2614 32.3849 58.4433 32.3821C58.6252 32.3793 58.8036 32.3322 58.9631 32.2447C59.1225 32.1572 59.2582 32.032 59.3583 31.8802C59.5479 31.5912 59.6595 31.2581 59.6824 30.9133C59.7052 30.5684 59.6384 30.2235 59.4885 29.9121C59.4162 29.7066 59.2769 29.5313 59.093 29.4145C58.9091 29.2977 58.6913 29.246 58.4746 29.2678V29.2678Z"
                    fill="white"
                  />
                  <path
                    d="M72.6273 22.7581C72.6273 23.1348 72.6273 23.5115 72.6273 23.8847C72.6273 24.0677 72.6625 24.191 72.8737 24.1698C73.0322 24.1698 73.0639 24.2367 73.0674 24.3776C73.0674 24.9092 73.0251 24.969 72.49 24.9761C72.3381 24.9954 72.1839 24.9685 72.0476 24.8987C71.9113 24.829 71.7992 24.7198 71.726 24.5853C71.6415 24.4198 71.5922 24.5536 71.5324 24.5853C71.2351 24.7784 70.8988 24.9031 70.5475 24.9506C70.1962 24.9981 69.8388 24.9671 69.501 24.8599C69.2424 24.7812 69.016 24.6216 68.8551 24.4045C68.6943 24.1874 68.6074 23.9243 68.6074 23.6541C68.6074 23.3838 68.6943 23.1208 68.8551 22.9037C69.016 22.6866 69.2424 22.5269 69.501 22.4482C70.0263 22.3115 70.5621 22.2185 71.1029 22.1701C71.5183 22.0997 71.6908 21.9272 71.6626 21.6174C71.6424 21.4645 71.5643 21.3253 71.4444 21.2284C71.3245 21.1314 71.172 21.0842 71.0184 21.0963C70.742 21.0628 70.4617 21.0917 70.198 21.1808C70.1123 21.2159 70.0359 21.2704 69.9748 21.3401C69.9137 21.4097 69.8696 21.4926 69.846 21.5822C69.8439 21.6098 69.8379 21.6371 69.8284 21.6631C69.5542 21.8167 69.2313 21.8583 68.9271 21.7793C68.7335 21.6913 68.8356 21.5188 68.8743 21.385C69.0433 20.7478 69.5291 20.4802 70.1206 20.3535C70.63 20.2489 71.1568 20.2646 71.6591 20.3992C71.9341 20.4683 72.179 20.6254 72.3563 20.8466C72.5337 21.0678 72.6338 21.341 72.6414 21.6244C72.6343 22.0046 72.6273 22.3814 72.6273 22.7581ZM71.6169 22.6595C71.3422 22.7432 71.0606 22.8021 70.7754 22.8355C70.4622 22.8526 70.1568 22.9392 69.8812 23.089C69.8126 23.1347 69.7546 23.1945 69.7111 23.2645C69.6676 23.3345 69.6395 23.413 69.6289 23.4947C69.6182 23.5764 69.6251 23.6594 69.6492 23.7382C69.6733 23.817 69.714 23.8898 69.7685 23.9516C70.0254 24.1298 70.3377 24.2098 70.6486 24.1768C70.9595 24.1439 71.2482 24.0002 71.462 23.772C71.719 23.427 71.5605 23.0503 71.6169 22.6595Z"
                    fill="white"
                  />
                  <path
                    d="M79.1336 30.9377C79.1336 31.3214 79.1336 31.7052 79.1336 32.0925C79.1336 32.2896 79.2181 32.4058 79.4223 32.3847C79.6265 32.3635 79.6195 32.4692 79.623 32.6135C79.623 33.0888 79.5984 33.1275 79.1196 33.1416C78.9325 33.1629 78.743 33.145 78.5633 33.0888C78.4718 33.0501 78.3661 33.0184 78.3345 32.9198C78.25 32.6663 78.1443 32.7051 77.9401 32.8212C77.6606 32.9912 77.3479 33.0996 77.0231 33.139C76.6983 33.1785 76.3688 33.1482 76.0566 33.0501C75.7546 32.9664 75.4951 32.7722 75.3294 32.5062C75.1638 32.2402 75.1042 31.9216 75.1624 31.6137C75.2081 31.342 75.3405 31.0923 75.5397 30.902C75.7389 30.7117 75.9943 30.5908 76.2678 30.5575C76.7431 30.487 77.2219 30.4272 77.6761 30.3392C77.919 30.2969 78.1479 30.2054 78.1584 29.8921C78.1684 29.825 78.165 29.7566 78.1484 29.6909C78.1318 29.6251 78.1024 29.5633 78.0618 29.509C78.0212 29.4547 77.9703 29.4089 77.9119 29.3743C77.8536 29.3398 77.789 29.3171 77.7219 29.3076C77.3848 29.2045 77.0216 29.2283 76.7009 29.3745C76.6126 29.4154 76.535 29.476 76.4739 29.5517C76.4129 29.6274 76.3701 29.7162 76.3488 29.8111C76.3277 29.9378 76.2678 29.9695 76.1517 29.966C75.9545 29.966 75.7573 29.966 75.5602 29.966C75.363 29.966 75.2926 29.9132 75.3419 29.7019C75.3925 29.4574 75.5072 29.2308 75.6742 29.0452C75.8412 28.8596 76.0546 28.7217 76.2925 28.6457C76.9457 28.4045 77.6636 28.4045 78.3168 28.6457C78.5597 28.729 78.7695 28.8876 78.9158 29.0985C79.0621 29.3094 79.1372 29.5615 79.1301 29.8181C79.1372 30.1843 79.1336 30.561 79.1336 30.9377ZM78.1267 31.3496C78.1267 31.2123 78.1936 31.0363 78.0986 30.9377C78.0035 30.8391 77.8592 30.9835 77.7465 30.994C77.702 30.9975 77.6572 30.9975 77.6127 30.994C77.2845 31.0143 76.9596 31.0722 76.6445 31.1665C76.5385 31.1901 76.4415 31.2439 76.3653 31.3213C76.2891 31.3988 76.2369 31.4966 76.215 31.6031C76.1833 31.7897 76.1481 32.0115 76.3382 32.1488C76.5268 32.2859 76.7497 32.3681 76.9822 32.3861C77.2146 32.4041 77.4475 32.3573 77.655 32.2509C77.8306 32.1848 77.9757 32.0564 78.0627 31.8902C78.1497 31.724 78.1725 31.5315 78.1267 31.3496V31.3496Z"
                    fill="white"
                  />
                  <path
                    d="M85.2061 30.293C85.5019 30.0184 85.7941 29.7579 86.0722 29.4868C86.3504 29.2157 86.5898 28.9657 86.8432 28.6981C86.9182 28.6335 87.0155 28.6007 87.1143 28.6066C87.4347 28.6066 87.7551 28.6066 88.072 28.6066C88.1072 28.7122 88.0262 28.7474 87.9804 28.7897C87.5368 29.2051 87.0967 29.6241 86.6461 30.0325C86.6124 30.0528 86.5838 30.0806 86.5625 30.1138C86.5413 30.1469 86.5279 30.1845 86.5235 30.2236C86.5191 30.2628 86.5237 30.3024 86.537 30.3394C86.5504 30.3765 86.572 30.41 86.6003 30.4373C87.1319 31.2224 87.6565 32.0146 88.1776 32.8032C88.2198 32.8701 88.2621 32.937 88.329 33.0497C87.917 33.0497 87.5474 33.0497 87.1777 33.0497C87.0298 33.0497 87.0017 32.8842 86.9383 32.7856C86.5862 32.2329 86.2342 31.6837 85.8997 31.1239C85.7976 30.9514 85.7378 30.9584 85.5864 31.0816C85.4442 31.1816 85.3327 31.3192 85.2643 31.479C85.1959 31.6388 85.1733 31.8145 85.1991 31.9864C85.2343 32.2751 85.1991 32.5744 85.1991 32.8701C85.1991 33.0109 85.1463 33.0602 85.009 33.0567C84.8013 33.0567 84.5971 33.0567 84.3894 33.0567C84.1816 33.0567 84.1816 32.9898 84.1816 32.8349C84.1816 30.9373 84.1816 29.0361 84.1816 27.1385C84.1816 26.9554 84.2521 26.9097 84.421 26.9167C84.5992 26.929 84.778 26.929 84.9562 26.9167C85.1463 26.9167 85.2026 26.973 85.1991 27.1631C85.1991 28.1208 85.1991 29.0784 85.1991 30.036L85.2061 30.293Z"
                    fill="white"
                  />
                  <path
                    d="M94.7821 22.6786C94.7821 23.0518 94.7821 23.4285 94.7821 23.8052C94.7821 24.0446 94.8561 24.1925 95.099 24.2065C95.2292 24.2065 95.2785 24.2734 95.2609 24.3931C95.2433 24.5128 95.3525 24.7698 95.1835 24.8649C95.0566 24.9329 94.9171 24.9742 94.7736 24.9863C94.6301 24.9984 94.4856 24.9811 94.3491 24.9353C94.2083 24.8931 94.0393 24.8473 93.9794 24.6959C93.8844 24.453 93.7858 24.5375 93.6274 24.629C93.3388 24.8091 93.0139 24.9231 92.676 24.9626C92.3382 25.0022 91.9958 24.9664 91.6734 24.8579C91.427 24.7873 91.2114 24.6363 91.0608 24.4289C90.9102 24.2215 90.8334 23.9698 90.8425 23.7137C90.8425 23.0905 90.9552 22.7455 91.6664 22.4603C92.0726 22.3216 92.4976 22.2456 92.9268 22.235C93.1127 22.2127 93.2973 22.1797 93.4795 22.1364C93.582 22.1196 93.6757 22.0682 93.7449 21.9906C93.8141 21.9131 93.8546 21.8142 93.8597 21.7104C93.8728 21.6065 93.8516 21.5012 93.7996 21.4104C93.7475 21.3196 93.6673 21.2482 93.571 21.207C93.3697 21.1184 93.1518 21.0742 92.9319 21.0772C92.712 21.0803 92.4953 21.1305 92.2966 21.2246C92.2263 21.2575 92.1648 21.3065 92.1171 21.3677C92.0694 21.4289 92.0368 21.5005 92.0219 21.5766C91.9938 21.728 91.9022 21.7773 91.7544 21.7632C91.6065 21.7491 91.4516 21.7632 91.2967 21.7632C91.0115 21.7632 90.9622 21.7104 91.0291 21.4323C91.0931 21.1823 91.2261 20.9554 91.4128 20.7774C91.5996 20.5993 91.8326 20.4774 92.0853 20.4254C92.5696 20.2952 93.0762 20.27 93.571 20.3514C94.159 20.4395 94.8877 20.9359 94.7997 21.7597C94.7787 22.0655 94.7728 22.3722 94.7821 22.6786V22.6786ZM92.705 24.1713C93.4408 24.1713 93.7999 23.8193 93.7999 23.1151C93.7999 22.9743 93.8632 22.7983 93.7611 22.7067C93.659 22.6152 93.5358 22.7525 93.4091 22.7701C93.0104 22.8144 92.616 22.8909 92.2297 22.999C92.0904 23.0393 91.9708 23.1293 91.8936 23.252C91.8164 23.3746 91.7869 23.5214 91.8107 23.6644C91.8318 23.9601 92.0536 24.0552 92.2895 24.1361C92.4257 24.1671 92.5655 24.179 92.705 24.1713V24.1713Z"
                    fill="white"
                  />
                  <path
                    d="M54.8902 30.8679C54.8902 31.2517 54.8902 31.639 54.8902 32.0227C54.8902 32.248 54.9466 32.417 55.2423 32.3748C55.3655 32.3748 55.3866 32.4311 55.3937 32.5367C55.4359 33.0437 55.3655 33.1211 54.848 33.1317C54.4959 33.1317 54.1791 33.1317 54.0382 32.7233C53.9854 32.5825 53.908 32.7233 53.8552 32.7233C53.3164 33.074 52.662 33.2004 52.0315 33.0754C51.7254 33.0424 51.4441 32.8918 51.247 32.6553C51.0499 32.4188 50.9525 32.115 50.9753 31.8079C50.9617 31.6558 50.9783 31.5025 51.0241 31.3568C51.0699 31.2111 51.1439 31.0758 51.242 30.9587C51.3401 30.8417 51.4603 30.7451 51.5958 30.6745C51.7313 30.604 51.8793 30.5608 52.0315 30.5476C52.4328 30.4736 52.8412 30.4384 53.2461 30.375C53.3951 30.3492 53.5413 30.3091 53.6827 30.2553C53.7626 30.235 53.8341 30.19 53.8871 30.1269C53.9402 30.0637 53.9721 29.9855 53.9784 29.9033C53.9931 29.8103 53.9818 29.715 53.9458 29.628C53.9098 29.541 53.8504 29.4657 53.7742 29.4104C53.6385 29.3195 53.485 29.2584 53.324 29.2312C53.1629 29.2039 52.9979 29.2112 52.8398 29.2525C52.6818 29.2937 52.5343 29.368 52.4071 29.4705C52.2799 29.573 52.1758 29.7013 52.1019 29.8469C52.09 29.8798 52.0668 29.9073 52.0365 29.9247C52.0062 29.9421 51.9708 29.9483 51.9364 29.942C51.7604 29.942 51.5843 29.942 51.4013 29.942C51.1267 29.942 51.0774 29.8927 51.1443 29.6287C51.193 29.4042 51.2985 29.196 51.4508 29.024C51.6031 28.852 51.7969 28.722 52.0139 28.6464C52.3933 28.4848 52.8045 28.412 53.2163 28.4333C53.6281 28.4547 54.0296 28.5697 54.3903 28.7696C54.5526 28.8654 54.6852 29.0043 54.7734 29.1708C54.8617 29.3374 54.9021 29.5251 54.8902 29.7132C54.8902 30.0969 54.8902 30.4842 54.8902 30.8679ZM53.915 30.8679C53.6737 30.9467 53.4247 30.9998 53.1722 31.0264C52.8513 31.0397 52.5364 31.1175 52.2462 31.2552C52.1432 31.3089 52.0581 31.3915 52.0012 31.4927C51.9443 31.594 51.9181 31.7096 51.9258 31.8255C51.9278 31.9247 51.9603 32.0208 52.0189 32.1008C52.0775 32.1808 52.1593 32.2408 52.2533 32.2727C52.4704 32.3797 52.7133 32.4236 52.9542 32.3994C53.1951 32.3751 53.4243 32.2836 53.6158 32.1354C53.7059 32.076 53.7802 31.9957 53.8323 31.9012C53.8844 31.8068 53.9128 31.701 53.915 31.5932C53.9326 31.3503 53.9185 31.1109 53.9185 30.8503L53.915 30.8679Z"
                    fill="white"
                  />
                  <path
                    d="M75.2045 40.8545C74.4018 41.3404 73.5885 41.5199 72.74 41.0798C72.5428 40.9793 72.3803 40.8218 72.2736 40.6278C72.1669 40.4339 72.1209 40.2124 72.1415 39.9919C72.1288 39.779 72.1766 39.5668 72.2794 39.3799C72.3822 39.193 72.5358 39.039 72.7224 38.9358C73.1288 38.7511 73.5655 38.6425 74.011 38.6154C74.2469 38.5731 74.4898 38.5555 74.7151 38.5027C74.9404 38.4499 75.127 38.3724 75.1482 38.0978C75.1747 37.973 75.1531 37.8428 75.0879 37.7332C75.0226 37.6236 74.9184 37.5426 74.7961 37.5064C74.455 37.3823 74.081 37.3823 73.7399 37.5064C73.6358 37.5365 73.5419 37.5944 73.4681 37.6737C73.3943 37.7531 73.3434 37.851 73.321 37.957C73.2893 38.1119 73.2118 38.133 73.0815 38.1295C72.8844 38.1295 72.6837 38.1295 72.4901 38.1295C72.2964 38.1295 72.2683 38.0485 72.3 37.8831C72.3719 37.5562 72.5481 37.2617 72.8022 37.0438C73.0562 36.826 73.3742 36.6967 73.7082 36.6755C74.0748 36.642 74.4436 36.642 74.8102 36.6755C75.4615 36.7635 76.1375 37.1367 76.0706 37.9852C76.0213 38.6083 76.0706 39.2385 76.0706 39.8652C76.0771 40.0173 76.0924 40.169 76.1163 40.3194C76.1156 40.3487 76.1212 40.3778 76.1328 40.4048C76.1443 40.4317 76.1615 40.4559 76.1832 40.4756C76.205 40.4953 76.2307 40.5101 76.2586 40.519C76.2865 40.5279 76.3161 40.5306 76.3452 40.5271C76.5459 40.5271 76.5635 40.6257 76.5529 40.777C76.5476 40.8215 76.5476 40.8664 76.5529 40.9108C76.6022 41.1678 76.4684 41.2629 76.236 41.2629C76.0973 41.293 75.9555 41.3072 75.8136 41.3051C75.6796 41.2959 75.5512 41.2486 75.4432 41.1687C75.3353 41.0889 75.2525 40.9799 75.2045 40.8545ZM75.1517 39.4075C75.1517 39.0273 75.1517 39.0308 74.782 39.1223C74.703 39.1383 74.623 39.1489 74.5426 39.154C74.1787 39.1702 73.8208 39.2525 73.4864 39.397C73.3886 39.4425 73.3064 39.5159 73.25 39.608C73.1937 39.7 73.1657 39.8066 73.1696 39.9145C73.1574 40.0074 73.1726 40.1018 73.2133 40.1862C73.2539 40.2706 73.3182 40.3413 73.3984 40.3898C73.5715 40.5 73.7712 40.5615 73.9763 40.5677C74.1814 40.574 74.3845 40.5248 74.564 40.4253C74.7435 40.3258 74.8928 40.1797 74.9963 40.0025C75.0997 39.8252 75.1534 39.6233 75.1517 39.4181V39.4075Z"
                    fill="white"
                  />
                  <path
                    d="M64.5887 31.095C64.124 31.095 63.6593 31.095 63.1805 31.095C62.9622 31.095 62.927 31.1689 62.9692 31.3661C62.9931 31.5537 63.0615 31.7329 63.1689 31.8886C63.2763 32.0443 63.4194 32.172 63.5863 32.261C63.7532 32.3499 63.939 32.3976 64.1281 32.3999C64.3173 32.4023 64.5042 32.3592 64.6732 32.2744C64.8707 32.1845 65.0259 32.0218 65.1063 31.8202C65.1285 31.7574 65.172 31.7044 65.2292 31.6703C65.2864 31.6362 65.3538 31.6233 65.4196 31.6336C65.5897 31.6425 65.7601 31.6425 65.9301 31.6336C66.1132 31.6336 66.1449 31.7041 66.085 31.866C65.9784 32.194 65.7809 32.4849 65.5153 32.7049C65.2498 32.9249 64.9273 33.065 64.5852 33.1088C64.2651 33.1795 63.9334 33.1799 63.6131 33.11C63.2928 33.0401 62.9914 32.9015 62.7298 32.7039C62.3493 32.3733 62.0996 31.9175 62.0257 31.4189C61.9151 30.9964 61.9187 30.552 62.0362 30.1314C62.1538 29.7107 62.381 29.3288 62.6946 29.0248C62.9358 28.7969 63.228 28.63 63.5469 28.5382C63.8657 28.4463 64.202 28.4322 64.5274 28.497C64.8528 28.5618 65.158 28.7037 65.4174 28.9107C65.6767 29.1177 65.8827 29.3838 66.0181 29.6867C66.1869 30.0624 66.2653 30.4723 66.247 30.8837C66.247 31.0492 66.1836 31.0985 66.0252 31.095C65.5393 31.0915 65.064 31.095 64.5887 31.095ZM64.0853 30.3909H65.0218C65.152 30.3909 65.226 30.3697 65.2013 30.2113C65.1688 29.9567 65.0482 29.7216 64.8604 29.5467C64.6726 29.3717 64.4295 29.2681 64.1733 29.2537C63.8925 29.2328 63.6143 29.3188 63.3942 29.4944C63.1742 29.67 63.0287 29.9223 62.9868 30.2007C62.9516 30.3662 62.9868 30.4085 63.1488 30.4049C63.4621 30.3979 63.7719 30.4014 64.0853 30.4014V30.3909Z"
                    fill="white"
                  />
                  <path
                    d="M56.9072 22.8751C56.46 22.8751 56.0129 22.8751 55.5623 22.8751C55.3546 22.8751 55.2982 22.942 55.3194 23.1391C55.3347 23.373 55.4216 23.5964 55.5684 23.7791C55.7151 23.9618 55.9146 24.0948 56.1397 24.1601C56.3934 24.2421 56.668 24.2312 56.9144 24.1293C57.1608 24.0274 57.3629 23.8411 57.4845 23.6038C57.5038 23.5596 57.5368 23.5227 57.5787 23.4986C57.6205 23.4745 57.669 23.4645 57.7169 23.4701C57.8683 23.4701 58.0232 23.4701 58.1746 23.4701C58.5267 23.4701 58.5267 23.4701 58.3929 23.8221C58.2551 24.1248 58.0426 24.3873 57.7752 24.5851C57.5079 24.7828 57.1946 24.9092 56.8649 24.9523C56.4543 25.0308 56.0298 24.99 55.6416 24.8346C55.2535 24.6792 54.9181 24.4158 54.6751 24.0756C53.9709 22.9103 54.2632 21.3471 55.2454 20.6641C55.5257 20.4716 55.8483 20.3496 56.1859 20.3085C56.5234 20.2674 56.8659 20.3083 57.1842 20.4279C57.5025 20.5475 57.7873 20.7422 58.0143 20.9954C58.2412 21.2486 58.4037 21.5528 58.4879 21.8823C58.5595 22.1398 58.5858 22.4079 58.5654 22.6744C58.5478 22.8363 58.4879 22.8821 58.3295 22.8786C57.8577 22.868 57.3825 22.8751 56.9072 22.8751ZM56.446 22.2273H57.4106C57.4951 22.2273 57.562 22.2273 57.5479 22.097C57.5203 21.8579 57.4191 21.6332 57.2583 21.4541C57.0974 21.275 56.8849 21.1503 56.6502 21.0971C56.5068 21.0679 56.3591 21.0671 56.2155 21.095C56.0719 21.1229 55.9352 21.1788 55.8132 21.2596C55.6912 21.3403 55.5864 21.4444 55.5046 21.5657C55.4229 21.6871 55.3659 21.8233 55.337 21.9667C55.2912 22.1252 55.337 22.2414 55.5412 22.2308C55.8369 22.2167 56.1432 22.2273 56.446 22.2273V22.2273Z"
                    fill="white"
                  />
                  <path
                    d="M82.0911 24.9732C80.9399 25.0084 79.8379 24.2198 79.8379 22.6284C79.8379 21.0371 80.9434 20.2978 82.077 20.2872C83.2107 20.2767 84.3443 21.0582 84.3478 22.6249C84.3514 24.1916 83.2459 25.0119 82.0911 24.9732ZM83.3339 22.6496C83.3546 22.3171 83.2788 21.9858 83.1156 21.6955C83.0143 21.5136 82.8662 21.3622 82.6867 21.2567C82.5072 21.1513 82.3028 21.0957 82.0946 21.0957C81.8864 21.0957 81.682 21.1513 81.5026 21.2567C81.3231 21.3622 81.175 21.5136 81.0736 21.6955C80.9201 21.985 80.8399 22.3078 80.8399 22.6355C80.8399 22.9632 80.9201 23.2859 81.0736 23.5755C81.1573 23.7307 81.275 23.8651 81.4178 23.9685C81.5607 24.072 81.725 24.1419 81.8986 24.173C82.0722 24.2041 82.2505 24.1957 82.4204 24.1483C82.5903 24.1009 82.7473 24.0159 82.8797 23.8994C83.0376 23.7337 83.1594 23.5371 83.2376 23.322C83.3157 23.1069 83.3485 22.878 83.3339 22.6496V22.6496Z"
                    fill="white"
                  />
                  <path
                    d="M58.7624 38.9685C58.7624 37.8137 59.3292 36.9934 60.3467 36.7329C61.6493 36.4055 62.9168 36.997 63.1843 38.3559C63.2862 38.7368 63.2989 39.136 63.2213 39.5225C63.1438 39.909 62.9781 40.2724 62.7372 40.5845C62.3982 40.9553 61.9498 41.2081 61.4571 41.3063C60.9644 41.4044 60.4533 41.3428 59.9981 41.1302C59.6591 40.9852 59.3675 40.7479 59.1565 40.4455C58.9456 40.143 58.8236 39.7874 58.8046 39.4192C58.7725 39.2712 58.7583 39.1199 58.7624 38.9685V38.9685ZM62.2478 38.9967C62.2698 38.6996 62.2127 38.402 62.0824 38.1341C61.9882 37.9232 61.8338 37.7448 61.6386 37.6213C61.4434 37.4979 61.2161 37.4348 60.9851 37.4401C60.7542 37.4453 60.53 37.5187 60.3406 37.6509C60.1512 37.7832 60.0051 37.9684 59.9207 38.1834C59.7123 38.6946 59.7123 39.2671 59.9207 39.7783C59.9866 39.9755 60.1045 40.1513 60.2621 40.2871C60.4196 40.4229 60.6109 40.5136 60.8157 40.5497C61.0206 40.5857 61.2313 40.5658 61.4258 40.492C61.6202 40.4182 61.7911 40.2932 61.9204 40.1303C62.0485 39.9729 62.144 39.7917 62.2014 39.5971C62.2588 39.4025 62.277 39.1984 62.2549 38.9967H62.2478Z"
                    fill="white"
                  />
                  <path
                    d="M85.6074 36.6833C86.9171 36.5777 87.8606 37.5987 87.8465 39.0104C87.8324 40.4222 86.9663 41.3305 85.6003 41.3305C84.2343 41.3305 83.3401 40.2919 83.3577 38.9506C83.3753 37.6092 84.2554 36.5882 85.6074 36.6833ZM86.8713 38.8978C86.8619 38.5598 86.7569 38.2314 86.5685 37.9507C86.4502 37.7585 86.2755 37.6073 86.0683 37.5179C85.861 37.4284 85.6313 37.405 85.4102 37.4508C85.1956 37.484 84.9947 37.5769 84.8303 37.7188C84.666 37.8608 84.5449 38.046 84.4808 38.2535C84.3149 38.7206 84.3087 39.2295 84.4632 39.7005C84.5083 39.8562 84.5846 40.0012 84.6873 40.1267C84.79 40.2522 84.9171 40.3556 85.0609 40.4306C85.2047 40.5056 85.3622 40.5507 85.5239 40.5632C85.6855 40.5757 85.8481 40.5553 86.0017 40.5032C86.5016 40.3166 86.8713 39.6899 86.8713 38.8978V38.8978Z"
                    fill="white"
                  />
                  <path
                    d="M52.141 38.0395H51.789C51.7185 38.0395 51.6446 38.0395 51.6094 37.9585C51.4122 37.4234 50.951 37.4515 50.511 37.4586C50.3877 37.4698 50.268 37.5057 50.1589 37.5642C50.0962 37.5869 50.0412 37.627 50.0004 37.6797C49.9596 37.7324 49.9346 37.7957 49.9283 37.8621C49.922 37.9285 49.9348 37.9953 49.965 38.0547C49.9952 38.1142 50.0417 38.1638 50.099 38.1979C50.3796 38.3765 50.6978 38.4874 51.0285 38.5218C51.4176 38.5775 51.7968 38.6877 52.1551 38.8492C52.324 38.9345 52.4704 39.0584 52.5822 39.211C52.6941 39.3636 52.7684 39.5404 52.7989 39.7271C52.8295 39.9138 52.8155 40.1051 52.758 40.2854C52.7006 40.4657 52.6014 40.6298 52.4684 40.7644C51.6904 41.5883 49.8772 41.5531 49.1344 40.694C48.958 40.4896 48.8617 40.2282 48.8633 39.9582C48.8633 39.8174 48.9126 39.7611 49.0499 39.7681C49.1483 39.7769 49.2472 39.7769 49.3456 39.7681C49.6449 39.7294 49.8808 39.7681 49.9512 40.1202C49.974 40.2045 50.0185 40.2814 50.0803 40.3431C50.142 40.4049 50.2189 40.4494 50.3032 40.4722C50.5003 40.546 50.7101 40.5799 50.9204 40.5721C51.1307 40.5642 51.3374 40.5147 51.5284 40.4265C51.6099 40.3982 51.6806 40.3455 51.731 40.2756C51.7814 40.2057 51.809 40.1219 51.8101 40.0357C51.8111 39.9455 51.7865 39.857 51.7392 39.7803C51.6918 39.7036 51.6236 39.642 51.5425 39.6026C51.1996 39.449 50.837 39.3436 50.4652 39.2893C50.1878 39.2224 49.9149 39.1378 49.6484 39.0358C49.4366 38.9611 49.2541 38.8208 49.1275 38.6353C49.0009 38.4498 48.9367 38.2287 48.9443 38.0043C48.9302 37.7601 48.9956 37.518 49.1308 37.3142C49.2661 37.1104 49.4637 36.956 49.6942 36.8741C50.3528 36.5977 51.0923 36.5838 51.7608 36.8354C51.9819 36.9126 52.1794 37.0455 52.3342 37.2212C52.489 37.397 52.5958 37.6097 52.6445 37.8388C52.6902 38.0148 52.6445 38.0641 52.472 38.0465C52.3558 38.0395 52.2502 38.0395 52.141 38.0395Z"
                    fill="white"
                  />
                  <path
                    d="M57.0793 38.0384H56.7272C56.6924 38.0434 56.6569 38.0376 56.6254 38.0219C56.594 38.0062 56.5681 37.9812 56.5512 37.9503C56.4395 37.7532 56.2654 37.5988 56.0564 37.5115C55.8473 37.4242 55.6151 37.4089 55.3964 37.468C55.3005 37.4861 55.2072 37.5157 55.1183 37.556C55.0521 37.576 54.9933 37.6149 54.9491 37.6681C54.905 37.7212 54.8774 37.7862 54.8699 37.8549C54.8624 37.9236 54.8753 37.9929 54.9069 38.0544C54.9386 38.1158 54.9876 38.1665 55.0479 38.2003C55.3286 38.3778 55.6469 38.4875 55.9773 38.5207C56.3572 38.5782 56.7278 38.686 57.0793 38.8411C57.2633 38.9304 57.4214 39.0653 57.5387 39.2329C57.6559 39.4006 57.7284 39.5954 57.7492 39.7989C57.77 40.0024 57.7385 40.2078 57.6576 40.3957C57.5767 40.5836 57.4491 40.7477 57.287 40.8725C56.7915 41.2514 56.1666 41.4197 55.5478 41.3407C55.0653 41.3226 54.6007 41.1526 54.2205 40.8549C53.9628 40.6135 53.8088 40.2816 53.791 39.9289C53.791 39.7952 53.8544 39.7811 53.9494 39.7811C54.1748 39.7811 54.4001 39.7811 54.6219 39.7811C54.6441 39.777 54.6668 39.7778 54.6887 39.7833C54.7105 39.7887 54.731 39.7988 54.7487 39.8128C54.7663 39.8268 54.7808 39.8444 54.7911 39.8644C54.8014 39.8844 54.8073 39.9064 54.8085 39.9289C54.9141 40.5099 55.5126 40.6331 55.9492 40.5662C56.1101 40.563 56.2689 40.5296 56.4174 40.4676C56.5116 40.436 56.5948 40.3781 56.6572 40.3007C56.7196 40.2234 56.7585 40.1298 56.7695 40.031C56.769 39.9316 56.7375 39.8348 56.6795 39.754C56.6214 39.6733 56.5397 39.6126 56.4456 39.5804C56.1426 39.447 55.8228 39.3558 55.495 39.3093C55.2243 39.2505 54.9584 39.1717 54.6993 39.0734C54.4604 39.0233 54.2473 38.8892 54.0987 38.6954C53.9502 38.5016 53.876 38.261 53.8896 38.0172C53.8653 37.7682 53.9267 37.5184 54.0637 37.309C54.2007 37.0997 54.4051 36.9434 54.643 36.866C55.2933 36.5927 56.0231 36.5763 56.685 36.8202C56.9064 36.8962 57.1049 37.0272 57.2619 37.2008C57.4189 37.3745 57.5293 37.5851 57.5827 37.813C57.632 37.9855 57.5827 38.0595 57.4032 38.0384C57.2941 38.0384 57.1849 38.0384 57.0793 38.0384Z"
                    fill="white"
                  />
                  <path
                    d="M44.3551 30.4273C44.3551 29.6774 44.3551 28.924 44.3551 28.1706C44.3551 27.9136 44.2706 27.8572 44.0347 27.8678C43.57 27.8678 43.1053 27.8678 42.6264 27.8678C42.4504 27.8678 42.387 27.815 42.3976 27.639C42.4135 27.4692 42.4135 27.2983 42.3976 27.1285C42.3976 26.9313 42.4715 26.8926 42.6476 26.8926C44.1544 26.8926 45.6589 26.8926 47.161 26.8926C47.3547 26.8926 47.4004 26.9595 47.4004 27.139C47.4004 27.8643 47.4004 27.8643 46.6963 27.8643C46.3442 27.8643 46.0133 27.8643 45.6753 27.8643C45.4606 27.8643 45.4042 27.9241 45.4042 28.1354C45.4042 29.6668 45.4042 31.1983 45.4042 32.7298C45.4042 32.9798 45.3338 33.0819 45.0874 33.0396C44.9366 33.0203 44.784 33.0203 44.6332 33.0396C44.3621 33.0748 44.3093 32.9587 44.3128 32.7087C44.3656 31.9517 44.3551 31.1913 44.3551 30.4273Z"
                    fill="white"
                  />
                  <path
                    d="M64.4174 20.978C64.5618 20.8442 64.678 20.7245 64.8082 20.6259C65.09 20.426 65.4232 20.3112 65.7683 20.295C66.1133 20.2787 66.4558 20.3618 66.7551 20.5344C66.9453 20.6469 67.1016 20.8087 67.2075 21.0026C67.3135 21.1966 67.3652 21.4155 67.3572 21.6363C67.3748 22.6397 67.3572 23.6431 67.3572 24.6465C67.3572 24.8049 67.3149 24.8788 67.1459 24.8683C66.9666 24.8542 66.7865 24.8542 66.6073 24.8683C66.389 24.8859 66.3327 24.7908 66.3362 24.5866C66.3362 23.7065 66.3362 22.8263 66.3362 21.9532C66.3362 21.5061 66.1672 21.2068 65.8292 21.1329C65.6247 21.0625 65.4032 21.0587 65.1964 21.122C64.9896 21.1852 64.8081 21.3123 64.678 21.4849C64.5278 21.7074 64.4481 21.9699 64.4491 22.2384C64.4491 23.027 64.4491 23.8156 64.4491 24.6042C64.4491 24.8014 64.3998 24.8648 64.1921 24.8648C63.4316 24.8648 63.4316 24.8648 63.4316 24.1078C63.4316 22.9777 63.4316 21.8476 63.4316 20.721C63.4316 20.471 63.5021 20.3689 63.752 20.4041C63.7778 20.4059 63.8037 20.4059 63.8295 20.4041C64.3963 20.4041 64.3963 20.4041 64.4174 20.978Z"
                    fill="white"
                  />
                  <path
                    d="M46.7178 20.9947C46.9176 20.7195 47.1943 20.5095 47.5132 20.3911C47.832 20.2727 48.1787 20.2512 48.5098 20.3293C48.8362 20.3648 49.1368 20.5232 49.3507 20.7723C49.5645 21.0214 49.6755 21.3426 49.661 21.6707C49.6927 22.674 49.661 23.6739 49.661 24.6773C49.661 24.8216 49.6047 24.8568 49.4709 24.8639C48.6471 24.9061 48.6471 24.9097 48.6471 24.0858C48.6471 23.4134 48.6471 22.7445 48.6471 22.072C48.6471 21.4981 48.4077 21.1566 47.9993 21.1003C47.737 21.0538 47.4668 21.1081 47.2428 21.2524C47.0189 21.3967 46.8578 21.6203 46.7917 21.8784C46.7552 22.0163 46.7363 22.1582 46.7354 22.3009C46.7354 23.0613 46.7354 23.8218 46.7354 24.5822C46.7354 24.7794 46.7002 24.8674 46.4748 24.8674C45.7707 24.8674 45.7707 24.8674 45.7707 24.1633C45.7707 23.0367 45.7707 21.9065 45.7707 20.7799C45.7707 20.368 45.7285 20.4279 46.1509 20.4279C46.2494 20.4331 46.3482 20.4331 46.4467 20.4279C46.6896 20.3891 46.7706 20.4948 46.7354 20.7271C46.725 20.816 46.7191 20.9053 46.7178 20.9947V20.9947Z"
                    fill="white"
                  />
                  <path
                    d="M86.6284 20.9676C86.8691 20.6469 87.216 20.4223 87.6071 20.3339C88.4063 20.1684 89.2583 20.4852 89.4731 21.2316C89.5044 21.3523 89.5187 21.4767 89.5153 21.6013C89.5153 22.6047 89.5153 23.6081 89.5153 24.6079C89.5153 24.8121 89.4519 24.8825 89.2548 24.8649C89.0931 24.8509 88.9306 24.8509 88.7689 24.8649C88.5753 24.8825 88.5295 24.8016 88.5331 24.6185C88.5331 23.7771 88.5331 22.9356 88.5331 22.0942C88.5331 21.4922 88.3042 21.1542 87.8817 21.1014C87.7477 21.0716 87.6091 21.0691 87.4741 21.094C87.3392 21.1188 87.2105 21.1705 87.0959 21.2461C86.9813 21.3216 86.8831 21.4194 86.807 21.5336C86.7309 21.6479 86.6785 21.7762 86.653 21.9111C86.6178 22.0408 86.6 22.1746 86.6002 22.3089C86.6002 23.0764 86.6002 23.8475 86.6002 24.6185C86.6002 24.798 86.5544 24.8649 86.3608 24.8649C85.625 24.8649 85.625 24.8649 85.625 24.1608C85.625 22.9955 85.625 21.8301 85.625 20.6683C85.625 20.4712 85.6743 20.3796 85.8785 20.4113C85.9148 20.4148 85.9513 20.4148 85.9876 20.4113C86.5756 20.4043 86.5756 20.4043 86.6284 20.9676Z"
                    fill="white"
                  />
                  <path
                    d="M90.0966 37.395C90.2947 37.1163 90.5696 36.9013 90.8878 36.7762C91.2061 36.6512 91.5538 36.6215 91.8887 36.6909C92.2156 36.731 92.5159 36.8912 92.7313 37.1404C92.9467 37.3896 93.0617 37.71 93.054 38.0393C93.054 39.0251 93.054 40.0109 93.054 40.9966C93.054 41.1797 92.9906 41.229 92.8181 41.2184C92.6482 41.2061 92.4776 41.2061 92.3076 41.2184C92.114 41.2184 92.0682 41.1551 92.0682 40.972C92.0682 40.2221 92.0682 39.4687 92.0682 38.7153C92.0671 38.5098 92.0482 38.3049 92.0119 38.1027C91.9801 37.9533 91.9095 37.815 91.8073 37.7016C91.7051 37.5882 91.5748 37.5037 91.4296 37.4566C91.2844 37.4095 91.1293 37.4014 90.98 37.4333C90.8307 37.4651 90.6924 37.5357 90.579 37.6379C90.4391 37.743 90.3262 37.8798 90.2496 38.0372C90.1731 38.1945 90.1352 38.3678 90.1389 38.5427C90.1389 39.349 90.1389 40.1552 90.1389 40.9614C90.1389 41.1621 90.0861 41.2396 89.8819 41.2184C89.7119 41.2061 89.5413 41.2061 89.3714 41.2184C89.2024 41.2184 89.1602 41.1586 89.1602 41.0002C89.1602 39.6553 89.1602 38.3139 89.1602 36.969C89.1602 36.8 89.22 36.7402 89.382 36.7578C89.4077 36.7595 89.4336 36.7595 89.4594 36.7578C90.0967 36.7437 90.0966 36.7437 90.0966 37.395Z"
                    fill="white"
                  />
                  <path
                    d="M66.6141 36.6844C66.8914 36.6565 67.1714 36.6931 67.4322 36.7914C67.693 36.8898 67.9275 37.0471 68.1174 37.2512C68.3204 37.4737 68.4613 37.7457 68.5258 38.0398C68.561 38.1771 68.5258 38.2476 68.3779 38.2405C68.2701 38.2335 68.1619 38.2335 68.054 38.2405C67.922 38.2751 67.7817 38.2578 67.662 38.1924C67.5422 38.127 67.452 38.0182 67.4097 37.8885C67.1034 37.209 66.0015 37.2512 65.5896 37.9483C65.414 38.257 65.319 38.6049 65.3135 38.96C65.3079 39.315 65.392 39.6657 65.5579 39.9797C65.6536 40.1715 65.8069 40.3285 65.9962 40.4289C66.1856 40.5293 66.4016 40.5679 66.6141 40.5395C66.8252 40.5146 67.023 40.4236 67.1792 40.2794C67.3355 40.1352 67.442 39.9453 67.4837 39.7368C67.5365 39.5502 67.6069 39.5115 67.7724 39.5256C67.9378 39.5396 68.0575 39.5256 68.2019 39.5256C68.5539 39.5256 68.5539 39.5256 68.4659 39.8565C68.3549 40.322 68.0746 40.7296 67.6795 40.9997C67.2845 41.2698 66.803 41.3831 66.3289 41.3176C64.8432 41.2119 64.1778 39.9621 64.3538 38.6384C64.388 38.4354 64.4374 38.2353 64.5017 38.0398C64.6373 37.601 64.9238 37.2243 65.3103 36.9763C65.6969 36.7283 66.1587 36.6249 66.6141 36.6844V36.6844Z"
                    fill="white"
                  />
                  <path
                    d="M51.4534 22.6251C51.4534 22.2132 51.4534 21.8013 51.4534 21.3894C51.4534 21.2204 51.4147 21.1359 51.2316 21.157C51.1683 21.1605 51.1048 21.1605 51.0415 21.157C50.6895 21.157 50.6895 21.157 50.6895 20.8049C50.6895 20.4529 50.6894 20.4071 51.0802 20.4036C51.471 20.4001 51.4323 20.4036 51.4323 20.0515C51.4323 19.791 51.4323 19.5305 51.4323 19.2735C51.4323 19.1256 51.4746 19.0728 51.6259 19.0657C52.4498 19.027 52.4463 19.0235 52.4463 19.8262C52.4463 20.4071 52.4463 20.4177 53.0412 20.4071C53.2736 20.4071 53.3264 20.481 53.3194 20.6993C53.2982 21.245 53.3863 21.157 52.8476 21.164C52.397 21.164 52.4498 21.1147 52.4498 21.5689C52.4498 22.2472 52.4498 22.9267 52.4498 23.6074C52.4498 24.0228 52.5413 24.1073 52.9462 24.1179C53.0659 24.1179 53.2454 24.0439 53.2982 24.1777C53.3493 24.3871 53.3493 24.6056 53.2982 24.8149C53.2982 24.8607 53.2349 24.8642 53.1891 24.8713C52.8629 24.9276 52.5295 24.9276 52.2033 24.8713C51.6928 24.7621 51.4675 24.4875 51.4393 23.8961V22.6251H51.4534Z"
                    fill="white"
                  />
                  <path
                    d="M74.412 22.6072C74.412 22.2058 74.412 21.8009 74.412 21.3996C74.412 21.213 74.3591 21.1531 74.169 21.1531C73.7008 21.1531 73.7113 21.1531 73.6973 20.6884C73.6973 20.4737 73.7466 20.368 73.9754 20.4032C74.0212 20.4032 74.0669 20.4032 74.1092 20.4032C74.3415 20.4384 74.426 20.354 74.4155 20.111C74.3873 19.8167 74.3944 19.52 74.4366 19.2273C74.4577 19.1112 74.4929 19.0513 74.6232 19.0548C74.8274 19.0548 75.0351 19.0548 75.2393 19.0548C75.3872 19.0548 75.4224 19.1182 75.4224 19.2485C75.4224 19.5618 75.4224 19.8751 75.4224 20.1885C75.4224 20.354 75.4787 20.4208 75.6407 20.4032C75.6851 20.398 75.73 20.398 75.7745 20.4032C76.3765 20.4032 76.2779 20.2871 76.2955 20.9278C76.2955 21.1003 76.2462 21.1567 76.0667 21.1602C75.4259 21.1602 75.4259 21.1602 75.4259 21.8256C75.4259 22.4171 75.4259 23.0085 75.4259 23.5859C75.4259 24.0049 75.5174 24.0858 75.9258 24.0964C76.042 24.0964 76.2251 24.0225 76.2779 24.1598C76.3266 24.3694 76.3266 24.5874 76.2779 24.797C76.2779 24.8181 76.2216 24.8428 76.1899 24.8428C75.7499 24.9292 75.2946 24.8939 74.8732 24.7407C74.4788 24.5506 74.4507 24.1668 74.4296 23.8042C74.4084 23.4416 74.412 23.012 74.412 22.6072Z"
                    fill="white"
                  />
                  <path
                    d="M77.9541 38.993C77.9541 38.5705 77.9541 38.148 77.9541 37.7291C77.9541 37.5565 77.9083 37.4756 77.7252 37.5002H77.7006C77.1725 37.5002 77.1126 37.4122 77.1936 36.8806C77.2147 36.7503 77.2887 36.7538 77.3802 36.7468C77.9505 36.7116 77.9505 36.7116 77.9505 36.1377C77.9505 35.4512 77.9505 35.4618 78.6265 35.4336C78.8659 35.4336 78.9434 35.4934 78.9258 35.7328C78.9082 35.9723 78.9258 36.2363 78.9258 36.4863C78.9258 36.7362 78.9962 36.7574 79.1898 36.7362C79.2789 36.731 79.3683 36.731 79.4574 36.7362C79.8763 36.7362 79.8376 36.6905 79.8376 37.0883C79.8376 37.4861 79.8834 37.472 79.4468 37.4756C78.9293 37.4756 78.9293 37.4756 78.9293 38.0001C78.9293 38.6092 78.9293 39.2183 78.9293 39.8274C78.9293 40.3519 79.0103 40.4259 79.5278 40.4364C79.6299 40.4364 79.7989 40.3519 79.82 40.5209C79.8664 40.7296 79.8579 40.9467 79.7954 41.1511C79.7954 41.1758 79.7144 41.1758 79.6721 41.1863C79.4406 41.2336 79.2037 41.249 78.968 41.2321C78.2956 41.211 77.9857 40.9012 77.9717 40.2287C77.947 39.8344 77.9541 39.4119 77.9541 38.993Z"
                    fill="white"
                  />
                  <path
                    d="M44.0879 21.7991C44.0879 22.732 44.0879 23.665 44.0879 24.5945C44.0879 24.8057 44.028 24.8832 43.8168 24.8656C43.62 24.8497 43.4222 24.8497 43.2253 24.8656C43.0422 24.8656 43 24.8022 43 24.6297C43 23.6439 43 22.6581 43 21.6759C43 20.7781 43 19.8838 43 18.9861C43 18.7854 43.0528 18.7115 43.257 18.7291C43.4538 18.7467 43.6517 18.7467 43.8485 18.7291C44.0421 18.7291 44.0879 18.796 44.0844 18.979C44.0844 19.919 44.0879 20.8591 44.0879 21.7991Z"
                    fill="white"
                  />
                  <path
                    d="M60.7068 21.2281C60.8342 20.9447 61.0362 20.7014 61.2912 20.5239C61.5783 20.3362 61.9222 20.2552 62.2629 20.2951C62.3791 20.2951 62.4213 20.3549 62.4143 20.4641C62.4143 20.5063 62.4143 20.5521 62.4143 20.5979C62.4143 20.8021 62.4777 21.0555 62.3791 21.1999C62.2805 21.3442 61.9989 21.2457 61.7982 21.2597C61.5194 21.3115 61.2675 21.4592 61.0862 21.6772C60.9049 21.8952 60.8055 22.1697 60.8054 22.4532C60.8054 23.1574 60.8054 23.8615 60.8054 24.5656C60.8054 24.8297 60.7244 24.9177 60.4744 24.8825C60.3045 24.8701 60.1339 24.8701 59.9639 24.8825C59.8196 24.8825 59.7773 24.8297 59.7773 24.6959C59.7773 23.3346 59.7773 21.9744 59.7773 20.6155C59.7773 20.4817 59.8231 20.4324 59.9639 20.4253C60.6892 20.362 60.6892 20.3585 60.7068 21.2281Z"
                    fill="white"
                  />
                  <path
                    d="M81.6111 29.3142C81.7513 29.0498 81.9629 28.8302 82.2219 28.6802C82.4808 28.5302 82.7766 28.4559 83.0757 28.4657C83.2235 28.4657 83.294 28.515 83.2728 28.6664C83.2728 28.7016 83.2728 28.7368 83.2728 28.7755C83.2728 28.9797 83.3292 29.2297 83.2341 29.374C83.1391 29.5184 82.882 29.3952 82.6778 29.4339C82.5131 29.4532 82.3552 29.5111 82.2169 29.6029C82.0787 29.6946 81.964 29.8176 81.8822 29.962C81.7325 30.2285 81.6549 30.5294 81.6569 30.8351C81.6569 31.4899 81.6569 32.1448 81.6569 32.7996C81.6569 32.9862 81.6005 33.0425 81.4139 33.0425C80.6816 33.0425 80.6816 33.0425 80.6816 32.3384C80.6816 31.2118 80.6816 30.0817 80.6816 28.9516C80.6816 28.7192 80.7239 28.6206 80.9879 28.6312C81.5865 28.6312 81.5864 28.6171 81.6111 29.3142Z"
                    fill="white"
                  />
                  <path
                    d="M48.5524 29.4528C48.7205 29.0568 49.0381 28.743 49.4361 28.5797C49.5171 28.548 49.6016 28.5128 49.6861 28.4882C50.1578 28.3649 50.267 28.4494 50.267 28.9318C50.267 29.4141 50.267 29.4247 49.7847 29.4317C49.5149 29.4476 49.2593 29.5573 49.0619 29.7418C48.8645 29.9264 48.7378 30.1741 48.7038 30.4421C48.6519 31.0274 48.6366 31.6153 48.658 32.2024C48.658 32.416 48.658 32.6308 48.658 32.8467C48.658 32.9875 48.6052 33.0263 48.4679 33.0368C47.6758 33.0791 47.6758 33.0826 47.6758 32.294C47.6758 31.1568 47.6758 30.0196 47.6758 28.8825C47.6758 28.6677 47.7356 28.6079 47.9504 28.6079C48.5524 28.6079 48.5524 28.6079 48.5559 29.2169L48.5524 29.4528Z"
                    fill="white"
                  />
                  <path
                    d="M81.0209 38.9755C81.0209 38.3136 81.0209 37.6517 81.0209 36.9933C81.0209 36.8103 81.0632 36.7258 81.2568 36.7434C81.5033 36.7715 81.8201 36.6413 81.9821 36.7962C82.144 36.9511 82.0349 37.2715 82.0349 37.5003C82.0349 38.6445 82.0349 39.7887 82.0349 40.9294C82.0349 41.1231 81.9926 41.2111 81.7849 41.1935C81.6153 41.1741 81.444 41.1741 81.2744 41.1935C81.0491 41.2181 81.0104 41.116 81.0139 40.9153C81.028 40.2816 81.0209 39.6303 81.0209 38.9755Z"
                    fill="white"
                  />
                  <path
                    d="M69.843 39.0024C69.843 38.3406 69.843 37.6787 69.843 37.0203C69.843 36.8091 69.9099 36.7422 70.1211 36.7422C70.8569 36.7422 70.8569 36.7422 70.8569 37.4815C70.8569 38.6328 70.8569 39.7875 70.8569 40.9388C70.8569 41.1536 70.7971 41.2275 70.5858 41.2099C70.4066 41.1958 70.2265 41.1958 70.0472 41.2099C69.8782 41.2099 69.8359 41.15 69.8359 40.9916C69.8465 40.3262 69.843 39.6643 69.843 39.0024Z"
                    fill="white"
                  />
                  <path
                    d="M77.525 22.6115C77.525 21.9672 77.525 21.3229 77.525 20.6786C77.525 20.4815 77.5637 20.397 77.7891 20.4005C78.4932 20.4005 78.4932 20.4005 78.4932 21.1046C78.4932 22.2664 78.4932 23.4318 78.4932 24.5936C78.4932 24.7837 78.4545 24.8612 78.2432 24.8576C77.5215 24.8576 77.5215 24.8576 77.5215 24.1535L77.525 22.6115Z"
                    fill="white"
                  />
                  <path
                    d="M81.523 35.0781C82.0335 35.0781 82.0335 35.0781 82.0335 35.5745C82.0335 36.0709 82.0335 36.0428 81.5441 36.0428C81.0547 36.0428 81.0195 36.0428 81.0195 35.5323C81.0195 35.0781 81.0195 35.0781 81.523 35.0781Z"
                    fill="white"
                  />
                  <path
                    d="M70.3815 35.0781C70.8709 35.0781 70.8709 35.0781 70.8709 35.571C70.8709 36.0639 70.8709 36.0463 70.3885 36.0428C69.7971 36.0428 69.864 36.1202 69.8604 35.5147C69.8428 35.0781 69.8428 35.0781 70.3815 35.0781Z"
                    fill="white"
                  />
                  <path
                    d="M77.9882 19.6494C77.5234 19.6494 77.5234 19.6494 77.5234 19.1847C77.5234 18.7199 77.5234 18.7305 77.9987 18.7305C78.474 18.7305 78.4916 18.7305 78.4916 19.1987C78.4916 19.667 78.4775 19.6494 77.9882 19.6494Z"
                    fill="white"
                  />
                  <path
                    d="M34.0967 42.4717L34.6212 43.2815C34.5801 43.303 34.5348 43.3156 34.4885 43.3184C34.4421 43.3213 34.3957 43.3144 34.3522 43.2981C34.3087 43.2818 34.2691 43.2566 34.236 43.224C34.2029 43.1914 34.177 43.1522 34.16 43.109C34.072 42.9435 33.9558 42.7956 33.8643 42.6337C33.8389 42.5758 33.794 42.5286 33.7374 42.5003C33.6808 42.472 33.6161 42.4644 33.5545 42.4788C33.3855 42.514 33.463 42.6478 33.4559 42.7393C33.4471 42.873 33.4471 43.007 33.4559 43.1407C33.4559 43.2428 33.4559 43.3132 33.3151 43.3132C33.1743 43.3132 33.1426 43.2745 33.1426 43.1442C33.1426 42.6091 33.1426 42.088 33.1426 41.5353C33.1426 41.3874 33.2024 41.3522 33.3327 41.3557C33.5298 41.3557 33.727 41.3557 33.9242 41.3557C34.3466 41.3557 34.5368 41.4965 34.5755 41.7711C34.6212 42.1549 34.5086 42.3204 34.0967 42.4717ZM33.6988 41.6092C33.5017 41.5493 33.4172 41.6655 33.4524 41.912C33.4577 41.9646 33.4577 42.0177 33.4524 42.0704C33.4524 42.1866 33.4876 42.2359 33.6038 42.2288C33.72 42.2218 33.8714 42.2288 34.0016 42.1971C34.0397 42.1961 34.0772 42.187 34.1114 42.1703C34.1457 42.1536 34.176 42.1298 34.2004 42.1005C34.2247 42.0712 34.2425 42.037 34.2525 42.0002C34.2626 41.9634 34.2647 41.925 34.2586 41.8873C34.2586 41.7007 34.1354 41.6444 33.977 41.6303L33.6988 41.6092Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_1056">
                    <rect
                      width="96.6875"
                      height={50}
                      fill="white"
                      transform="translate(0.671875)"
                    />
                  </clippath>
                </defs>
              </svg>
              <svg
                width={47}
                height={38}
                viewBox="0 0 47 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[46.19px] h-[38px] relative"
                preserveAspectRatio="none">
                <g clip-path="url(#clip0_1_1108)">
                  <path
                    d="M1.14714 12C0.938215 12 0.737843 12.083 0.590107 12.2307C0.442372 12.3785 0.359375 12.5788 0.359375 12.7878L0.359375 25.2116C0.359375 25.4205 0.442372 25.6209 0.590107 25.7686C0.737843 25.9164 0.938215 25.9994 1.14714 25.9994C1.35607 25.9994 1.55645 25.9164 1.70418 25.7686C1.85192 25.6209 1.93491 25.4205 1.93491 25.2116V12.7878C1.93491 12.5788 1.85192 12.3785 1.70418 12.2307C1.55645 12.083 1.35607 12 1.14714 12V12Z"
                    fill="white"
                  />
                  <path
                    d="M14.237 12H9.92449C9.71556 12 9.51519 12.083 9.36745 12.2307C9.21972 12.3785 9.13672 12.5788 9.13672 12.7878V25.2116C9.13672 25.4205 9.21972 25.6209 9.36745 25.7686C9.51519 25.9164 9.71556 25.9994 9.92449 25.9994C10.1334 25.9994 10.3338 25.9164 10.4815 25.7686C10.6293 25.6209 10.7123 25.4205 10.7123 25.2116V13.5755H14.1606C14.7483 13.641 15.3191 13.8137 15.8444 14.0851C16.8637 14.6287 17.3584 15.4632 17.3584 16.6332C17.3584 16.9581 17.2735 19.7991 14.3475 19.7991C14.1385 19.7991 13.9382 19.8821 13.7904 20.0299C13.6427 20.1776 13.5597 20.378 13.5597 20.5869C13.5597 20.7958 13.6427 20.9962 13.7904 21.1439C13.9382 21.2917 14.1385 21.3747 14.3475 21.3747C15.9336 21.3747 18.9339 20.3831 18.9339 16.6332C18.9276 13.2124 15.8593 12.1062 14.237 12Z"
                    fill="white"
                  />
                  <path
                    d="M31.0245 12H22.9557C22.8523 12 22.7498 12.0204 22.6543 12.06C22.5587 12.0996 22.4719 12.1576 22.3987 12.2307C22.3255 12.3039 22.2675 12.3907 22.2279 12.4863C22.1883 12.5819 22.168 12.6843 22.168 12.7878C22.168 12.8912 22.1883 12.9937 22.2279 13.0892C22.2675 13.1848 22.3255 13.2717 22.3987 13.3448C22.4719 13.418 22.5587 13.476 22.6543 13.5156C22.7498 13.5552 22.8523 13.5755 22.9557 13.5755H26.1981V25.2116C26.1981 25.4205 26.2811 25.6209 26.4289 25.7686C26.5766 25.9164 26.777 25.9994 26.9859 25.9994C27.1948 25.9994 27.3952 25.9164 27.5429 25.7686C27.6907 25.6209 27.7737 25.4205 27.7737 25.2116V13.5755H31.016C31.1195 13.5755 31.2219 13.5552 31.3175 13.5156C31.4131 13.476 31.4999 13.418 31.5731 13.3448C31.6462 13.2717 31.7043 13.1848 31.7438 13.0892C31.7834 12.9937 31.8038 12.8912 31.8038 12.7878C31.8038 12.6843 31.7834 12.5819 31.7438 12.4863C31.7043 12.3907 31.6462 12.3039 31.5731 12.2307C31.4999 12.1576 31.4131 12.0996 31.3175 12.06C31.2219 12.0204 31.1195 12 31.016 12H31.0245Z"
                    fill="white"
                  />
                  <path
                    d="M46.466 24.8655L40.4101 12.4417C40.3455 12.3101 40.2455 12.1991 40.1214 12.1211C39.9973 12.0431 39.8539 12.0011 39.7073 12C39.5627 12.0007 39.421 12.0406 39.2973 12.1154C39.1735 12.1901 39.0723 12.297 39.0045 12.4247L32.7405 24.8485C32.6465 25.0352 32.6304 25.2516 32.6959 25.4501C32.7615 25.6486 32.9031 25.813 33.0898 25.907C33.2765 26.001 33.4929 26.0171 33.6914 25.9516C33.8899 25.8861 34.0543 25.7444 34.1483 25.5577L39.6967 14.5523L45.0561 25.5492C45.1216 25.6815 45.2226 25.7928 45.3479 25.8708C45.4732 25.9489 45.6177 25.9904 45.7653 25.9909C45.8989 25.9908 46.0303 25.9567 46.1472 25.8918C46.264 25.8269 46.3624 25.7333 46.4331 25.6199C46.5038 25.5065 46.5446 25.377 46.5514 25.2435C46.5583 25.1101 46.5311 24.977 46.4723 24.857L46.466 24.8655Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_1108">
                    <rect
                      width="46.1875"
                      height={38}
                      fill="white"
                      transform="translate(0.359375)"
                    />
                  </clippath>
                </defs>
              </svg>
              <svg
                width={88}
                height={38}
                viewBox="0 0 88 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[87.14px] h-[38px] relative"
                preserveAspectRatio="none">
                <g clip-path="url(#clip0_1_1114)">
                  <path
                    d="M27.5868 12L23.9043 26H27.1682L30.7798 12H27.5868Z"
                    fill="white"
                  />
                  <path
                    d="M15.9856 26H19.4487L15.2903 12H12.0938L0.546875 26H3.82769L6.21066 23.0123H15.1586L15.9856 26ZM8.2021 20.5141L12.86 14.6737L14.4701 20.5141H8.2021Z"
                    fill="white"
                  />
                  <path
                    d="M84.2141 26H87.6873L83.5188 12H80.3257L68.7754 26H72.0596L74.4223 23.0123H83.3736L84.2141 26ZM76.4306 20.5141L81.0886 14.6737L82.702 20.5141H76.4306Z"
                    fill="white"
                  />
                  <path
                    d="M57.7081 23.2418L60.6682 12H57.6102L53.9277 26H55.3724H56.9858H67.4121L68.1075 23.2418H57.7081Z"
                    fill="white"
                  />
                  <path
                    d="M49.8842 12H37.868L34.1855 26H37.2233L38.6882 20.5445H47.3257C50.4546 20.5445 51.0385 18.2184 51.0385 18.2184L52.0815 13.9783C52.419 12.0338 49.8842 12 49.8842 12ZM48.669 15.4401C48.5397 16.0271 48.3774 16.6064 48.183 17.1753C48.1039 17.4593 47.9296 17.7075 47.6894 17.8784C47.4491 18.0492 47.1575 18.1324 46.8632 18.1138H39.316L40.3286 14.326H47.8353C48.9796 14.326 48.669 15.4401 48.669 15.4401Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_1114">
                    <rect
                      width="87.1406"
                      height={38}
                      fill="white"
                      transform="translate(0.546875)"
                    />
                  </clippath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start absolute left-[932px] top-[265px] gap-10">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-white">
                More to explore
              </p>
              <svg
                width={50}
                height={2}
                viewBox="0 0 50 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none">
                <path
                  d="M0 1H50"
                  stroke="#FFD15B"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                IP News
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                Our Values
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                The Baxter IP Philosophy
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
                Awards &amp; Recognition
              </p>
            </div>
          </div>
          <p className="absolute left-[436px] top-[831px] text-base font-medium text-left text-white/50">
            Copyright 2022 © Baxter IP, Patent &amp; Trade Mark Attorneys. All
            right reserved
          </p>
        </div>
        <div className="w-[1440px] h-[127px] absolute left-0 top-[4180px]">
          <div className="w-[380.43px] h-[127px]">
            <svg
              width={381}
              height={127}
              viewBox="0 0 381 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1059.07px] top-[-0.5px]"
              preserveAspectRatio="none">
              <path
                d="M381 127V0H0.568359L17.4158 127H381Z"
                fill="#FAF4E4"
              />
            </svg>
            <div className="flex justify-center items-center w-[200.23px] absolute left-[1088.6px] top-[38px] gap-2.5 p-2.5">
              <svg
                width={33}
                height={32}
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  d="M8.71517 4.83667C8.09744 5.26625 7.59288 5.83898 7.2446 6.50594C6.89632 7.1729 6.71467 7.91425 6.71517 8.66667C6.71474 9.47189 6.92279 10.2635 7.31906 10.9645C7.71534 11.6654 8.28635 12.2519 8.9765 12.6667M24.7152 4.83667C25.3329 5.26625 25.8375 5.83898 26.1857 6.50594C26.534 7.1729 26.7157 7.91425 26.7152 8.66667C26.7157 9.41908 26.534 10.1604 26.1857 10.8274C25.8375 11.4943 25.3329 12.0671 24.7152 12.4967M30.0485 28V27.2C30.0485 24.2133 30.0485 22.72 29.4672 21.5787C28.9558 20.5752 28.14 19.7593 27.1365 19.248M3.38184 28V27.2C3.38184 24.2133 3.38184 22.72 3.96317 21.5787C4.47449 20.5752 5.29035 19.7593 6.29384 19.248M16.7152 13.3333C17.328 13.3333 17.9348 13.2126 18.501 12.9781C19.0672 12.7436 19.5817 12.3998 20.015 11.9665C20.4483 11.5332 20.7921 11.0187 21.0266 10.4525C21.2611 9.88634 21.3818 9.2795 21.3818 8.66667C21.3818 8.05383 21.2611 7.447 21.0266 6.88081C20.7921 6.31462 20.4483 5.80018 20.015 5.36684C19.5817 4.9335 19.0672 4.58975 18.501 4.35523C17.9348 4.12071 17.328 4 16.7152 4C15.4775 4 14.2905 4.49167 13.4153 5.36684C12.5402 6.24201 12.0485 7.42899 12.0485 8.66667C12.0485 9.90434 12.5402 11.0913 13.4153 11.9665C14.2905 12.8417 15.4775 13.3333 16.7152 13.3333V13.3333ZM8.71517 26.6667V28H24.7152V26.6667C24.7152 24.182 24.7152 22.9393 24.3092 21.9587C23.7677 20.6519 22.7294 19.6138 21.4225 19.0727C20.4425 18.6667 19.1998 18.6667 16.7152 18.6667C14.2305 18.6667 12.9878 18.6667 12.0078 19.0727C11.3607 19.3407 10.7727 19.7336 10.2774 20.2289C9.78208 20.7242 9.3892 21.3122 9.12117 21.9593C8.71517 22.9387 8.71517 24.182 8.71517 26.6667Z"
                  stroke="#918F92"
                  strokeWidth={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base font-medium text-center text-[#272940]">
                Foreign Associates
              </p>
            </div>
          </div>
          <div className="w-[268.3px] h-[127px]">
            <svg
              width={269}
              height={127}
              viewBox="0 0 269 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[557.5px] top-[-0.5px]"
              preserveAspectRatio="none">
              <path
                d="M268.304 127L251.394 0H0L16.9099 127H268.304Z"
                fill="#FAF4E4"
              />
            </svg>
            <div className="flex justify-center items-center w-[200.23px] absolute left-[592.04px] top-[38px] gap-2.5 p-2.5">
              <svg
                width={33}
                height={32}
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  d="M3.31934 22.0001C3.31934 21.6465 3.45981 21.3073 3.70986 21.0573C3.95991 20.8072 4.29905 20.6668 4.65267 20.6668H8.65267V16.0001L16.6527 10.6667L24.6527 16.0001V20.6668H28.6527C29.0063 20.6668 29.3454 20.8072 29.5955 21.0573C29.8455 21.3073 29.986 21.6465 29.986 22.0001V28.0001C29.986 28.3537 29.8455 28.6928 29.5955 28.9429C29.3454 29.1929 29.0063 29.3334 28.6527 29.3334H3.31934V22.0001Z"
                  stroke="#918F92"
                  strokeWidth={2}
                  stroke-linejoin="round"
                />
                <path
                  d="M16.6523 4V10.6667"
                  stroke="#918F92"
                  strokeWidth={2}
                  stroke-linecap="round"
                />
                <path
                  d="M19.319 29.3333V20.6666H13.9857V29.3333M12.6523 29.3333H20.6523M24.6523 7.99997V3.99997C24.6523 3.99997 23.6523 5.99997 20.6523 3.99997C17.6523 1.99997 16.6523 3.99997 16.6523 3.99997V7.99997C16.6523 7.99997 17.6523 5.99997 20.6523 7.99997C23.6523 9.99997 24.6523 7.99997 24.6523 7.99997Z"
                  stroke="#918F92"
                  strokeWidth={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base font-medium text-center text-[#272940]">
                Funded Startups
              </p>
            </div>
          </div>
          <div className="w-[267.3px] h-[127px]">
            <svg
              width={268}
              height={127}
              viewBox="0 0 268 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[808.79px] top-[-0.5px]"
              preserveAspectRatio="none">
              <path
                d="M267.588 127L250.741 0H0.285156L17.132 127H267.588Z"
                fill="#FAF4E4"
              />
            </svg>
            <div className="flex justify-center items-center w-[200.23px] absolute left-[837.32px] top-[38px] gap-2.5 p-2.5">
              <svg
                width={33}
                height={32}
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  d="M3.59766 13.3333L16.931 4L30.2643 13.3333V28H3.59766V13.3333Z"
                  stroke="#918F92"
                  strokeWidth={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.38867 17.7907C11.3892 15.7908 14.1022 14.6672 16.931 14.6672C19.7598 14.6672 22.4728 15.7908 24.4733 17.7907M13.1593 21.5621C13.6546 21.0668 14.2425 20.6739 14.8896 20.4059C15.5367 20.1378 16.2303 19.9999 16.9307 19.9999C17.6311 19.9999 18.3246 20.1378 18.9717 20.4059C19.6188 20.6739 20.2068 21.0668 20.702 21.5621"
                  stroke="#918F92"
                  strokeWidth={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base font-medium text-center text-[#272940]">
                Entrepreneur
              </p>
            </div>
          </div>
          <div className="w-[266px] h-[127px]">
            <svg
              width={266}
              height={127}
              viewBox="0 0 266 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[308.5px] top-[-0.5px]"
              preserveAspectRatio="none">
              <path
                d="M266 127L249.235 0H0L16.7647 127H266Z"
                fill="#FFFDF7"
              />
            </svg>
            <div className="w-[266px] h-[127px]">
              <div className="absolute left-[308.5px] top-[-0.5px]" />
              <svg
                width={266}
                height={5}
                viewBox="0 0 266 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[304px] top-[122px]"
                preserveAspectRatio="none">
                <path
                  d="M0 5L266 4.99998"
                  stroke="#7568D1"
                  strokeWidth={10}
                />
              </svg>
              <div className="w-[200px] h-[52px]">
                <div className="flex justify-center items-center w-[200px] absolute left-[342px] top-[38px] gap-2.5 py-2.5">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <path
                      d="M29.3337 5.33325H2.66699V25.3333H12.667L16.0003 28.6666L19.3337 25.3333H29.3337V5.33325Z"
                      fill="#7568D1"
                    />
                    <path
                      d="M16.0003 15.9999C17.8413 15.9999 19.3337 14.5075 19.3337 12.6666C19.3337 10.8256 17.8413 9.33325 16.0003 9.33325C14.1594 9.33325 12.667 10.8256 12.667 12.6666C12.667 14.5075 14.1594 15.9999 16.0003 15.9999Z"
                      fill="white"
                    />
                    <path
                      d="M22 21.3333C22 18.388 19.3133 16 16 16C12.6867 16 10 18.388 10 21.3333"
                      fill="white"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#272940]">
                    Corporate / SME
                  </p>
                </div>
              </div>
            </div>
          </div>
          <svg
            width={326}
            height={127}
            viewBox="0 0 326 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[326px] h-[127px]"
            preserveAspectRatio="none">
            <path
              d="M326 127L309.219 0H0V127H326Z"
              fill="url(#paint0_linear_1_1168)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M220.594 74.1034C220.594 74.1034 218.682 71.5625 218.682 68.7134C218.682 65.8643 220.594 63.3191 220.594 63.3191H222.571C222.571 63.3191 220.691 65.8551 220.691 68.7113C220.691 71.5674 222.571 74.1034 222.571 74.1034H220.594Z"
              fill="#FFDF8D"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M218.598 74.1032C218.598 74.1032 216.686 71.5623 216.686 68.7132C216.686 65.864 218.598 63.3188 218.598 63.3188H220.575C220.575 63.3188 218.695 65.8549 218.695 68.711C218.695 71.5671 220.575 74.1032 220.575 74.1032H218.598Z"
              fill="#FFE6A5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M224.591 74.1034C224.591 74.1034 222.679 71.5625 222.679 68.7134C222.679 65.8643 224.591 63.3191 224.591 63.3191H226.568C226.568 63.3191 224.688 65.8551 224.688 68.7113C224.688 71.5674 226.568 74.1034 226.568 74.1034H224.591Z"
              fill="#FFD15B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M222.592 74.1034C222.592 74.1034 220.68 71.5625 220.68 68.7134C220.68 65.8643 222.592 63.3191 222.592 63.3191H224.569C224.569 63.3191 222.689 65.8551 222.689 68.7113C222.689 71.5674 224.569 74.1034 224.569 74.1034H222.592Z"
              fill="#FFD874"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M226.56 74.0981V83.4048H220.589V80.5002C218.128 82.3559 215.063 83.4451 211.755 83.4451C206.954 83.4451 202.678 81.1457 199.975 77.5957C197.272 81.1457 192.996 83.4451 188.195 83.4451C180.047 83.4451 173.431 76.8292 173.431 68.6803V44.5564H179.361V56.8201C181.822 55.0047 184.847 53.9155 188.155 53.9155C192.956 53.9155 197.232 56.215 199.935 59.765C202.638 56.215 206.914 53.9155 211.714 53.9155C215.022 53.9155 218.088 55.0047 220.549 56.8604V53.9155H226.56V63.315H218.613C217.039 61.2576 214.538 59.9263 211.714 59.9263C206.833 59.9263 202.92 63.8798 202.92 68.7207C202.92 73.5616 206.873 77.4747 211.714 77.4747C214.533 77.4747 217.029 76.1486 218.643 74.0981H226.56ZM188.195 77.4747C193.077 77.4747 196.99 73.5212 196.99 68.6803C196.949 63.7991 193.036 59.886 188.195 59.886C183.314 59.886 179.401 63.8394 179.401 68.6803C179.401 73.5616 183.355 77.4747 188.195 77.4747Z"
              fill="white"
            />
            <defs>
              <lineargradient
                id="paint0_linear_1_1168"
                x1="84.9982"
                y1="-0.000379794"
                x2={390}
                y2="97.064"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#404266" />
                <stop
                  offset={1}
                  stop-color="#8083B6"
                />
              </lineargradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col justify-center items-end absolute left-0 top-20 gap-2.5 px-40 bg-[#fffefd] border-t-0 border-r-0 border-b border-l-0 border-[#eae7dd]">
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[84px] gap-[60px]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-6">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 pt-2.5 pb-1">
                <svg
                  width={172}
                  height={42}
                  viewBox="0 0 172 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[172px] h-[41px]"
                  preserveAspectRatio="none">
                  <path
                    d="M40.5229 28.5301V13.609L39.4304 13.6053C38.8383 13.609 38.3599 20.4799 38.3599 21.065C38.3599 21.6501 38.8383 28.521 39.4304 28.5247L40.5229 28.5283V28.5301Z"
                    fill="white"
                  />
                  <path
                    d="M45.6591 31.5378L51.5524 21.0403L45.6591 10.5428L45.6572 9.52295L53.5138 21.0313L45.6572 32.5414L45.6591 31.5378Z"
                    fill="#FFD15B"
                    fill-opacity="0.85"
                  />
                  <path
                    d="M45.6605 30.542L49.5907 21.0571L45.6605 11.5722L45.6587 10.5505L51.5521 21.048L45.6587 31.5455L45.6605 30.542Z"
                    fill="#FFD15B"
                    fill-opacity="0.7"
                  />
                  <path
                    d="M45.6643 29.5391L47.6275 21.065L45.6643 12.5909L45.6606 11.571L49.5908 21.0559L45.6606 30.5408L45.6643 29.5391Z"
                    fill="#FFD15B"
                    fill-opacity="0.55"
                  />
                  <path
                    d="M45.6678 28.5363V13.6115L45.666 12.5917L47.6292 21.0658L45.666 29.5398L45.6678 28.5363Z"
                    fill="#FFD15B"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M45.6652 13.6122H44.3784V28.5351H45.6652V13.6122Z"
                    fill="#FFD15B"
                    fill-opacity="0.25"
                  />
                  <path
                    d="M44.3811 13.6122H43.0942V28.5351H44.3811V13.6122Z"
                    fill="#FFD15B"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M43.0959 13.6122H41.8091V28.5333H43.0959V13.6122Z"
                    fill="white"
                  />
                  <path
                    d="M41.8098 13.6122H40.5229V28.5333H41.8098V13.6122Z"
                    fill="white"
                  />
                  <path
                    d="M45.6571 32.5476L53.5137 21.0374L45.6571 9.52914L45.6553 8.50928L55.4769 21.0284L45.6553 33.5493L45.6571 32.5476Z"
                    fill="white"
                  />
                  <path
                    d="M45.6571 32.5476L53.5137 21.0374L45.6571 9.52914L45.6553 8.50928L55.4769 21.0284L45.6553 33.5493L45.6571 32.5476Z"
                    fill="#FFD15B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M52.5503 8.51294L58.7897 16.8368L65.029 8.51294H71.8577L61.9787 21.0501L71.7883 33.553H64.9597L58.7203 25.2291L52.481 33.553H45.6523L55.462 21.0501L45.6523 8.51294H52.5503Z"
                    fill="#404266"
                  />
                  <path
                    d="M87.4222 29.9238C86.2783 27.663 86.2783 27.663 86.2783 27.663H86.2436C86.209 27.663 86.1743 27.6973 86.1396 27.7315C86.0356 27.7658 85.897 27.8343 85.7583 27.9028C85.6197 27.9713 85.4464 28.0398 85.3077 28.1083C85.2384 28.1426 85.1691 28.1426 85.1344 28.1768C85.0997 28.1768 85.0997 28.1768 85.0651 28.2111H85.0304H84.9957C84.9611 28.2111 84.9264 28.2453 84.8571 28.2453C84.7531 28.2796 84.6145 28.2796 84.4758 28.3138C84.3718 28.3138 84.2678 28.3481 84.1638 28.3481C84.0945 28.3481 83.9905 28.3481 83.8865 28.3138C83.6092 28.2796 83.2626 28.1768 82.9506 28.0056C82.6387 27.8685 82.4307 27.663 82.2574 27.4232C82.1187 27.1835 81.9107 26.7724 81.9107 25.9845V13.5844H87.4915V8.51475H81.9107V2.48596H76.7806V8.51475H72.1011V13.5844H76.7806V25.9845C76.7806 27.6288 77.1966 29.0674 77.9591 30.1978C78.7217 31.3282 79.6923 32.0476 80.6282 32.5271C81.5294 32.9725 82.396 33.178 83.02 33.315C83.3319 33.3835 83.6092 33.3835 83.8172 33.4178C83.9212 33.4178 83.9905 33.4178 84.0598 33.4178C84.0945 33.4178 84.1292 33.4178 84.1292 33.4178H84.1638C84.1638 33.4178 84.2332 33.4178 84.3025 33.4178H84.3372H84.3718C84.4065 33.4178 84.4758 33.4178 84.5105 33.4178C84.6491 33.4178 84.8224 33.3835 84.9957 33.3835C85.3424 33.3493 85.9317 33.2465 86.4863 33.1095C86.9369 32.9725 87.4915 32.7327 87.8035 32.5614C87.9768 32.4929 88.1501 32.3901 88.2541 32.3559C88.3234 32.3216 88.3581 32.2874 88.3927 32.2874C88.3927 32.2874 88.4274 32.2874 88.4274 32.2531H88.4621C88.566 32.1846 88.566 32.1846 87.4222 29.9238Z"
                    fill="#404266"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M119.417 21.0503C119.417 16.9397 122.814 13.617 126.973 13.617C128.048 13.617 129.053 13.8226 129.989 14.2336L132.034 9.575C130.474 8.92416 128.776 8.54736 126.973 8.54736C119.971 8.54736 114.287 14.1651 114.287 21.0845L114.321 23.4138V33.5874H119.451V23.3453L119.417 21.0503Z"
                    fill="#404266"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M144.235 8.51294V33.553H139.104V8.51294H144.235Z"
                    fill="#404266"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M159.313 8.51294C156.471 8.51294 153.871 9.43781 151.757 10.9793V8.51294H146.626V41.5H151.757V31.1209C153.871 32.6624 156.471 33.5872 159.313 33.5872C166.315 33.5872 172 27.9695 172 21.0501C172 14.1307 166.315 8.51294 159.313 8.51294ZM159.313 28.4833C155.154 28.4833 151.757 25.1606 151.757 21.0158C151.757 16.871 155.119 13.5483 159.313 13.5483C163.473 13.5483 166.87 16.871 166.87 21.0158C166.87 25.1606 163.473 28.4833 159.313 28.4833Z"
                    fill="#404266"
                  />
                  <path
                    d="M144.235 3.03483C144.235 4.43927 143.091 5.56967 141.67 5.56967C140.248 5.56967 139.104 4.43927 139.104 3.03483C139.104 1.6304 140.248 0.5 141.67 0.5C143.091 0.5 144.235 1.6304 144.235 3.03483Z"
                    fill="#404266"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M112.587 21.0499C112.587 20.4333 112.553 19.8168 112.449 19.2002C112.449 19.1659 112.449 19.1659 112.449 19.1317C112.414 18.9604 112.379 18.7891 112.345 18.6178C112.345 18.5836 112.345 18.5493 112.31 18.4808V18.4466C111.131 12.7603 106.001 8.47852 99.9006 8.47852C92.8986 8.47852 87.2139 14.0963 87.2139 21.0157C87.2139 27.9351 92.8986 33.5528 99.9006 33.5528C101.703 33.5528 103.436 33.176 104.996 32.4909C106.521 31.8401 107.908 30.881 109.052 29.7163L105.343 26.1881C104.649 26.8732 103.852 27.4555 102.951 27.8666C102.015 28.2776 101.01 28.4831 99.9352 28.4831C96.6769 28.4831 93.8692 26.4279 92.8293 23.5505H112.345C112.483 22.7284 112.587 21.9063 112.587 21.0499ZM99.9006 13.5824C103.159 13.5824 105.932 15.6377 107.007 18.4808H92.8293C93.8692 15.6377 96.6422 13.5824 99.9006 13.5824Z"
                    fill="#404266"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.5243 25.6563C40.5243 25.6563 38.8809 23.4987 38.8809 21.0795C38.8809 18.6602 40.5243 16.499 40.5243 16.499H42.2228C42.2228 16.499 40.6072 18.6524 40.6072 21.0776C40.6072 23.5028 42.2228 25.6563 42.2228 25.6563H40.5243Z"
                    fill="#FFDF8D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M38.8094 25.6563C38.8094 25.6563 37.166 23.4987 37.166 21.0795C37.166 18.6602 38.8094 16.499 38.8094 16.499H40.508C40.508 16.499 38.8923 18.6524 38.8923 21.0776C38.8923 23.5028 40.508 25.6563 40.508 25.6563H38.8094Z"
                    fill="#FFE6A5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M43.9593 25.6563C43.9593 25.6563 42.3159 23.4987 42.3159 21.0795C42.3159 18.6602 43.9593 16.499 43.9593 16.499H45.6579C45.6579 16.499 44.0422 18.6524 44.0422 21.0776C44.0422 23.5028 45.6579 25.6563 45.6579 25.6563H43.9593Z"
                    fill="#FFD15B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.2406 25.6563C42.2406 25.6563 40.5972 23.4987 40.5972 21.0795C40.5972 18.6602 42.2406 16.499 42.2406 16.499H43.9391C43.9391 16.499 42.3235 18.6524 42.3235 21.0776C42.3235 23.5028 43.9391 25.6563 43.9391 25.6563H42.2406Z"
                    fill="#FFD874"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.6513 25.6535V33.556H40.5212V31.0897C38.4067 32.6654 35.7723 33.5903 32.93 33.5903C28.805 33.5903 25.1308 31.6378 22.8083 28.6234C20.4859 31.6378 16.8116 33.5903 12.6867 33.5903C5.68475 33.5903 0 27.9726 0 21.0532V0.56897H5.09548V10.9823C7.20992 9.44089 9.80966 8.51602 12.652 8.51602C16.7769 8.51602 20.4512 10.4685 22.7737 13.4829C25.0961 10.4685 28.7704 8.51602 32.8953 8.51602C35.7377 8.51602 38.3721 9.44089 40.4865 11.0166V8.51602H45.6513V16.4973H38.8227C37.4708 14.7503 35.3217 13.6199 32.8953 13.6199C28.7011 13.6199 25.3387 16.9769 25.3387 21.0874C25.3387 25.198 28.7357 28.5206 32.8953 28.5206C35.3169 28.5206 37.4624 27.3947 38.8492 25.6535H45.6513ZM12.6867 28.5206C16.8809 28.5206 20.2433 25.1637 20.2433 21.0532C20.2086 16.9084 16.8463 13.5857 12.6867 13.5857C8.49246 13.5857 5.13014 16.9426 5.13014 21.0532C5.13014 25.198 8.52713 28.5206 12.6867 28.5206Z"
                    fill="#404266"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow relative gap-12">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272940]">
                Services
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#7a7b94]">
                Blog
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#7a7b94]">
                People
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#7a7b94]">
                Contact
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[220px] relative gap-4 px-6 py-4 rounded-sm border border-[#f1f2f8]">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#404266"
                  strokeWidth={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.0004 20.9999L16.6504 16.6499"
                  stroke="#404266"
                  strokeWidth={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#7a7b94]">
                Search...
              </p>
            </div>
            <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-2.5">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-[11px] text-center text-[#404266]">
                  EN
                </p>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet">
                  <g clip-path="url(#clip0_1_1221)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 0H34.2V1.8469H0V0ZM0 3.69375H34.2V5.54065H0V3.69375ZM0 7.3828H34.2V9.23435H0V7.3828ZM0 11.0766H34.2V12.9234H0V11.0766ZM0 14.7703H34.2V16.6172H0V14.7703ZM0 18.4594H34.2V20.3063H0V18.4594ZM0 22.1531H34.2V24H0V22.1531Z"
                      fill="#BD3D44"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1.84692H34.2V3.69377H0V1.84692ZM0 5.54063H34.2V7.38283H0V5.54063ZM0 9.22973H34.2V11.0766H0V9.22973ZM0 12.9235H34.2V14.7703H0V12.9235ZM0 16.6172H34.2V18.4641H0V16.6172ZM0 20.3063H34.2V22.1532H0V20.3063Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 0H13.6793V12.9235H0V0Z"
                      fill="#192F5D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.13865 0.553223L1.26522 1.06407H1.66602L1.34254 1.37817L1.46562 1.89377L1.13865 1.57502L0.815216 1.88907L0.938253 1.37817L0.611328 1.06407H1.01914L1.13865 0.553223ZM3.4203 0.553223L3.54334 1.06407H3.94763L3.62066 1.37817L3.74374 1.89377L3.4203 1.57502L3.09334 1.88907L3.21638 1.37817L2.89294 1.06407H3.29374L3.4203 0.553223ZM5.69843 0.553223L5.82499 1.06412H6.22226L5.89883 1.37822L6.02183 1.89382L5.6949 1.57507L5.37146 1.88912L5.4945 1.37822L5.16754 1.06412H5.57186L5.69843 0.553223ZM7.98008 0.553223L8.10308 1.06412H8.5074L8.18044 1.37822L8.307 1.89382L7.98004 1.57507L7.65311 1.88912L7.77968 1.37822L7.45271 1.06412H7.85351L7.98008 0.553223ZM10.2582 0.553223L10.3848 1.06412H10.7855L10.4621 1.37822L10.5851 1.89382L10.2582 1.57507L9.93473 1.88912L10.0578 1.37822L9.73436 1.06412H10.1351L10.2582 0.553223ZM12.5398 0.553223L12.6629 1.06412H13.0672L12.7402 1.37822L12.8668 1.89382L12.5398 1.57507L12.2129 1.88912L12.3394 1.37822L12.0125 1.06412H12.4168L12.5398 0.553223ZM2.28124 1.84687L2.40428 2.35787H2.80857L2.4816 2.67187L2.60115 3.18287L2.28473 2.86877L1.9578 3.18282L2.07379 2.67192L1.7574 2.35782H2.1582L2.28124 1.84687ZM4.55936 1.84687L4.68593 2.35787H5.08669L4.75973 2.67187L4.88633 3.18287L4.55933 2.86877L4.2324 3.18282L4.35896 2.67192L4.032 2.35782H4.43629L4.55936 1.84687ZM6.84101 1.84687L6.96401 2.35787H7.36834L7.04138 2.67187L7.16441 3.18287L6.84098 2.86877L6.51405 3.18282L6.63709 2.67197L6.31365 2.35787H6.71445L6.84101 1.84687ZM9.11914 1.84687L9.2457 2.35787H9.64646L9.3195 2.67187L9.44606 3.18287L9.1191 2.86877L8.79566 3.18282L8.91874 2.67192L8.59178 2.35782H8.99959L9.11914 1.84687ZM11.4008 1.84687L11.5238 2.35787H11.9281L11.6012 2.67187L11.7242 3.18287L11.4008 2.86877L11.0738 3.18282L11.1969 2.67192L10.8734 2.35782H11.2742L11.4008 1.84687ZM1.13865 3.13607L1.26522 3.65637H1.66602L1.34254 3.97042L1.46562 4.48137L1.13865 4.16262L0.815216 4.48137L0.938253 3.96572L0.611328 3.65172H1.01914L1.13865 3.13607ZM3.4203 3.13607L3.54334 3.65157H3.94763L3.62066 3.96562L3.74374 4.47662L3.4203 4.15782L3.09334 4.47657L3.21638 3.96097L2.89294 3.64692H3.29374L3.4203 3.13607ZM5.69843 3.13607L5.82499 3.65167H6.22226L5.89883 3.96572L6.02183 4.47672L5.6949 4.15792L5.37146 4.47667L5.4945 3.96107L5.16754 3.64702H5.57186L5.69843 3.13607ZM7.98008 3.13607L8.10308 3.65167H8.5074L8.18044 3.96572L8.307 4.47672L7.98004 4.15792L7.65311 4.47667L7.77968 3.96107L7.45271 3.64702H7.85351L7.98008 3.13607ZM10.2582 3.13607L10.3848 3.65167H10.7855L10.4621 3.96567L10.5851 4.47667L10.2582 4.15787L9.93473 4.47662L10.0578 3.96102L9.73436 3.64697H10.1351L10.2582 3.13607ZM12.5398 3.13607L12.6629 3.65167H13.0672L12.7402 3.96572L12.8668 4.47672L12.5398 4.15792L12.2129 4.47667L12.3394 3.96107L12.0125 3.64702H12.4168L12.5398 3.13607ZM2.28124 4.42977L2.40428 4.94072H2.80857L2.4816 5.25472L2.60468 5.77037L2.28124 5.45162L1.95428 5.76567L2.07732 5.25477L1.75388 4.94072H2.15472L2.28124 4.42977ZM4.55936 4.42977L4.68593 4.94072H5.08669L4.75973 5.25472L4.88633 5.77037L4.55933 5.45162L4.2324 5.76567L4.35896 5.25477L4.032 4.94072H4.43629L4.55936 4.42977ZM6.84101 4.42977L6.96401 4.94072H7.36834L7.04138 5.25472L7.16441 5.77037L6.84098 5.45162L6.51405 5.76567L6.63709 5.25477L6.31365 4.94072H6.71445L6.84101 4.42977ZM9.11914 4.42977L9.2457 4.94072H9.64646L9.32303 5.25472L9.44606 5.77037L9.1191 5.45162L8.79566 5.76567L8.91874 5.25477L8.59178 4.94072H8.99959L9.11914 4.42977ZM11.4008 4.42977L11.5238 4.94072H11.9281L11.6012 5.25472L11.7242 5.77037L11.4008 5.45162L11.0738 5.76567L11.1969 5.25477L10.8734 4.94072H11.2742L11.4008 4.42977ZM1.13865 5.72352L1.26522 6.23447H1.66602L1.34254 6.54847L1.46562 7.06412L1.13865 6.74537L0.815216 7.05942L0.938253 6.54852L0.611328 6.23447H1.01914L1.13865 5.72352ZM3.4203 5.72352L3.54334 6.23447H3.94763L3.62066 6.54847L3.74374 7.05947L3.4203 6.74537L3.09334 7.05942L3.21638 6.54852L2.89294 6.23447H3.29374L3.4203 5.72352ZM5.69843 5.72352L5.82499 6.23447H6.22226L5.89883 6.54847L6.02183 7.06412L5.6949 6.74537L5.37146 7.05942L5.4945 6.54852L5.16754 6.23447H5.57186L5.69843 5.72352ZM7.98008 5.72352L8.10308 6.23447H8.5074L8.18044 6.54847L8.307 7.06412L7.98004 6.74537L7.65311 7.05942L7.77968 6.54852L7.45271 6.23447H7.85351L7.98008 5.72352ZM10.2582 5.72352L10.3848 6.23447H10.7855L10.4621 6.54847L10.5851 7.06412L10.2582 6.74537L9.93473 7.05942L10.0578 6.54852L9.73436 6.23447H10.1351L10.2582 5.72352ZM12.5398 5.72352L12.6629 6.23447H13.0672L12.7402 6.54847L12.8668 7.06412L12.5398 6.74537L12.2129 7.05942L12.3394 6.54852L12.0125 6.23447H12.4168L12.5398 5.72352ZM2.28124 7.01727L2.40428 7.52822H2.80857L2.4816 7.84222L2.60468 8.35322L2.28124 8.03447L1.95428 8.35322L2.07732 7.83757L1.75388 7.52352H2.15472L2.28124 7.01727ZM4.55936 7.01727L4.68593 7.52822H5.08669L4.75973 7.84222L4.88633 8.35322L4.55933 8.03447L4.2324 8.35322L4.35896 7.83757L4.032 7.52352H4.43629L4.55936 7.01727ZM6.84101 7.01727L6.96401 7.52822H7.36834L7.04138 7.84222L7.16441 8.35322L6.84098 8.03447L6.51405 8.35322L6.63709 7.83757L6.31365 7.52352H6.71445L6.84101 7.01727ZM9.11914 7.01727L9.2457 7.52822H9.64646L9.32303 7.84222L9.44606 8.35322L9.1191 8.03447L8.79566 8.35322L8.91874 7.83757L8.59178 7.52352H8.99959L9.11914 7.01727ZM11.4008 7.01727L11.5238 7.52822H11.9281L11.6012 7.84222L11.7242 8.35322L11.4008 8.03447L11.0738 8.35322L11.1969 7.83757L10.8734 7.52352H11.2742L11.4008 7.01727ZM1.13865 8.30632L1.26522 8.82197H1.66602L1.34254 9.13597L1.46562 9.64227L1.13865 9.32822L0.815216 9.64222L0.938253 9.13132L0.611328 8.81727H1.01914L1.13865 8.30632ZM3.4203 8.30632L3.54334 8.82197H3.94763L3.62066 9.13597L3.74726 9.64227L3.42026 9.32822L3.09334 9.64222L3.2199 9.13132L2.89294 8.81727H3.29374L3.4203 8.30632ZM5.69843 8.30632L5.82499 8.82197H6.22226L5.89883 9.13597L6.02183 9.64227L5.6949 9.32822L5.37146 9.64222L5.4945 9.13132L5.16754 8.81727H5.57186L5.69843 8.30632ZM7.98008 8.30632L8.10308 8.82197H8.5074L8.18044 9.13597L8.307 9.64227L7.98004 9.32822L7.65311 9.64222L7.77968 9.13132L7.45271 8.81727H7.85351L7.98008 8.30632ZM10.2582 8.30632L10.3848 8.82197H10.7855L10.4621 9.13597L10.5851 9.64227L10.2582 9.32822L9.93473 9.64222L10.0578 9.13132L9.73436 8.81727H10.1351L10.2582 8.30632ZM12.5398 8.30632L12.6629 8.82197H13.0672L12.7402 9.13597L12.8668 9.64227L12.5398 9.32822L12.2129 9.64222L12.3394 9.13132L12.0125 8.81727H12.4168L12.5398 8.30632ZM2.28124 9.60007L2.40428 10.111H2.80857L2.4816 10.4251L2.60468 10.9407L2.28124 10.622L1.95428 10.936L2.07732 10.4251L1.75388 10.111H2.15472L2.28124 9.60007ZM4.55936 9.60007L4.68593 10.111H5.08669L4.75973 10.4251L4.88633 10.9407L4.55933 10.622L4.2324 10.936L4.35896 10.4251L4.032 10.111H4.43629L4.55936 9.60007ZM6.84101 9.60007L6.96401 10.111H7.36834L7.04138 10.4251L7.16441 10.9407L6.84098 10.622L6.51405 10.936L6.63709 10.4251L6.31365 10.111H6.71445L6.84101 9.60007ZM9.11914 9.60007L9.2457 10.111H9.64646L9.32303 10.4251L9.44606 10.9407L9.1191 10.622L8.79566 10.936L8.91874 10.4251L8.59178 10.111H8.99959L9.11914 9.60007ZM11.4008 9.60007L11.5238 10.111H11.9281L11.6012 10.4251L11.7242 10.9407L11.4008 10.622L11.0738 10.936L11.1969 10.4251L10.8734 10.111H11.2742L11.4008 9.60007ZM1.13865 10.8938L1.26522 11.4048H1.66602L1.34254 11.7188L1.46562 12.2298L1.13865 11.9157L0.815216 12.2297L0.938253 11.7141L0.611328 11.4001H1.01914L1.13865 10.8938ZM3.4203 10.8938L3.54334 11.4048H3.94763L3.62066 11.7188L3.74726 12.2298L3.42026 11.9157L3.09334 12.2297L3.2199 11.7141L2.89294 11.4001H3.29374L3.4203 10.8938ZM5.69843 10.8938L5.82499 11.4048H6.22226L5.90584 11.7188L6.02888 12.2298L5.70191 11.9157L5.37848 12.2297L5.50155 11.7141L5.17459 11.4001H5.57888L5.69843 10.8938ZM7.98008 10.8938L8.10308 11.4048H8.5074L8.18044 11.7188L8.307 12.2298L7.98004 11.9157L7.65311 12.2297L7.77968 11.7141L7.45271 11.4001H7.85351L7.98008 10.8938ZM10.2582 10.8938L10.3848 11.4048H10.7855L10.4621 11.7188L10.5851 12.2298L10.2582 11.9157L9.93473 12.2297L10.0578 11.7141L9.73436 11.4001H10.1351L10.2582 10.8938ZM12.5398 10.8938L12.6629 11.4048H13.0672L12.7402 11.7188L12.8668 12.2298L12.5398 11.9157L12.2129 12.2297L12.3394 11.7141L12.0125 11.4001H12.4168L12.5398 10.8938Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clippath id="clip0_1_1221">
                      <rect
                        width={24}
                        height={24}
                        rx={12}
                        fill="white"
                      />
                    </clippath>
                  </defs>
                </svg>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                  preserveAspectRatio="none">
                  <path
                    d="M7.53285 9.53341L5.79952 7.80008C5.58841 7.58897 5.5413 7.34741 5.65819 7.07541C5.77463 6.80297 5.98285 6.66675 6.28285 6.66675H9.71619C10.0162 6.66675 10.2244 6.80297 10.3409 7.07541C10.4577 7.34741 10.4106 7.58897 10.1995 7.80008L8.46619 9.53341C8.39952 9.60008 8.3273 9.65008 8.24952 9.68341C8.17174 9.71675 8.08841 9.73342 7.99952 9.73342C7.91063 9.73342 7.8273 9.71675 7.74952 9.68341C7.67174 9.65008 7.59952 9.60008 7.53285 9.53341V9.53341Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[809px] absolute left-0 top-[715px]">
          <div
            className="w-[1440px] h-[809px] absolute left-[-1px] top-[-1px]"
            style={{
              background:
                'linear-gradient(-50.39deg, #ffc839 -14.14%, #ffe295 98.11%)',
            }}
          />
          <div className="w-[1440px] h-[809px]">
            <div className="w-[1440px] h-[809px] absolute left-[-0.5px] top-[-0.5px] bg-white" />
          </div>
          <svg
            width={1440}
            height={2643}
            viewBox="0 0 1440 2643"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[2787.28px] h-[3046.72px]"
            preserveAspectRatio="none">
            <path
              d="M-232.789 540.245L-106.387 1112.57L-232.789 1684.89H-46.3678L80.0339 1112.57L-46.3678 540.245H-232.789Z"
              fill="white"
              fill-opacity="0.75"
            />
            <path
              d="M-46.5024 540.245L79.8992 1112.57L-46.5024 1684.89H139.918L266.32 1112.57L139.918 540.245H-46.5024Z"
              fill="white"
              fill-opacity="0.7"
            />
            <path
              d="M139.786 540.245L266.118 1112.57L139.786 1684.89H326.276L452.609 1112.57L326.276 540.245H139.786Z"
              fill="white"
              fill-opacity="0.6"
            />
            <path
              d="M326.072 540.245L452.474 1112.57L326.072 1684.89H512.493L638.895 1112.57L512.493 540.245H326.072Z"
              fill="white"
              fill-opacity="0.5"
            />
            <path
              d="M512.361 538.608L638.415 1110.92L512.361 1683.23L513.905 1922.65L839.243 1112.68L513.905 302.485L512.361 538.608Z"
              fill="white"
              fill-opacity="0.4"
            />
            <path
              d="M515.876 -167.898L1239.66 1117.71L516.047 2403.33L517.419 2642.72L1440.28 1119.47L517.419 -404L515.876 -167.898Z"
              fill="white"
              fill-opacity="0.1"
            />
            <path
              d="M515.876 69.8592L1039.45 1117.6L515.876 2165.35L517.417 2404.96L1239.94 1119.36L517.246 -166.24L515.876 69.8592Z"
              fill="white"
              fill-opacity="0.2"
            />
            <path
              d="M512.361 304.244L838.463 1114.43L512.361 1924.39L513.908 2163.8L1039.59 1115.96L513.908 68.1233L512.361 304.244Z"
              fill="white"
              fill-opacity="0.3"
            />
          </svg>
          <div className="flex flex-col justify-start items-start absolute left-40 top-[123px] gap-[70px]">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
              <p className="flex-grow-0 flex-shrink-0 w-[642px] text-[64px] font-semibold text-left text-[#272940]">
                Your patent and trademark attorneys for infinite innovation
                &amp; bussiness growth
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[550px] opacity-50 text-2xl font-semibold text-left text-[#272940]">
                Your bussiness provides products or services that make society
                better.
              </p>
            </div>
            <div
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[569px] h-[94px] relative gap-6 px-[150px] py-6 rounded-[5px] bg-gradient-to-br from-[#8c79d9] to-[#7d67d8]"
              style={{ boxShadow: '5px 4px 21px 0 rgba(0,0,0,0.25)' }}>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[46px] h-[46px] relative gap-2.5 p-3.5 rounded-3xl bg-white"
                style={{ boxShadow: '1px 7px 16px 0 rgba(44,44,44,0.15)' }}>
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none">
                  <path
                    d="M18 12.4611L12.7295 11.851L10.2093 14.3712C7.37027 12.9273 5.06266 10.6197 3.61875 7.78067L6.14897 5.25046L5.53892 0H0.0284401C-0.55161 10.1809 7.81912 18.5516 18 17.9716V12.4611V12.4611Z"
                    fill="#404266"
                  />
                </svg>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-white">
                Talk to an attorney
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[300px] absolute left-0 top-[1524px] bg-[#fffef8]">
          <div className="flex flex-col justify-center items-center w-[1440px] h-[130px] absolute left-0 top-0 gap-6 border-t-0 border-r-0 border-b border-l-0 border-[#f0e4c3]">
            <p className="flex-grow-0 flex-shrink-0 opacity-50 text-2xl font-semibold text-left text-[#272940]">
              Trusted and supported by this brands
            </p>
          </div>
          <div className="flex justify-center items-center w-[1440px] h-[170px] absolute left-0 top-[130px] gap-[30px] border-t-0 border-r-0 border-b border-l-0 border-[#f0e4c3]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[70px] w-[161px] relative p-1">
              <svg
                width={145}
                height={110}
                viewBox="0 0 145 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[145px] h-[109px] relative"
                preserveAspectRatio="none">
                <path
                  d="M89.7059 47.5023C88.3565 47.5023 87.0025 47.5023 85.6531 47.5023C85.4057 47.5023 85.345 47.5603 85.3496 47.7921C85.3496 50.4673 85.3496 53.1426 85.3496 55.8178C85.3496 56.8789 85.415 57.9446 85.429 59.0236C85.3857 58.9668 85.3467 58.9072 85.3123 58.8452C83.1801 55.1475 81.051 51.4482 78.925 47.7475C78.891 47.6676 78.8307 47.6005 78.7532 47.5562C78.6757 47.512 78.5852 47.493 78.4955 47.5023C76.7492 47.5023 75.0061 47.5023 73.2661 47.5023C73.0654 47.5023 73 47.538 73 47.7431C73 53.2421 73 58.7412 73 64.2403C73 64.4498 73.07 64.4855 73.2661 64.481C74.6342 64.481 76.0069 64.481 77.3796 64.481C77.599 64.481 77.655 64.4275 77.655 64.218C77.655 62.7778 77.655 61.3377 77.655 59.8975C77.655 58.3548 77.655 56.8076 77.6317 55.2649C77.6317 54.6674 77.571 54.0655 77.5336 53.4814C77.6143 53.5348 77.6775 53.6091 77.7157 53.6954C79.7514 57.2178 81.784 60.7432 83.8135 64.2715C83.8425 64.3433 83.8949 64.4042 83.9631 64.4452C84.0312 64.4861 84.1114 64.505 84.1917 64.4989C86.036 64.4989 87.8756 64.4989 89.7199 64.4989C89.9627 64.4989 90 64.4186 90 64.2091C90 58.7397 90 53.2689 90 47.7966C89.9953 47.5647 89.944 47.4978 89.7059 47.5023Z"
                  fill="#494949"
                />
                <path
                  d="M67.6922 61.0489C65.0211 61.0489 62.3501 61.0489 59.679 61.0489C59.4698 61.0489 59.4164 60.9998 59.4208 60.79C59.4208 59.8614 59.4208 58.9374 59.4208 58.0088C59.4208 57.7811 59.4653 57.7142 59.7057 57.7186C62.123 57.7186 64.5403 57.7186 66.9621 57.7186C67.1847 57.7186 67.2648 57.674 67.2604 57.4329C67.2604 56.4686 67.2604 55.5044 67.2604 54.5401C67.2604 54.2812 67.1891 54.2321 66.9487 54.2365C64.5314 54.2365 62.1097 54.2365 59.6924 54.2365C59.4698 54.2365 59.4164 54.1785 59.4208 53.9597C59.4208 53.0669 59.4208 52.174 59.4208 51.2812C59.4208 51.0357 59.4698 50.9776 59.7191 50.9776C62.3056 50.9776 64.8965 50.9776 67.4829 50.9776C67.6966 50.9776 67.7411 50.9196 67.7411 50.7142C67.7411 49.741 67.7411 48.7634 67.7411 47.7902C67.7411 47.558 67.6788 47.5 67.4473 47.5H55.2852C55.0492 47.5 54.9958 47.5714 55.0003 47.7946C55.0003 50.5297 55.0003 53.2648 55.0003 55.9999C55.0003 58.735 55.0003 61.479 55.0003 64.2319C55.0003 64.4417 55.0448 64.5042 55.2585 64.4998H67.7233C67.9192 64.4998 67.9993 64.4685 67.9993 64.2453C67.9993 63.2721 67.9993 62.2989 67.9993 61.3213C68.0082 61.0846 67.9281 61.0489 67.6922 61.0489Z"
                  fill="#494949"
                />
                <path
                  d="M118.497 56.3382C118.178 56.2248 117.85 56.1341 117.505 56.0253L117.788 55.9437C118.539 55.7427 119.216 55.3238 119.738 54.7375C120.15 54.23 120.431 53.6253 120.557 52.9784C120.682 52.3314 120.648 51.6626 120.456 51.0327C120.079 49.4774 119.016 48.5433 117.598 48.0172C115.981 47.4485 114.242 47.3465 112.572 47.7225C111.312 47.9403 110.157 48.5813 109.292 49.5443C108.426 50.5073 107.898 51.7377 107.791 53.0415C107.791 53.2456 107.835 53.2728 108.008 53.2728H111.97C112.129 53.2728 112.191 53.2411 112.205 53.0642C112.231 52.6357 112.339 52.2166 112.524 51.8308C112.662 51.5808 112.85 51.3642 113.077 51.1955C113.304 51.0269 113.564 50.9102 113.839 50.8534C114.114 50.7966 114.398 50.8011 114.671 50.8664C114.944 50.9318 115.2 51.0566 115.422 51.2323C115.593 51.3796 115.731 51.5639 115.825 51.7719C116.036 52.2498 116.061 52.7916 115.897 53.288C115.732 53.7845 115.39 54.1987 114.939 54.4473C114.377 54.7258 113.759 54.8656 113.135 54.8554C112.954 54.8554 112.9 54.9143 112.905 55.1002C112.905 55.921 112.905 56.7372 112.905 57.558C112.905 57.7666 112.976 57.8074 113.162 57.8074C113.849 57.777 114.535 57.8976 115.174 58.1611C115.495 58.2969 115.776 58.5171 115.987 58.7993C116.199 59.0816 116.334 59.416 116.379 59.7688C116.424 60.1216 116.377 60.4803 116.243 60.8087C116.11 61.137 115.893 61.4235 115.617 61.6391C115.224 61.9339 114.76 62.1127 114.274 62.1559C113.789 62.1991 113.302 62.105 112.865 61.8839C112.483 61.6921 112.154 61.4073 111.905 61.0547C111.656 60.7021 111.496 60.2924 111.438 59.8615C111.398 59.6801 111.349 59.6121 111.159 59.6121C109.847 59.6121 108.535 59.6121 107.224 59.6121C107.011 59.6121 106.984 59.6892 107.006 59.8797C107.241 62.1469 108.283 63.8338 110.343 64.7135C111.505 65.22 112.752 65.4871 114.014 65.4995C115.277 65.512 116.529 65.2695 117.7 64.7861C119.623 64.0288 120.802 62.5959 120.979 60.4419C121.139 58.4785 120.394 57.0229 118.497 56.3382Z"
                  fill="#494949"
                />
                <path
                  d="M49.6926 47.5C47.2872 47.5 44.8817 47.5 42.4762 47.5C40.0707 47.5 37.6826 47.5 35.2857 47.5C35.0608 47.5 34.9959 47.558 35.0002 47.7944C35.0002 48.7668 35.0002 49.7393 35.0002 50.7117C35.0002 50.9258 35.0521 50.9749 35.2555 50.9704C36.8432 50.9704 38.431 50.9704 40.0145 50.9704C40.2654 50.9704 40.3433 51.0151 40.339 51.2961C40.339 55.5918 40.339 59.8874 40.339 64.1831C40.339 64.424 40.3822 64.5043 40.6332 64.4998C41.8575 64.4998 43.0819 64.4998 44.3106 64.4998C44.5875 64.4998 44.6481 64.4285 44.6481 64.1474C44.6481 59.8518 44.6481 55.5561 44.6481 51.2604C44.6481 51.024 44.7086 50.9704 44.9336 50.9704C46.5301 50.9704 48.1265 50.9704 49.7273 50.9704C49.9263 50.9704 49.9998 50.9392 49.9998 50.7073C49.9825 49.7319 49.9825 48.7579 49.9998 47.7855C50.0041 47.5446 49.9306 47.5 49.6926 47.5Z"
                  fill="#494949"
                />
                <path
                  d="M102.986 47.7655C102.986 47.5553 102.94 47.4927 102.717 47.5017C102.161 47.5017 101.609 47.5017 101.052 47.5017C99.9692 47.4777 98.8968 47.7127 97.931 48.1857C96.2939 49.0039 94.7264 49.9428 93.1171 50.8056C92.9827 50.8816 93.0058 50.9845 93.0058 51.0962V54.6729C93.0058 54.7221 92.9734 54.7847 93.0615 54.8383L98.3716 52.1558V52.4017C98.3716 56.3301 98.3716 60.26 98.3716 64.1913C98.3716 64.4238 98.4134 64.5043 98.6823 64.4998C100.013 64.4998 101.349 64.4998 102.68 64.4998C102.935 64.4998 103 64.4462 103 64.1958C103 60.6728 103 57.1468 103 53.6178C102.981 51.6685 102.977 49.7147 102.986 47.7655Z"
                  fill="#494949"
                />
                <path
                  d="M32.9228 58.4072C31.4914 57.1283 30.0555 55.8575 28.6287 54.5746C28.4833 54.4414 28.4242 54.51 28.3242 54.5988C26.9156 55.8535 25.5069 57.1001 24.1028 58.3548C24.0574 58.3911 23.9847 58.4153 24.0029 58.5H33C32.9546 58.4476 32.9409 58.4233 32.9228 58.4072Z"
                  fill="#494949"
                />
                <path
                  d="M28.613 60.5707C28.4591 60.4371 28.4002 60.518 28.3006 60.6071C26.9032 61.8615 25.5012 63.1147 24.0947 64.3665C24.0585 64.4029 23.9725 64.4272 24.0087 64.5H33C31.506 63.1646 30.0527 61.8737 28.613 60.5707Z"
                  fill="#494949"
                />
                <path
                  d="M32.9257 51.37C31.4985 50.1052 30.0728 48.8391 28.6486 47.5716C28.4927 47.4335 28.4285 47.5229 28.3323 47.6082L24.133 51.3334C24.078 51.3822 23.9772 51.4147 24.0047 51.5H32.9991C33.0023 51.4744 32.997 51.4485 32.984 51.4254C32.971 51.4024 32.9508 51.3831 32.9257 51.37V51.37Z"
                  fill="#494949"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[70px] w-[161px] relative p-1">
              <svg
                width={147}
                height={44}
                viewBox="0 0 147 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[146px] h-11 relative"
                preserveAspectRatio="none">
                <path
                  d="M28.2932 24.5084L26.9987 23.2128C26.8625 23.0766 26.6777 23 26.4851 23C26.2925 23 26.1078 23.0766 25.9715 23.2128L25.7126 23.4719C25.5765 23.6083 25.5 23.7932 25.5 23.986C25.5 24.1787 25.5765 24.3636 25.7126 24.5L27.0071 25.7872C27.1433 25.9234 27.3281 26 27.5207 26C27.7133 26 27.898 25.9234 28.0343 25.7872L28.2932 25.5281C28.4258 25.3915 28.5 25.2086 28.5 25.0182C28.5 24.8278 28.4258 24.6449 28.2932 24.5084V24.5084Z"
                  fill="#494949"
                />
                <path
                  d="M37.8317 26H26.1683C25.991 26.0024 25.8217 26.0768 25.6967 26.2072C25.5718 26.3376 25.5012 26.5137 25.5 26.6975V27.3072C25.5012 27.4905 25.5719 27.6661 25.697 27.7957C25.8221 27.9254 25.9914 27.9988 26.1683 28H37.8317C38.0086 27.9988 38.1779 27.9254 38.303 27.7957C38.428 27.6661 38.4988 27.4905 38.5 27.3072V26.6975C38.5006 26.6061 38.4837 26.5155 38.4504 26.4309C38.4171 26.3463 38.3679 26.2694 38.3058 26.2046C38.2437 26.1397 38.1699 26.0883 38.0885 26.0532C38.0071 26.0181 37.9199 26 37.8317 26V26Z"
                  fill="#494949"
                />
                <path
                  d="M33.5 23.1987V13.7877C33.5 13.6842 33.4793 13.5818 33.4392 13.4862C33.399 13.3907 33.3401 13.3038 33.2659 13.2307C33.1917 13.1576 33.1037 13.0995 33.0067 13.06C32.9098 13.0204 32.8059 13 32.7009 13H32.2852C32.0761 13.0047 31.8771 13.0897 31.7304 13.2367C31.5838 13.3838 31.5011 13.5815 31.5 13.7877V23.2123C31.5011 23.4185 31.5838 23.6162 31.7304 23.7632C31.8771 23.9103 32.0761 23.9952 32.2852 24H32.6871C32.794 24.0006 32.9 23.9803 32.9989 23.9402C33.0978 23.9002 33.1876 23.8412 33.2633 23.7666C33.3389 23.6921 33.3987 23.6035 33.4394 23.506C33.48 23.4085 33.5006 23.3041 33.5 23.1987V23.1987Z"
                  fill="#494949"
                />
                <path
                  d="M30.4292 23.685L27.2782 16.4696C27.2369 16.3733 27.1781 16.2866 27.1053 16.2146C27.0325 16.1426 26.9471 16.0866 26.854 16.0499C26.7608 16.0132 26.6618 15.9964 26.5626 16.0006C26.4634 16.0049 26.3659 16.0299 26.2758 16.0744L25.9402 16.2465C25.8499 16.2905 25.7687 16.3532 25.7012 16.4309C25.6337 16.5085 25.5812 16.5996 25.5468 16.699C25.5123 16.7984 25.4966 16.904 25.5006 17.0098C25.5046 17.1157 25.5281 17.2196 25.5698 17.3157L28.7208 24.5357C28.8059 24.7286 28.959 24.8778 29.1467 24.9509C29.3344 25.024 29.5416 25.0152 29.7232 24.9263L30.0631 24.7589C30.245 24.6681 30.3857 24.504 30.4543 24.3027C30.523 24.1013 30.5139 23.8792 30.4292 23.685Z"
                  fill="#494949"
                />
                <path
                  d="M35.3085 25.5509L37.397 21.5335C37.4999 21.3303 37.527 21.0903 37.4724 20.8651C37.4178 20.6399 37.2859 20.4477 37.1052 20.3298L36.7723 20.1165C36.5902 20.0005 36.3742 19.9696 36.1717 20.0306C35.9691 20.0915 35.7965 20.2392 35.6915 20.4415L33.603 24.4589C33.5001 24.6621 33.473 24.9021 33.5276 25.1273C33.5822 25.3525 33.7141 25.5448 33.8948 25.6626L34.2277 25.881C34.3179 25.9396 34.4176 25.9775 34.5211 25.9926C34.6246 26.0077 34.7297 25.9996 34.8304 25.9689C34.931 25.9381 35.0252 25.8853 35.1073 25.8136C35.1894 25.7418 35.2578 25.6525 35.3085 25.5509V25.5509Z"
                  fill="#494949"
                />
                <path
                  d="M50.5 13C50.6978 13 50.8911 13.0804 51.0556 13.231C51.22 13.3816 51.3482 13.5957 51.4239 13.8462C51.4996 14.0966 51.5194 14.3722 51.4808 14.6381C51.4422 14.904 51.347 15.1482 51.2071 15.3399C51.0673 15.5316 50.8891 15.6622 50.6951 15.7151C50.5011 15.7679 50.3 15.7408 50.1173 15.6371C49.9346 15.5333 49.7784 15.3576 49.6685 15.1322C49.5586 14.9068 49.5 14.6418 49.5 14.3707C49.5 14.0072 49.6054 13.6585 49.7929 13.4015C49.9804 13.1444 50.2348 13 50.5 13V13ZM49.8067 28V18.1127H51.1967V27.9772L49.8067 28Z"
                  fill="#494949"
                />
                <path
                  d="M55.5492 27.991H53.5V18.2803H55.5054V19.6746C55.8296 19.1514 56.3015 18.7193 56.8708 18.4246C57.44 18.13 58.0852 17.9837 58.7374 18.0014C61.2442 18.0014 62.5 19.6746 62.5 21.838V28H60.4459V22.1529C60.4459 20.8036 59.8326 19.7106 58.0122 19.7106C56.3913 19.7106 55.5784 20.9025 55.5784 22.3778V27.9775L55.5492 27.991Z"
                  fill="#494949"
                />
                <path
                  d="M68.5203 28H66.5489L62.5 18H64.6976L67.5416 25.7165L70.404 18H72.5L68.5203 28Z"
                  fill="#494949"
                />
                <path
                  d="M82.4324 25.025C82.1194 25.9139 81.4923 26.6857 80.6468 27.2225C79.8014 27.7593 78.7843 28.0314 77.7512 27.9971C74.9541 27.9971 72.5 26.1581 72.5 22.9681C72.5 20.0177 74.8672 18 77.4855 18C80.6932 18 82.5 19.9959 82.5 22.9288C82.4998 23.1256 82.4853 23.3221 82.4565 23.5172H74.6015C74.5923 23.8934 74.6674 24.2674 74.8222 24.6168C74.977 24.9662 75.2083 25.2839 75.5024 25.5508C75.7965 25.8177 76.1472 26.0283 76.5336 26.1701C76.92 26.3119 77.3341 26.3819 77.7512 26.376C78.407 26.4119 79.0565 26.2431 79.5905 25.8978C80.1246 25.5526 80.5105 25.052 80.6836 24.4803L82.4324 25.025ZM80.3744 22.0355C80.3309 20.6845 79.3502 19.6299 77.5097 19.6299C76.7827 19.6201 76.0801 19.8655 75.55 20.3144C75.02 20.7633 74.7041 21.3804 74.6691 22.0355H80.3744Z"
                  fill="#494949"
                />
                <path
                  d="M85.0709 24.6797C85.184 25.6558 85.9087 26.4227 87.1655 26.4227C88.1583 26.4227 88.7029 25.8344 88.7029 25.1721C88.7029 24.5839 88.284 24.1351 87.5383 23.9564L86.0009 23.6122C84.585 23.2941 83.7472 22.305 83.7472 20.9673C83.7472 19.3682 85.1966 18 86.9644 18C89.4485 18 90.2193 19.6776 90.4036 20.5229L88.8746 21.146C88.813 20.6838 88.584 20.2635 88.2343 19.9712C87.8847 19.6788 87.4409 19.5363 86.9937 19.573C86.0847 19.573 85.4856 20.183 85.4856 20.8279C85.4856 21.3943 85.8208 21.7996 86.5162 21.9608L87.9865 22.2876C89.6203 22.6667 90.5 23.6993 90.5 25.0893C90.5 26.4793 89.4318 28 87.1864 28C84.7023 28 83.6508 26.3399 83.5 25.2593L85.0709 24.6797Z"
                  fill="#494949"
                />
                <path
                  d="M96.3367 18.0997H98.5V19.8288H96.3367V24.9207C96.3367 25.8284 96.7065 26.2822 97.7234 26.2822C97.9828 26.2797 98.2414 26.2524 98.4954 26.2005V27.8343C98.0695 27.9572 97.6263 28.0123 97.1826 27.9977C95.4861 27.9977 94.4091 26.9811 94.4091 25.2021V19.8288H92.5V18.1042H93.0223C93.2304 18.1282 93.4413 18.1057 93.6392 18.0382C93.8371 17.9708 94.0168 17.8602 94.165 17.7148C94.3131 17.5693 94.4257 17.3928 94.4944 17.1985C94.5631 17.0043 94.5861 16.7972 94.5616 16.5929V15H96.3413L96.3367 18.0997Z"
                  fill="#494949"
                />
                <path
                  d="M99.5 13C99.6978 13 99.8911 13.0804 100.056 13.231C100.22 13.3816 100.348 13.5957 100.424 13.8462C100.5 14.0966 100.519 14.3722 100.481 14.6381C100.442 14.904 100.347 15.1482 100.207 15.3399C100.067 15.5316 99.8891 15.6622 99.6951 15.7151C99.5011 15.7679 99.3 15.7408 99.1173 15.6371C98.9346 15.5333 98.7784 15.3576 98.6685 15.1322C98.5587 14.9068 98.5 14.6418 98.5 14.3707C98.5 14.0072 98.6054 13.6585 98.7929 13.4015C98.9804 13.1444 99.2348 13 99.5 13V13ZM98.81 28V18.1127H100.2V27.9772L98.81 28Z"
                  fill="#494949"
                />
                <path
                  d="M103.5 28.7144V14H105.469V20.3365C105.94 19.4585 107.141 18.6755 108.827 18.6755C111.922 18.6755 113.5 20.9385 113.5 23.7945C113.5 26.7048 111.781 28.995 108.761 28.995C108.104 29.029 107.45 28.8902 106.869 28.5935C106.288 28.2968 105.802 27.8535 105.464 27.3113V28.737L103.5 28.7144ZM108.465 20.3456C106.712 20.3456 105.436 21.6672 105.436 23.7809C105.436 25.8946 106.703 27.2796 108.465 27.2796C110.226 27.2796 111.47 25.8946 111.47 23.7809C111.47 21.6672 110.311 20.3456 108.465 20.3456Z"
                  fill="#494949"
                />
                <path
                  d="M114.5 29V14H116.5V29H114.5Z"
                  fill="#494949"
                />
                <path
                  d="M128.432 25.025C128.12 25.9139 127.493 26.6857 126.648 27.2225C125.803 27.7593 124.786 28.0314 123.753 27.9971C120.958 27.9971 118.5 26.1581 118.5 22.9681C118.5 20.0177 120.871 18 123.488 18C126.694 18 128.5 19.9959 128.5 22.9288C128.501 23.1258 128.485 23.3225 128.452 23.5172H120.605C120.596 23.8934 120.671 24.2674 120.826 24.6168C120.981 24.9662 121.212 25.2839 121.506 25.5508C121.8 25.8177 122.15 26.0283 122.536 26.1701C122.923 26.3119 123.337 26.3819 123.753 26.376C124.409 26.4125 125.057 26.2439 125.591 25.8984C126.124 25.553 126.508 25.0521 126.68 24.4803L128.432 25.025ZM126.375 22.0355C126.327 20.6845 125.352 19.6299 123.512 19.6299C122.785 19.6201 122.083 19.8655 121.553 20.3144C121.024 20.7633 120.708 21.3804 120.673 22.0355H126.375Z"
                  fill="#494949"
                />
                <path
                  d="M33.0046 8C30.3343 7.99913 27.7238 8.76083 25.5031 10.1888C23.2825 11.6167 21.5514 13.6467 20.5289 16.0221C19.5065 18.3974 19.2385 21.0114 19.7588 23.5335C20.2792 26.0555 21.5646 28.3723 23.4524 30.1908C25.3403 32.0093 27.7457 33.2479 30.3646 33.7499C32.9835 34.2518 35.6981 33.9947 38.1652 33.0108C40.6322 32.027 42.7409 30.3608 44.2245 28.2229C45.7081 26.0849 46.5 23.5713 46.5 21C46.4952 17.5544 45.0719 14.2511 42.5422 11.8143C40.0125 9.37747 36.5827 8.00582 33.0046 8ZM44.5205 21C44.5187 23.1961 43.8406 25.3423 42.572 27.1672C41.3034 28.9922 39.5013 30.4139 37.3936 31.2524C35.2858 32.091 32.9672 32.3089 30.7309 31.8784C28.4946 31.448 26.4411 30.3885 24.8301 28.8341C23.2191 27.2797 22.123 25.3002 21.6804 23.1459C21.2379 20.9915 21.4687 18.7592 22.3437 16.7312C23.2187 14.7032 24.6986 12.9707 26.5963 11.7527C28.4939 10.5347 30.724 9.88598 33.0046 9.88859C36.0594 9.89906 38.9857 11.0738 41.1436 13.1559C43.3016 15.2381 44.5157 18.0583 44.5205 21V21Z"
                  fill="#494949"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[70px] w-[161px] relative p-1">
              <Image
                src="/image-1.png"
                className="flex-grow-0 flex-shrink-0 w-[124px] h-[54px] object-none"
                alt=""
                width={1438}
                height={848}
              />
            </div>
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[70px] w-[161px] relative p-1">
              <Image
                src="/image-2.png"
                className="flex-grow-0 flex-shrink-0 w-[133px] h-[39px] object-none"
                alt=""
                width={1438}
                height={848}
              />
            </div>
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[70px] w-[161px] relative p-1">
              <Image
                src="/10xlogo-removebg-preview-1.png"
                className="flex-grow-0 flex-shrink-0 w-32 h-[31px] object-none"
                alt=""
                width={1438}
                height={848}
              />
            </div>
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[70px] w-[161px] relative p-1">
              <svg
                width={107}
                height={34}
                viewBox="0 0 107 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[106px] h-[33px]"
                preserveAspectRatio="none">
                <path
                  d="M11.0583 28.5137L5.75651 24.2527C5.25805 24.706 4.57833 24.978 3.85329 24.978C2.22196 24.978 0.907833 23.6635 0.907833 22.0316C0.907833 20.3997 2.22196 19.0852 3.85329 19.0852C5.48462 19.0852 6.79875 20.3997 6.79875 22.0316C6.79875 22.5302 6.6628 23.0288 6.43623 23.4368L11.1036 27.1992V21.0343L3.98923 15.0508C3.62672 15.3228 3.17357 15.4588 2.67511 15.4588C1.45161 15.4588 0.5 14.4615 0.5 13.283C0.5 12.1044 1.49693 11.1071 2.67511 11.1071C3.89861 11.1071 4.85021 12.1044 4.85021 13.283C4.85021 13.6456 4.75959 13.9629 4.62364 14.2802L11.0583 19.7198V11.8324L7.38784 8.75C7.16127 8.88599 6.93469 8.93132 6.6628 8.93132C5.84714 8.93132 5.21273 8.2967 5.21273 7.48077C5.21273 6.66483 5.84714 6.03022 6.6628 6.03022C7.47847 6.03022 8.11288 6.66483 8.11288 7.48077C8.11288 7.66208 8.06756 7.79808 8.02225 7.9794L11.013 10.5179V4.98763C10.0161 4.76099 9.24574 3.8544 9.24574 2.76648C9.24574 1.49725 10.2427 0.5 11.5115 0.5C12.7803 0.5 13.7772 1.49725 13.7772 2.76648C13.7772 3.8544 13.0069 4.76099 12.0099 4.98763V10.4725L15.0007 7.93406C14.9554 7.79807 14.9101 7.61676 14.9101 7.43544C14.9101 6.6195 15.5445 5.98489 16.3602 5.98489C17.1758 5.98489 17.8102 6.6195 17.8102 7.43544C17.8102 8.25137 17.1758 8.88599 16.3602 8.88599C16.0883 8.88599 15.8617 8.84066 15.6351 8.70467L11.9646 11.7871V19.6744L18.3993 14.2349C18.2634 13.9176 18.1727 13.6003 18.1727 13.2376C18.1727 12.0137 19.1697 11.0618 20.3479 11.0618C21.5713 11.0618 22.523 12.0591 22.523 13.2376C22.523 14.4162 21.526 15.4135 20.3479 15.4135C19.8494 15.4135 19.3962 15.2775 19.0337 15.0055L11.9193 20.989V27.1085L16.5867 23.3462C16.3602 22.9382 16.2242 22.4396 16.2242 21.9409C16.2242 20.3091 17.5383 18.9945 19.1697 18.9945C20.801 18.9945 22.1151 20.3091 22.1151 21.9409C22.1151 23.5728 20.801 24.8874 19.1697 24.8874C18.4446 24.8874 17.7649 24.6154 17.2664 24.1621L11.9646 28.4231V33.5H10.9224V28.5137H11.0583ZM43.1412 24.978L41.0567 19.1758H33.897L31.8125 24.978H29.2749L36.0721 7.48077H38.9722L45.7241 24.978H43.1412ZM34.5767 17.272H40.377L37.5221 9.47527H37.4315L34.5767 17.272ZM47.0382 24.978V12.331H49.2586V24.978H47.0382ZM59.1373 14.2802C56.3277 14.0082 54.5605 15.7308 54.5605 19.3118V24.9327H52.34V12.2857H54.4245V15.4588H54.4698C55.1949 12.9657 57.0075 12.0137 59.1373 12.1951V14.2802ZM73.0489 7.48077V9.42994H67.2486V24.978H64.9375V9.42994H59.1373V7.48077H73.0489ZM79.4383 14.2802C76.6287 14.0082 74.8615 15.7308 74.8615 19.3118V24.9327H72.641V12.2857H74.7255V15.4588H74.7708C75.4959 12.9657 77.3085 12.0137 79.4383 12.1951V14.2802ZM86.6886 12.0137C91.3107 12.0137 92.7155 16.1841 92.5795 19.2665H82.565C82.7915 22.0769 84.151 23.4368 86.7339 23.4368C88.4559 23.4368 89.8153 22.6209 90.1778 20.9437H92.353C91.8092 23.7541 89.5887 25.25 86.7339 25.25C82.565 25.25 80.4805 22.4396 80.3446 18.5865C80.3899 14.7788 83.1088 12.0137 86.6886 12.0137ZM82.6556 17.408H90.3591C90.2232 15.4135 88.8184 13.8269 86.6886 13.8269C84.6495 13.8269 83.0634 15.2775 82.6556 17.408ZM100.6 12.0137C105.222 12.0137 106.627 16.1841 106.491 19.2665H96.4766C96.7032 22.0769 98.0626 23.4368 100.646 23.4368C102.368 23.4368 103.727 22.6209 104.089 20.9437H106.265C105.721 23.7541 103.5 25.25 100.646 25.25C96.4766 25.25 94.3921 22.4396 94.2562 18.5865C94.2562 14.7788 97.0204 12.0137 100.6 12.0137ZM96.5219 17.408H104.225C104.089 15.4135 102.685 13.8269 100.555 13.8269C98.5157 13.8269 96.9297 15.2775 96.5219 17.408ZM49.6212 8.75C49.6212 9.56593 48.9414 10.2459 48.1258 10.2459C47.3101 10.2459 46.6304 9.56593 46.6304 8.75C46.6304 7.93406 47.3101 7.25412 48.1258 7.25412C48.9414 7.25412 49.6212 7.93406 49.6212 8.75Z"
                  fill="#494949"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start absolute left-0 top-[1824px] gap-2.5 px-40 py-[120px] bg-[#fffef8] border-t-0 border-r-0 border-b border-l-0 border-[#f0e4c3]">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[70px]">
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left uppercase text-[#40320f]/50">
                Benefits
              </p>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[816px] relative gap-2.5 p-5 rounded-[30px]">
                <p className="flex-grow-0 flex-shrink-0 text-5xl font-medium text-center text-[#272940]">
                  Benefits working with us
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1120px] gap-6">
              <div
                className="flex flex-col justify-start items-center flex-grow relative gap-12 px-12 py-8 rounded-sm bg-white border-4 border-[#b2b4db]"
                style={{
                  boxShadow:
                    '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
                }}>
                <svg
                  width={173}
                  height={171}
                  viewBox="0 0 173 171"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[121px] h-[120px]"
                  preserveAspectRatio="none">
                  <g filter="url(#filter0_dddd_1_2288)">
                    <rect
                      x="26.1665"
                      y={13}
                      width={121}
                      height={120}
                      rx={60}
                      fill="#816BD9"
                    />
                  </g>
                  <g clip-path="url(#clip0_1_2288)">
                    <path
                      d="M101.37 76H108.167C109.807 76 111.167 77.3594 111.167 79V94C111.167 95.6406 109.807 97 108.167 97H93.1665C91.5259 97 90.1665 95.6406 90.1665 94V79C90.1665 77.3594 91.5259 76 93.1665 76H98.4634V74.2188H75.8228V76H81.1665C82.8071 76 84.1665 77.3594 84.1665 79V94C84.1665 95.6406 82.8071 97 81.1665 97H66.1665C64.5259 97 63.1665 95.6406 63.1665 94V79C63.1665 77.3594 64.5259 76 66.1665 76H72.9165V73.1875C72.9165 72.1562 74.229 71.6406 75.4009 71.6406H85.7134V69.9531H79.2446C77.604 69.9531 76.2446 68.5938 76.2446 66.9531V51.9531C76.2446 50.3125 77.604 48.9531 79.2446 48.9531H94.2446C95.8853 48.9531 97.2446 50.3125 97.2446 51.9531V66.9531C97.2446 68.5938 95.8853 69.9531 94.2446 69.9531H88.7134V71.6875C92.604 71.6875 94.9946 71.6406 98.8853 71.6406C100.057 71.6406 101.37 72.1094 101.37 73.1875V76ZM94.2446 51.9531H79.2446V66.9531H94.2446V51.9531ZM81.1665 79H66.1665V94H81.1665V79Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dddd_1_2288"
                      x="0.703112"
                      y="0.0449409"
                      width="171.927"
                      height="170.927"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                      <feflood
                        flood-opacity={0}
                        result="BackgroundImageFix"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="1.54966" />
                      <fegaussianblur stdDeviation="1.57734" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.0477948 0"
                      />
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_2288"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="3.72406" />
                      <fegaussianblur stdDeviation="3.79056" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.0686618 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect1_dropShadow_1_2288"
                        result="effect2_dropShadow_1_2288"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="7.01207" />
                      <fegaussianblur stdDeviation="7.13728" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.085 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect2_dropShadow_1_2288"
                        result="effect3_dropShadow_1_2288"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="12.5083" />
                      <fegaussianblur stdDeviation="12.7317" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.5875 0 0 0 0 0.591447 0 0 0 0 0.6625 0 0 0 0.101338 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect3_dropShadow_1_2288"
                        result="effect4_dropShadow_1_2288"
                      />
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect4_dropShadow_1_2288"
                        result="shape"
                      />
                    </filter>
                    <clippath id="clip0_1_2288">
                      <rect
                        width={48}
                        height={48}
                        fill="white"
                        transform="translate(63.1665 49)"
                      />
                    </clippath>
                  </defs>
                </svg>
                <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-8 rounded-bl-[5px] rounded-br-[5px]">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[261.33px] text-[32px] font-medium text-center text-[#272940]">
                    Various target
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[261.33px] text-xl font-medium text-center text-[#7a7b94]">
                    We have a fantastic mixture of analytical, creative,
                    technical and managerial talent.{' '}
                  </p>
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 rounded-[5px]">
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#8069d8]">
                      Learn more
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center flex-grow relative gap-12 px-12 py-8 rounded-sm bg-[#fffef8] border-2 border-[#f0e7d0]">
                <svg
                  width={174}
                  height={171}
                  viewBox="0 0 174 171"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[122px] h-[120px]"
                  preserveAspectRatio="none">
                  <g filter="url(#filter0_dddd_1_2298)">
                    <rect
                      x={26}
                      y={13}
                      width={122}
                      height={120}
                      rx={60}
                      fill="white"
                    />
                  </g>
                  <g clip-path="url(#clip0_1_2298)">
                    <path
                      d="M111.362 88.3736L102.584 72.1406C103.48 70.1081 103.981 67.8618 103.981 65.4986C103.981 56.3906 96.5968 49.0076 87.4895 49.0076C78.38 49.0076 70.997 56.3913 70.997 65.4986C70.997 67.9188 71.5227 70.2153 72.4587 72.2853L63.6417 88.3661C63.3574 88.8828 63.4047 89.5203 63.7602 89.9921C64.1164 90.4624 64.7179 90.6836 65.2924 90.5486L72.8217 88.8214L75.3987 95.9989C75.5997 96.5569 76.1089 96.9439 76.6992 96.9874C76.7375 96.9904 76.7742 96.9919 76.8102 96.9919C77.0814 96.9918 77.3475 96.9181 77.5802 96.7788C77.8129 96.6395 78.0035 96.4397 78.1317 96.2006L85.8049 81.9049C86.3644 81.9616 86.9263 81.9899 87.4887 81.9897C88.0099 81.9897 88.5244 81.9627 89.0329 81.9147L96.8726 96.2119C97.0114 96.4653 97.2204 96.6733 97.4745 96.8107C97.7286 96.9482 98.0171 97.0092 98.3051 96.9866C98.8939 96.9394 99.4009 96.5531 99.6003 95.9981L102.177 88.8206L109.707 90.5479C110.284 90.6873 110.88 90.4631 111.236 89.9943C111.594 89.5263 111.642 88.8918 111.362 88.3736ZM77.0831 91.8131L75.196 86.5555C74.938 85.8408 74.1895 85.4245 73.4485 85.6008L67.8797 86.878L74.2271 75.301C76.3173 78.1248 79.2873 80.2548 82.7321 81.2913L77.0831 91.8131ZM74.0103 65.4985C74.0103 58.0668 80.0576 52.0203 87.49 52.0203C94.9218 52.0203 100.968 58.0668 100.968 65.4985C100.968 72.9303 94.9218 78.9783 87.49 78.9783C80.0568 78.9783 74.0103 72.9303 74.0103 65.4985Z"
                      fill="#5F618C"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dddd_1_2298"
                      x="0.536608"
                      y="0.0449409"
                      width="172.927"
                      height="170.927"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                      <feflood
                        flood-opacity={0}
                        result="BackgroundImageFix"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="1.54966" />
                      <fegaussianblur stdDeviation="1.57734" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.0477948 0"
                      />
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_2298"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="3.72406" />
                      <fegaussianblur stdDeviation="3.79056" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.0686618 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect1_dropShadow_1_2298"
                        result="effect2_dropShadow_1_2298"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="7.01207" />
                      <fegaussianblur stdDeviation="7.13728" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.085 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect2_dropShadow_1_2298"
                        result="effect3_dropShadow_1_2298"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="12.5083" />
                      <fegaussianblur stdDeviation="12.7317" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.5875 0 0 0 0 0.591447 0 0 0 0 0.6625 0 0 0 0.101338 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect3_dropShadow_1_2298"
                        result="effect4_dropShadow_1_2298"
                      />
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect4_dropShadow_1_2298"
                        result="shape"
                      />
                    </filter>
                    <clippath id="clip0_1_2298">
                      <rect
                        width={48}
                        height={48}
                        fill="white"
                        transform="translate(63.5 49)"
                      />
                    </clippath>
                  </defs>
                </svg>
                <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-8 rounded-bl-[5px] rounded-br-[5px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[32px] font-medium text-center text-[#272940]">
                    Industry expertise
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[261.33px] text-xl font-medium text-center text-[#7a7b94]">
                    We have a fantastic mixture of analytical, creative,
                    technical and managerial talent.{' '}
                  </p>
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 rounded-[5px]">
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#8069d8]">
                      Learn more
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-center flex-grow relative gap-12 px-12 py-8 rounded-sm bg-[#fffef8] border-2 border-[#f0e7d0]">
                <svg
                  width={173}
                  height={171}
                  viewBox="0 0 173 171"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[121px] h-[120px]"
                  preserveAspectRatio="none">
                  <g filter="url(#filter0_dddd_1_2308)">
                    <rect
                      x="25.833"
                      y={13}
                      width={121}
                      height={120}
                      rx={60}
                      fill="white"
                    />
                  </g>
                  <g clip-path="url(#clip0_1_2308)">
                    <path
                      d="M97.8018 88.1538L88.3578 82.9225C91.8678 80.161 92.8211 74.734 92.8211 71.6912V65.3574C92.8211 61.1634 87.2486 56.4924 81.6513 56.4924C76.0556 56.4924 70.3353 61.1642 70.3353 65.3574V71.6912C70.3353 74.4579 71.506 80.0552 75.0521 82.8985L65.3643 88.1537C65.3643 88.1537 62.833 89.2817 62.833 90.688V94.489C62.833 95.8877 63.9685 97.0232 65.3643 97.0232H97.8018C99.199 97.0232 100.334 95.8877 100.334 94.489V90.688C100.334 89.197 97.8018 88.1538 97.8018 88.1538ZM108.3 80.6845L98.7161 75.4532C102.226 72.6917 103.32 67.2647 103.32 64.222V57.8882C103.32 53.6942 97.6076 48.976 92.0103 48.976C88.3728 48.976 84.6536 50.9537 82.4891 53.4865C83.7236 53.563 85.0849 53.5645 86.2609 53.9395C87.8411 52.7087 89.8406 51.9767 92.0104 51.9767C96.3431 51.9767 100.32 55.6825 100.32 57.889V64.2227C100.32 66.5725 99.4503 71.059 96.8621 73.0952C96.4719 73.4025 96.164 73.8016 95.9658 74.2569C95.7677 74.7123 95.6855 75.2096 95.7266 75.7045C95.7683 76.1991 95.932 76.6757 96.2029 77.0916C96.4738 77.5075 96.8435 77.8498 97.2791 78.088L106.863 83.3192C106.947 83.365 107.052 83.4145 107.14 83.4528C107.361 83.5465 107.634 83.7032 107.833 83.8412V86.509H101.778C102.692 87.199 102.969 88.186 103.323 89.509H108.301C109.698 89.509 110.834 88.3735 110.834 86.9747V83.2202C110.833 81.7277 108.3 80.6845 108.3 80.6845Z"
                      fill="#5F618C"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dddd_1_2308"
                      x="0.369616"
                      y="0.0449409"
                      width="171.927"
                      height="170.927"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                      <feflood
                        flood-opacity={0}
                        result="BackgroundImageFix"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="1.54966" />
                      <fegaussianblur stdDeviation="1.57734" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.0477948 0"
                      />
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_2308"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="3.72406" />
                      <fegaussianblur stdDeviation="3.79056" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.0686618 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect1_dropShadow_1_2308"
                        result="effect2_dropShadow_1_2308"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="7.01207" />
                      <fegaussianblur stdDeviation="7.13728" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.085 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect2_dropShadow_1_2308"
                        result="effect3_dropShadow_1_2308"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="12.5083" />
                      <fegaussianblur stdDeviation="12.7317" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.5875 0 0 0 0 0.591447 0 0 0 0 0.6625 0 0 0 0.101338 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect3_dropShadow_1_2308"
                        result="effect4_dropShadow_1_2308"
                      />
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect4_dropShadow_1_2308"
                        result="shape"
                      />
                    </filter>
                    <clippath id="clip0_1_2308">
                      <rect
                        width={48}
                        height={48}
                        fill="white"
                        transform="translate(62.833 49)"
                      />
                    </clippath>
                  </defs>
                </svg>
                <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-8 rounded-bl-[5px] rounded-br-[5px]">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[261.33px] text-[32px] font-medium text-center text-[#272940]">
                    Community
                  </p>
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[261.33px] text-xl font-medium text-center text-[#7a7b94]">
                    We have a fantastic mixture of analytical, creative,
                    technical and managerial talent.{' '}
                  </p>
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 rounded-[5px]">
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#8069d8]">
                      Learn more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[1418px] absolute left-0 top-[2762px]">
          <div
            className="w-[1440px] h-[1416px] absolute left-[1439px] top-px"
            style={{
              background:
                'linear-gradient(177.06deg, #fffef8 20.98%, #ffbf15 140.17%)',
            }}
          />
          <svg
            width={1440}
            height={809}
            viewBox="0 0 1440 809"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1440px] h-[809px]"
            preserveAspectRatio="none">
            <mask
              id="mask0_1_1981"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={1440}
              height={809}>
              <rect
                width={1440}
                height={809}
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_1_1981)">
              <path
                d="M-188.639 -0.391952L-62.5849 571.92L-188.639 1144.23L-187.095 1383.65L138.243 573.676L-187.095 -236.515L-188.639 -0.391952Z"
                fill="white"
                fill-opacity="0.4"
              />
              <path
                d="M-185.124 -706.898L538.661 578.714L-184.953 1864.33L-183.581 2103.72L739.284 580.469L-183.581 -943L-185.124 -706.898Z"
                fill="white"
                fill-opacity="0.1"
              />
              <path
                d="M-185.124 -469.141L338.446 578.605L-185.124 1626.35L-183.583 1865.96L538.937 580.36L-183.754 -705.24L-185.124 -469.141Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M-188.639 -234.757L137.463 575.427L-188.639 1385.39L-187.092 1624.8L338.59 576.963L-187.092 -470.877L-188.639 -234.757Z"
                fill="white"
                fill-opacity="0.3"
              />
            </g>
          </svg>
          <div className="flex justify-center items-center absolute left-[505px] top-[1144px] gap-2.5 px-12 py-6 rounded-md bg-[#ffeaac]/50 border-2 border-[#dcc17e] backdrop-blur-2xl">
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#272940]">
              None of above? Keep scrolling
            </p>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative opacity-30 gap-2.5 p-5 rounded-[32px]">
              <svg
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none">
                <path
                  d="M1.93398 8.76465C2.10065 8.59798 2.29798 8.51465 2.52598 8.51465C2.75354 8.51465 2.95065 8.59798 3.11732 8.76465L8.00065 13.648L12.9007 8.74798C13.0562 8.59243 13.2507 8.51465 13.484 8.51465C13.7173 8.51465 13.9173 8.59798 14.084 8.76465C14.2507 8.93132 14.334 9.12865 14.334 9.35665C14.334 9.5842 14.2507 9.78132 14.084 9.94798L8.46732 15.548C8.40065 15.6146 8.32843 15.662 8.25065 15.69C8.17287 15.7175 8.08954 15.7313 8.00065 15.7313C7.91176 15.7313 7.82843 15.7175 7.75065 15.69C7.67287 15.662 7.60065 15.6146 7.53398 15.548L1.91732 9.93131C1.76176 9.77576 1.68398 9.5842 1.68398 9.35665C1.68398 9.12865 1.76732 8.93131 1.93398 8.76465Z"
                  fill="#272940"
                />
                <path
                  d="M8 14.498L8 2.49805"
                  stroke="#272940"
                  strokeWidth="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start absolute left-40 top-[143px] gap-[70px]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-20">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left uppercase text-[#40320f]/50">
                  Market segments
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 py-5 rounded-[30px]">
                  <p className="flex-grow-0 flex-shrink-0 w-[499px] text-5xl font-medium text-left text-[#272940]">
                    <span className="flex-grow-0 flex-shrink-0 w-[499px] text-5xl font-medium text-left text-[#272940]">
                      What are the Best
                    </span>
                    <br />
                    <span className="flex-grow-0 flex-shrink-0 w-[499px] text-5xl font-medium text-left text-[#272940]">
                      Describes about You?
                    </span>
                  </p>
                </div>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[541px] text-xl font-medium text-left text-[#7a7b94]">
                We specialise aross various market segments, Your bussiness
                provides products or services that make society better. Our
                patent &amp; trademark attorneys bring you profession-leading
                experience in sector-specific IP to protect your valuable tech
                or brand.
              </p>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-[1120px] h-[584px]">
              <div className="w-[548px] h-[280px] absolute left-[572px] top-[551px] rounded-sm">
                <svg
                  width={776}
                  height={508}
                  viewBox="0 0 776 508"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[543px] top-[275px]"
                  preserveAspectRatio="none">
                  <g filter="url(#filter0_dddd_1_2013)">
                    <path
                      d="M662 335.999C662 337.104 661.105 337.999 660 337.999H116C114.895 337.999 114 337.104 114 335.999V59.999C114 58.8944 114.895 57.999 116 57.999H660C661.105 57.999 662 58.8945 662 59.999V335.999Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dddd_1_2013"
                      x={0}
                      y="-0.000976562"
                      width={776}
                      height={508}
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                      <feflood
                        flood-opacity={0}
                        result="BackgroundImageFix"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="1.54966" />
                      <fegaussianblur stdDeviation="1.57734" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0477948 0"
                      />
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_2013"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="3.72406" />
                      <fegaussianblur stdDeviation="3.79056" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.0686618 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect1_dropShadow_1_2013"
                        result="effect2_dropShadow_1_2013"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="12.5083" />
                      <fegaussianblur stdDeviation="12.7317" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.101338 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect2_dropShadow_1_2013"
                        result="effect3_dropShadow_1_2013"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy={56} />
                      <fegaussianblur stdDeviation={57} />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.17 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect3_dropShadow_1_2013"
                        result="effect4_dropShadow_1_2013"
                      />
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect4_dropShadow_1_2013"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="flex flex-col justify-start items-start absolute left-8 top-8 gap-6">
                  <svg
                    width={80}
                    height={81}
                    viewBox="0 0 80 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-20 h-20"
                    preserveAspectRatio="xMidYMid meet">
                    <circle
                      cx={40}
                      cy="40.998"
                      r={40}
                      fill="#F3F3FA"
                    />
                    <path
                      d="M26.5947 38.7397L40.0001 29.3223L53.4055 38.7397V53.5385H26.5947V38.7397Z"
                      fill="#5E608A"
                    />
                    <path
                      d="M32.6484 42.8351C34.713 40.8281 37.5129 39.7007 40.4322 39.7007C43.3516 39.7007 46.1514 40.8281 48.216 42.8351M36.5398 46.6196C37.0509 46.1226 37.6577 45.7284 38.3255 45.4594C38.9933 45.1904 39.709 45.052 40.4319 45.052C41.1547 45.052 41.8705 45.1904 42.5383 45.4594C43.2061 45.7284 43.8128 46.1226 44.3239 46.6196"
                      stroke="#F3F3FA"
                      strokeWidth={2}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[477px] relative gap-4">
                    <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#272940]">
                      Entrepreneur
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 w-[477px] text-xl font-medium text-left text-[#7a7b94]">
                      You are a sole inventor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[548px] h-[280px] absolute left-0 top-[551px]">
                <svg
                  width={784}
                  height={517}
                  viewBox="0 0 784 517"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[545.5px] top-[277.5px]"
                  preserveAspectRatio="none">
                  <g filter="url(#filter0_dddd_1_2025)">
                    <path
                      d="M666 340.998C666 342.103 665.105 342.998 664 342.998H168.922C168.419 342.998 167.935 342.809 167.566 342.468L118.644 297.35C118.234 296.971 118 296.438 118 295.879V64.998C118 63.8935 118.895 62.998 120 62.998H664C665.105 62.998 666 63.8935 666 64.998V340.998Z"
                      fill="white"
                    />
                    <path
                      d="M664 60.998H120C117.791 60.998 116 62.7889 116 64.998V295.879C116 296.996 116.467 298.063 117.288 298.82L166.21 343.938C166.949 344.62 167.917 344.998 168.922 344.998H664C666.209 344.998 668 343.207 668 340.998V64.998C668 62.7889 666.209 60.998 664 60.998Z"
                      stroke="#B2B4DB"
                      strokeWidth={4}
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dddd_1_2025"
                      x={0}
                      y="0.998047"
                      width={784}
                      height={516}
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                      <feflood
                        flood-opacity={0}
                        result="BackgroundImageFix"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="1.54966" />
                      <fegaussianblur stdDeviation="1.57734" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0477948 0"
                      />
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_2025"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="3.72406" />
                      <fegaussianblur stdDeviation="3.79056" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.0686618 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect1_dropShadow_1_2025"
                        result="effect2_dropShadow_1_2025"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="12.5083" />
                      <fegaussianblur stdDeviation="12.7317" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.101338 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect2_dropShadow_1_2025"
                        result="effect3_dropShadow_1_2025"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy={56} />
                      <fegaussianblur stdDeviation={57} />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.17 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect3_dropShadow_1_2025"
                        result="effect4_dropShadow_1_2025"
                      />
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect4_dropShadow_1_2025"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="flex flex-col justify-start items-start w-[483.17px] absolute left-[32.41px] top-8 gap-6">
                  <svg
                    width={81}
                    height={81}
                    viewBox="0 0 81 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-20 h-20"
                    preserveAspectRatio="xMidYMid meet">
                    <circle
                      cx="40.4141"
                      cy="40.998"
                      r={40}
                      fill="#E9E9F6"
                    />
                    <path
                      d="M32.371 30.1873C31.7499 30.6203 31.2426 31.1977 30.8924 31.8701C30.5423 32.5424 30.3596 33.2898 30.3601 34.0483C30.3597 34.8601 30.5689 35.6581 30.9673 36.3648C31.3657 37.0714 31.9398 37.6626 32.6337 38.0808M48.4574 30.1873C49.0785 30.6203 49.5858 31.1977 49.936 31.8701C50.2861 32.5424 50.4687 33.2898 50.4682 34.0483C50.4687 34.8069 50.2861 35.5542 49.936 36.2266C49.5858 36.899 49.0785 37.4764 48.4574 37.9094M53.8196 53.5386V52.7321C53.8196 49.7212 53.8196 48.2157 53.2351 47.0652C52.721 46.0535 51.9008 45.231 50.8919 44.7156M27.0088 53.5386V52.7321C27.0088 49.7212 27.0088 48.2157 27.5933 47.0652C28.1073 46.0535 28.9276 45.231 29.9365 44.7156"
                      stroke="#5E608A"
                      strokeWidth={2}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M41.7196 38.3813C41.1687 38.6179 40.5783 38.7397 39.982 38.7397C38.7778 38.7397 37.6229 38.2436 36.7714 37.3605C35.9199 36.4775 35.4415 35.2798 35.4415 34.031C35.4415 32.7821 35.9199 31.5845 36.7714 30.7014C37.6229 29.8184 38.7778 29.3223 39.982 29.3223C40.5783 29.3223 41.1687 29.4441 41.7196 29.6807C42.2705 29.9173 42.771 30.2642 43.1927 30.7014C43.6143 31.1387 43.9488 31.6577 44.1769 32.229C44.4051 32.8003 44.5226 33.4126 44.5226 34.031C44.5226 34.6493 44.4051 35.2616 44.1769 35.8329C43.9488 36.4042 43.6143 36.9233 43.1927 37.3605C42.771 37.7978 42.2705 38.1446 41.7196 38.3813Z"
                      fill="#5E608A"
                    />
                    <path
                      d="M32.1982 53.5385V52.1931C32.1982 49.6861 32.1982 48.4315 32.5933 47.4434C32.8541 46.7904 33.2363 46.1971 33.7182 45.6973C34.2001 45.1976 34.7723 44.8012 35.4019 44.5307C36.3554 44.1211 37.5645 44.1211 39.982 44.1211H39.982H39.982C42.3995 44.1211 43.6086 44.1211 44.5621 44.5307C45.8337 45.0767 46.844 46.1242 47.3708 47.4427C47.7658 48.4322 47.7658 49.6861 47.7658 52.1931V52.1931V53.5385H32.1982Z"
                      fill="#5E608A"
                    />
                  </svg>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#272940]">
                      Foreign Associates
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 w-[477px] text-xl font-medium text-left text-[#7a7b94]">
                      You are IP attorney based in other countries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[548px] h-[280px] absolute left-[572px] top-[247px]">
                <svg
                  width={556}
                  height={288}
                  viewBox="0 0 556 288"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[-2.5px] top-[-2.5px]"
                  preserveAspectRatio="none">
                  <path
                    d="M5.99996 285.999L550 285.999C552.209 285.999 554 284.208 554 281.999L554 51.1177C554 50.0007 553.533 48.9346 552.712 48.1773L503.79 3.0587C503.051 2.37739 502.083 1.99911 501.078 1.99911L6 1.99902C3.79087 1.99902 2 3.78987 2 5.99902L1.99995 281.999C1.99995 284.208 3.79083 285.999 5.99996 285.999Z"
                    fill="url(#paint0_linear_1_2036)"
                    stroke="#A290EA"
                    strokeWidth={4}
                  />
                  <defs>
                    <lineargradient
                      id="paint0_linear_1_2036"
                      x1={4}
                      y1="3.99902"
                      x2="477.613"
                      y2="366.593"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#61638D" />
                      <stop
                        offset={1}
                        stop-color="#494B70"
                      />
                    </lineargradient>
                  </defs>
                </svg>
                <svg
                  width={548}
                  height={280}
                  viewBox="0 0 548 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[548px] h-[280px] opacity-30"
                  preserveAspectRatio="none">
                  <g opacity="0.3">
                    <mask
                      id="mask0_1_2037"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={-1}
                      width={548}
                      height={281}>
                      <path
                        d="M0 1.99902C0 0.89445 0.895431 -0.000976562 2 -0.000976562H497.078C497.581 -0.000976562 498.065 0.188161 498.434 0.528816L547.356 45.6474C547.766 46.0261 548 46.5591 548 47.1176V277.999C548 279.104 547.105 279.999 546 279.999H2.00001C0.89544 279.999 0 279.104 0 277.999V1.99902Z"
                        fill="url(#paint0_linear_1_2037)"
                      />
                    </mask>
                    <g mask="url(#mask0_1_2037)">
                      <path
                        d="M608.475 -7.41417L577.712 148.438L608.475 304.29H563.105L532.343 148.438L563.105 -7.41417H608.475Z"
                        fill="white"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M563.138 -7.85988L532.46 147.99L563.138 303.839L562.762 369.035L483.584 148.468L562.762 -72.1598L563.138 -7.85988Z"
                        fill="white"
                        fill-opacity="0.4"
                      />
                      <path
                        d="M562.282 -200.252L386.134 149.84L562.24 499.932L561.907 565.122L337.309 150.318L561.907 -264.546L562.282 -200.252Z"
                        fill="white"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M562.282 -135.508L434.861 149.81L562.282 435.127L561.907 500.376L386.067 150.288L561.949 -199.801L562.282 -135.508Z"
                        fill="white"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M563.138 -71.6809L483.774 148.944L563.138 369.51L562.761 434.706L434.826 149.363L562.761 -135.98L563.138 -71.6809Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                    </g>
                  </g>
                  <defs>
                    <lineargradient
                      id="paint0_linear_1_2037"
                      x1="-33.9334"
                      y1="9.75659"
                      x2="560.732"
                      y2="378.029"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFE49E" />
                      <stop
                        offset={1}
                        stop-color="#FFC93A"
                      />
                    </lineargradient>
                  </defs>
                </svg>
                <div className="flex flex-col justify-start items-start w-[366.68px] absolute left-[32.41px] top-8 gap-6">
                  <svg
                    width={123}
                    height={122}
                    viewBox="0 0 123 122"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-20 h-20"
                    preserveAspectRatio="xMidYMid meet">
                    <g filter="url(#filter0_d_1_2055)">
                      <circle
                        cx="56.4141"
                        cy="56.999"
                        r={40}
                        fill="#816BD9"
                      />
                    </g>
                    <path
                      d="M43.0088 63.2692C43.0088 62.9252 43.15 62.5952 43.4014 62.3519C43.6528 62.1086 43.9938 61.9719 44.3493 61.9719H48.371V57.4314L56.4142 52.2422L64.4574 57.4314V61.9719H68.4791C68.8346 61.9719 69.1756 62.1086 69.427 62.3519C69.6784 62.5952 69.8196 62.9252 69.8196 63.2692V69.1071C69.8196 69.4511 69.6784 69.7811 69.427 70.0244C69.1756 70.2677 68.8346 70.4044 68.4791 70.4044H43.0088V63.2692Z"
                      fill="white"
                    />
                    <path
                      d="M56.8467 45.3232V52.2422"
                      stroke="white"
                      strokeWidth={2}
                      stroke-linecap="round"
                    />
                    <path
                      d="M59.0089 70.4043V61.7556H53.8198V70.4043M52.5225 70.4043H60.3062Z"
                      fill="#816BD9"
                    />
                    <path
                      d="M64.6305 46.2546V50.4459C64.6305 50.4459 63.6575 52.5415 60.7386 50.4459C57.8197 48.3503 56.8467 50.4459 56.8467 50.4459V46.2546C56.8467 46.2546 57.8197 44.159 60.7386 46.2546C63.6575 48.3503 64.6305 46.2546 64.6305 46.2546Z"
                      fill="white"
                    />
                    <defs>
                      <filter
                        id="filter0_d_1_2055"
                        x="0.414062"
                        y="-0.000976562"
                        width={122}
                        height={122}
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feflood
                          flood-opacity={0}
                          result="BackgroundImageFix"
                        />
                        <fecolormatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feoffset
                          dx={5}
                          dy={4}
                        />
                        <fegaussianblur stdDeviation="10.5" />
                        <fecomposite
                          in2="hardAlpha"
                          operator="out"
                        />
                        <fecolormatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feblend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_2055"
                        />
                        <feblend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_2055"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#fffdf7]">
                      Funded Startups
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 w-[362px] text-xl font-medium text-left text-white">
                      You has australian startup companies that are 1-5 years
                      old.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[548px] h-[280px] absolute left-0 top-[247px]">
                <svg
                  width={776}
                  height={508}
                  viewBox="0 0 776 508"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[545.5px] top-[277.5px]"
                  preserveAspectRatio="none">
                  <g filter="url(#filter0_dddd_1_2067)">
                    <path
                      d="M662 335.999C662 337.104 661.105 337.999 660 337.999H116C114.895 337.999 114 337.104 114 335.999V59.999C114 58.8944 114.895 57.999 116 57.999H660C661.105 57.999 662 58.8945 662 59.999V335.999Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dddd_1_2067"
                      x={0}
                      y="-0.000976562"
                      width={776}
                      height={508}
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                      <feflood
                        flood-opacity={0}
                        result="BackgroundImageFix"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="1.54966" />
                      <fegaussianblur stdDeviation="1.57734" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0477948 0"
                      />
                      <feblend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_2067"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="3.72406" />
                      <fegaussianblur stdDeviation="3.79056" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.0686618 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect1_dropShadow_1_2067"
                        result="effect2_dropShadow_1_2067"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy="12.5083" />
                      <fegaussianblur stdDeviation="12.7317" />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.101338 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect2_dropShadow_1_2067"
                        result="effect3_dropShadow_1_2067"
                      />
                      <fecolormatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feoffset dy={56} />
                      <fegaussianblur stdDeviation={57} />
                      <fecolormatrix
                        type="matrix"
                        values="0 0 0 0 0.588235 0 0 0 0 0.592157 0 0 0 0 0.662745 0 0 0 0.17 0"
                      />
                      <feblend
                        mode="normal"
                        in2="effect3_dropShadow_1_2067"
                        result="effect4_dropShadow_1_2067"
                      />
                      <feblend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect4_dropShadow_1_2067"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="flex flex-col justify-start items-start absolute left-8 top-8 gap-6">
                  <svg
                    width={80}
                    height={81}
                    viewBox="0 0 80 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-20 h-20"
                    preserveAspectRatio="none">
                    <circle
                      cx={40}
                      cy="40.998"
                      r={40}
                      fill="#F3F3FA"
                    />
                    <path
                      d="M54 29.998H27V49.7123H37.125L40.5 52.998L43.875 49.7123H54V29.998Z"
                      fill="#5E608A"
                    />
                    <path
                      d="M40.5 40.998C42.433 40.998 44 39.431 44 37.498C44 35.5651 42.433 33.998 40.5 33.998C38.567 33.998 37 35.5651 37 37.498C37 39.431 38.567 40.998 40.5 40.998Z"
                      fill="#F3F3FA"
                    />
                    <path
                      d="M46 45.998C46 43.2368 43.3133 40.998 40 40.998C36.6867 40.998 34 43.2368 34 45.998"
                      fill="#F3F3FA"
                    />
                  </svg>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                    <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#272940]">
                      Corporate / SME
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 w-[477px] text-xl font-medium text-left text-[#7a7b94]">
                      You are Australian companies, typically manufacturers.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-[120px] h-[70.93px] absolute left-[759px] top-[1782px]"
          style={{ filter: 'drop-shadow(5px 4px 21px rgba(0,0,0,0.25))' }}>
          <svg
            width={100}
            height={55}
            viewBox="0 0 100 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[9px] top-[7px]"
            preserveAspectRatio="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.9289 7.92893C39.255 7.92893 40.5268 7.40215 41.4645 6.46447L46.4645 1.46447C48.4171 -0.488153 51.5829 -0.488157 53.5355 1.46446L58.5355 6.46447C59.4732 7.40215 60.745 7.92893 62.0711 7.92893H95C97.7614 7.92893 100 10.1675 100 12.9289V49.9289C100 52.6904 97.7614 54.9289 95 54.9289H5C2.23858 54.9289 0 52.6904 0 49.9289V12.9289C0 10.1675 2.23858 7.92893 5 7.92893H37.9289Z"
              fill="#2D2D2D"
            />
          </svg>
          <p className="absolute left-7 top-[25.93px] text-xl font-semibold text-center text-white">
            Clients
          </p>
        </div>
        <div className="w-[1440px] h-[762px] absolute left-0 top-[7879px]">
          <svg
            width={1440}
            height={762}
            viewBox="0 0 1440 762"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[-1px] top-[-1px]"
            preserveAspectRatio="none">
            <path
              d="M0 55.4555L1440 0V762H0L0 55.4555Z"
              fill="url(#paint0_linear_1_3781)"
            />
            <defs>
              <lineargradient
                id="paint0_linear_1_3781"
                x1="625.5"
                y1={762}
                x2="625.5"
                y2={-174}
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFEF8" />
                <stop
                  offset="0.0565011"
                  stop-color="#FDD262"
                />
                <stop
                  offset={1}
                  stop-color="#FFD15B"
                />
              </lineargradient>
            </defs>
          </svg>
          <svg
            width={1440}
            height={762}
            viewBox="0 0 1440 762"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1440px] h-[762px]"
            preserveAspectRatio="none">
            <mask
              id="mask0_1_3782"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={1440}
              height={762}>
              <path
                d="M0 55.4555L1440 0V762H0V55.4555Z"
                fill="url(#paint0_linear_1_3782)"
              />
            </mask>
            <g mask="url(#mask0_1_3782)">
              <path
                d="M-173.502 -159.433L-47.1003 436.099L-173.502 1031.63H12.919L139.321 436.099L12.919 -159.433H-173.502Z"
                fill="white"
                fill-opacity="0.7"
              />
              <path
                d="M12.7861 -159.433L139.118 436.099L12.7861 1031.63H199.276L325.609 436.099L199.276 -159.433H12.7861Z"
                fill="white"
                fill-opacity="0.6"
              />
              <path
                d="M199.072 -159.433L325.474 436.099L199.072 1031.63H385.493L511.895 436.099L385.493 -159.433H199.072Z"
                fill="white"
                fill-opacity="0.5"
              />
              <path
                d="M385.361 -161.138L511.415 434.385L385.361 1029.91L386.905 1279.03L712.243 436.212L386.905 -406.837L385.361 -161.138Z"
                fill="white"
                fill-opacity="0.4"
              />
              <path
                d="M388.876 -896.297L1112.66 441.455L389.047 1779.21L390.419 2028.31L1313.28 443.282L390.419 -1141.97L388.876 -896.297Z"
                fill="white"
                fill-opacity="0.1"
              />
              <path
                d="M388.876 -648.896L912.446 441.342L388.876 1531.58L390.417 1780.91L1112.94 443.168L390.246 -894.571L388.876 -648.896Z"
                fill="white"
                fill-opacity="0.2"
              />
              <path
                d="M385.361 -405.005L711.463 438.036L385.361 1280.85L386.908 1529.97L912.59 439.634L386.908 -650.702L385.361 -405.005Z"
                fill="white"
                fill-opacity="0.3"
              />
            </g>
            <defs>
              <lineargradient
                id="paint0_linear_1_3782"
                x1="805.5"
                y1="595.5"
                x2="564.965"
                y2="-167.429"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFFEF8" />
                <stop
                  offset="0.182473"
                  stop-color="#FBB500"
                />
                <stop
                  offset="0.283295"
                  stop-color="#FFBE14"
                />
                <stop
                  offset={1}
                  stop-color="#FFECB8"
                />
              </lineargradient>
            </defs>
          </svg>
          <div className="flex flex-col justify-start items-center w-[816px] absolute left-[312px] top-[140px] gap-2.5">
            <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left uppercase text-[#40320f]/50">
              Industry speciality
            </p>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[816px] relative gap-2.5 p-5 rounded-[30px]">
              <p className="flex-grow-0 flex-shrink-0 text-5xl font-medium text-center text-[#272940]">
                See our Industry Specialty for
              </p>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 py-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-5xl text-center text-[#5f618c]">
                Corporate /SME
              </p>
            </div>
          </div>
          <div className="w-[1545px] h-[568px] absolute left-[-52px] top-[413px]">
            <div
              className="flex justify-end items-center w-[351px] h-40 absolute left-[789px] top-[388px] gap-6 px-6 py-[30px] rounded-sm bg-white"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={40}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <path
                  d="M42.1352 25.1935L42.1383 25.1914C42.2531 25.1143 42.317 25.0802 42.3642 25.0608C42.4025 25.0451 42.4474 25.0318 42.5226 25.0254C42.5491 25.0235 42.5771 25.0225 42.6059 25.0225L42.6219 25.0225L42.632 25.0226C42.6334 25.0226 42.6345 25.0226 42.6352 25.0226L42.6352 25.0226L42.6445 25.0229C43.1871 25.0406 43.6164 25.4841 43.6164 26.0225L43.6164 26.0235C43.6165 26.1009 43.6072 26.1779 43.5886 26.253L43.5822 26.279L43.5772 26.3054L41.7817 35.7079L41.5553 36.8934L42.7622 36.8955L48.5296 36.9054C48.5304 36.9054 48.5312 36.9054 48.5319 36.9055C48.911 36.9091 49.2544 37.123 49.4237 37.4565L49.4239 37.4571C49.5926 37.7889 49.5611 38.1876 49.34 38.4906L49.3339 38.499L49.328 38.5076L38.1141 54.57C37.8897 54.8741 37.6588 54.977 37.3949 54.977H37.3942C37.2574 54.9771 37.122 54.9493 36.9963 54.8953L36.9947 54.8946C36.5616 54.7093 36.3185 54.2513 36.4042 53.7945L36.4058 53.7859L36.4073 53.7774L38.2223 43.0839L38.419 41.9251L37.2437 41.9165L31.4707 41.8745C31.0907 41.8718 30.7462 41.6576 30.5766 41.3235L30.5764 41.323C30.4084 40.9924 30.4387 40.5975 30.6562 40.295L41.8568 25.4713L41.8686 25.4557L41.8798 25.4395C41.8939 25.4194 41.9088 25.3999 41.9247 25.3812L41.9249 25.3809C41.9859 25.3089 42.0567 25.2459 42.1352 25.1935Z"
                  stroke="black"
                  strokeWidth={2}
                />
              </svg>
              <p className="flex-grow w-[199px] text-xl font-medium text-left text-[#272940]">
                Electronics &amp; Electromechanical
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[351px] h-40 absolute left-[1174px] top-[388px] gap-6 px-6 py-[30px] rounded-sm bg-white"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={40}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <path
                  d="M42.1352 25.1935L42.1383 25.1914C42.2531 25.1143 42.317 25.0802 42.3642 25.0608C42.4025 25.0451 42.4474 25.0318 42.5226 25.0254C42.5491 25.0235 42.5771 25.0225 42.6059 25.0225L42.6219 25.0225L42.632 25.0226C42.6334 25.0226 42.6345 25.0226 42.6352 25.0226L42.6352 25.0226L42.6445 25.0229C43.1871 25.0406 43.6164 25.4841 43.6164 26.0225L43.6164 26.0235C43.6165 26.1009 43.6072 26.1779 43.5886 26.253L43.5822 26.279L43.5772 26.3054L41.7817 35.7079L41.5553 36.8934L42.7622 36.8955L48.5296 36.9054C48.5304 36.9054 48.5312 36.9054 48.5319 36.9055C48.911 36.9091 49.2544 37.123 49.4237 37.4565L49.4239 37.4571C49.5926 37.7889 49.5611 38.1876 49.34 38.4906L49.3339 38.499L49.328 38.5076L38.1141 54.57C37.8897 54.8741 37.6588 54.977 37.3949 54.977H37.3942C37.2574 54.9771 37.122 54.9493 36.9963 54.8953L36.9947 54.8946C36.5616 54.7093 36.3185 54.2513 36.4042 53.7945L36.4058 53.7859L36.4073 53.7774L38.2223 43.0839L38.419 41.9251L37.2437 41.9165L31.4707 41.8745C31.0907 41.8718 30.7462 41.6576 30.5766 41.3235L30.5764 41.323C30.4084 40.9924 30.4387 40.5975 30.6562 40.295L41.8568 25.4713L41.8686 25.4557L41.8798 25.4395C41.8939 25.4194 41.9088 25.3999 41.9247 25.3812L41.9249 25.3809C41.9859 25.3089 42.0567 25.2459 42.1352 25.1935Z"
                  stroke="black"
                  strokeWidth={2}
                />
              </svg>
              <p className="flex-grow w-[199px] text-xl font-medium text-left text-[#272940]">
                Electronics &amp; Electromechanical
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[351px] h-40 absolute left-[789px] top-[204px] gap-6 px-6 py-[30px] rounded-sm bg-white"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={40}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <g clip-path="url(#clip0_1_3819)">
                  <path
                    d="M51 34C51.6875 34 52.3333 34.1302 52.9375 34.3906C53.5417 34.651 54.0677 35.0104 54.5156 35.4688C54.9635 35.9271 55.3229 36.4583 55.5938 37.0625C55.8646 37.6667 56 38.3125 56 39C56 39.5938 55.901 40.1615 55.7031 40.7031C55.5052 41.2448 55.2292 41.7292 54.875 42.1562C54.5208 42.5833 54.099 42.9531 53.6094 43.2656C53.1198 43.5781 52.5833 43.7917 52 43.9062V45.5C52 46.4271 51.8854 47.3281 51.6562 48.2031C51.4271 49.0781 51.1042 49.9115 50.6875 50.7031C50.2708 51.4948 49.7604 52.2083 49.1562 52.8438C48.5521 53.4792 47.8802 54.0365 47.1406 54.5156C46.401 54.9948 45.5938 55.3594 44.7188 55.6094C43.8438 55.8594 42.9375 55.9896 42 56C41.0521 56 40.1458 55.8698 39.2812 55.6094C38.4167 55.349 37.6146 54.9844 36.875 54.5156C36.1354 54.0469 35.4635 53.4896 34.8594 52.8438C34.2552 52.1979 33.7448 51.4844 33.3281 50.7031C32.9115 49.9219 32.5833 49.0938 32.3438 48.2188C32.1042 47.3438 31.9896 46.4375 32 45.5V41.9219C30.7188 41.8073 29.5833 41.5 28.5938 41C27.6042 40.5 26.7656 39.8438 26.0781 39.0312C25.3906 38.2188 24.875 37.276 24.5312 36.2031C24.1875 35.1302 24.0104 33.9688 24 32.7188V24H29C29.2708 24 29.5052 24.099 29.7031 24.2969C29.901 24.4948 30 24.7292 30 25C30 25.2708 29.901 25.5052 29.7031 25.7031C29.5052 25.901 29.2708 26 29 26H26V32.7188C26 33.8229 26.151 34.8229 26.4531 35.7188C26.7552 36.6146 27.2083 37.3802 27.8125 38.0156C28.4167 38.651 29.1458 39.1406 30 39.4844C30.8542 39.8281 31.8542 40 33 40C34.0521 40 35.0104 39.8385 35.875 39.5156C36.7396 39.1927 37.474 38.7292 38.0781 38.125C38.6823 37.5208 39.1562 36.7917 39.5 35.9375C39.8438 35.0833 40.0104 34.1198 40 33.0469V26H37C36.7292 26 36.4948 25.901 36.2969 25.7031C36.099 25.5052 36 25.2708 36 25C36 24.7292 36.099 24.4948 36.2969 24.2969C36.4948 24.099 36.7292 24 37 24H42V32.7188C42 33.9688 41.8229 35.1302 41.4688 36.2031C41.1146 37.276 40.599 38.2188 39.9219 39.0312C39.2448 39.8438 38.4115 40.5 37.4219 41C36.4323 41.5 35.2917 41.8073 34 41.9219V45.5C34 46.6146 34.1979 47.6823 34.5938 48.7031C34.9896 49.724 35.5469 50.6302 36.2656 51.4219C36.9844 52.2135 37.8281 52.8385 38.7969 53.2969C39.7656 53.7552 40.8333 53.9896 42 54C43.1562 54 44.2188 53.7656 45.1875 53.2969C46.1562 52.8281 47 52.2031 47.7188 51.4219C48.4375 50.6406 48.9948 49.7396 49.3906 48.7188C49.7865 47.6979 49.9896 46.625 50 45.5V43.9062C49.4167 43.7812 48.8802 43.5677 48.3906 43.2656C47.901 42.9635 47.4792 42.599 47.125 42.1719C46.7708 41.7448 46.4948 41.2552 46.2969 40.7031C46.099 40.151 46 39.5833 46 39C46 38.3125 46.1302 37.6667 46.3906 37.0625C46.651 36.4583 47.0052 35.9323 47.4531 35.4844C47.901 35.0365 48.4323 34.6771 49.0469 34.4062C49.6615 34.1354 50.3125 34 51 34ZM51 42C51.4167 42 51.8073 41.9219 52.1719 41.7656C52.5365 41.6094 52.8542 41.3958 53.125 41.125C53.3958 40.8542 53.6094 40.5365 53.7656 40.1719C53.9219 39.8073 54 39.4167 54 39C54 38.5833 53.9219 38.1927 53.7656 37.8281C53.6094 37.4635 53.3958 37.1458 53.125 36.875C52.8542 36.6042 52.5365 36.3906 52.1719 36.2344C51.8073 36.0781 51.4167 36 51 36C50.5833 36 50.1927 36.0781 49.8281 36.2344C49.4635 36.3906 49.1458 36.6042 48.875 36.875C48.6042 37.1458 48.3906 37.4635 48.2344 37.8281C48.0781 38.1927 48 38.5833 48 39C48 39.4167 48.0781 39.8073 48.2344 40.1719C48.3906 40.5365 48.6042 40.8542 48.875 41.125C49.1458 41.3958 49.4635 41.6094 49.8281 41.7656C50.1927 41.9219 50.5833 42 51 42Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_3819">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(24 24)"
                    />
                  </clippath>
                </defs>
              </svg>
              <p className="flex-grow w-[199px] text-xl font-medium text-left text-[#272940]">
                Medical Devices
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[351px] h-40 absolute left-[1174px] top-[204px] gap-6 px-6 py-[30px] rounded-sm bg-white"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={40}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <g clip-path="url(#clip0_1_3825)">
                  <path
                    d="M51 34C51.6875 34 52.3333 34.1302 52.9375 34.3906C53.5417 34.651 54.0677 35.0104 54.5156 35.4688C54.9635 35.9271 55.3229 36.4583 55.5938 37.0625C55.8646 37.6667 56 38.3125 56 39C56 39.5938 55.901 40.1615 55.7031 40.7031C55.5052 41.2448 55.2292 41.7292 54.875 42.1562C54.5208 42.5833 54.099 42.9531 53.6094 43.2656C53.1198 43.5781 52.5833 43.7917 52 43.9062V45.5C52 46.4271 51.8854 47.3281 51.6562 48.2031C51.4271 49.0781 51.1042 49.9115 50.6875 50.7031C50.2708 51.4948 49.7604 52.2083 49.1562 52.8438C48.5521 53.4792 47.8802 54.0365 47.1406 54.5156C46.401 54.9948 45.5938 55.3594 44.7188 55.6094C43.8438 55.8594 42.9375 55.9896 42 56C41.0521 56 40.1458 55.8698 39.2812 55.6094C38.4167 55.349 37.6146 54.9844 36.875 54.5156C36.1354 54.0469 35.4635 53.4896 34.8594 52.8438C34.2552 52.1979 33.7448 51.4844 33.3281 50.7031C32.9115 49.9219 32.5833 49.0938 32.3438 48.2188C32.1042 47.3438 31.9896 46.4375 32 45.5V41.9219C30.7188 41.8073 29.5833 41.5 28.5938 41C27.6042 40.5 26.7656 39.8438 26.0781 39.0312C25.3906 38.2188 24.875 37.276 24.5312 36.2031C24.1875 35.1302 24.0104 33.9688 24 32.7188V24H29C29.2708 24 29.5052 24.099 29.7031 24.2969C29.901 24.4948 30 24.7292 30 25C30 25.2708 29.901 25.5052 29.7031 25.7031C29.5052 25.901 29.2708 26 29 26H26V32.7188C26 33.8229 26.151 34.8229 26.4531 35.7188C26.7552 36.6146 27.2083 37.3802 27.8125 38.0156C28.4167 38.651 29.1458 39.1406 30 39.4844C30.8542 39.8281 31.8542 40 33 40C34.0521 40 35.0104 39.8385 35.875 39.5156C36.7396 39.1927 37.474 38.7292 38.0781 38.125C38.6823 37.5208 39.1562 36.7917 39.5 35.9375C39.8438 35.0833 40.0104 34.1198 40 33.0469V26H37C36.7292 26 36.4948 25.901 36.2969 25.7031C36.099 25.5052 36 25.2708 36 25C36 24.7292 36.099 24.4948 36.2969 24.2969C36.4948 24.099 36.7292 24 37 24H42V32.7188C42 33.9688 41.8229 35.1302 41.4688 36.2031C41.1146 37.276 40.599 38.2188 39.9219 39.0312C39.2448 39.8438 38.4115 40.5 37.4219 41C36.4323 41.5 35.2917 41.8073 34 41.9219V45.5C34 46.6146 34.1979 47.6823 34.5938 48.7031C34.9896 49.724 35.5469 50.6302 36.2656 51.4219C36.9844 52.2135 37.8281 52.8385 38.7969 53.2969C39.7656 53.7552 40.8333 53.9896 42 54C43.1562 54 44.2188 53.7656 45.1875 53.2969C46.1562 52.8281 47 52.2031 47.7188 51.4219C48.4375 50.6406 48.9948 49.7396 49.3906 48.7188C49.7865 47.6979 49.9896 46.625 50 45.5V43.9062C49.4167 43.7812 48.8802 43.5677 48.3906 43.2656C47.901 42.9635 47.4792 42.599 47.125 42.1719C46.7708 41.7448 46.4948 41.2552 46.2969 40.7031C46.099 40.151 46 39.5833 46 39C46 38.3125 46.1302 37.6667 46.3906 37.0625C46.651 36.4583 47.0052 35.9323 47.4531 35.4844C47.901 35.0365 48.4323 34.6771 49.0469 34.4062C49.6615 34.1354 50.3125 34 51 34ZM51 42C51.4167 42 51.8073 41.9219 52.1719 41.7656C52.5365 41.6094 52.8542 41.3958 53.125 41.125C53.3958 40.8542 53.6094 40.5365 53.7656 40.1719C53.9219 39.8073 54 39.4167 54 39C54 38.5833 53.9219 38.1927 53.7656 37.8281C53.6094 37.4635 53.3958 37.1458 53.125 36.875C52.8542 36.6042 52.5365 36.3906 52.1719 36.2344C51.8073 36.0781 51.4167 36 51 36C50.5833 36 50.1927 36.0781 49.8281 36.2344C49.4635 36.3906 49.1458 36.6042 48.875 36.875C48.6042 37.1458 48.3906 37.4635 48.2344 37.8281C48.0781 38.1927 48 38.5833 48 39C48 39.4167 48.0781 39.8073 48.2344 40.1719C48.3906 40.5365 48.6042 40.8542 48.875 41.125C49.1458 41.3958 49.4635 41.6094 49.8281 41.7656C50.1927 41.9219 50.5833 42 51 42Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_3825">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(24 24)"
                    />
                  </clippath>
                </defs>
              </svg>
              <p className="flex-grow w-[199px] text-xl font-medium text-left text-[#272940]">
                Medical Devices
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[350px] h-40 absolute left-[405px] top-[388px] gap-6 px-6 py-[30px] rounded-sm bg-white"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={40}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <g clip-path="url(#clip0_1_3831)">
                  <path
                    d="M54 56H44C42.8955 56 42 55.1045 42 54V44C42 42.8955 42.8955 42 44 42H54C55.1045 42 56 42.8955 56 44V54C56 55.1045 55.1045 56 54 56ZM54 44H44V54H54V44ZM54 38H44C42.8955 38 42 37.1045 42 36V26C42 24.8955 42.8955 24 44 24H54C55.1045 24 56 24.8955 56 26V36C56 37.1045 55.1045 38 54 38ZM54 26H44V36H54V26ZM36 56H26C24.8955 56 24 55.1045 24 54V44C24 42.8955 24.8955 42 26 42H36C37.1045 42 38 42.8955 38 44V54C38 55.1045 37.1045 56 36 56ZM36 44H26V54H36V44ZM36 38H26C24.8955 38 24 37.1045 24 36V26C24 24.8955 24.8955 24 26 24H36C37.1045 24 38 24.8955 38 26V36C38 37.1045 37.1045 38 36 38ZM36 26H26V36H36V26Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_3831">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(24 24)"
                    />
                  </clippath>
                </defs>
              </svg>
              <p className="flex-grow w-[198px] text-xl font-medium text-left text-[#272940]">
                Software, Mobile &amp; Apps
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[351px] h-40 absolute left-[789px] top-5 gap-6 px-6 py-[30px] rounded-sm bg-white"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={40}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <g clip-path="url(#clip0_1_3837)">
                  <path
                    d="M55.4495 30.7478C55.1125 30.5923 54.7125 30.6513 54.432 30.8993L49.391 35.4273L44.84 30.7583L49.346 25.5543C49.591 25.2713 49.6506 24.8813 49.4981 24.5383C49.3456 24.1953 49.0085 23.9854 48.6381 23.9854H48.3665C45.5815 23.9854 40.7735 24.2249 38.627 26.4023L38.194 26.8323C35.904 29.1688 35.4975 33.0003 36.704 35.9128L25.164 47.6908C23.6081 49.2683 23.6081 51.8258 25.164 53.4038L26.5726 54.8319C27.3505 55.6204 28.3705 56.0149 29.3905 56.0149C30.41 56.0149 31.43 55.6204 32.2075 54.8319L43.9175 43.0279C45.025 43.6264 46.5425 44.0174 47.817 44.0174C49.86 44.0174 51.7965 43.1933 53.271 41.6969L53.698 41.2644C56.0295 38.9004 55.9935 33.8488 56.004 31.6263C56.005 31.2483 55.7875 30.9048 55.4495 30.7478H55.4495ZM52.3025 39.9063L51.9315 40.3398C50.8145 41.4733 49.3535 42.0163 47.817 42.0163C47.057 42.0163 46.033 41.8733 45.3415 41.5853C44.7165 41.3258 44.136 40.9513 43.6165 40.4783L30.7985 53.4038C30.4225 53.7858 29.9225 53.9958 29.3904 53.9958C28.8584 53.9958 28.3579 53.7858 27.9814 53.4038L26.5735 51.9763C25.7964 51.1883 25.7964 49.9068 26.5729 49.1188L39.0974 36.3419C38.6774 35.7303 38.3914 35.0638 38.2209 34.3738H38.2204C37.7384 32.4243 38.0194 29.7299 39.5334 28.1848L39.9644 27.7498C41.2629 26.4323 44.6349 26.0428 46.5019 25.9278L42.8344 30.1633C42.5064 30.5423 42.523 31.1133 42.8724 31.4718L48.6704 37.4198C49.0219 37.7818 49.5904 37.8028 49.969 37.4673L54.0504 33.7913C53.9289 35.7713 53.5444 38.6468 52.3025 39.9063H52.3025Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_3837">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(24 24)"
                    />
                  </clippath>
                </defs>
              </svg>
              <p className="flex-grow w-[199px] text-xl font-medium text-left text-[#272940]">
                Civil &amp; Construction
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[351px] h-40 absolute left-[1174px] top-5 gap-6 px-6 py-[30px] rounded-sm bg-white"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={40}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <g clip-path="url(#clip0_1_3843)">
                  <path
                    d="M55.4495 30.7478C55.1125 30.5923 54.7125 30.6513 54.432 30.8993L49.391 35.4273L44.84 30.7583L49.346 25.5543C49.591 25.2713 49.6506 24.8813 49.4981 24.5383C49.3456 24.1953 49.0085 23.9854 48.6381 23.9854H48.3665C45.5815 23.9854 40.7735 24.2249 38.627 26.4023L38.194 26.8323C35.904 29.1688 35.4975 33.0003 36.704 35.9128L25.164 47.6908C23.6081 49.2683 23.6081 51.8258 25.164 53.4038L26.5726 54.8319C27.3505 55.6204 28.3705 56.0149 29.3905 56.0149C30.41 56.0149 31.43 55.6204 32.2075 54.8319L43.9175 43.0279C45.025 43.6264 46.5425 44.0174 47.817 44.0174C49.86 44.0174 51.7965 43.1933 53.271 41.6969L53.698 41.2644C56.0295 38.9004 55.9935 33.8488 56.004 31.6263C56.005 31.2483 55.7875 30.9048 55.4495 30.7478H55.4495ZM52.3025 39.9063L51.9315 40.3398C50.8145 41.4733 49.3535 42.0163 47.817 42.0163C47.057 42.0163 46.033 41.8733 45.3415 41.5853C44.7165 41.3258 44.136 40.9513 43.6165 40.4783L30.7985 53.4038C30.4225 53.7858 29.9225 53.9958 29.3904 53.9958C28.8584 53.9958 28.3579 53.7858 27.9814 53.4038L26.5735 51.9763C25.7964 51.1883 25.7964 49.9068 26.5729 49.1188L39.0974 36.3419C38.6774 35.7303 38.3914 35.0638 38.2209 34.3738H38.2204C37.7384 32.4243 38.0194 29.7299 39.5334 28.1848L39.9644 27.7498C41.2629 26.4323 44.6349 26.0428 46.5019 25.9278L42.8344 30.1633C42.5064 30.5423 42.523 31.1133 42.8724 31.4718L48.6704 37.4198C49.0219 37.7818 49.5904 37.8028 49.969 37.4673L54.0504 33.7913C53.9289 35.7713 53.5444 38.6468 52.3025 39.9063H52.3025Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_3843">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(24 24)"
                    />
                  </clippath>
                </defs>
              </svg>
              <p className="flex-grow w-[199px] text-xl font-medium text-left text-[#272940]">
                Civil &amp; Construction
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[350px] h-40 absolute left-[405px] top-[204px] gap-6 px-6 py-[30px] rounded-sm bg-white"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={40}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <g clip-path="url(#clip0_1_3849)">
                  <path
                    d="M49.3258 54.3351L44.0008 48.0331V36.9861H44.6668C45.2193 36.9861 45.6668 36.5386 45.6668 35.9861C45.6668 35.4336 45.2193 34.9861 44.6668 34.9861H43.0008C42.4483 34.9861 42.0008 35.4336 42.0008 35.9861V48.4181C42.0007 48.6657 42.0926 48.9045 42.2588 49.0881L46.3328 54.0051H33.6678L37.7418 49.0881C37.9079 48.9045 37.9998 48.6657 37.9998 48.4181V35.9861C37.9998 35.4336 37.5523 34.9861 36.9998 34.9861H35.3337C34.7812 34.9861 34.3337 35.4336 34.3337 35.9861C34.3337 36.5386 34.7812 36.9861 35.3337 36.9861H35.9997V48.0331L30.6747 54.3351C30.5452 54.4787 30.4601 54.6567 30.4295 54.8477C30.399 55.0386 30.4244 55.2343 30.5027 55.4111C30.5813 55.5879 30.7094 55.7382 30.8717 55.8436C31.0339 55.9491 31.2233 56.0052 31.4168 56.0052H48.5838C48.7773 56.0052 48.9666 55.9491 49.1288 55.8436C49.2911 55.7382 49.4192 55.5879 49.4978 55.4111C49.6578 55.0501 49.5908 54.6281 49.3258 54.3351V54.3351ZM39.0003 33.9901C40.1023 33.9901 40.9953 33.0966 40.9953 31.9951C40.9953 30.8946 40.1023 30.0011 39.0003 30.0011C37.8978 30.0011 37.0053 30.8946 37.0053 31.9951C37.0053 33.0966 37.8978 33.9901 39.0003 33.9901V33.9901ZM45.5153 31.0216C47.4643 31.0216 49.0443 29.4486 49.0443 27.5086C49.0443 25.5686 47.4648 23.9956 45.5153 23.9956C43.5668 23.9956 41.9863 25.5686 41.9863 27.5086C41.9863 29.4486 43.5668 31.0216 45.5153 31.0216ZM45.4998 25.9896C46.3328 25.9896 47.0103 26.6641 47.0103 27.4936C47.0103 28.3226 46.3328 28.9976 45.4998 28.9976C44.6668 28.9976 43.9893 28.3226 43.9893 27.4936C43.9898 26.6641 44.6668 25.9896 45.4998 25.9896Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_3849">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(24 24)"
                    />
                  </clippath>
                </defs>
              </svg>
              <p className="flex-grow w-[198px] text-xl font-medium text-left text-[#272940]">
                Chemistry, Biotech, Pharmaceuticals
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[351px] h-40 absolute left-5 top-[388px] gap-6 px-6 py-[30px] rounded-sm bg-white"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={72}
                height={80}
                viewBox="0 0 72 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={32}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <g clip-path="url(#clip0_1_3855)">
                  <path
                    d="M47.449 30.7478C47.112 30.5923 46.7121 30.6513 46.4316 30.8993L41.3906 35.4273L36.8396 30.7583L41.3456 25.5543C41.5906 25.2713 41.6501 24.8813 41.4976 24.5383C41.3451 24.1953 41.0081 23.9854 40.6376 23.9854H40.366C37.581 23.9854 32.773 24.2249 30.6266 26.4023L30.1935 26.8323C27.9035 29.1688 27.497 33.0003 28.7035 35.9128L17.1636 47.6908C15.6076 49.2683 15.6076 51.8258 17.1636 53.4038L18.5721 54.8319C19.3501 55.6204 20.3701 56.0149 21.3901 56.0149C22.4096 56.0149 23.4295 55.6204 24.207 54.8319L35.917 43.0279C37.0245 43.6264 38.542 44.0174 39.8165 44.0174C41.8595 44.0174 43.796 43.1933 45.2705 41.6969L45.6975 41.2644C48.029 38.9004 47.993 33.8488 48.0035 31.6263C48.0045 31.2483 47.787 30.9048 47.449 30.7478H47.449ZM44.302 39.9063L43.931 40.3398C42.814 41.4733 41.353 42.0163 39.8165 42.0163C39.0565 42.0163 38.0325 41.8733 37.341 41.5853C36.716 41.3258 36.1355 40.9513 35.616 40.4783L22.798 53.4038C22.422 53.7858 21.922 53.9958 21.3899 53.9958C20.8579 53.9958 20.3574 53.7858 19.9809 53.4038L18.573 51.9763C17.7959 51.1883 17.7959 49.9068 18.5724 49.1188L31.0969 36.3419C30.6769 35.7303 30.3909 35.0638 30.2204 34.3738H30.2199C29.7379 32.4243 30.0189 29.7299 31.5329 28.1848L31.9639 27.7498C33.2624 26.4323 36.6344 26.0428 38.5014 25.9278L34.8339 30.1633C34.5059 30.5423 34.5225 31.1133 34.8719 31.4718L40.6699 37.4198C41.0214 37.7818 41.5899 37.8028 41.9685 37.4673L46.0499 33.7913C45.9284 35.7713 45.5439 38.6468 44.302 39.9063H44.302Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_3855">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(16 24)"
                    />
                  </clippath>
                </defs>
              </svg>
              <p className="flex-grow w-[199px] text-xl font-medium text-left text-[#272940]">
                Mechanical
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[350px] h-40 absolute left-[405px] top-5 gap-6 px-6 py-[30px] rounded-sm bg-white border-4 border-[#b2b4db]"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={80}
                height={80}
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={40}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <g clip-path="url(#clip0_1_3861)">
                  <path
                    d="M40.108 34.0439C36.7945 34.0439 34.108 36.7304 34.108 40.0439C34.108 43.3569 36.7945 46.0439 40.108 46.0439C43.4215 46.0439 46.108 43.3574 46.108 40.0439C46.108 36.7304 43.4215 34.0439 40.108 34.0439ZM40.108 44.0439C37.9025 44.0439 36.062 42.2059 36.062 40.0003C36.062 37.7948 37.8565 36.0003 40.062 36.0003C42.268 36.0003 44.062 37.7948 44.062 40.0003C44.062 42.2058 42.314 44.0439 40.108 44.0439ZM55.9895 39.7679C55.978 39.7174 55.9831 39.664 55.968 39.6144C55.9615 39.5935 55.9485 39.5815 55.941 39.563C55.9305 39.5345 55.933 39.501 55.9185 39.4735C53.01 32.814 46.7416 28.981 40.0616 28.981C33.3816 28.981 26.9876 32.807 24.0776 39.467C24.0651 39.495 24.0671 39.524 24.057 39.556C24.0501 39.5755 24.0356 39.5865 24.0291 39.605C24.0136 39.6555 24.0196 39.708 24.0101 39.759C23.9916 39.849 23.9746 39.9365 23.9746 40.0275C23.9746 40.1195 23.9916 40.2045 24.0101 40.2959C24.0201 40.3459 24.0136 40.4004 24.0291 40.4484C24.0356 40.4709 24.0501 40.4804 24.0571 40.5009C24.0676 40.5284 24.0651 40.5624 24.0776 40.5899C26.9881 47.2479 33.3196 51.0184 39.9996 51.0184C46.6801 51.0184 53.0101 47.2559 55.9196 40.5964C55.9341 40.5679 55.9311 40.5379 55.9421 40.5064C55.9491 40.4889 55.9625 40.4759 55.9686 40.4564C55.9841 40.4074 55.9791 40.3539 55.99 40.3029C56.0075 40.2134 56.024 40.1259 56.024 40.0334C56.024 39.9454 56.0075 39.8584 55.9895 39.7679V39.7679ZM39.9995 49.0185C34.334 49.0185 28.7576 46.032 26.0176 40.0284C28.7316 34.0449 34.3826 30.9814 40.0621 30.9814C45.7396 30.9814 51.2651 34.0484 53.9801 40.0349C51.2671 46.0164 45.679 49.0185 39.9995 49.0185Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_3861">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(24 24)"
                    />
                  </clippath>
                </defs>
              </svg>
              <p className="flex-grow w-[198px] text-xl font-medium text-left text-[#272940]">
                Physics &amp; Optical Engineering
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[351px] h-40 absolute left-5 top-[204px] gap-6 px-6 py-[30px] rounded-sm bg-white"
              style={{
                boxShadow:
                  '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
              }}>
              <svg
                width={72}
                height={80}
                viewBox="0 0 72 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <circle
                  cx={32}
                  cy={40}
                  r={40}
                  fill="#F3F3FA"
                />
                <g clip-path="url(#clip0_1_3867)">
                  <path
                    d="M47.9949 41.892C47.9979 41.234 47.8944 38.7515 47.8154 38.0415C46.9054 29.893 40.2919 23.979 32.0909 23.979C23.5489 23.979 16.6279 30.561 16.1584 39.2885C16.1484 39.479 16.0784 40.8305 16.0734 41.635L16.0709 42.0825C16.0299 42.2675 16.0049 42.4585 16.0049 42.6555V49.3635C16.0049 50.8285 17.1964 52.02 18.6614 52.02H21.3579C22.8229 52.02 24.0149 50.8285 24.0149 49.3635V42.656C24.0149 41.191 22.8224 39.9995 21.3579 39.9995H18.6609C18.4805 39.9995 18.3006 40.0178 18.1239 40.054C18.1389 39.7295 18.1524 39.4735 18.1559 39.396C18.5674 31.7465 24.6289 25.979 32.0909 25.979C39.2559 25.979 45.0324 31.146 45.8274 38.264C45.8609 38.561 45.9039 39.316 45.9384 40.074C45.7449 40.029 45.5454 39.9995 45.3384 39.9995H42.6734C41.2084 39.9995 40.0169 41.191 40.0169 42.656V49.333C40.0169 50.3445 40.5919 51.216 41.4259 51.664L35.0059 54.1845V54.0215C35.0059 53.4695 34.5579 53.0215 34.0059 53.0215H31.0059C30.4539 53.0215 30.0059 53.4695 30.0059 54.0215V55.0215C30.0059 55.5735 30.4539 56.0215 31.0059 56.0215H34.0059C34.0144 56.0215 34.0219 56.019 34.0304 56.019L35.8229 56.012L46.1215 51.969C46.2565 51.913 46.371 51.8295 46.465 51.7295C47.3665 51.304 47.996 50.394 47.996 49.333V42.6559C47.996 42.4929 47.976 42.3344 47.9475 42.1799C47.975 42.0879 47.9945 41.9924 47.995 41.8919L47.9949 41.892ZM18.6609 41.9995H21.3575C21.72 41.9995 22.0144 42.2935 22.0144 42.656V49.364C22.0144 49.7265 21.7194 50.0205 21.3574 50.0205H18.6609C18.2984 50.0205 18.0045 49.7265 18.0045 49.364V42.656C18.0049 42.2935 18.2989 41.9995 18.6609 41.9995H18.6609ZM42.0164 42.656C42.0164 42.2935 42.3105 41.9995 42.673 41.9995H45.338C45.7005 41.9995 45.9949 42.2935 45.9949 42.656V49.333C45.9949 49.6955 45.6999 49.9895 45.3379 49.9895H42.6729C42.3104 49.9895 42.0164 49.6955 42.0164 49.333V42.656V42.656Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clippath id="clip0_1_3867">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(16 24)"
                    />
                  </clippath>
                </defs>
              </svg>
              <p className="flex-grow w-[199px] text-xl font-medium text-left text-[#272940]">
                Consumer Products
              </p>
            </div>
            <div
              className="flex justify-end items-center w-[351px] h-40 absolute left-5 top-5 gap-6 px-6 py-[30px] rounded-sm border-4 border-[#a290ea]"
              style={{
                background:
                  'linear-gradient(136.43deg, #61638d 0%, #494b70 99.69%)',
                boxShadow:
                  '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
              }}>
              <svg
                width={98}
                height={122}
                viewBox="0 0 98 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-20 h-20"
                preserveAspectRatio="none">
                <g filter="url(#filter0_d_1_3873)">
                  <circle
                    cx={32}
                    cy={57}
                    r={40}
                    fill="#816BD9"
                  />
                </g>
                <path
                  d="M34.6059 41.0225C34.5519 41.0225 34.4979 41.0245 34.4449 41.0285C34.0919 41.057 33.8579 41.175 33.5804 41.3615C33.4242 41.4657 33.2833 41.5912 33.1619 41.7345C33.1255 41.7775 33.0911 41.8222 33.0589 41.8685L21.8524 56.7C21.4099 57.3065 21.3449 58.107 21.6849 58.776C22.0244 59.445 22.7109 59.869 23.4634 59.8745L29.2364 59.9165L27.4214 70.61C27.2489 71.529 27.7389 72.445 28.6014 72.814C28.8521 72.9218 29.122 72.9772 29.3949 72.977C30.0234 72.977 30.5399 72.683 30.9274 72.152L42.1479 56.08C42.5904 55.4735 42.6549 54.672 42.3154 54.004C41.9759 53.335 41.2894 52.9109 40.5369 52.9055L34.7639 52.8955L36.5594 43.493C36.5975 43.339 36.6166 43.181 36.6164 43.0225C36.6164 41.9405 35.7549 41.0585 34.6769 41.0235C34.6529 41.0225 34.6294 41.0225 34.6059 41.0225Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_1_3873"
                    x={-24}
                    y={0}
                    width={122}
                    height={122}
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feflood
                      flood-opacity={0}
                      result="BackgroundImageFix"
                    />
                    <fecolormatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feoffset
                      dx={5}
                      dy={4}
                    />
                    <fegaussianblur stdDeviation="10.5" />
                    <fecomposite
                      in2="hardAlpha"
                      operator="out"
                    />
                    <fecolormatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feblend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_3873"
                    />
                    <feblend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3873"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="flex-grow w-[199px] text-xl font-bold text-left text-white">
                Electronics &amp; Electromechanical
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[2905px] absolute left-0 top-[8860px]">
          <div className="flex flex-col justify-start items-start absolute left-0 top-[1418px]">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1440px] h-[140px] relative gap-2.5 px-40 bg-[#fffef8] border border-[#f0e4c3]">
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-[#272940]">
                Our Sydney team{' '}
              </p>
            </div>
            <div
              className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 px-40 py-[50px]"
              style={{
                background:
                  'linear-gradient(to bottom, #fffef8 40.79%, #fff3d0 100%)',
              }}>
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[100px]">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[17px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[17px]">
                    <div
                      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative rounded-sm bg-white"
                      style={{
                        boxShadow:
                          '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
                      }}>
                      <div className="flex-grow-0 flex-shrink-0 w-[362px] h-[362px]">
                        <svg
                          width={362}
                          height={362}
                          viewBox="0 0 362 362"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-[-0.5px] top-[-0.5px]"
                          preserveAspectRatio="none">
                          <path
                            d="M0 5.00001C0 2.23859 2.23858 0 5 0H357C359.761 0 362 2.23858 362 5V362H0V5.00001Z"
                            fill="url(#paint0_linear_1_282)"
                          />
                          <defs>
                            <lineargradient
                              id="paint0_linear_1_282"
                              x1="392.798"
                              y1="682.322"
                              x2="-55.864"
                              y2="-17.0919"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FFE9AF" />
                              <stop
                                offset={1}
                                stop-color="#FDDE8D"
                              />
                            </lineargradient>
                          </defs>
                        </svg>
                        <div className="w-[362px] h-[362px]">
                          <div className="absolute left-[-0.5px] top-[-0.5px]" />
                          <svg
                            width={164}
                            height={362}
                            viewBox="0 0 164 362"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[530.62px] h-[724.47px]"
                            preserveAspectRatio="none">
                            <path
                              d="M-48.8462 323.062L-24.7829 186.972L-48.8462 50.8818H-13.3569L10.7065 186.972L-13.3569 323.062H-48.8462Z"
                              fill="white"
                              fill-opacity="0.5"
                            />
                            <path
                              d="M-13.3823 323.453L10.6148 187.364L-13.3823 51.2762L-13.0885 -5.65332L48.8469 186.947L-13.0885 379.599L-13.3823 323.453Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M-12.7134 491.45L125.075 185.749L-12.6807 -119.953L-12.4196 -176.877L163.268 185.331L-12.4196 547.592L-12.7134 491.45Z"
                              fill="white"
                              fill-opacity="0.1"
                            />
                            <path
                              d="M-12.7134 434.915L86.9598 185.775L-12.7134 -63.3648L-12.42 -120.341L125.128 185.358L-12.4526 491.056L-12.7134 434.915Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M-13.3823 379.181L48.6983 186.531L-13.3823 -6.06803L-13.0878 -62.9971L86.9874 186.165L-13.0878 435.328L-13.3823 379.181Z"
                              fill="white"
                              fill-opacity="0.3"
                            />
                          </svg>
                          <Image
                            src="/image-x5ljzmxls-transformed-1.png"
                            className="w-[324px] h-[389px] absolute left-[18.5px] top-[7.5px] object-cover"
                            alt=""
                            width={1438}
                            height={848}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[362px] relative gap-2.5 p-6">
                          <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#404266]">
                            Naleesha Niranjan
                          </p>
                        </div>
                        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[362px] gap-10 px-6 pb-6">
                          <div className="flex justify-start items-start flex-grow relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Director
                              </span>
                              <br />
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Victoria region manager
                              </span>
                              <br />
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Patent &amp; trademark attorney
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative rounded-sm bg-white"
                      style={{
                        boxShadow:
                          '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
                      }}>
                      <div className="flex-grow-0 flex-shrink-0 w-[362px] h-[362px]">
                        <svg
                          width={362}
                          height={362}
                          viewBox="0 0 362 362"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-[-0.5px] top-[-0.5px]"
                          preserveAspectRatio="none">
                          <path
                            d="M0 5.00001C0 2.23859 2.23858 0 5 0H357C359.761 0 362 2.23858 362 5V362H0V5.00001Z"
                            fill="url(#paint0_linear_1_309)"
                          />
                          <defs>
                            <lineargradient
                              id="paint0_linear_1_309"
                              x1="392.798"
                              y1="682.322"
                              x2="-55.864"
                              y2="-17.0919"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FFE9AF" />
                              <stop
                                offset={1}
                                stop-color="#FDDE8D"
                              />
                            </lineargradient>
                          </defs>
                        </svg>
                        <div className="w-[362px] h-[362px]">
                          <div className="absolute left-[-0.5px] top-[-0.5px]" />
                          <svg
                            width={164}
                            height={362}
                            viewBox="0 0 164 362"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[530.62px] h-[724.47px]"
                            preserveAspectRatio="none">
                            <path
                              d="M-48.8462 323.062L-24.7829 186.972L-48.8462 50.8818H-13.3569L10.7065 186.972L-13.3569 323.062H-48.8462Z"
                              fill="white"
                              fill-opacity="0.5"
                            />
                            <path
                              d="M-13.3823 323.453L10.6148 187.364L-13.3823 51.2762L-13.0885 -5.65332L48.8469 186.947L-13.0885 379.599L-13.3823 323.453Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M-12.7134 491.45L125.075 185.749L-12.6807 -119.953L-12.4196 -176.877L163.268 185.331L-12.4196 547.592L-12.7134 491.45Z"
                              fill="white"
                              fill-opacity="0.1"
                            />
                            <path
                              d="M-12.7134 434.915L86.9598 185.775L-12.7134 -63.3648L-12.42 -120.341L125.128 185.358L-12.4526 491.056L-12.7134 434.915Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M-13.3823 379.181L48.6983 186.531L-13.3823 -6.06803L-13.0878 -62.9971L86.9874 186.165L-13.0878 435.328L-13.3823 379.181Z"
                              fill="white"
                              fill-opacity="0.3"
                            />
                          </svg>
                          <Image
                            src="/image_28-removebg-preview-1.png"
                            className="w-[407px] h-[407px] absolute left-[-28.5px] top-[-0.5px] object-none"
                            alt=""
                            width={1438}
                            height={848}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[362px] relative gap-2.5 p-6">
                          <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#404266]">
                            Chris Baxter
                          </p>
                        </div>
                        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[362px] h-[84px] gap-10 px-6 pb-6">
                          <div className="flex justify-start items-start flex-grow relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Managing Director
                              </span>
                              <br />
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Patent &amp; Trade Mark Attorney
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[521px] relative rounded-sm bg-white"
                      style={{
                        boxShadow:
                          '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
                      }}>
                      <div className="flex-grow-0 flex-shrink-0 w-[362px] h-[362px]">
                        <svg
                          width={362}
                          height={362}
                          viewBox="0 0 362 362"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-[-0.5px] top-[-0.5px]"
                          preserveAspectRatio="none">
                          <path
                            d="M0 5.00001C0 2.23859 2.23858 0 5 0H357C359.761 0 362 2.23858 362 5V362H0V5.00001Z"
                            fill="url(#paint0_linear_1_336)"
                          />
                          <defs>
                            <lineargradient
                              id="paint0_linear_1_336"
                              x1="392.798"
                              y1="682.322"
                              x2="-55.864"
                              y2="-17.0919"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FFE9AF" />
                              <stop
                                offset={1}
                                stop-color="#FDDE8D"
                              />
                            </lineargradient>
                          </defs>
                        </svg>
                        <div className="w-[362px] h-[362px]">
                          <div className="absolute left-[-0.5px] top-[-0.5px]" />
                          <svg
                            width={164}
                            height={362}
                            viewBox="0 0 164 362"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[530.62px] h-[724.47px]"
                            preserveAspectRatio="none">
                            <path
                              d="M-48.8462 323.062L-24.7829 186.972L-48.8462 50.8818H-13.3569L10.7065 186.972L-13.3569 323.062H-48.8462Z"
                              fill="white"
                              fill-opacity="0.5"
                            />
                            <path
                              d="M-13.3823 323.453L10.6148 187.364L-13.3823 51.2762L-13.0885 -5.65332L48.8469 186.947L-13.0885 379.599L-13.3823 323.453Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M-12.7134 491.45L125.075 185.749L-12.6807 -119.953L-12.4196 -176.877L163.268 185.331L-12.4196 547.592L-12.7134 491.45Z"
                              fill="white"
                              fill-opacity="0.1"
                            />
                            <path
                              d="M-12.7134 434.915L86.9598 185.775L-12.7134 -63.3648L-12.42 -120.341L125.128 185.358L-12.4526 491.056L-12.7134 434.915Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M-13.3823 379.181L48.6983 186.531L-13.3823 -6.06803L-13.0878 -62.9971L86.9874 186.165L-13.0878 435.328L-13.3823 379.181Z"
                              fill="white"
                              fill-opacity="0.3"
                            />
                          </svg>
                          <Image
                            src="/image-dcu-qqxy6-transformed-(1)-1.png"
                            className="w-[367px] h-[368px] absolute left-[21.5px] top-[7.5px] object-cover"
                            alt=""
                            width={1438}
                            height={848}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[362px] relative gap-2.5 p-6">
                          <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#404266]">
                            Martin Earley
                          </p>
                        </div>
                        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[362px] gap-10 px-6 pb-6">
                          <div className="flex justify-start items-start flex-grow relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Director
                              </span>
                              <br />
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Victoria region manager
                              </span>
                              <br />
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Patent &amp; trademark attorney
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[17px]">
                    <div
                      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative rounded-sm bg-white"
                      style={{
                        boxShadow:
                          '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
                      }}>
                      <div className="flex-grow-0 flex-shrink-0 w-[362px] h-[362px]">
                        <svg
                          width={362}
                          height={362}
                          viewBox="0 0 362 362"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-[-0.5px] top-[-0.5px]"
                          preserveAspectRatio="none">
                          <path
                            d="M0 5.00001C0 2.23859 2.23858 0 5 0H357C359.761 0 362 2.23858 362 5V362H0V5.00001Z"
                            fill="url(#paint0_linear_1_364)"
                          />
                          <defs>
                            <lineargradient
                              id="paint0_linear_1_364"
                              x1="392.798"
                              y1="682.322"
                              x2="-55.864"
                              y2="-17.0919"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FFE9AF" />
                              <stop
                                offset={1}
                                stop-color="#FDDE8D"
                              />
                            </lineargradient>
                          </defs>
                        </svg>
                        <div className="w-[362px] h-[362px]">
                          <div className="absolute left-[-0.5px] top-[-0.5px]" />
                          <svg
                            width={164}
                            height={362}
                            viewBox="0 0 164 362"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[530.62px] h-[724.47px]"
                            preserveAspectRatio="none">
                            <path
                              d="M-48.8462 323.062L-24.7829 186.972L-48.8462 50.8818H-13.3569L10.7065 186.972L-13.3569 323.062H-48.8462Z"
                              fill="white"
                              fill-opacity="0.5"
                            />
                            <path
                              d="M-13.3823 323.453L10.6148 187.364L-13.3823 51.2762L-13.0885 -5.65332L48.8469 186.947L-13.0885 379.599L-13.3823 323.453Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M-12.7134 491.45L125.075 185.749L-12.6807 -119.953L-12.4196 -176.877L163.268 185.331L-12.4196 547.592L-12.7134 491.45Z"
                              fill="white"
                              fill-opacity="0.1"
                            />
                            <path
                              d="M-12.7134 434.915L86.9598 185.775L-12.7134 -63.3648L-12.42 -120.341L125.128 185.358L-12.4526 491.056L-12.7134 434.915Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M-13.3823 379.181L48.6983 186.531L-13.3823 -6.06803L-13.0878 -62.9971L86.9874 186.165L-13.0878 435.328L-13.3823 379.181Z"
                              fill="white"
                              fill-opacity="0.3"
                            />
                          </svg>
                          <Image
                            src="/image-4z83vahba-transformed-1.png"
                            className="w-[331px] h-[379px] absolute left-[14.5px] top-[6.5px] object-cover"
                            alt=""
                            width={1438}
                            height={848}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[362px] relative gap-2.5 p-6">
                          <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#404266]">
                            Joanne Li
                          </p>
                        </div>
                        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[362px] h-[84px] gap-10 px-6 pb-6">
                          <div className="flex justify-start items-start flex-grow relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Associate
                              </span>
                              <br />
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Trade Mark Attorney
                              </span>
                              <br />
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                International filings manager
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative rounded-sm bg-white"
                      style={{
                        boxShadow:
                          '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
                      }}>
                      <div className="flex-grow-0 flex-shrink-0 w-[362px] h-[362px]">
                        <svg
                          width={362}
                          height={362}
                          viewBox="0 0 362 362"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-[-0.5px] top-[-0.5px]"
                          preserveAspectRatio="none">
                          <path
                            d="M0 5.00001C0 2.23859 2.23858 0 5 0H357C359.761 0 362 2.23858 362 5V362H0V5.00001Z"
                            fill="url(#paint0_linear_1_391)"
                          />
                          <defs>
                            <lineargradient
                              id="paint0_linear_1_391"
                              x1="392.798"
                              y1="682.322"
                              x2="-55.864"
                              y2="-17.0919"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FFE9AF" />
                              <stop
                                offset={1}
                                stop-color="#FDDE8D"
                              />
                            </lineargradient>
                          </defs>
                        </svg>
                        <div className="w-[362px] h-[362px]">
                          <div className="absolute left-[-0.5px] top-[-0.5px]" />
                          <svg
                            width={164}
                            height={362}
                            viewBox="0 0 164 362"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[530.62px] h-[724.47px]"
                            preserveAspectRatio="none">
                            <path
                              d="M-48.8462 323.062L-24.7829 186.972L-48.8462 50.8818H-13.3569L10.7065 186.972L-13.3569 323.062H-48.8462Z"
                              fill="white"
                              fill-opacity="0.5"
                            />
                            <path
                              d="M-13.3823 323.453L10.6148 187.364L-13.3823 51.2762L-13.0885 -5.65332L48.8469 186.947L-13.0885 379.599L-13.3823 323.453Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M-12.7134 491.45L125.075 185.749L-12.6807 -119.953L-12.4196 -176.877L163.268 185.331L-12.4196 547.592L-12.7134 491.45Z"
                              fill="white"
                              fill-opacity="0.1"
                            />
                            <path
                              d="M-12.7134 434.915L86.9598 185.775L-12.7134 -63.3648L-12.42 -120.341L125.128 185.358L-12.4526 491.056L-12.7134 434.915Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M-13.3823 379.181L48.6983 186.531L-13.3823 -6.06803L-13.0878 -62.9971L86.9874 186.165L-13.0878 435.328L-13.3823 379.181Z"
                              fill="white"
                              fill-opacity="0.3"
                            />
                          </svg>
                          <Image
                            src="/image-rk-csyfk1-transformed-1.png"
                            className="w-[332px] h-[377px] absolute left-[29.5px] top-[12.5px] object-cover"
                            alt=""
                            width={1438}
                            height={848}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[362px] relative gap-2.5 p-6">
                          <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#404266]">
                            Willem du Preez
                          </p>
                        </div>
                        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[362px] h-[84px] gap-10 px-6 pb-6">
                          <div className="flex justify-start items-start flex-grow relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Associate
                              </span>
                              <br />
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Patent &amp; trademark attorney
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative rounded-sm bg-white"
                      style={{
                        boxShadow:
                          '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
                      }}>
                      <div className="flex-grow-0 flex-shrink-0 w-[362px] h-[362px]">
                        <svg
                          width={362}
                          height={362}
                          viewBox="0 0 362 362"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-[-0.5px] top-[-0.5px]"
                          preserveAspectRatio="none">
                          <path
                            d="M0 5.00001C0 2.23859 2.23858 0 5 0H357C359.761 0 362 2.23858 362 5V362H0V5.00001Z"
                            fill="url(#paint0_linear_1_418)"
                          />
                          <defs>
                            <lineargradient
                              id="paint0_linear_1_418"
                              x1="392.798"
                              y1="682.322"
                              x2="-55.864"
                              y2="-17.0919"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FFE9AF" />
                              <stop
                                offset={1}
                                stop-color="#FDDE8D"
                              />
                            </lineargradient>
                          </defs>
                        </svg>
                        <div className="w-[362px] h-[362px]">
                          <div className="absolute left-[-0.5px] top-[-0.5px]" />
                          <svg
                            width={164}
                            height={362}
                            viewBox="0 0 164 362"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[530.62px] h-[724.47px]"
                            preserveAspectRatio="none">
                            <path
                              d="M-48.8462 323.062L-24.7829 186.972L-48.8462 50.8818H-13.3569L10.7065 186.972L-13.3569 323.062H-48.8462Z"
                              fill="white"
                              fill-opacity="0.5"
                            />
                            <path
                              d="M-13.3823 323.453L10.6148 187.364L-13.3823 51.2762L-13.0885 -5.65332L48.8469 186.947L-13.0885 379.599L-13.3823 323.453Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                            <path
                              d="M-12.7134 491.45L125.075 185.749L-12.6807 -119.953L-12.4196 -176.877L163.268 185.331L-12.4196 547.592L-12.7134 491.45Z"
                              fill="white"
                              fill-opacity="0.1"
                            />
                            <path
                              d="M-12.7134 434.915L86.9598 185.775L-12.7134 -63.3648L-12.42 -120.341L125.128 185.358L-12.4526 491.056L-12.7134 434.915Z"
                              fill="white"
                              fill-opacity="0.2"
                            />
                            <path
                              d="M-13.3823 379.181L48.6983 186.531L-13.3823 -6.06803L-13.0878 -62.9971L86.9874 186.165L-13.0878 435.328L-13.3823 379.181Z"
                              fill="white"
                              fill-opacity="0.3"
                            />
                          </svg>
                          <Image
                            src="/image-wpor6fhl4-transformed-1.png"
                            className="w-[346px] h-[392px] absolute left-[7.5px] top-[9.5px] object-cover"
                            alt=""
                            width={1438}
                            height={848}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[362px] relative gap-2.5 p-6">
                          <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-[#404266]">
                            Andrew Balis
                          </p>
                        </div>
                        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[362px] h-[84px] gap-10 px-6 pb-6">
                          <div className="flex justify-start items-start flex-grow relative gap-2.5">
                            <p className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Associate
                              </span>
                              <br />
                              <span className="flex-grow-0 flex-shrink-0 text-base italic text-left text-[#7a7b94]">
                                Patent &amp; trademark attorney
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 pl-8 pr-6 py-6 rounded-[5px] bg-[#816bd9]"
                  style={{
                    boxShadow:
                      '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                  }}>
                  <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                    Discover more experts
                  </p>
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-10 h-10"
                    preserveAspectRatio="none">
                    <circle
                      cx={20}
                      cy={20}
                      r={20}
                      fill="white"
                    />
                    <path
                      d="M19.7666 26.066C19.5999 25.8993 19.5166 25.702 19.5166 25.474C19.5166 25.2465 19.5999 25.0493 19.7666 24.8827L24.6499 19.9994L19.7499 15.0993C19.5944 14.9438 19.5166 14.7493 19.5166 14.516C19.5166 14.2827 19.5999 14.0827 19.7666 13.916C19.9333 13.7493 20.1306 13.666 20.3586 13.666C20.5862 13.666 20.7833 13.7493 20.9499 13.916L26.5499 19.5327C26.6166 19.5994 26.6639 19.6716 26.6919 19.7494C26.7195 19.8271 26.7333 19.9105 26.7333 19.9994C26.7333 20.0882 26.7195 20.1716 26.6919 20.2494C26.6639 20.3271 26.6166 20.3994 26.5499 20.466L20.9333 26.0827C20.7777 26.2382 20.5862 26.316 20.3586 26.316C20.1306 26.316 19.9333 26.2327 19.7666 26.066Z"
                      fill="black"
                    />
                    <path
                      d="M25.5 20L13.5 20"
                      stroke="black"
                      strokeWidth="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[848px]">
            <div className="w-[1440px] h-[848px]">
              <Image
                className="w-[1440px] h-[848px] absolute left-[-0.5px] top-[569.5px]"
                src="/rectangle-835.png"
                alt=""
                width={1438}
                height={848}
              />
              <div className="w-[1440px] h-2.5">
                <div className="w-[1440px] h-2.5 absolute left-[-0.5px] top-[569.5px] bg-[#f0e3c3]" />
                <div className="w-[355px] h-2.5 absolute left-[-0.5px] top-[569.5px] bg-[#816bd9]" />
              </div>
              <div className="flex flex-col justify-start items-start w-[717px] absolute left-40 top-[799px] gap-2.5 py-6 rounded-sm">
                <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-[53px] relative overflow-hidden gap-2.5 px-2 py-3">
                  <svg
                    width={32}
                    height={29}
                    viewBox="0 0 32 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none">
                    <path
                      d="M32 0.295315L31.2741 5.85684C29.4997 5.73724 28.1285 6.05619 27.1607 6.81367C26.1928 7.57116 25.5476 8.62765 25.225 9.98314C24.9023 11.3386 24.8418 12.8735 25.0435 14.5879H32V29H18.6314V13.3918C18.6314 8.68745 19.7606 5.13923 22.0189 2.74717C24.3176 0.31525 27.6446 -0.502036 32 0.295315ZM13.3686 0.295315L12.6427 5.85684C10.8683 5.73724 9.49717 6.05619 8.5293 6.81367C7.56144 7.57116 6.91619 8.62765 6.59357 9.98314C6.27095 11.3386 6.21046 12.8735 6.4121 14.5879H13.3686V29H0V13.3918C0 8.68745 1.12917 5.13923 3.38752 2.74717C5.6862 0.31525 9.01323 -0.502036 13.3686 0.295315Z"
                      fill="#FFCE4F"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
                  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow w-[717px] text-[40px] font-semibold text-left text-white">
                      There is no surer way to create jobs and wealth than by
                      the commercialization of new ideas anchored on a strong
                      intellectual property foundation.
                    </p>
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 w-[439px] text-xl text-left text-white">
                    <span className="flex-grow-0 flex-shrink-0 w-[439px] text-xl font-semibold italic text-left text-white">
                      Anne wan{' '}
                    </span>
                    <span className="flex-grow-0 flex-shrink-0 w-[439px] text-xl italic text-left text-white">
                      Managing Director, Patent &amp; Trade Mark Attorney
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start absolute left-[1120px] top-[1258px]">
              <div className="flex-grow-0 flex-shrink-0 w-40 h-40">
                <div className="w-40 h-40 absolute left-[-0.5px] top-[-0.5px] bg-black/20" />
                <div className="flex justify-start items-start absolute left-[116px] top-11 gap-2.5 p-5 rounded-[40px]">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="none">
                    <path
                      d="M19.6136 21.1736L14.4402 16.0003L19.6136 10.827C19.737 10.7035 19.8349 10.557 19.9017 10.3957C19.9685 10.2344 20.0029 10.0616 20.0029 9.88698C20.0029 9.7124 19.9685 9.53954 19.9017 9.37825C19.8349 9.21697 19.737 9.07042 19.6136 8.94698C19.4901 8.82354 19.3436 8.72562 19.1823 8.65881C19.021 8.592 18.8481 8.55762 18.6736 8.55762C18.499 8.55762 18.3261 8.592 18.1648 8.65881C18.0036 8.72562 17.857 8.82354 17.7336 8.94698L11.6136 15.067C11.0936 15.587 11.0936 16.427 11.6136 16.947L17.7336 23.067C17.8569 23.1906 18.0034 23.2886 18.1647 23.3556C18.326 23.4225 18.4989 23.4569 18.6736 23.4569C18.8482 23.4569 19.0211 23.4225 19.1824 23.3556C19.3437 23.2886 19.4902 23.1906 19.6136 23.067C20.1202 22.547 20.1336 21.6936 19.6136 21.1736Z"
                      fill="#E6E6E6"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-40 h-40">
                <div className="w-40 h-40 absolute left-[319.5px] top-[-0.5px] bg-black/20" />
                <div className="flex justify-start items-start absolute left-[204px] top-11 gap-2.5 p-5 rounded-[40px]">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="none">
                    <path
                      d="M12.3864 21.1736L17.5598 16.0003L12.3864 10.827C12.263 10.7035 12.1651 10.557 12.0983 10.3957C12.0315 10.2344 11.9971 10.0616 11.9971 9.88698C11.9971 9.7124 12.0315 9.53954 12.0983 9.37825C12.1651 9.21697 12.263 9.07042 12.3864 8.94698C12.5099 8.82354 12.6564 8.72562 12.8177 8.65881C12.979 8.592 13.1519 8.55762 13.3264 8.55762C13.501 8.55762 13.6739 8.592 13.8352 8.65881C13.9964 8.72562 14.143 8.82354 14.2664 8.94698L20.3864 15.067C20.9064 15.587 20.9064 16.427 20.3864 16.947L14.2664 23.067C14.1431 23.1906 13.9966 23.2886 13.8353 23.3556C13.674 23.4225 13.5011 23.4569 13.3264 23.4569C13.1518 23.4569 12.9789 23.4225 12.8176 23.3556C12.6563 23.2886 12.5098 23.1906 12.3864 23.067C11.8798 22.547 11.8664 21.6936 12.3864 21.1736Z"
                      fill="#E6E6E6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1441px] h-[570px]">
            <div className="w-[1440px] h-[443px]">
              <div className="w-[1440px] h-[443px] absolute left-[-0.5px] top-[-0.5px] bg-[#fffef8] border border-[#f0e4c3]" />
              <div className="flex flex-col justify-start items-center absolute left-[312px] top-[200px] gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left uppercase text-[#40320f]/50">
                  Professional Profiles
                </p>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[816px] relative gap-2.5 p-5 rounded-[30px]">
                  <p className="flex-grow w-[776px] text-5xl font-medium text-center text-[#272940]">
                    Meet our experts for this area in Sydney &amp; Melbourne
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[1440px] h-[127px]">
              <div className="w-[728.31px] h-[127px]">
                <svg
                  width={729}
                  height={127}
                  viewBox="0 0 729 127"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[0.5px] top-[442.5px]"
                  preserveAspectRatio="none">
                  <path
                    d="M728.306 127L712 0H0V127H728.306Z"
                    fill="#FFFDF7"
                  />
                </svg>
                <div className="flex justify-center items-center absolute left-[270px] top-[490px] gap-3.5">
                  <svg
                    width={32}
                    height={33}
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <path
                      d="M15.9997 16.4994C16.733 16.4994 17.361 16.238 17.8837 15.7154C18.4055 15.1936 18.6663 14.566 18.6663 13.8327C18.6663 13.0994 18.4055 12.4713 17.8837 11.9487C17.361 11.4269 16.733 11.166 15.9997 11.166C15.2663 11.166 14.6388 11.4269 14.117 11.9487C13.5943 12.4713 13.333 13.0994 13.333 13.8327C13.333 14.566 13.5943 15.1936 14.117 15.7154C14.6388 16.238 15.2663 16.4994 15.9997 16.4994ZM15.9997 29.8327C12.4219 26.7882 9.7499 23.9602 7.98367 21.3487C6.21656 18.738 5.33301 16.3216 5.33301 14.0994C5.33301 10.766 6.40545 8.11046 8.55034 6.13268C10.6943 4.1549 13.1775 3.16602 15.9997 3.16602C18.8219 3.16602 21.305 4.1549 23.449 6.13268C25.5939 8.11046 26.6663 10.766 26.6663 14.0994C26.6663 16.3216 25.7832 18.738 24.017 21.3487C22.2499 23.9602 19.5775 26.7882 15.9997 29.8327Z"
                      fill="#7568D1"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#272940]">
                    Sydney teams
                  </p>
                </div>
              </div>
              <div className="w-[728px] h-[127px]">
                <svg
                  width={727}
                  height={127}
                  viewBox="0 0 727 127"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[1440.5px] top-[569.5px]"
                  preserveAspectRatio="none">
                  <path
                    d="M0 0L16.3055 127H728V0H0Z"
                    fill="#FAF4E5"
                  />
                </svg>
                <div className="flex justify-center items-center absolute left-[965px] top-[490px] gap-3.5">
                  <svg
                    width={32}
                    height={33}
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <path
                      d="M18.2375 11.5954L18.2369 11.5948C17.6213 10.9802 16.8665 10.666 15.9997 10.666C15.1328 10.666 14.3783 10.9802 13.7635 11.5951C13.1479 12.2107 12.833 12.9656 12.833 13.8327C12.833 14.6997 13.1478 15.4541 13.7635 16.0689C14.3782 16.6846 15.1327 16.9994 15.9997 16.9994C16.8668 16.9994 17.6216 16.6845 18.2372 16.0689C18.8521 15.454 19.1663 14.6996 19.1663 13.8327C19.1663 12.9658 18.8521 12.2111 18.2375 11.5954ZM8.39785 21.0686L8.39774 21.0684C6.66412 18.5072 5.83301 16.1879 5.83301 14.0993C5.83301 10.8838 6.86213 8.36949 8.88929 6.50027L8.88936 6.5002C10.9444 4.60445 13.3077 3.66602 15.9997 3.66602C18.6917 3.66602 21.0549 4.60445 23.11 6.5002L23.1101 6.50027C25.1372 8.36949 26.1663 10.8838 26.1663 14.0993C26.1663 16.188 25.3356 18.5073 23.6029 21.0685C21.9232 23.5508 19.3945 26.2531 15.9997 29.1746C12.6049 26.2531 10.0766 23.5508 8.39785 21.0686Z"
                      stroke="#272940"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 opacity-50 text-2xl font-medium text-center text-[#272940]">
                    Melbourne teams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-start w-[1440px] absolute left-0 top-[11765px] gap-[30px] px-40 py-[60px]"
          style={{
            background:
              'linear-gradient(120.19deg, #61638d -29.08%, #343652 93.06%)',
          }}>
          <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 gap-[30px]">
            <div className="flex flex-col justify-center items-start flex-grow relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left uppercase text-white/50">
                COntact us
              </p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 py-5">
                <p className="flex-grow-0 flex-shrink-0 text-5xl font-medium text-left text-white">
                  Reach Out to Baxter IP
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[354px] relative gap-2.5 px-6 py-[30px] rounded-sm bg-[#4c4f76]">
              <p className="flex-grow w-[272px] text-xl font-semibold text-center text-white">
                Contact Us
              </p>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  d="M18 15.5L12 9.5L6 15.5"
                  stroke="white"
                  strokeWidth={2}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[30px]">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1120px] gap-[100px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[340px] relative gap-2.5 py-2.5">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
                  preserveAspectRatio="xMidYMid meet">
                  <path
                    d="M30.386 27.8C30.494 26.876 30.575 25.952 30.575 25C30.575 24.048 30.494 23.124 30.386 22.2H34.949C35.165 23.096 35.3 24.034 35.3 25C35.3 25.966 35.165 26.904 34.949 27.8M27.9965 35.584C28.8065 34.03 29.4275 32.35 29.8595 30.6H33.842C32.5341 32.9356 30.4591 34.7048 27.9965 35.584ZM27.659 27.8H21.341C21.206 26.876 21.125 25.952 21.125 25C21.125 24.048 21.206 23.11 21.341 22.2H27.659C27.7805 23.11 27.875 24.048 27.875 25C27.875 25.952 27.7805 26.876 27.659 27.8ZM24.5 36.144C23.3795 34.464 22.475 32.602 21.9215 30.6H27.0785C26.525 32.602 25.6205 34.464 24.5 36.144ZM19.1 19.4H15.158C16.4525 17.0581 18.526 15.2861 20.99 14.416C20.18 15.97 19.5725 17.65 19.1 19.4ZM15.158 30.6H19.1C19.5725 32.35 20.18 34.03 20.99 35.584C18.5311 34.7043 16.4605 32.9348 15.158 30.6ZM14.051 27.8C13.835 26.904 13.7 25.966 13.7 25C13.7 24.034 13.835 23.096 14.051 22.2H18.614C18.506 23.124 18.425 24.048 18.425 25C18.425 25.952 18.506 26.876 18.614 27.8M24.5 13.842C25.6205 15.522 26.525 17.398 27.0785 19.4H21.9215C22.475 17.398 23.3795 15.522 24.5 13.842ZM33.842 19.4H29.8595C29.437 17.666 28.8113 15.9923 27.9965 14.416C30.4805 15.298 32.546 17.076 33.842 19.4ZM24.5 11C17.0345 11 11 17.3 11 25C11 28.713 12.4223 32.274 14.9541 34.8995C16.2076 36.1995 17.6959 37.2307 19.3338 37.9343C20.9717 38.6379 22.7272 39 24.5 39C28.0804 39 31.5142 37.525 34.0459 34.8995C36.5777 32.274 38 28.713 38 25C38 23.1615 37.6508 21.341 36.9724 19.6424C36.2939 17.9439 35.2995 16.4005 34.0459 15.1005C32.7924 13.8005 31.3041 12.7693 29.6662 12.0657C28.0283 11.3621 26.2728 11 24.5 11Z"
                    fill="white"
                  />
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center uppercase text-white/50">
                  Meta office
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow relative gap-2.5 py-2.5">
                <div
                  className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-12 h-12 relative gap-2.5 p-3.5"
                  style={{
                    filter: 'drop-shadow(1px 7px 16px rgba(44,44,44,0.15))',
                  }}>
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none">
                    <path
                      d="M18 12.4611L12.7295 11.851L10.2093 14.3712C7.37027 12.9273 5.06266 10.6197 3.61875 7.78067L6.14897 5.25046L5.53892 0H0.0284401C-0.55161 10.1809 7.81912 18.5516 18 17.9716V12.4611V12.4611Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center uppercase text-white/50">
                  Call us
                </p>
              </div>
              <div className="flex justify-start items-center flex-grow relative gap-2.5 py-2.5">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
                  preserveAspectRatio="xMidYMid meet">
                  <path
                    d="M13.6 34C12.885 34 12.2731 33.7554 11.7644 33.2663C11.2548 32.7763 11 32.1875 11 31.5V16.5C11 15.8125 11.2548 15.2242 11.7644 14.735C12.2731 14.245 12.885 14 13.6 14H34.4C35.115 14 35.7273 14.245 36.2369 14.735C36.7456 15.2242 37 15.8125 37 16.5V31.5C37 32.1875 36.7456 32.7763 36.2369 33.2663C35.7273 33.7554 35.115 34 34.4 34H13.6ZM24 25.25L13.6 19V31.5H34.4V19L24 25.25ZM24 22.75L34.4 16.5H13.6L24 22.75ZM13.6 19V16.5V31.5V19Z"
                    fill="white"
                  />
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center uppercase text-white/50">
                  Email Us
                </p>
              </div>
            </div>
            <svg
              width={1120}
              height={2}
              viewBox="0 0 1120 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none">
              <path
                d="M0 1L1120 0.999902"
                stroke="white"
                stroke-opacity="0.3"
              />
            </svg>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1120px] gap-[100px] pb-5">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
                <div className="flex-grow-0 flex-shrink-0 w-[340px] h-[340px]">
                  <Image
                    className="w-[340px] h-[340px] absolute left-[-1.5px] top-[-1.5px] rounded-sm"
                    src="/image-53.png"
                    alt=""
                    width={1438}
                    height={848}
                  />
                  <div className="flex justify-start items-center w-[237.48px] h-[75.32px] absolute left-[51px] top-[133px] gap-2.5 p-5 rounded-sm bg-black/20 backdrop-blur-[50px]">
                    <svg
                      width={32}
                      height={33}
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                      preserveAspectRatio="none">
                      <path
                        d="M8.53317 24.6615L6.6665 22.7948L19.4665 9.99479H7.99984V7.32812H23.9998V23.3281H21.3332V11.8615L8.53317 24.6615Z"
                        fill="white"
                      />
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                      Visit meta office
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[290px] gap-[30px] px-2.5">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                      Patent &amp; Trade Mark Office
                    </p>
                    <svg
                      width={100}
                      height={2}
                      viewBox="0 0 100 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="none">
                      <path
                        d="M0 1H100"
                        stroke="#FFD15B"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white/50">
                    Sydney
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-white">
                    +61 2 9264 6716
                  </p>
                </div>
                <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white/50">
                    Melbourne
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-white">
                    +61 2 9264 6716
                  </p>
                </div>
                <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white/50">
                    Brisbane
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-white">
                    +61 2 9264 6716
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow gap-[30px] px-2.5">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                    Baxter IP
                  </p>
                  <svg
                    width={100}
                    height={2}
                    viewBox="0 0 100 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none">
                    <path
                      d="M0 1H100"
                      stroke="#FFD15B"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white/50">
                    Email
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-white">
                    mail@baxterip.com.au
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[50px]">
              <div
                className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1120px] h-[88px] relative gap-2.5 px-[92px] py-[30px] rounded-sm bg-[#816bd9]"
                style={{ boxShadow: '5px 4px 21px 0 rgba(0,0,0,0.25)' }}>
                <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                  Send us an enquiry
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start absolute left-0 top-[12638px]">
          <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[443px]">
            <div className="w-[1440px] h-[443px] absolute left-[-0.5px] top-[-0.5px] bg-[#fffef8] border border-[#f0e4c3]" />
            <div className="flex flex-col justify-start items-center absolute left-[312px] top-[200px] gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left uppercase text-[#40320f]/50">
                ip news blog
              </p>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[816px] relative gap-2.5 p-5 rounded-[30px]">
                <p className="flex-grow-0 flex-shrink-0 w-[638px] text-5xl font-medium text-center text-[#272940]">
                  IP Front™ Intellectual Property News
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[848px]">
            <div className="w-[1440px] h-[848px]">
              <Image
                className="w-[1440px] h-[848px] absolute left-[-0.5px] top-[442.5px]"
                src="/rectangle-835-2.png"
                alt=""
                width={1438}
                height={848}
              />
              <div className="flex flex-col justify-start items-center absolute left-[118px] top-[693px] gap-[50px]">
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[1205px] gap-5">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                      Nov 25
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-white">
                      ·
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                      4 min read
                    </p>
                  </div>
                  <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5">
                    <p className="flex-grow w-[1185px] text-[64px] font-medium text-center text-white">
                      “ Infringement of third party trade marks – Hells Angels
                      and Redbubble “
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5 p-5 rounded-sm bg-black/50 backdrop-blur-[50px]">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative space-x-[-10px]">
                    <Image
                      className="flex-grow-0 flex-shrink-0"
                      src="/ellipse-469.png"
                      alt=""
                      width={1438}
                      height={848}
                    />
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                      Nicole more
                    </p>
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 opacity-50 text-xl font-semibold text-left text-white">
                      2 min ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[1440px] h-2.5">
                <div className="w-[1440px] h-2.5 absolute left-[-0.5px] top-[442.5px] bg-[#f0e3c3]" />
                <div className="w-[355px] h-2.5 absolute left-[-0.5px] top-[442.5px] bg-[#816bd9]" />
              </div>
            </div>
            <div className="flex justify-start items-start absolute left-[1120px] top-[1131px]">
              <div className="flex-grow-0 flex-shrink-0 w-40 h-40">
                <div className="w-40 h-40 absolute left-[-0.5px] top-[-0.5px] bg-black/20" />
                <div className="flex justify-start items-start absolute left-[116px] top-11 gap-2.5 p-5 rounded-[40px]">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="none">
                    <path
                      d="M19.6136 21.1736L14.4402 16.0003L19.6136 10.827C19.737 10.7035 19.8349 10.557 19.9017 10.3957C19.9685 10.2344 20.0029 10.0616 20.0029 9.88698C20.0029 9.7124 19.9685 9.53954 19.9017 9.37825C19.8349 9.21697 19.737 9.07042 19.6136 8.94698C19.4901 8.82354 19.3436 8.72562 19.1823 8.65881C19.021 8.592 18.8481 8.55762 18.6736 8.55762C18.499 8.55762 18.3261 8.592 18.1648 8.65881C18.0036 8.72562 17.857 8.82354 17.7336 8.94698L11.6136 15.067C11.0936 15.587 11.0936 16.427 11.6136 16.947L17.7336 23.067C17.8569 23.1906 18.0034 23.2886 18.1647 23.3556C18.326 23.4225 18.4989 23.4569 18.6736 23.4569C18.8482 23.4569 19.0211 23.4225 19.1824 23.3556C19.3437 23.2886 19.4902 23.1906 19.6136 23.067C20.1202 22.547 20.1336 21.6936 19.6136 21.1736Z"
                      fill="#E6E6E6"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-40 h-40">
                <div className="w-40 h-40 absolute left-[319.5px] top-[-0.5px] bg-black/20" />
                <div className="flex justify-start items-start absolute left-[204px] top-11 gap-2.5 p-5 rounded-[40px]">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                    preserveAspectRatio="none">
                    <path
                      d="M12.3864 21.1736L17.5598 16.0003L12.3864 10.827C12.263 10.7035 12.1651 10.557 12.0983 10.3957C12.0315 10.2344 11.9971 10.0616 11.9971 9.88698C11.9971 9.7124 12.0315 9.53954 12.0983 9.37825C12.1651 9.21697 12.263 9.07042 12.3864 8.94698C12.5099 8.82354 12.6564 8.72562 12.8177 8.65881C12.979 8.592 13.1519 8.55762 13.3264 8.55762C13.501 8.55762 13.6739 8.592 13.8352 8.65881C13.9964 8.72562 14.143 8.82354 14.2664 8.94698L20.3864 15.067C20.9064 15.587 20.9064 16.427 20.3864 16.947L14.2664 23.067C14.1431 23.1906 13.9966 23.2886 13.8353 23.3556C13.674 23.4225 13.5011 23.4569 13.3264 23.4569C13.1518 23.4569 12.9789 23.4225 12.8176 23.3556C12.6563 23.2886 12.5098 23.1906 12.3864 23.067C11.8798 22.547 11.8664 21.6936 12.3864 21.1736Z"
                      fill="#E6E6E6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1440px] h-[140px] relative gap-2.5 px-40 bg-[#fffef8] border border-[#f0e4c3]">
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-[#272940]">
                Related news
              </p>
            </div>
            <div
              className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 px-40 py-[50px]"
              style={{
                background:
                  'linear-gradient(to bottom, #fffef8 40.79%, #fff3d0 100%)',
              }}>
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[100px]">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[17px]">
                  <div className="flex-grow-0 flex-shrink-0 w-[362px] h-[521px]">
                    <div
                      className="flex flex-col justify-start items-start h-[521px] absolute left-0 top-0 bg-white"
                      style={{
                        boxShadow:
                          '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
                      }}>
                      <Image
                        className="self-stretch flex-grow"
                        src="/rectangle-796.png"
                        alt=""
                        width={1438}
                        height={848}
                      />
                      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[362px] relative gap-6 p-6">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[314px] text-xl font-medium text-left text-[#404266]">
                          Infringement of third party trade marks – Hells Angels
                          and Redbubble
                        </p>
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#adaebd]">
                            Nov 25
                          </p>
                          <p className="flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-[#adaebd]">
                            ·
                          </p>
                          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#adaebd]">
                            4 min read
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex justify-start items-center absolute left-6 top-[264px] gap-2.5 px-5 py-2.5 rounded-sm bg-white"
                      style={{
                        boxShadow:
                          '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                      }}>
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative space-x-[-10px]">
                        <Image
                          className="flex-grow-0 flex-shrink-0"
                          src="/ellipse-469-3.png"
                          alt=""
                          width={1438}
                          height={848}
                        />
                      </div>
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#272940]">
                          Nicole more
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-0 flex-shrink-0 w-[362px] h-[521px]">
                    <div
                      className="flex flex-col justify-start items-start h-[521px] absolute left-[379px] top-0 bg-white"
                      style={{
                        boxShadow:
                          '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
                      }}>
                      <Image
                        className="self-stretch flex-grow-0 flex-shrink-0 h-[336px]"
                        src="/rectangle-796-2.png"
                        alt=""
                        width={1438}
                        height={848}
                      />
                      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[362px] relative gap-6 p-6">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[314px] text-xl font-medium text-left text-[#404266]">
                          Infringement of third party trade marks – Hells Angels
                          and Redbubble
                        </p>
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#adaebd]">
                            Nov 25
                          </p>
                          <p className="flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-[#adaebd]">
                            ·
                          </p>
                          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#adaebd]">
                            4 min read
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex justify-start items-center absolute left-[403px] top-[264px] gap-2.5 px-5 py-2.5 rounded-sm bg-white"
                      style={{
                        boxShadow:
                          '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                      }}>
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative space-x-[-10px]">
                        <Image
                          className="flex-grow-0 flex-shrink-0"
                          src="/ellipse-469-3.png"
                          alt=""
                          width={1438}
                          height={848}
                        />
                      </div>
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#272940]">
                          Nicole more
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-0 flex-shrink-0 w-[362px] h-[521px]">
                    <div
                      className="flex flex-col justify-start items-start h-[521px] absolute left-[758px] top-0 bg-white"
                      style={{
                        boxShadow:
                          '0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 7.012069225311279px 14.274569511413574px 0 rgba(150,151,169,0.09), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(150,151,169,0.05)',
                      }}>
                      <Image
                        className="self-stretch flex-grow-0 flex-shrink-0 h-[336px]"
                        src="/rectangle-796-3.png"
                        alt=""
                        width={1438}
                        height={848}
                      />
                      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[362px] relative gap-6 p-6">
                        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[314px] text-xl font-medium text-left text-[#404266]">
                          Infringement of third party trade marks – Hells Angels
                          and Redbubble
                        </p>
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#adaebd]">
                            Nov 25
                          </p>
                          <p className="flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-[#adaebd]">
                            ·
                          </p>
                          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#adaebd]">
                            4 min read
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex justify-start items-center absolute left-[782px] top-[264px] gap-2.5 px-5 py-2.5 rounded-sm bg-white"
                      style={{
                        boxShadow:
                          '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                      }}>
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative space-x-[-10px]">
                        <Image
                          className="flex-grow-0 flex-shrink-0"
                          src="/ellipse-469-3.png"
                          alt=""
                          width={1438}
                          height={848}
                        />
                      </div>
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#272940]">
                          Nicole more
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-6 pl-8 pr-6 py-6 rounded-[5px] bg-[#816bd9]"
                  style={{
                    boxShadow:
                      '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                  }}>
                  <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                    Discover more IP news
                  </p>
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-10 h-10"
                    preserveAspectRatio="none">
                    <circle
                      cx={20}
                      cy={20}
                      r={20}
                      fill="white"
                    />
                    <path
                      d="M19.7666 26.066C19.5999 25.8993 19.5166 25.702 19.5166 25.474C19.5166 25.2465 19.5999 25.0493 19.7666 24.8827L24.6499 19.9994L19.7499 15.0993C19.5944 14.9438 19.5166 14.7493 19.5166 14.516C19.5166 14.2827 19.5999 14.0827 19.7666 13.916C19.9333 13.7493 20.1306 13.666 20.3586 13.666C20.5862 13.666 20.7833 13.7493 20.9499 13.916L26.5499 19.5327C26.6166 19.5994 26.6639 19.6716 26.6919 19.7494C26.7195 19.8271 26.7333 19.9105 26.7333 19.9994C26.7333 20.0882 26.7195 20.1716 26.6919 20.2494C26.6639 20.3271 26.6166 20.3994 26.5499 20.466L20.9333 26.0827C20.7777 26.2382 20.5862 26.316 20.3586 26.316C20.1306 26.316 19.9333 26.2327 19.7666 26.066Z"
                      fill="black"
                    />
                    <path
                      d="M25.5 20L13.5 20"
                      stroke="black"
                      strokeWidth="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[3102px] absolute left-0 top-[14952px]">
          <div className="flex flex-col justify-start items-start absolute left-0 top-[1363px]">
            <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[407px]">
              <div className="flex justify-start items-center absolute left-40 top-[120px] gap-[108px]">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left uppercase text-[#40320f]/50">
                    Probono Work With Unis
                  </p>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 py-5 rounded-[30px]">
                    <p className="flex-grow-0 flex-shrink-0 w-[553px] text-5xl font-medium text-left text-[#272940]">
                      Listed of Baxter IP Founder program
                    </p>
                  </div>
                </div>
                <p className="flex-grow-0 flex-shrink-0 w-[459px] opacity-50 text-xl font-medium text-left text-black">
                  We specialise aross various market segments, Your bussiness
                  provides products or services that make society better. Our
                  patent &amp; trademark attorneys bring you profession-leading
                  experience in sector-specific IP to protect your valuable tech
                  or brand.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1440px] h-[200px] gap-[60px] p-3.5 bg-[#fffef8]">
                  <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[120px] w-[400px] relative opacity-30 gap-[14.043938636779785px]">
                    <svg
                      width={254}
                      height={190}
                      viewBox="0 0 254 190"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[252.17px] h-[189.57px] relative"
                      preserveAspectRatio="none">
                      <path
                        d="M156.924 81.961C154.577 81.961 152.222 81.961 149.876 81.961C149.445 81.961 149.34 82.0618 149.348 82.465C149.348 87.1176 149.348 91.7702 149.348 96.4227C149.348 98.2682 149.461 100.122 149.486 101.998C149.411 101.899 149.343 101.796 149.283 101.688C145.575 95.257 141.872 88.8235 138.175 82.3875C138.115 82.2486 138.011 82.1318 137.876 82.0548C137.741 81.9779 137.584 81.9449 137.427 81.961C134.391 81.961 131.359 81.961 128.333 81.961C127.984 81.961 127.87 82.023 127.87 82.3797C127.87 91.9433 127.87 101.507 127.87 111.071C127.87 111.435 127.992 111.497 128.333 111.489C130.712 111.489 133.099 111.489 135.487 111.489C135.868 111.489 135.966 111.396 135.966 111.032C135.966 108.527 135.966 106.023 135.966 103.518C135.966 100.835 135.966 98.1442 135.925 95.4612C135.925 94.4221 135.82 93.3753 135.755 92.3595C135.895 92.4524 136.005 92.5815 136.071 92.7317C139.612 98.8576 143.147 104.989 146.676 111.125C146.727 111.25 146.818 111.356 146.936 111.427C147.055 111.498 147.194 111.531 147.334 111.52C150.541 111.52 153.741 111.52 156.948 111.52C157.37 111.52 157.435 111.381 157.435 111.016C157.435 101.504 157.435 91.9899 157.435 82.4728C157.427 82.0696 157.338 81.9533 156.924 81.961Z"
                        fill="#494949"
                      />
                      <path
                        d="M118.639 105.52C113.993 105.52 109.348 105.52 104.703 105.52C104.339 105.52 104.246 105.435 104.254 105.07C104.254 103.455 104.254 101.848 104.254 100.233C104.254 99.8372 104.331 99.7208 104.749 99.7285C108.953 99.7285 113.157 99.7285 117.369 99.7285C117.756 99.7285 117.896 99.6509 117.888 99.2317C117.888 97.5547 117.888 95.8777 117.888 94.2007C117.888 93.7504 117.764 93.665 117.346 93.6727C113.142 93.6727 108.93 93.6727 104.726 93.6727C104.339 93.6727 104.246 93.5718 104.254 93.1914C104.254 91.6386 104.254 90.0858 104.254 88.533C104.254 88.106 104.339 88.0051 104.773 88.0051C109.271 88.0051 113.777 88.0051 118.275 88.0051C118.647 88.0051 118.724 87.9042 118.724 87.547C118.724 85.8545 118.724 84.1542 118.724 82.4617C118.724 82.058 118.616 81.957 118.213 81.957H97.0614C96.651 81.957 96.5581 82.0813 96.5659 82.4694C96.5659 87.2261 96.5659 91.9828 96.5659 96.7395C96.5659 101.496 96.5659 106.268 96.5659 111.056C96.5659 111.421 96.6433 111.53 97.0149 111.522H118.693C119.034 111.522 119.173 111.468 119.173 111.079C119.173 109.387 119.173 107.694 119.173 105.994C119.188 105.583 119.049 105.52 118.639 105.52Z"
                        fill="#494949"
                      />
                      <path
                        d="M206.995 97.3278C206.441 97.1306 205.87 96.9729 205.269 96.7836L205.762 96.6417C207.067 96.2922 208.245 95.5636 209.153 94.5439C209.87 93.6614 210.359 92.6098 210.577 91.4846C210.795 90.3594 210.735 89.1963 210.402 88.1009C209.747 85.3959 207.897 83.7714 205.431 82.8566C202.619 81.8675 199.595 81.6901 196.691 82.344C194.498 82.7229 192.491 83.8375 190.985 85.5123C189.48 87.1871 188.562 89.3269 188.375 91.5945C188.375 91.9494 188.452 91.9967 188.753 91.9967H195.643C195.92 91.9967 196.028 91.9415 196.052 91.6339C196.097 90.8886 196.286 90.1598 196.606 89.4889C196.846 89.0542 197.175 88.6773 197.569 88.384C197.964 88.0907 198.416 87.8878 198.894 87.789C199.372 87.6903 199.866 87.698 200.341 87.8117C200.816 87.9254 201.261 88.1424 201.647 88.4479C201.945 88.7042 202.185 89.0246 202.348 89.3864C202.714 90.2176 202.758 91.1598 202.472 92.0232C202.186 92.8866 201.591 93.6069 200.807 94.0392C199.83 94.5237 198.755 94.7668 197.67 94.749C197.354 94.749 197.262 94.8515 197.269 95.1748C197.269 96.6022 197.269 98.0217 197.269 99.4491C197.269 99.8119 197.393 99.8829 197.716 99.8829C198.912 99.83 200.105 100.04 201.215 100.498C201.774 100.734 202.262 101.117 202.63 101.608C202.998 102.099 203.233 102.681 203.311 103.294C203.39 103.908 203.308 104.531 203.075 105.103C202.843 105.674 202.467 106.172 201.986 106.547C201.303 107.06 200.495 107.37 199.651 107.446C198.807 107.521 197.959 107.357 197.2 106.973C196.536 106.639 195.963 106.144 195.531 105.53C195.098 104.917 194.819 104.205 194.718 103.455C194.649 103.14 194.564 103.022 194.233 103.022C191.951 103.022 189.67 103.022 187.389 103.022C187.019 103.022 186.973 103.156 187.011 103.487C187.42 107.43 189.231 110.364 192.815 111.894C194.834 112.774 197.004 113.239 199.199 113.261C201.394 113.282 203.572 112.861 205.608 112.02C208.953 110.703 211.003 108.211 211.311 104.465C211.589 101.05 210.294 98.5186 206.995 97.3278Z"
                        fill="#494949"
                      />
                      <path
                        d="M87.3347 81.957C83.1512 81.957 78.9678 81.957 74.7843 81.957C70.6009 81.957 66.4476 81.957 62.2792 81.957C61.8879 81.957 61.7751 82.0579 61.7826 82.469C61.7826 84.1602 61.7826 85.8514 61.7826 87.5426C61.7826 87.915 61.8729 88.0003 62.2265 87.9926C64.9879 87.9926 67.7492 87.9926 70.5031 87.9926C70.9395 87.9926 71.0749 88.0702 71.0674 88.5589C71.0674 96.0297 71.0674 103.5 71.0674 110.971C71.0674 111.39 71.1426 111.53 71.579 111.522C73.7084 111.522 75.8377 111.522 77.9746 111.522C78.4561 111.522 78.5615 111.398 78.5615 110.909C78.5615 103.438 78.5615 95.9676 78.5615 88.4968C78.5615 88.0857 78.6668 87.9926 79.0581 87.9926C81.8345 87.9926 84.6109 87.9926 87.3949 87.9926C87.741 87.9926 87.8689 87.9383 87.8689 87.5349C87.8388 85.8385 87.8388 84.1447 87.8689 82.4535C87.8764 82.0346 87.7485 81.957 87.3347 81.957Z"
                        fill="#494949"
                      />
                      <path
                        d="M180.019 82.4187C180.019 82.0532 179.939 81.9444 179.552 81.9599C178.584 81.9599 177.624 81.9599 176.656 81.9599C174.773 81.9182 172.908 82.3269 171.228 83.1496C168.381 84.5725 165.655 86.2053 162.856 87.7059C162.622 87.8381 162.663 88.017 162.663 88.2113V94.4317C162.663 94.5172 162.606 94.626 162.759 94.7193L171.994 90.0541V90.4818C171.994 97.3137 171.994 104.148 171.994 110.985C171.994 111.39 172.067 111.53 172.535 111.522C174.849 111.522 177.172 111.522 179.487 111.522C179.931 111.522 180.044 111.429 180.044 110.993C180.044 104.866 180.044 98.734 180.044 92.5967C180.011 89.2066 180.003 85.8088 180.019 82.4187Z"
                        fill="#494949"
                      />
                      <path
                        d="M58.1702 100.925C55.6808 98.7009 53.1836 96.4907 50.7022 94.2596C50.4493 94.028 50.3466 94.1473 50.1727 94.3016C47.7229 96.4837 45.2731 98.6517 42.8312 100.834C42.7521 100.897 42.6257 100.939 42.6573 101.086H58.3045C58.2255 100.995 58.2018 100.953 58.1702 100.925Z"
                        fill="#494949"
                      />
                      <path
                        d="M50.675 104.688C50.4073 104.456 50.3049 104.597 50.1317 104.752C47.7014 106.933 45.2632 109.113 42.8171 111.29C42.7541 111.353 42.6045 111.395 42.6675 111.522H58.3045C55.7062 109.199 53.1788 106.954 50.675 104.688Z"
                        fill="#494949"
                      />
                      <path
                        d="M58.1754 88.6875C55.6932 86.4879 53.2137 84.2859 50.7368 82.0816C50.4658 81.8414 50.3541 81.9968 50.1867 82.1452L42.8837 88.6239C42.788 88.7087 42.6126 88.7652 42.6605 88.9136H58.3029C58.3085 88.869 58.2994 88.824 58.2767 88.7839C58.2541 88.7438 58.2189 88.7103 58.1754 88.6875V88.6875Z"
                        fill="#494949"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[120px] w-[400px] relative gap-[14.043938636779785px] p-[14.043938636779785px]">
                    <Image
                      src="/image-1-2.png"
                      className="flex-grow-0 flex-shrink-0 w-[215.65px] h-[93.91px] object-none"
                      alt=""
                      width={1438}
                      height={848}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[120px] w-[400px] relative opacity-30 gap-[14.043938636779785px]">
                    <svg
                      width={254}
                      height={78}
                      viewBox="0 0 254 78"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[254px] h-[77px] relative"
                      preserveAspectRatio="none">
                      <path
                        d="M47.6553 43.0139L45.4979 40.8547C45.2708 40.6276 44.9629 40.5 44.6419 40.5C44.3209 40.5 44.013 40.6276 43.7859 40.8547L43.3544 41.2866C43.1275 41.5138 43 41.822 43 42.1433C43 42.4646 43.1275 42.7727 43.3544 43L45.5118 45.1453C45.7389 45.3724 46.0468 45.5 46.3678 45.5C46.6888 45.5 46.9967 45.3724 47.2238 45.1453L47.6553 44.7134C47.8763 44.4859 48 44.1811 48 43.8637C48 43.5463 47.8763 43.2415 47.6553 43.0139V43.0139Z"
                        fill="#494949"
                      />
                      <path
                        d="M64.8177 45.5H44.1823C43.8687 45.5036 43.5691 45.6152 43.3481 45.8108C43.127 46.0065 43.002 46.2705 43 46.5462V47.4607C43.0021 47.7358 43.1273 47.9991 43.3486 48.1936C43.5699 48.3881 43.8694 48.4982 44.1823 48.5H64.8177C65.1306 48.4982 65.4301 48.3881 65.6514 48.1936C65.8727 47.9991 65.9979 47.7358 66 47.4607V46.5462C66.001 46.4091 65.9712 46.2732 65.9122 46.1464C65.8533 46.0195 65.7664 45.9041 65.6565 45.8068C65.5466 45.7096 65.4159 45.6324 65.2719 45.5798C65.128 45.5271 64.9736 45.5 64.8177 45.5V45.5Z"
                        fill="#494949"
                      />
                      <path
                        d="M57 41.1159V24.8605C57 24.6818 56.969 24.5049 56.9087 24.3399C56.8485 24.1748 56.7602 24.0248 56.6489 23.8985C56.5376 23.7722 56.4055 23.6719 56.2601 23.6036C56.1146 23.5352 55.9588 23.5 55.8014 23.5H55.1778C54.8641 23.5082 54.5656 23.6549 54.3457 23.9089C54.1257 24.163 54.0017 24.5043 54 24.8605V41.1395C54.0017 41.4956 54.1257 41.837 54.3457 42.0911C54.5656 42.3451 54.8641 42.4918 55.1778 42.5H55.7806C55.941 42.501 56.1 42.4659 56.2483 42.3967C56.3967 42.3276 56.5315 42.2256 56.6449 42.0969C56.7583 41.9682 56.8481 41.8152 56.909 41.6468C56.97 41.4784 57.0009 41.2979 57 41.1159V41.1159Z"
                        fill="#494949"
                      />
                      <path
                        d="M51.8726 42.1621L46.2008 29.3349C46.1264 29.1636 46.0207 29.0096 45.8896 28.8815C45.7586 28.7535 45.6048 28.6539 45.4372 28.5887C45.2695 28.5234 45.0913 28.4936 44.9127 28.5011C44.7341 28.5086 44.5587 28.5532 44.3965 28.6323L43.7924 28.9381C43.6299 29.0165 43.4837 29.1279 43.3621 29.266C43.2406 29.404 43.1461 29.566 43.0842 29.7427C43.0222 29.9193 42.994 30.1071 43.0011 30.2952C43.0082 30.4834 43.0505 30.6682 43.1256 30.8391L48.7974 43.6746C48.9507 44.0175 49.2262 44.2827 49.564 44.4127C49.9019 44.5427 50.2748 44.527 50.6017 44.3689L51.2136 44.0714C51.541 43.9099 51.7943 43.6182 51.9178 43.2603C52.0414 42.9024 52.0251 42.5074 51.8726 42.1621Z"
                        fill="#494949"
                      />
                      <path
                        d="M60.1648 44.7515L63.8198 38.0558C63.9999 37.7172 64.0473 37.3171 63.9517 36.9418C63.8562 36.5665 63.6253 36.2461 63.3091 36.0497L62.7265 35.6942C62.4078 35.5009 62.0299 35.4494 61.6754 35.5509C61.321 35.6525 61.0189 35.8987 60.8352 36.2359L57.1802 42.9315C57.0001 43.2701 56.9528 43.6702 57.0483 44.0455C57.1438 44.4208 57.3747 44.7413 57.6909 44.9377L58.2735 45.3017C58.4313 45.3993 58.6058 45.4625 58.7869 45.4877C58.968 45.5128 59.152 45.4994 59.3282 45.4481C59.5043 45.3969 59.669 45.3089 59.8127 45.1893C59.9564 45.0696 60.0761 44.9208 60.1648 44.7515V44.7515Z"
                        fill="#494949"
                      />
                      <path
                        d="M86.5 23.5C86.7967 23.5 87.0867 23.6393 87.3334 23.9004C87.58 24.1615 87.7723 24.5325 87.8858 24.9667C87.9994 25.4008 88.0291 25.8785 87.9712 26.3394C87.9133 26.8003 87.7704 27.2236 87.5607 27.5559C87.3509 27.8881 87.0836 28.1144 86.7926 28.2061C86.5017 28.2978 86.2001 28.2507 85.926 28.0709C85.6519 27.8911 85.4176 27.5866 85.2528 27.1958C85.088 26.8051 85 26.3458 85 25.8759C85 25.2458 85.158 24.6414 85.4393 24.1959C85.7206 23.7503 86.1022 23.5 86.5 23.5V23.5ZM85.46 49.5V32.362H87.545V49.4604L85.46 49.5Z"
                        fill="#494949"
                      />
                      <path
                        d="M95.643 48.4847H92V31.9765H95.5652V34.3469C96.1415 33.4573 96.9805 32.7229 97.9925 32.2219C99.0045 31.7209 100.151 31.4723 101.311 31.5025C105.767 31.5025 108 34.3468 108 38.0247V48.5H104.348V38.5599C104.348 36.2661 103.258 34.408 100.022 34.408C97.1401 34.408 95.695 36.4343 95.695 38.9422V48.4618L95.643 48.4847Z"
                        fill="#494949"
                      />
                      <path
                        d="M118.235 48.5H114.883L108 31.5H111.736L116.571 44.6181L121.437 31.5H125L118.235 48.5Z"
                        fill="#494949"
                      />
                      <path
                        d="M141.885 43.4425C141.353 44.9536 140.287 46.2657 138.85 47.1782C137.412 48.0907 135.683 48.5533 133.927 48.4951C129.172 48.4951 125 45.3687 125 39.9457C125 34.9301 129.024 31.5 133.475 31.5C138.929 31.5 142 34.8931 142 39.879C142 40.2135 141.975 40.5476 141.926 40.8792H128.572C128.557 41.5187 128.685 42.1545 128.948 42.7486C129.211 43.3426 129.604 43.8826 130.104 44.3364C130.604 44.7901 131.2 45.1482 131.857 45.3892C132.514 45.6302 133.218 45.7493 133.927 45.7391C135.042 45.8002 136.146 45.5132 137.054 44.9263C137.962 44.3394 138.618 43.4884 138.912 42.5164L141.885 43.4425ZM138.386 38.3603C138.313 36.0636 136.645 34.2708 133.516 34.2708C132.281 34.2541 131.086 34.6714 130.185 35.4345C129.284 36.1975 128.747 37.2467 128.687 38.3603H138.386Z"
                        fill="#494949"
                      />
                      <path
                        d="M146.693 42.8556C146.887 44.5148 148.129 45.8185 150.284 45.8185C151.986 45.8185 152.919 44.8185 152.919 43.6926C152.919 42.6926 152.201 41.9296 150.923 41.6259L148.287 41.0407C145.86 40.5 144.424 38.8185 144.424 36.5444C144.424 33.8259 146.908 31.5 149.939 31.5C154.197 31.5 155.519 34.3519 155.835 35.7889L153.214 36.8481C153.108 36.0624 152.715 35.348 152.116 34.851C151.517 34.3539 150.756 34.1118 149.989 34.1741C148.431 34.1741 147.404 35.2111 147.404 36.3074C147.404 37.2704 147.978 37.9593 149.171 38.2333L151.691 38.7889C154.492 39.4333 156 41.1889 156 43.5518C156 45.9148 154.169 48.5 150.32 48.5C146.061 48.5 144.259 45.6778 144 43.8407L146.693 42.8556Z"
                        fill="#494949"
                      />
                      <path
                        d="M166.394 31.984H170V35.0432H166.394V44.0521C166.394 45.6579 167.011 46.4608 168.706 46.4608C169.138 46.4564 169.569 46.408 169.992 46.3163V49.2069C169.282 49.4243 168.544 49.5218 167.804 49.4959C164.977 49.4959 163.182 47.6973 163.182 44.5499V35.0432H160V31.992H160.871C161.217 32.0346 161.569 31.9947 161.899 31.8753C162.228 31.756 162.528 31.5603 162.775 31.303C163.022 31.0457 163.21 30.7335 163.324 30.3897C163.439 30.046 163.477 29.6797 163.436 29.3183V26.5H166.402L166.394 31.984Z"
                        fill="#494949"
                      />
                      <path
                        d="M171.5 23.5C171.797 23.5 172.087 23.6393 172.333 23.9004C172.58 24.1615 172.772 24.5325 172.886 24.9667C172.999 25.4008 173.029 25.8785 172.971 26.3394C172.913 26.8003 172.77 27.2236 172.561 27.5559C172.351 27.8881 172.084 28.1144 171.793 28.2061C171.502 28.2978 171.2 28.2507 170.926 28.0709C170.652 27.8911 170.418 27.5866 170.253 27.1958C170.088 26.8051 170 26.3458 170 25.8759C170 25.2458 170.158 24.6414 170.439 24.1959C170.721 23.7503 171.102 23.5 171.5 23.5V23.5ZM170.465 49.5V32.362H172.55V49.4604L170.465 49.5Z"
                        fill="#494949"
                      />
                      <path
                        d="M179 50.0049V24.5H182.347V35.4833C183.148 33.9614 185.19 32.6041 188.057 32.6041C193.317 32.6041 196 36.5268 196 41.4771C196 46.5216 193.077 50.4913 187.944 50.4913C186.828 50.5502 185.715 50.3096 184.728 49.7954C183.74 49.2811 182.914 48.5127 182.339 47.5728V50.0441L179 50.0049ZM187.44 35.499C184.461 35.499 182.291 37.7898 182.291 41.4536C182.291 45.1173 184.445 47.5179 187.44 47.5179C190.435 47.5179 192.549 45.1173 192.549 41.4536C192.549 37.7898 190.579 35.499 187.44 35.499Z"
                        fill="#494949"
                      />
                      <path
                        d="M198 50.5V24.5H201V50.5H198Z"
                        fill="#494949"
                      />
                      <path
                        d="M221.885 43.4425C221.353 44.9536 220.288 46.2657 218.851 47.1782C217.415 48.0907 215.686 48.5533 213.931 48.4951C209.178 48.4951 205 45.3687 205 39.9457C205 34.9301 209.03 31.5 213.479 31.5C218.93 31.5 222 34.8931 222 39.879C222.002 40.2138 221.974 40.5483 221.918 40.8792H208.579C208.563 41.5187 208.691 42.1545 208.954 42.7486C209.217 43.3426 209.61 43.8826 210.11 44.3364C210.609 44.7901 211.205 45.1482 211.862 45.3892C212.518 45.6302 213.222 45.7493 213.931 45.7391C215.044 45.8013 216.148 45.5146 217.054 44.9274C217.96 44.3402 218.614 43.4885 218.905 42.5164L221.885 43.4425ZM218.388 38.3603C218.306 36.0636 216.648 34.2708 213.52 34.2708C212.285 34.2541 211.091 34.6714 210.191 35.4345C209.29 36.1975 208.753 37.2467 208.694 38.3603H218.388Z"
                        fill="#494949"
                      />
                      <path
                        d="M56.508 14.5C51.8598 14.4985 47.3155 15.8168 43.4499 18.2882C39.5843 20.7596 36.571 24.2731 34.7911 28.3843C33.0112 32.4955 32.5447 37.0198 33.4506 41.3849C34.3564 45.7499 36.594 49.7598 39.8802 52.9072C43.1664 56.0546 47.3537 58.1983 51.9125 59.0671C56.4712 59.9359 61.1967 59.4908 65.4912 57.788C69.7857 56.0853 73.4564 53.2014 76.039 49.5011C78.6215 45.8008 80 41.4504 80 37C79.9916 31.0364 77.5141 25.3193 73.1105 21.1017C68.707 16.8841 62.7366 14.5101 56.508 14.5ZM76.5542 37C76.551 40.8009 75.3707 44.5155 73.1624 47.6741C70.9541 50.8326 67.817 53.2932 64.148 54.7446C60.479 56.196 56.4429 56.573 52.5501 55.828C48.6573 55.083 45.0826 53.2494 42.2783 50.5591C39.474 47.8688 37.566 44.4426 36.7956 40.714C36.0252 36.9854 36.4269 33.1217 37.9501 29.6117C39.4733 26.1017 42.0495 23.1031 45.3528 20.995C48.6561 18.887 52.5381 17.7642 56.508 17.7687C61.8256 17.7868 66.9195 19.82 70.6759 23.4237C74.4324 27.0275 76.5458 31.9086 76.5542 37V37Z"
                        fill="#494949"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 py-[60px] bg-[#fbf8f1]">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1440px] h-[50px] overflow-hidden gap-[60px]">
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[330px] relative opacity-30 gap-6">
                      <p className="flex-grow-0 flex-shrink-0 text-[32px] text-center text-black">
                        ePhD Program
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[330px] relative opacity-30 gap-6">
                      <p className="flex-grow-0 flex-shrink-0 text-[32px] text-center text-black">
                        Coach &amp; Connect
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[330px] relative gap-6">
                      <p className="flex-grow-0 flex-shrink-0 text-[32px] font-medium text-center text-[#272940]">
                        IP Due Diligence
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[330px] relative opacity-30 gap-6">
                      <p className="flex-grow-0 flex-shrink-0 text-[32px] text-center text-black">
                        New Wave
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[330px] relative opacity-30 gap-6">
                      <p className="flex-grow-0 flex-shrink-0 text-[32px] text-center text-black">
                        Further ePhD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[331px]">
                <div className="flex justify-center items-center w-[1440px] absolute left-0 top-[370px] overflow-hidden">
                  <Image
                    className="flex-grow-0 flex-shrink-0 w-[550px] h-[331px] rounded-sm"
                    src="/rectangle-857.png"
                    alt=""
                    width={1438}
                    height={848}
                  />
                  <Image
                    className="flex-grow-0 flex-shrink-0 w-[550px] h-[331px] rounded-sm"
                    src="/rectangle-855.png"
                    alt=""
                    width={1438}
                    height={848}
                  />
                  <Image
                    className="flex-grow-0 flex-shrink-0 w-[550px] h-[331px] rounded-sm"
                    src="/rectangle-856.png"
                    alt=""
                    width={1438}
                    height={848}
                  />
                </div>
                <div className="flex justify-center items-center w-[126px] h-[126px] absolute left-[286px] top-[473px] gap-[17.36111068725586px] p-[34.72222137451172px] rounded-[70px] bg-white/5 border-[1.74px] border-white/50">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <path
                      d="M29.4013 32.552L21.4463 24.7395L29.4013 16.9271C29.5911 16.7406 29.7417 16.5193 29.8444 16.2758C29.9471 16.0322 30 15.7712 30 15.5075C30 15.2439 29.9471 14.9828 29.8444 14.7393C29.7417 14.4957 29.5911 14.2744 29.4013 14.088C29.2115 13.9016 28.9861 13.7537 28.7381 13.6528C28.4901 13.5519 28.2243 13.5 27.9558 13.5C27.6874 13.5 27.4216 13.5519 27.1736 13.6528C26.9256 13.7537 26.7002 13.9016 26.5104 14.088L17.0997 23.33C16.3001 24.1153 16.3001 25.3838 17.0997 26.1691L26.5104 35.4112C26.7001 35.5978 26.9254 35.7459 27.1734 35.8469C27.4214 35.948 27.6873 36 27.9558 36C28.2244 36 28.4902 35.948 28.7383 35.8469C28.9863 35.7459 29.2116 35.5978 29.4013 35.4112C30.1804 34.6259 30.2009 33.3372 29.4013 32.552Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex justify-center items-center w-[126px] h-[126px] absolute left-[1154px] top-[473px] gap-[17.36111068725586px] p-[34.72222137451172px] rounded-[70px] bg-white/5 border-[1.74px] border-white/50">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <path
                      d="M18.5987 32.552L26.5537 24.7395L18.5987 16.9271C18.4089 16.7406 18.2583 16.5193 18.1556 16.2758C18.0529 16.0322 18 15.7712 18 15.5075C18 15.2439 18.0529 14.9828 18.1556 14.7393C18.2583 14.4957 18.4089 14.2744 18.5987 14.088C18.7885 13.9016 19.0139 13.7537 19.2619 13.6528C19.5099 13.5519 19.7757 13.5 20.0442 13.5C20.3126 13.5 20.5784 13.5519 20.8264 13.6528C21.0744 13.7537 21.2998 13.9016 21.4896 14.088L30.9003 23.33C31.6999 24.1153 31.6999 25.3838 30.9003 26.1691L21.4896 35.4112C21.2999 35.5978 21.0746 35.7459 20.8266 35.8469C20.5786 35.948 20.3127 36 20.0442 36C19.7756 36 19.5098 35.948 19.2617 35.8469C19.0137 35.7459 18.7884 35.5978 18.5987 35.4112C17.8196 34.6259 17.7991 33.3372 18.5987 32.552Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1440px] gap-12 px-40 py-[30px] bg-[#fbf8f1] border-t-0 border-r-0 border-b border-l-0 border-[#f0e4c3]">
                <div className="flex justify-center items-center flex-grow gap-12 px-6 py-8 rounded-sm">
                  <div className="flex flex-col justify-center items-center flex-grow relative gap-6 rounded-bl-[5px] rounded-br-[5px]">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[293.33px] opacity-30 text-2xl font-medium text-center text-black">
                      Project
                    </p>
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[293.33px] text-[40px] text-center text-[#272940]">
                      2 Project
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-grow gap-12 px-6 py-8 rounded-sm">
                  <div className="flex flex-col justify-center items-center flex-grow relative gap-6 rounded-bl-[5px] rounded-br-[5px]">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[293.33px] opacity-30 text-2xl font-medium text-center text-black">
                      Total time
                    </p>
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[293.33px] text-[40px] text-center text-[#272940]">
                      54 Hours
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-grow gap-12 px-6 py-8 rounded-sm">
                  <div className="flex flex-col justify-center items-center flex-grow relative gap-6 rounded-bl-[5px] rounded-br-[5px]">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[293.33px] opacity-30 text-2xl font-medium text-center text-black">
                      Budget
                    </p>
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[293.33px] text-[40px] text-center text-[#272940]">
                      $650
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative bg-[#fbf8f1] border-t-0 border-r-0 border-b border-l-0 border-[#f0e4c3]">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[1120px] gap-6 px-40 py-5 bg-[#fbf8f1]">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                      <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[150px] relative gap-12 py-12">
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[200px] relative gap-2.5">
                          <p className="flex-grow-0 flex-shrink-0 opacity-30 text-2xl font-medium text-left text-black">
                            Activity
                          </p>
                        </div>
                        <p className="flex-grow w-[552px] opacity-50 text-xl font-medium text-left text-black">
                          Preparing script (22 pages), slides and delivering 6
                          video tutorials related to IP with recording and
                          editing
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[1120px] gap-6 px-40 py-5 bg-[#fbf8f1]">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                      <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[150px] relative gap-12 py-12">
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[200px] relative gap-2.5">
                          <p className="flex-grow-0 flex-shrink-0 opacity-30 text-2xl font-medium text-left text-black">
                            Est budget
                          </p>
                        </div>
                        <p className="flex-grow w-[552px] opacity-50 text-xl font-medium text-left text-black">
                          2hrs @ $610 = $1,220
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-40">
                  <div className="w-40 h-[380px] absolute left-[1119.5px] top-[-0.5px] bg-[#fbf8f1]" />
                  <div className="flex justify-center items-center h-[171px] absolute left-[1236px] top-[104.5px] gap-2.5 p-5 rounded-[40px] bg-[#fbf8f1]">
                    <svg
                      width={32}
                      height={33}
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                      preserveAspectRatio="none">
                      <g opacity="0.2">
                        <path
                          d="M19.6136 22.1707L14.4402 16.9974L19.6136 11.824C19.737 11.7006 19.8349 11.5541 19.9017 11.3928C19.9685 11.2315 20.0029 11.0586 20.0029 10.884C20.0029 10.7095 19.9685 10.5366 19.9017 10.3753C19.8349 10.214 19.737 10.0675 19.6136 9.94405C19.4901 9.82061 19.3436 9.72269 19.1823 9.65588C19.021 9.58907 18.8481 9.55469 18.6736 9.55469C18.499 9.55469 18.3261 9.58907 18.1648 9.65588C18.0036 9.72269 17.857 9.82061 17.7336 9.94405L11.6136 16.064C11.0936 16.584 11.0936 17.424 11.6136 17.944L17.7336 24.064C17.8569 24.1877 18.0034 24.2857 18.1647 24.3526C18.326 24.4195 18.4989 24.454 18.6736 24.454C18.8482 24.454 19.0211 24.4195 19.1824 24.3526C19.3437 24.2857 19.4902 24.1877 19.6136 24.064C20.1202 23.544 20.1336 22.6907 19.6136 22.1707Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="self-stretch flex-grow-0 flex-shrink-0 w-40">
                  <div className="w-40 h-[380px] absolute left-[1439.5px] top-[-0.5px] bg-[#fbf8f1]" />
                  <div className="flex justify-center items-center h-[171px] absolute left-[1324px] top-[104.5px] gap-2.5 p-5 rounded-[40px] bg-[#fbf8f1]">
                    <svg
                      width={32}
                      height={33}
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                      preserveAspectRatio="none">
                      <path
                        d="M12.3864 22.1707L17.5598 16.9974L12.3864 11.824C12.263 11.7006 12.1651 11.5541 12.0983 11.3928C12.0315 11.2315 11.9971 11.0586 11.9971 10.884C11.9971 10.7095 12.0315 10.5366 12.0983 10.3753C12.1651 10.214 12.263 10.0675 12.3864 9.94405C12.5099 9.82061 12.6564 9.72269 12.8177 9.65588C12.979 9.58907 13.1519 9.55469 13.3264 9.55469C13.501 9.55469 13.6739 9.58907 13.8352 9.65588C13.9964 9.72269 14.143 9.82061 14.2664 9.94405L20.3864 16.064C20.9064 16.584 20.9064 17.424 20.3864 17.944L14.2664 24.064C14.1431 24.1877 13.9966 24.2857 13.8353 24.3526C13.674 24.4195 13.5011 24.454 13.3264 24.454C13.1518 24.454 12.9789 24.4195 12.8176 24.3526C12.6563 24.2857 12.5098 24.1877 12.3864 24.064C11.8798 23.544 11.8664 22.6907 12.3864 22.1707Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[515px] absolute left-0 top-0">
            <svg
              width={1440}
              height={762}
              viewBox="0 0 1440 762"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[-1px] top-[-1px]"
              preserveAspectRatio="none">
              <path
                d="M0 55.4555L1440 0V762H0L0 55.4555Z"
                fill="url(#paint0_linear_1_2628)"
              />
              <defs>
                <lineargradient
                  id="paint0_linear_1_2628"
                  x1="625.5"
                  y1={762}
                  x2="625.5"
                  y2={-174}
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFFEF8" />
                  <stop
                    offset="0.0565011"
                    stop-color="#FDD262"
                  />
                  <stop
                    offset={1}
                    stop-color="#FFD15B"
                  />
                </lineargradient>
              </defs>
            </svg>
            <svg
              width={1440}
              height={762}
              viewBox="0 0 1440 762"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[1440px] h-[762px]"
              preserveAspectRatio="none">
              <mask
                id="mask0_1_2629"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={1440}
                height={762}>
                <path
                  d="M0 55.4555L1440 0V762H0V55.4555Z"
                  fill="url(#paint0_linear_1_2629)"
                />
              </mask>
              <g mask="url(#mask0_1_2629)">
                <path
                  d="M-173.502 -159.433L-47.1003 436.099L-173.502 1031.63H12.919L139.321 436.099L12.919 -159.433H-173.502Z"
                  fill="white"
                  fill-opacity="0.7"
                />
                <path
                  d="M12.7861 -159.433L139.118 436.099L12.7861 1031.63H199.276L325.609 436.099L199.276 -159.433H12.7861Z"
                  fill="white"
                  fill-opacity="0.6"
                />
                <path
                  d="M199.072 -159.433L325.474 436.099L199.072 1031.63H385.493L511.895 436.099L385.493 -159.433H199.072Z"
                  fill="white"
                  fill-opacity="0.5"
                />
                <path
                  d="M385.361 -161.138L511.415 434.385L385.361 1029.91L386.905 1279.03L712.243 436.212L386.905 -406.837L385.361 -161.138Z"
                  fill="white"
                  fill-opacity="0.4"
                />
                <path
                  d="M388.876 -896.297L1112.66 441.455L389.047 1779.21L390.419 2028.31L1313.28 443.282L390.419 -1141.97L388.876 -896.297Z"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M388.876 -648.896L912.446 441.342L388.876 1531.58L390.417 1780.91L1112.94 443.168L390.246 -894.571L388.876 -648.896Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M385.361 -405.005L711.463 438.036L385.361 1280.85L386.908 1529.97L912.59 439.634L386.908 -650.702L385.361 -405.005Z"
                  fill="white"
                  fill-opacity="0.3"
                />
              </g>
              <defs>
                <lineargradient
                  id="paint0_linear_1_2629"
                  x1="805.5"
                  y1="595.5"
                  x2="564.965"
                  y2="-167.429"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFFEF8" />
                  <stop
                    offset="0.182473"
                    stop-color="#FBB500"
                  />
                  <stop
                    offset="0.283295"
                    stop-color="#FFBE14"
                  />
                  <stop
                    offset={1}
                    stop-color="#FFECB8"
                  />
                </lineargradient>
              </defs>
            </svg>
            <div className="flex flex-col justify-start items-center w-[816px] absolute left-[312px] top-[153px] gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left uppercase text-[#40320f]/50">
                Filling stats
              </p>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[816px] relative gap-2.5 p-5 rounded-[30px]">
                <p className="flex-grow-0 flex-shrink-0 text-5xl font-medium text-center text-[#272940]">
                  <span className="flex-grow-0 flex-shrink-0 text-5xl font-medium text-center text-[#272940]">
                    Total of Application{' '}
                  </span>
                  <br />
                  <span className="flex-grow-0 flex-shrink-0 text-5xl font-medium text-center text-[#272940]">
                    type patten filled
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[127px]">
            <div className="w-[227.19px] h-[127px]">
              <svg
                width={228}
                height={127}
                viewBox="0 0 228 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[891.5px] top-[386.5px]"
                preserveAspectRatio="none">
                <path
                  d="M16.1863 127L0 0H211L227.186 127H16.1863Z"
                  fill="#FAF4E5"
                />
              </svg>
              <div className="flex justify-center items-center absolute left-[965px] top-[429px] gap-2.5 p-2.5">
                <p className="flex-grow-0 flex-shrink-0 opacity-50 text-xl font-medium text-center text-[#272940]">
                  FMCG
                </p>
              </div>
            </div>
            <div className="w-[364px] h-[127px]">
              <svg
                width={364}
                height={127}
                viewBox="0 0 364 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-0.5px] top-[386.5px]"
                preserveAspectRatio="none">
                <path
                  d="M364 127L347.814 0H0V127H364Z"
                  fill="#FFFEF8"
                />
              </svg>
              <div className="flex justify-center items-center absolute left-[200px] top-[429px] gap-2.5 py-2.5">
                <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-center text-[#272940]">
                  Health Tech
                </p>
              </div>
            </div>
            <div className="w-[257.37px] h-[127px]">
              <svg
                width={259}
                height={127}
                viewBox="0 0 259 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[347.31px] top-[386.5px]"
                preserveAspectRatio="none">
                <path
                  d="M16.9998 127L0.813477 0H242L258.186 127H16.9998Z"
                  fill="#FAF4E5"
                />
              </svg>
              <div className="flex justify-center items-center absolute left-[421px] top-[429px] gap-2.5 p-2.5">
                <p className="flex-grow-0 flex-shrink-0 opacity-50 text-xl font-medium text-center text-[#272940]">
                  Enginering
                </p>
              </div>
            </div>
            <div className="w-[319.19px] h-[127px]">
              <svg
                width={320}
                height={127}
                viewBox="0 0 320 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[588.5px] top-[386.5px]"
                preserveAspectRatio="none">
                <path
                  d="M16.1863 127L0 0H303L319.186 127H16.1863Z"
                  fill="#FAF4E5"
                />
              </svg>
              <div className="flex justify-center items-center absolute left-[648px] top-[429px] gap-2.5 p-2.5">
                <p className="flex-grow-0 flex-shrink-0 opacity-50 text-xl font-medium text-center text-[#272940]">
                  Software &amp; Hardware
                </p>
              </div>
            </div>
            <div className="w-[337px] h-[127px]">
              <svg
                width={337}
                height={127}
                viewBox="0 0 337 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1102.5px] top-[386.5px]"
                preserveAspectRatio="none">
                <path
                  d="M16.1863 127L0 0H337V127H16.1863Z"
                  fill="#FAF4E5"
                />
              </svg>
              <div className="flex justify-center items-center absolute left-[1151px] top-[429px] gap-2.5 p-2.5">
                <p className="flex-grow-0 flex-shrink-0 opacity-50 text-xl font-medium text-center text-[#272940]">
                  Physics
                </p>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[848px]">
            <Image
              className="w-[1440px] h-[848px] absolute left-[-0.5px] top-[514.5px] rounded-sm"
              src="/rectangle-839.png"
              alt=""
              width={1438}
              height={848}
            />
            <div className="flex flex-col justify-center items-center absolute left-[340px] top-[776px] gap-6">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[79px] relative gap-6">
                <p className="flex-grow-0 flex-shrink-0 text-[64px] font-medium text-center text-white">
                  Consumer Products
                </p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[760px] h-16 text-xl font-medium text-center text-white">
                Even if you are not directly responsible for the infringing
                behaviour, you must have procedures in place to monitor and take
                action to prevent any instances of infringem
              </p>
            </div>
            <div className="flex justify-start items-start absolute left-0 top-[1104px]">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[1120px] h-[259px] gap-12 pl-40 pr-12 py-[30px] bg-black/20 backdrop-blur-[50px]">
                <div className="flex justify-center items-center flex-grow gap-12 px-6 py-8 rounded-sm">
                  <div className="flex flex-col justify-center items-center flex-grow relative gap-8 rounded-bl-[5px] rounded-br-[5px]">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-56 text-2xl font-medium text-center text-[#adaece]">
                      Design
                    </p>
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-56 text-5xl text-center text-white">
                      20
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-grow gap-12 px-6 py-8 rounded-sm">
                  <div className="flex flex-col justify-center items-center flex-grow relative gap-8 rounded-bl-[5px] rounded-br-[5px]">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-56 text-2xl font-medium text-center text-[#adaece]">
                      Patent
                    </p>
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-56 text-5xl text-center text-white">
                      12
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-grow gap-12 px-6 py-8 rounded-sm">
                  <div className="flex flex-col justify-center items-center flex-grow relative gap-8 rounded-bl-[5px] rounded-br-[5px]">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-56 text-2xl font-medium text-center text-[#adaece]">
                      Trademark
                    </p>
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-56 text-5xl text-center text-white">
                      45
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-80 h-[259px]">
                <div className="w-40 h-[259px]">
                  <div className="w-40 h-[259px] absolute left-[1119.5px] top-[-0.5px] bg-black/20" />
                  <div className="flex justify-center items-center h-[116.55px] absolute left-[1236px] top-[71.22px] gap-2.5 p-5 rounded-[40px]">
                    <svg
                      width={32}
                      height={33}
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                      preserveAspectRatio="none">
                      <path
                        d="M19.6136 21.6736L14.4402 16.5003L19.6136 11.327C19.737 11.2035 19.8349 11.057 19.9017 10.8957C19.9685 10.7344 20.0029 10.5616 20.0029 10.387C20.0029 10.2124 19.9685 10.0395 19.9017 9.87825C19.8349 9.71697 19.737 9.57042 19.6136 9.44698C19.4901 9.32354 19.3436 9.22562 19.1823 9.15881C19.021 9.092 18.8481 9.05762 18.6736 9.05762C18.499 9.05762 18.3261 9.092 18.1648 9.15881C18.0036 9.22562 17.857 9.32354 17.7336 9.44698L11.6136 15.567C11.0936 16.087 11.0936 16.927 11.6136 17.447L17.7336 23.567C17.8569 23.6906 18.0034 23.7886 18.1647 23.8556C18.326 23.9225 18.4989 23.9569 18.6736 23.9569C18.8482 23.9569 19.0211 23.9225 19.1824 23.8556C19.3437 23.7886 19.4902 23.6906 19.6136 23.567C20.1202 23.047 20.1336 22.1936 19.6136 21.6736Z"
                        fill="#E6E6E6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-40 h-[259px]">
                  <div className="w-40 h-[259px] absolute left-[1439.5px] top-[-0.5px] bg-black/20" />
                  <div className="flex justify-center items-center h-[116.55px] absolute left-[1324px] top-[71.22px] gap-2.5 p-5 rounded-[40px]">
                    <svg
                      width={32}
                      height={33}
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                      preserveAspectRatio="none">
                      <path
                        d="M12.3864 21.6736L17.5598 16.5003L12.3864 11.327C12.263 11.2035 12.1651 11.057 12.0983 10.8957C12.0315 10.7344 11.9971 10.5616 11.9971 10.387C11.9971 10.2124 12.0315 10.0395 12.0983 9.87825C12.1651 9.71697 12.263 9.57042 12.3864 9.44698C12.5099 9.32354 12.6564 9.22562 12.8177 9.15881C12.979 9.092 13.1519 9.05762 13.3264 9.05762C13.501 9.05762 13.6739 9.092 13.8352 9.15881C13.9964 9.22562 14.143 9.32354 14.2664 9.44698L20.3864 15.567C20.9064 16.087 20.9064 16.927 20.3864 17.447L14.2664 23.567C14.1431 23.6906 13.9966 23.7886 13.8353 23.8556C13.674 23.9225 13.5011 23.9569 13.3264 23.9569C13.1518 23.9569 12.9789 23.9225 12.8176 23.8556C12.6563 23.7886 12.5098 23.6906 12.3864 23.567C11.8798 23.047 11.8664 22.1936 12.3864 21.6736Z"
                        fill="#E6E6E6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start absolute left-0 top-[18054px]">
          <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[443px]">
            <div className="w-[1440px] h-[443px] absolute left-[-0.5px] top-[-0.5px] bg-[#fffef8] border border-[#f0e4c3]" />
            <div className="flex flex-col justify-start items-center absolute left-[312px] top-[198px] gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left uppercase text-[#40320f]/50">
                Our client
              </p>
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[816px] relative gap-2.5 p-5 rounded-[30px]">
                <p className="flex-grow-0 flex-shrink-0 w-[638px] text-5xl font-medium text-center text-[#272940]">
                  <span className="flex-grow-0 flex-shrink-0 w-[638px] text-5xl font-medium text-center text-[#272940]">
                    Join other companies
                  </span>
                  <br />
                  <span className="flex-grow-0 flex-shrink-0 w-[638px] text-5xl font-medium text-center text-[#272940]">
                    growing their IP with us
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[1357px]">
            <div className="w-[1440px] h-[1357px]">
              <svg
                width={1440}
                height={1357}
                viewBox="0 0 1440 1357"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-0.5px] top-[442.5px]"
                preserveAspectRatio="none">
                <path
                  d="M0 0H1440V1357H0L0 0Z"
                  fill="url(#paint0_linear_1_1242)"
                />
                <defs>
                  <lineargradient
                    id="paint0_linear_1_1242"
                    x1="627.5"
                    y1={269}
                    x2={720}
                    y2={1965}
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFFEF8" />
                    <stop
                      offset={1}
                      stop-color="#FFBF15"
                    />
                  </lineargradient>
                </defs>
              </svg>
              <div className="w-[1120px] h-[744px]">
                <div className="w-[360px] h-[362px]">
                  <div
                    className="w-[360px] h-[362px] absolute left-[159.5px] top-[889.5px] rounded-sm bg-white"
                    style={{
                      boxShadow:
                        '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                    }}
                  />
                  <div className="flex flex-col justify-center items-center w-[280px] h-[120px] absolute left-[200px] top-[1011px] gap-[14.043938636779785px]">
                    <svg
                      width={254}
                      height={190}
                      viewBox="0 0 254 190"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[252.17px] h-[189.57px] relative"
                      preserveAspectRatio="none">
                      <path
                        d="M156.922 81.9591C154.576 81.9591 152.221 81.9591 149.874 81.9591C149.444 81.9591 149.338 82.0599 149.346 82.4631C149.346 87.1156 149.346 91.7682 149.346 96.4208C149.346 98.2663 149.46 100.12 149.484 101.996C149.409 101.897 149.341 101.794 149.281 101.686C145.573 95.2551 141.87 88.8216 138.173 82.3855C138.114 82.2466 138.009 82.1298 137.874 82.0529C137.739 81.9759 137.582 81.943 137.426 81.9591C134.389 81.9591 131.358 81.9591 128.331 81.9591C127.982 81.9591 127.869 82.0211 127.869 82.3778C127.869 91.9414 127.869 101.505 127.869 111.069C127.869 111.433 127.99 111.495 128.331 111.487C130.711 111.487 133.098 111.487 135.485 111.487C135.867 111.487 135.964 111.394 135.964 111.03C135.964 108.525 135.964 106.021 135.964 103.516C135.964 100.833 135.964 98.1422 135.924 95.4592C135.924 94.4202 135.818 93.3733 135.753 92.3575C135.894 92.4505 136.003 92.5795 136.07 92.7297C139.61 98.8556 143.145 104.987 146.675 111.123C146.725 111.248 146.816 111.354 146.935 111.425C147.053 111.496 147.193 111.529 147.332 111.518C150.54 111.518 153.739 111.518 156.947 111.518C157.369 111.518 157.434 111.379 157.434 111.014C157.434 101.502 157.434 91.9879 157.434 82.4708C157.426 82.0676 157.336 81.9513 156.922 81.9591Z"
                        fill="#494949"
                      />
                      <path
                        d="M118.637 105.518C113.992 105.518 109.347 105.518 104.701 105.518C104.338 105.518 104.245 105.433 104.252 105.068C104.252 103.453 104.252 101.846 104.252 100.231C104.252 99.8353 104.33 99.7188 104.748 99.7266C108.952 99.7266 113.156 99.7266 117.368 99.7266C117.755 99.7266 117.894 99.649 117.886 99.2297C117.886 97.5527 117.886 95.8757 117.886 94.1987C117.886 93.7484 117.762 93.663 117.344 93.6708C113.14 93.6708 108.929 93.6708 104.725 93.6708C104.338 93.6708 104.245 93.5698 104.252 93.1894C104.252 91.6366 104.252 90.0839 104.252 88.5311C104.252 88.1041 104.338 88.0031 104.771 88.0031C109.269 88.0031 113.775 88.0031 118.273 88.0031C118.645 88.0031 118.722 87.9022 118.722 87.5451C118.722 85.8525 118.722 84.1523 118.722 82.4597C118.722 82.056 118.614 81.9551 118.211 81.9551H97.0599C96.6496 81.9551 96.5567 82.0793 96.5644 82.4675C96.5644 87.2242 96.5644 91.9808 96.5644 96.7375C96.5644 101.494 96.5644 106.266 96.5644 111.054C96.5644 111.419 96.6418 111.528 97.0134 111.52H118.692C119.032 111.52 119.172 111.466 119.172 111.077C119.172 109.385 119.172 107.692 119.172 105.992C119.187 105.581 119.048 105.518 118.637 105.518Z"
                        fill="#494949"
                      />
                      <path
                        d="M206.995 97.3258C206.44 97.1287 205.87 96.9709 205.269 96.7817L205.762 96.6397C207.066 96.2902 208.244 95.5616 209.153 94.542C209.869 93.6595 210.359 92.6079 210.577 91.4826C210.795 90.3574 210.734 89.1943 210.401 88.099C209.746 85.394 207.897 83.7694 205.43 82.8546C202.619 81.8655 199.595 81.6882 196.691 82.342C194.498 82.7209 192.49 83.8355 190.985 85.5103C189.479 87.1852 188.561 89.3249 188.375 91.5925C188.375 91.9474 188.452 91.9947 188.752 91.9947H195.643C195.92 91.9947 196.028 91.9395 196.051 91.632C196.097 90.8867 196.285 90.1579 196.606 89.4869C196.846 89.0522 197.174 88.6754 197.569 88.3821C197.964 88.0888 198.415 87.8858 198.893 87.7871C199.372 87.6883 199.865 87.696 200.34 87.8097C200.815 87.9234 201.261 88.1404 201.646 88.4459C201.945 88.7022 202.184 89.0227 202.348 89.3844C202.713 90.2156 202.758 91.1579 202.472 92.0212C202.186 92.8846 201.591 93.605 200.806 94.0373C199.829 94.5218 198.755 94.7649 197.669 94.747C197.353 94.747 197.261 94.8495 197.269 95.1729C197.269 96.6003 197.269 98.0198 197.269 99.4472C197.269 99.81 197.392 99.8809 197.716 99.8809C198.912 99.8281 200.105 100.038 201.215 100.496C201.774 100.732 202.262 101.115 202.63 101.606C202.998 102.097 203.233 102.679 203.311 103.292C203.389 103.906 203.308 104.53 203.075 105.101C202.842 105.672 202.466 106.17 201.985 106.545C201.302 107.058 200.495 107.368 199.651 107.444C198.807 107.519 197.959 107.355 197.199 106.971C196.536 106.637 195.963 106.142 195.53 105.528C195.097 104.915 194.818 104.203 194.718 103.453C194.648 103.138 194.564 103.02 194.232 103.02C191.951 103.02 189.67 103.02 187.388 103.02C187.018 103.02 186.972 103.154 187.011 103.485C187.419 107.428 189.23 110.362 192.814 111.892C194.834 112.772 197.003 113.237 199.199 113.259C201.394 113.28 203.572 112.859 205.608 112.018C208.953 110.701 211.003 108.209 211.311 104.463C211.588 101.048 210.294 98.5166 206.995 97.3258Z"
                        fill="#494949"
                      />
                      <path
                        d="M87.3351 81.9551C83.1517 81.9551 78.9683 81.9551 74.7848 81.9551C70.6014 81.9551 66.448 81.9551 62.2797 81.9551C61.8884 81.9551 61.7755 82.0559 61.7831 82.4671C61.7831 84.1583 61.7831 85.8495 61.7831 87.5407C61.7831 87.9131 61.8734 87.9984 62.227 87.9906C64.9884 87.9906 67.7497 87.9906 70.5036 87.9906C70.94 87.9906 71.0754 88.0682 71.0679 88.557C71.0679 96.0277 71.0679 103.498 71.0679 110.969C71.0679 111.388 71.1431 111.528 71.5795 111.52C73.7089 111.52 75.8382 111.52 77.9751 111.52C78.4566 111.52 78.562 111.396 78.562 110.907C78.562 103.436 78.562 95.9656 78.562 88.4949C78.562 88.0837 78.6673 87.9906 79.0586 87.9906C81.835 87.9906 84.6114 87.9906 87.3953 87.9906C87.7415 87.9906 87.8694 87.9363 87.8694 87.5329C87.8393 85.8366 87.8393 84.1428 87.8694 82.4516C87.8769 82.0327 87.749 81.9551 87.3351 81.9551Z"
                        fill="#494949"
                      />
                      <path
                        d="M180.019 82.4167C180.019 82.0513 179.938 81.9424 179.551 81.958C178.583 81.958 177.624 81.958 176.656 81.958C174.772 81.9162 172.907 82.3249 171.228 83.1476C168.38 84.5705 165.654 86.2033 162.856 87.704C162.622 87.8362 162.662 88.015 162.662 88.2094V94.4297C162.662 94.5152 162.606 94.6241 162.759 94.7174L171.994 90.0522V90.4798C171.994 97.3118 171.994 104.146 171.994 110.983C171.994 111.388 172.066 111.528 172.534 111.52C174.849 111.52 177.172 111.52 179.487 111.52C179.93 111.52 180.043 111.427 180.043 110.991C180.043 104.864 180.043 98.7321 180.043 92.5947C180.011 89.2046 180.003 85.8068 180.019 82.4167Z"
                        fill="#494949"
                      />
                      <path
                        d="M58.1697 100.924C55.6804 98.6999 53.1831 96.4898 50.7017 94.2586C50.4488 94.027 50.3461 94.1463 50.1722 94.3007C47.7224 96.4827 45.2726 98.6508 42.8307 100.833C42.7517 100.896 42.6252 100.938 42.6568 101.085H58.304C58.225 100.994 58.2013 100.952 58.1697 100.924Z"
                        fill="#494949"
                      />
                      <path
                        d="M50.6745 104.687C50.4068 104.455 50.3044 104.596 50.1312 104.751C47.7009 106.932 45.2627 109.112 42.8166 111.289C42.7536 111.352 42.604 111.394 42.667 111.521H58.304C55.7057 109.199 53.1783 106.953 50.6745 104.687Z"
                        fill="#494949"
                      />
                      <path
                        d="M58.1749 88.6855C55.6927 86.4859 53.2132 84.284 50.7363 82.0796C50.4653 81.8394 50.3536 81.9949 50.1862 82.1432L42.8832 88.6219C42.7875 88.7067 42.6121 88.7632 42.66 88.9116H58.3025C58.308 88.867 58.2989 88.822 58.2763 88.7819C58.2536 88.7418 58.2184 88.7083 58.1749 88.6855V88.6855Z"
                        fill="#494949"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-[360px] h-[362px]">
                  <div
                    className="w-[360px] h-[362px] absolute left-[159.5px] top-[507.5px] rounded-sm bg-white"
                    style={{
                      boxShadow:
                        '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                    }}
                  />
                  <div className="flex flex-col justify-center items-center w-[280px] h-[120px] absolute left-[200px] top-[629px] gap-[14.043938636779785px]">
                    <svg
                      width={254}
                      height={190}
                      viewBox="0 0 254 190"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[252.17px] h-[189.57px] relative"
                      preserveAspectRatio="none">
                      <path
                        d="M156.922 81.9591C154.576 81.9591 152.221 81.9591 149.874 81.9591C149.444 81.9591 149.338 82.0599 149.346 82.4631C149.346 87.1156 149.346 91.7682 149.346 96.4208C149.346 98.2663 149.46 100.12 149.484 101.996C149.409 101.897 149.341 101.794 149.281 101.686C145.573 95.2551 141.87 88.8216 138.173 82.3855C138.114 82.2466 138.009 82.1298 137.874 82.0529C137.739 81.9759 137.582 81.943 137.426 81.9591C134.389 81.9591 131.358 81.9591 128.331 81.9591C127.982 81.9591 127.869 82.0211 127.869 82.3778C127.869 91.9414 127.869 101.505 127.869 111.069C127.869 111.433 127.99 111.495 128.331 111.487C130.711 111.487 133.098 111.487 135.485 111.487C135.867 111.487 135.964 111.394 135.964 111.03C135.964 108.525 135.964 106.021 135.964 103.516C135.964 100.833 135.964 98.1422 135.924 95.4592C135.924 94.4202 135.818 93.3733 135.753 92.3575C135.894 92.4505 136.003 92.5795 136.07 92.7297C139.61 98.8556 143.145 104.987 146.675 111.123C146.725 111.248 146.816 111.354 146.935 111.425C147.053 111.496 147.193 111.529 147.332 111.518C150.54 111.518 153.739 111.518 156.947 111.518C157.369 111.518 157.434 111.379 157.434 111.014C157.434 101.502 157.434 91.9879 157.434 82.4708C157.426 82.0676 157.336 81.9513 156.922 81.9591Z"
                        fill="#494949"
                      />
                      <path
                        d="M118.637 105.518C113.992 105.518 109.347 105.518 104.701 105.518C104.338 105.518 104.245 105.433 104.252 105.068C104.252 103.453 104.252 101.846 104.252 100.231C104.252 99.8353 104.33 99.7188 104.748 99.7266C108.952 99.7266 113.156 99.7266 117.368 99.7266C117.755 99.7266 117.894 99.649 117.886 99.2297C117.886 97.5527 117.886 95.8757 117.886 94.1987C117.886 93.7484 117.762 93.663 117.344 93.6708C113.14 93.6708 108.929 93.6708 104.725 93.6708C104.338 93.6708 104.245 93.5698 104.252 93.1894C104.252 91.6366 104.252 90.0839 104.252 88.5311C104.252 88.1041 104.338 88.0031 104.771 88.0031C109.269 88.0031 113.775 88.0031 118.273 88.0031C118.645 88.0031 118.722 87.9022 118.722 87.5451C118.722 85.8525 118.722 84.1523 118.722 82.4597C118.722 82.056 118.614 81.9551 118.211 81.9551H97.0599C96.6496 81.9551 96.5567 82.0793 96.5644 82.4675C96.5644 87.2242 96.5644 91.9808 96.5644 96.7375C96.5644 101.494 96.5644 106.266 96.5644 111.054C96.5644 111.419 96.6418 111.528 97.0134 111.52H118.692C119.032 111.52 119.172 111.466 119.172 111.077C119.172 109.385 119.172 107.692 119.172 105.992C119.187 105.581 119.048 105.518 118.637 105.518Z"
                        fill="#494949"
                      />
                      <path
                        d="M206.995 97.3258C206.44 97.1287 205.87 96.9709 205.269 96.7817L205.762 96.6397C207.066 96.2902 208.244 95.5616 209.153 94.542C209.869 93.6595 210.359 92.6079 210.577 91.4826C210.795 90.3574 210.734 89.1943 210.401 88.099C209.746 85.394 207.897 83.7694 205.43 82.8546C202.619 81.8655 199.595 81.6882 196.691 82.342C194.498 82.7209 192.49 83.8355 190.985 85.5103C189.479 87.1852 188.561 89.3249 188.375 91.5925C188.375 91.9474 188.452 91.9947 188.752 91.9947H195.643C195.92 91.9947 196.028 91.9395 196.051 91.632C196.097 90.8867 196.285 90.1579 196.606 89.4869C196.846 89.0522 197.174 88.6754 197.569 88.3821C197.964 88.0888 198.415 87.8858 198.893 87.7871C199.372 87.6883 199.865 87.696 200.34 87.8097C200.815 87.9234 201.261 88.1404 201.646 88.4459C201.945 88.7022 202.184 89.0227 202.348 89.3844C202.713 90.2156 202.758 91.1579 202.472 92.0212C202.186 92.8846 201.591 93.605 200.806 94.0373C199.829 94.5218 198.755 94.7649 197.669 94.747C197.353 94.747 197.261 94.8495 197.269 95.1729C197.269 96.6003 197.269 98.0198 197.269 99.4472C197.269 99.81 197.392 99.8809 197.716 99.8809C198.912 99.8281 200.105 100.038 201.215 100.496C201.774 100.732 202.262 101.115 202.63 101.606C202.998 102.097 203.233 102.679 203.311 103.292C203.389 103.906 203.308 104.53 203.075 105.101C202.842 105.672 202.466 106.17 201.985 106.545C201.302 107.058 200.495 107.368 199.651 107.444C198.807 107.519 197.959 107.355 197.199 106.971C196.536 106.637 195.963 106.142 195.53 105.528C195.097 104.915 194.818 104.203 194.718 103.453C194.648 103.138 194.564 103.02 194.232 103.02C191.951 103.02 189.67 103.02 187.388 103.02C187.018 103.02 186.972 103.154 187.011 103.485C187.419 107.428 189.23 110.362 192.814 111.892C194.834 112.772 197.003 113.237 199.199 113.259C201.394 113.28 203.572 112.859 205.608 112.018C208.953 110.701 211.003 108.209 211.311 104.463C211.588 101.048 210.294 98.5166 206.995 97.3258Z"
                        fill="#494949"
                      />
                      <path
                        d="M87.3351 81.9551C83.1517 81.9551 78.9683 81.9551 74.7848 81.9551C70.6014 81.9551 66.448 81.9551 62.2797 81.9551C61.8884 81.9551 61.7755 82.0559 61.7831 82.4671C61.7831 84.1583 61.7831 85.8495 61.7831 87.5407C61.7831 87.9131 61.8734 87.9984 62.227 87.9906C64.9884 87.9906 67.7497 87.9906 70.5036 87.9906C70.94 87.9906 71.0754 88.0682 71.0679 88.557C71.0679 96.0277 71.0679 103.498 71.0679 110.969C71.0679 111.388 71.1431 111.528 71.5795 111.52C73.7089 111.52 75.8382 111.52 77.9751 111.52C78.4566 111.52 78.562 111.396 78.562 110.907C78.562 103.436 78.562 95.9656 78.562 88.4949C78.562 88.0837 78.6673 87.9906 79.0586 87.9906C81.835 87.9906 84.6114 87.9906 87.3953 87.9906C87.7415 87.9906 87.8694 87.9363 87.8694 87.5329C87.8393 85.8366 87.8393 84.1428 87.8694 82.4516C87.8769 82.0327 87.749 81.9551 87.3351 81.9551Z"
                        fill="#494949"
                      />
                      <path
                        d="M180.019 82.4167C180.019 82.0513 179.938 81.9424 179.551 81.958C178.583 81.958 177.624 81.958 176.656 81.958C174.772 81.9162 172.907 82.3249 171.228 83.1476C168.38 84.5705 165.654 86.2033 162.856 87.704C162.622 87.8362 162.662 88.015 162.662 88.2094V94.4297C162.662 94.5152 162.606 94.6241 162.759 94.7174L171.994 90.0522V90.4798C171.994 97.3118 171.994 104.146 171.994 110.983C171.994 111.388 172.066 111.528 172.534 111.52C174.849 111.52 177.172 111.52 179.487 111.52C179.93 111.52 180.043 111.427 180.043 110.991C180.043 104.864 180.043 98.7321 180.043 92.5947C180.011 89.2046 180.003 85.8068 180.019 82.4167Z"
                        fill="#494949"
                      />
                      <path
                        d="M58.1697 100.924C55.6804 98.6999 53.1831 96.4898 50.7017 94.2586C50.4488 94.027 50.3461 94.1463 50.1722 94.3007C47.7224 96.4827 45.2726 98.6508 42.8307 100.833C42.7517 100.896 42.6252 100.938 42.6568 101.085H58.304C58.225 100.994 58.2013 100.952 58.1697 100.924Z"
                        fill="#494949"
                      />
                      <path
                        d="M50.6745 104.687C50.4068 104.455 50.3044 104.596 50.1312 104.751C47.7009 106.932 45.2627 109.112 42.8166 111.289C42.7536 111.352 42.604 111.394 42.667 111.521H58.304C55.7057 109.199 53.1783 106.953 50.6745 104.687Z"
                        fill="#494949"
                      />
                      <path
                        d="M58.1749 88.6855C55.6927 86.4859 53.2132 84.284 50.7363 82.0796C50.4653 81.8394 50.3536 81.9949 50.1862 82.1432L42.8832 88.6219C42.7875 88.7067 42.6121 88.7632 42.66 88.9116H58.3025C58.308 88.867 58.2989 88.822 58.2763 88.7819C58.2536 88.7418 58.2184 88.7083 58.1749 88.6855V88.6855Z"
                        fill="#494949"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-[360px] h-[362px]">
                  <div
                    className="w-[360px] h-[362px] absolute left-[919.5px] top-[889.5px] bg-white"
                    style={{
                      boxShadow:
                        '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                    }}
                  />
                  <div className="flex flex-col justify-center items-center w-[280px] h-[120px] absolute left-[960px] top-[1011px] gap-[14.043938636779785px]">
                    <svg
                      width={254}
                      height={78}
                      viewBox="0 0 254 78"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[253.91px] h-[76.52px] relative"
                      preserveAspectRatio="none">
                      <path
                        d="M48.3787 43.3615L46.1275 41.1084C45.8905 40.8714 45.5693 40.7383 45.2343 40.7383C44.8993 40.7383 44.578 40.8714 44.3411 41.1084L43.8908 41.559C43.654 41.7962 43.521 42.1177 43.521 42.453C43.521 42.7883 43.654 43.1098 43.8908 43.347L46.142 45.5855C46.3789 45.8225 46.7002 45.9557 47.0352 45.9557C47.3702 45.9557 47.6915 45.8225 47.9284 45.5855L48.3787 45.1349C48.6093 44.8975 48.7384 44.5794 48.7384 44.2482C48.7384 43.917 48.6093 43.5989 48.3787 43.3615V43.3615Z"
                        fill="#494949"
                      />
                      <path
                        d="M64.9675 45.9551H44.6832C44.3749 45.9593 44.0805 46.0887 43.8631 46.3155C43.6458 46.5423 43.523 46.8484 43.521 47.1681V48.2284C43.523 48.5473 43.6461 48.8526 43.8636 49.0781C44.0812 49.3036 44.3756 49.4312 44.6832 49.4333H64.9675C65.2751 49.4312 65.5695 49.3036 65.787 49.0781C66.0045 48.8526 66.1276 48.5473 66.1297 48.2284V47.1681C66.1307 47.0091 66.1014 46.8516 66.0434 46.7045C65.9855 46.5574 65.9 46.4236 65.792 46.3108C65.684 46.1981 65.5555 46.1086 65.414 46.0476C65.2725 45.9865 65.1207 45.9551 64.9675 45.9551V45.9551Z"
                        fill="#494949"
                      />
                      <path
                        d="M57.4348 41.0825V24.7156C57.4348 24.5357 57.3988 24.3575 57.329 24.1913C57.2592 24.0251 57.1568 23.8741 57.0277 23.7469C56.8987 23.6197 56.7455 23.5188 56.5769 23.45C56.4083 23.3811 56.2276 23.3457 56.0451 23.3457H55.3221C54.9584 23.3539 54.6123 23.5017 54.3573 23.7574C54.1023 24.0132 53.9585 24.3569 53.9565 24.7156V41.1063C53.9585 41.4649 54.1023 41.8086 54.3573 42.0644C54.6123 42.3202 54.9584 42.4679 55.3221 42.4761H56.021C56.207 42.4772 56.3913 42.4418 56.5633 42.3722C56.7353 42.3025 56.8916 42.1999 57.0231 42.0703C57.1546 41.9407 57.2587 41.7866 57.3293 41.6171C57.4 41.4475 57.4358 41.2658 57.4348 41.0825V41.0825Z"
                        fill="#494949"
                      />
                      <path
                        d="M52.0935 41.9296L46.6135 29.3812C46.5417 29.2137 46.4395 29.0629 46.3129 28.9377C46.1863 28.8124 46.0377 28.715 45.8757 28.6512C45.7138 28.5873 45.5415 28.5582 45.369 28.5656C45.1964 28.5729 45.0269 28.6165 44.8702 28.6939L44.2866 28.9931C44.1296 29.0697 43.9883 29.1787 43.8709 29.3138C43.7534 29.4488 43.6622 29.6073 43.6023 29.7801C43.5424 29.9529 43.5152 30.1366 43.522 30.3207C43.5289 30.5047 43.5698 30.6855 43.6424 30.8527L49.1224 43.4092C49.2704 43.7446 49.5366 44.0041 49.8631 44.1313C50.1895 44.2584 50.5498 44.243 50.8657 44.0884L51.4569 43.7973C51.7732 43.6394 52.0179 43.354 52.1372 43.0039C52.2566 42.6537 52.2409 42.2674 52.0935 41.9296Z"
                        fill="#494949"
                      />
                      <path
                        d="M60.5802 45.1752L64.2125 38.1884C64.3915 37.8351 64.4385 37.4176 64.3436 37.026C64.2486 36.6344 64.0193 36.3 63.7049 36.0951L63.126 35.7241C62.8092 35.5224 62.4337 35.4687 62.0814 35.5746C61.7292 35.6806 61.429 35.9376 61.2464 36.2894L57.6141 43.2761C57.4352 43.6294 57.3881 44.0469 57.4831 44.4386C57.578 44.8302 57.8074 45.1645 58.1217 45.3695L58.7006 45.7493C58.8574 45.8512 59.0309 45.9172 59.2109 45.9434C59.3908 45.9697 59.5737 45.9556 59.7488 45.9022C59.9238 45.8487 60.0875 45.7569 60.2303 45.632C60.3731 45.5072 60.492 45.3519 60.5802 45.1752V45.1752Z"
                        fill="#494949"
                      />
                      <path
                        d="M86.9994 23.3457C87.3434 23.3457 87.6796 23.4855 87.9656 23.7475C88.2516 24.0094 88.4745 24.3817 88.6061 24.8173C88.7378 25.2529 88.7722 25.7322 88.7051 26.1946C88.638 26.657 88.4724 27.0818 88.2291 27.4151C87.9859 27.7485 87.676 27.9756 87.3387 28.0675C87.0013 28.1595 86.6516 28.1123 86.3338 27.9319C86.0161 27.7515 85.7444 27.4459 85.5533 27.0539C85.3622 26.6619 85.2603 26.201 85.2603 25.7295C85.2603 25.0973 85.4435 24.491 85.7696 24.0439C86.0958 23.5969 86.5381 23.3457 86.9994 23.3457V23.3457ZM85.7936 49.4327V32.2374H88.211V49.3929L85.7936 49.4327Z"
                        fill="#494949"
                      />
                      <path
                        d="M95.7802 49.4167H92.2163V32.5285H95.704V34.9534C96.2678 34.0434 97.0885 33.292 98.0785 32.7795C99.0685 32.267 100.191 32.0126 101.325 32.0435C105.684 32.0435 107.868 34.9534 107.868 38.7159V49.4323H104.296V39.2634C104.296 36.9168 103.23 35.016 100.064 35.016C97.2446 35.016 95.8309 37.0889 95.8309 39.6545V49.3932L95.7802 49.4167Z"
                        fill="#494949"
                      />
                      <path
                        d="M118.34 49.4323H114.911L107.87 32.041H111.692L116.638 45.4611L121.616 32.041H125.261L118.34 49.4323Z"
                        fill="#494949"
                      />
                      <path
                        d="M142.535 44.2584C141.991 45.8042 140.9 47.1466 139.43 48.0801C137.959 49.0136 136.191 49.4868 134.394 49.4273C129.529 49.4273 125.261 46.229 125.261 40.6811C125.261 35.5501 129.378 32.041 133.932 32.041C139.51 32.041 142.653 35.5122 142.653 40.6129C142.652 40.9551 142.627 41.2969 142.577 41.6361H128.916C128.9 42.2904 129.031 42.9408 129.3 43.5485C129.569 44.1562 129.971 44.7087 130.483 45.1728C130.994 45.637 131.604 46.0034 132.276 46.2499C132.948 46.4965 133.668 46.6183 134.394 46.6079C135.534 46.6704 136.664 46.3768 137.593 45.7764C138.521 45.176 139.193 44.3054 139.494 43.311L142.535 44.2584ZM138.956 39.0592C138.88 36.7097 137.175 34.8756 133.974 34.8756C132.709 34.8585 131.487 35.2854 130.566 36.066C129.644 36.8467 129.094 37.92 129.034 39.0592H138.956Z"
                        fill="#494949"
                      />
                      <path
                        d="M147.123 43.658C147.32 45.3554 148.58 46.6891 150.766 46.6891C152.492 46.6891 153.44 45.6661 153.44 44.5143C153.44 43.4912 152.711 42.7107 151.414 42.4L148.74 41.8014C146.278 41.2482 144.821 39.528 144.821 37.2016C144.821 34.4205 147.342 32.041 150.416 32.041C154.736 32.041 156.077 34.9585 156.397 36.4286L153.738 37.5123C153.631 36.7085 153.233 35.9776 152.625 35.4691C152.017 34.9606 151.245 34.7129 150.467 34.7766C148.886 34.7766 147.844 35.8376 147.844 36.9591C147.844 37.9442 148.427 38.649 149.637 38.9293L152.194 39.4977C155.035 40.157 156.565 41.9529 156.565 44.3703C156.565 46.7876 154.707 49.4323 150.802 49.4323C146.482 49.4323 144.653 46.5451 144.391 44.6658L147.123 43.658Z"
                        fill="#494949"
                      />
                      <path
                        d="M166.716 32.2149H170.478V35.222H166.716V44.0777C166.716 45.6562 167.359 46.4455 169.128 46.4455C169.579 46.4411 170.028 46.3935 170.47 46.3034V49.1448C169.729 49.3585 168.959 49.4544 168.187 49.4289C165.237 49.4289 163.364 47.6609 163.364 44.567V35.222H160.043V32.2228H160.952C161.314 32.2646 161.68 32.2254 162.025 32.1081C162.369 31.9908 162.681 31.7984 162.939 31.5455C163.197 31.2926 163.393 30.9857 163.512 30.6478C163.632 30.3099 163.671 29.9498 163.629 29.5946V26.8242H166.724L166.716 32.2149Z"
                        fill="#494949"
                      />
                      <path
                        d="M172.217 23.3457C172.561 23.3457 172.897 23.4855 173.183 23.7475C173.469 24.0094 173.692 24.3817 173.824 24.8173C173.956 25.2529 173.99 25.7322 173.923 26.1946C173.856 26.657 173.69 27.0818 173.447 27.4151C173.204 27.7485 172.894 27.9756 172.556 28.0675C172.219 28.1595 171.869 28.1123 171.552 27.9319C171.234 27.7515 170.962 27.4459 170.771 27.0539C170.58 26.6619 170.478 26.201 170.478 25.7295C170.478 25.0973 170.661 24.491 170.987 24.0439C171.314 23.5969 171.756 23.3457 172.217 23.3457V23.3457ZM171.017 49.4327V32.2374H173.435V49.3929L171.017 49.4327Z"
                        fill="#494949"
                      />
                      <path
                        d="M179.173 50.6761V25.0859H182.598V36.106C183.417 34.5789 185.506 33.2172 188.438 33.2172C193.82 33.2172 196.565 37.1529 196.565 42.1198C196.565 47.1812 193.575 51.1641 188.324 51.1641C187.181 51.2233 186.043 50.9819 185.033 50.4659C184.023 49.9499 183.178 49.179 182.589 48.236V50.7155L179.173 50.6761ZM187.808 36.1218C184.76 36.1218 182.54 38.4202 182.54 42.0962C182.54 45.7722 184.744 48.1809 187.808 48.1809C190.871 48.1809 193.034 45.7722 193.034 42.0962C193.034 38.4202 191.019 36.1218 187.808 36.1218Z"
                        fill="#494949"
                      />
                      <path
                        d="M198.304 51.1729V25.0859H201.782V51.1729H198.304Z"
                        fill="#494949"
                      />
                      <path
                        d="M222.534 44.2584C221.99 45.8042 220.9 47.1466 219.43 48.0801C217.961 49.0136 216.193 49.4868 214.397 49.4273C209.535 49.4273 205.26 46.229 205.26 40.6811C205.26 35.5501 209.383 32.041 213.935 32.041C219.511 32.041 222.651 35.5122 222.651 40.6129C222.653 40.9554 222.625 41.2976 222.567 41.6361H208.922C208.906 42.2904 209.036 42.9408 209.305 43.5485C209.574 44.1562 209.976 44.7087 210.488 45.1728C210.999 45.637 211.608 46.0034 212.28 46.2499C212.952 46.4965 213.672 46.6183 214.397 46.6079C215.536 46.6715 216.664 46.3782 217.592 45.7774C218.519 45.1767 219.188 44.3055 219.486 43.311L222.534 44.2584ZM218.957 39.0592C218.873 36.7097 217.176 34.8756 213.977 34.8756C212.713 34.8585 211.492 35.2854 210.57 36.066C209.649 36.8467 209.1 37.92 209.039 39.0592H218.957Z"
                        fill="#494949"
                      />
                      <path
                        d="M56.5726 14.6484C51.9287 14.6469 47.3887 15.9716 43.5267 18.455C39.6646 20.9383 36.6541 24.4688 34.8759 28.5999C33.0977 32.7309 32.6316 37.277 33.5366 41.6632C34.4416 46.0493 36.6771 50.0785 39.9602 53.2412C43.2434 56.4038 47.4268 58.5579 51.9814 59.4308C56.5359 60.3038 61.257 59.8565 65.5476 58.1456C69.8381 56.4346 73.5054 53.5368 76.0856 49.8186C78.6658 46.1005 80.0429 41.729 80.0429 37.2571C80.0345 31.2647 77.5593 25.52 73.1598 21.282C68.7604 17.044 62.7955 14.6586 56.5726 14.6484ZM76.6003 37.2571C76.5972 41.0764 75.4179 44.809 73.2116 47.9828C71.0054 51.1566 67.8712 53.6291 64.2056 55.0875C60.54 56.5459 56.5076 56.9247 52.6184 56.1761C48.7292 55.4275 45.1579 53.585 42.3562 50.8817C39.5545 48.1784 37.6482 44.7357 36.8785 40.9891C36.1088 37.2424 36.5102 33.3601 38.032 29.8332C39.5538 26.3062 42.1275 23.2931 45.4278 21.1748C48.728 19.0566 52.6065 17.9284 56.5726 17.9329C61.8854 17.9511 66.9745 19.9941 70.7275 23.6153C74.4805 27.2364 76.5919 32.1411 76.6003 37.2571V37.2571Z"
                        fill="#494949"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-[360px] h-[362px]">
                  <div
                    className="w-[360px] h-[362px] absolute left-[919.5px] top-[507.5px] bg-white"
                    style={{
                      boxShadow:
                        '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                    }}
                  />
                  <div className="flex flex-col justify-center items-center w-[280px] h-[120px] absolute left-[960px] top-[629px] gap-[14.043938636779785px]">
                    <svg
                      width={254}
                      height={78}
                      viewBox="0 0 254 78"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[253.91px] h-[76.52px] relative"
                      preserveAspectRatio="none">
                      <path
                        d="M48.3787 43.3615L46.1275 41.1084C45.8905 40.8714 45.5693 40.7383 45.2343 40.7383C44.8993 40.7383 44.578 40.8714 44.3411 41.1084L43.8908 41.559C43.654 41.7962 43.521 42.1177 43.521 42.453C43.521 42.7883 43.654 43.1098 43.8908 43.347L46.142 45.5855C46.3789 45.8225 46.7002 45.9557 47.0352 45.9557C47.3702 45.9557 47.6915 45.8225 47.9284 45.5855L48.3787 45.1349C48.6093 44.8975 48.7384 44.5794 48.7384 44.2482C48.7384 43.917 48.6093 43.5989 48.3787 43.3615V43.3615Z"
                        fill="#494949"
                      />
                      <path
                        d="M64.9675 45.9531H44.6832C44.3749 45.9573 44.0805 46.0867 43.8631 46.3135C43.6458 46.5403 43.523 46.8464 43.521 47.1661V48.2264C43.523 48.5454 43.6461 48.8506 43.8636 49.0761C44.0812 49.3017 44.3756 49.4293 44.6832 49.4314H64.9675C65.2751 49.4293 65.5695 49.3017 65.787 49.0761C66.0045 48.8506 66.1276 48.5454 66.1297 48.2264V47.1661C66.1307 47.0072 66.1014 46.8496 66.0434 46.7025C65.9855 46.5554 65.9 46.4216 65.792 46.3089C65.684 46.1961 65.5555 46.1067 65.414 46.0456C65.2725 45.9846 65.1207 45.9531 64.9675 45.9531V45.9531Z"
                        fill="#494949"
                      />
                      <path
                        d="M57.4348 41.0825V24.7156C57.4348 24.5357 57.3988 24.3575 57.329 24.1913C57.2592 24.0251 57.1568 23.8741 57.0277 23.7469C56.8987 23.6197 56.7455 23.5188 56.5769 23.45C56.4083 23.3811 56.2276 23.3457 56.0451 23.3457H55.3221C54.9584 23.3539 54.6123 23.5017 54.3573 23.7574C54.1023 24.0132 53.9585 24.3569 53.9565 24.7156V41.1063C53.9585 41.4649 54.1023 41.8086 54.3573 42.0644C54.6123 42.3202 54.9584 42.4679 55.3221 42.4761H56.021C56.207 42.4772 56.3913 42.4418 56.5633 42.3722C56.7353 42.3025 56.8916 42.1999 57.0231 42.0703C57.1546 41.9407 57.2587 41.7866 57.3293 41.6171C57.4 41.4475 57.4358 41.2658 57.4348 41.0825V41.0825Z"
                        fill="#494949"
                      />
                      <path
                        d="M52.0935 41.9296L46.6135 29.3812C46.5417 29.2137 46.4395 29.0629 46.3129 28.9377C46.1863 28.8124 46.0377 28.715 45.8757 28.6512C45.7138 28.5873 45.5415 28.5582 45.369 28.5656C45.1964 28.5729 45.0269 28.6165 44.8702 28.6939L44.2866 28.9931C44.1296 29.0697 43.9883 29.1787 43.8709 29.3138C43.7534 29.4488 43.6622 29.6073 43.6023 29.7801C43.5424 29.9529 43.5152 30.1366 43.522 30.3207C43.5289 30.5047 43.5698 30.6855 43.6424 30.8527L49.1224 43.4092C49.2704 43.7446 49.5366 44.0041 49.8631 44.1313C50.1895 44.2584 50.5498 44.243 50.8657 44.0884L51.4569 43.7973C51.7732 43.6394 52.0179 43.354 52.1372 43.0039C52.2566 42.6537 52.2409 42.2674 52.0935 41.9296Z"
                        fill="#494949"
                      />
                      <path
                        d="M60.5802 45.1752L64.2125 38.1884C64.3915 37.8351 64.4385 37.4176 64.3436 37.026C64.2486 36.6344 64.0193 36.3 63.7049 36.0951L63.126 35.7241C62.8092 35.5224 62.4337 35.4687 62.0814 35.5746C61.7292 35.6806 61.429 35.9376 61.2464 36.2894L57.6141 43.2761C57.4352 43.6294 57.3881 44.0469 57.4831 44.4386C57.578 44.8302 57.8074 45.1645 58.1217 45.3695L58.7006 45.7493C58.8574 45.8512 59.0309 45.9172 59.2109 45.9434C59.3908 45.9697 59.5737 45.9556 59.7488 45.9022C59.9238 45.8487 60.0875 45.7569 60.2303 45.632C60.3731 45.5072 60.492 45.3519 60.5802 45.1752V45.1752Z"
                        fill="#494949"
                      />
                      <path
                        d="M86.9994 23.3457C87.3434 23.3457 87.6796 23.4855 87.9656 23.7475C88.2516 24.0094 88.4745 24.3817 88.6061 24.8173C88.7378 25.2529 88.7722 25.7322 88.7051 26.1946C88.638 26.657 88.4724 27.0818 88.2291 27.4151C87.9859 27.7485 87.676 27.9756 87.3387 28.0675C87.0013 28.1595 86.6516 28.1123 86.3338 27.9319C86.0161 27.7515 85.7444 27.4459 85.5533 27.0539C85.3622 26.6619 85.2603 26.201 85.2603 25.7295C85.2603 25.0973 85.4435 24.491 85.7696 24.0439C86.0958 23.5969 86.5381 23.3457 86.9994 23.3457V23.3457ZM85.7936 49.4327V32.2374H88.211V49.3929L85.7936 49.4327Z"
                        fill="#494949"
                      />
                      <path
                        d="M95.7802 49.4167H92.2163V32.5285H95.704V34.9534C96.2678 34.0434 97.0885 33.292 98.0785 32.7795C99.0685 32.267 100.191 32.0126 101.325 32.0435C105.684 32.0435 107.868 34.9534 107.868 38.7159V49.4323H104.296V39.2634C104.296 36.9168 103.23 35.016 100.064 35.016C97.2446 35.016 95.8309 37.0889 95.8309 39.6545V49.3932L95.7802 49.4167Z"
                        fill="#494949"
                      />
                      <path
                        d="M118.34 49.4323H114.911L107.87 32.041H111.692L116.638 45.4611L121.616 32.041H125.261L118.34 49.4323Z"
                        fill="#494949"
                      />
                      <path
                        d="M142.535 44.2584C141.991 45.8042 140.9 47.1466 139.43 48.0801C137.959 49.0136 136.191 49.4868 134.394 49.4273C129.529 49.4273 125.261 46.229 125.261 40.6811C125.261 35.5501 129.378 32.041 133.932 32.041C139.51 32.041 142.653 35.5122 142.653 40.6129C142.652 40.9551 142.627 41.2969 142.577 41.6361H128.916C128.9 42.2904 129.031 42.9408 129.3 43.5485C129.569 44.1562 129.971 44.7087 130.483 45.1728C130.994 45.637 131.604 46.0034 132.276 46.2499C132.948 46.4965 133.668 46.6183 134.394 46.6079C135.534 46.6704 136.664 46.3768 137.593 45.7764C138.521 45.176 139.193 44.3054 139.494 43.311L142.535 44.2584ZM138.956 39.0592C138.88 36.7097 137.175 34.8756 133.974 34.8756C132.709 34.8585 131.487 35.2854 130.566 36.066C129.644 36.8467 129.094 37.92 129.034 39.0592H138.956Z"
                        fill="#494949"
                      />
                      <path
                        d="M147.123 43.658C147.32 45.3554 148.58 46.6891 150.766 46.6891C152.492 46.6891 153.44 45.6661 153.44 44.5143C153.44 43.4912 152.711 42.7107 151.414 42.4L148.74 41.8014C146.278 41.2482 144.821 39.528 144.821 37.2016C144.821 34.4205 147.342 32.041 150.416 32.041C154.736 32.041 156.077 34.9585 156.397 36.4286L153.738 37.5123C153.631 36.7085 153.233 35.9776 152.625 35.4691C152.017 34.9606 151.245 34.7129 150.467 34.7766C148.886 34.7766 147.844 35.8376 147.844 36.9591C147.844 37.9442 148.427 38.649 149.637 38.9293L152.194 39.4977C155.035 40.157 156.565 41.9529 156.565 44.3703C156.565 46.7876 154.707 49.4323 150.802 49.4323C146.482 49.4323 144.653 46.5451 144.391 44.6658L147.123 43.658Z"
                        fill="#494949"
                      />
                      <path
                        d="M166.716 32.2149H170.478V35.222H166.716V44.0777C166.716 45.6562 167.359 46.4455 169.128 46.4455C169.579 46.4411 170.028 46.3935 170.47 46.3034V49.1448C169.729 49.3585 168.959 49.4544 168.187 49.4289C165.237 49.4289 163.364 47.6609 163.364 44.567V35.222H160.043V32.2228H160.952C161.314 32.2646 161.68 32.2254 162.025 32.1081C162.369 31.9908 162.681 31.7984 162.939 31.5455C163.197 31.2926 163.393 30.9857 163.512 30.6478C163.632 30.3099 163.671 29.9498 163.629 29.5946V26.8242H166.724L166.716 32.2149Z"
                        fill="#494949"
                      />
                      <path
                        d="M172.217 23.3457C172.561 23.3457 172.897 23.4855 173.183 23.7475C173.469 24.0094 173.692 24.3817 173.824 24.8173C173.956 25.2529 173.99 25.7322 173.923 26.1946C173.856 26.657 173.69 27.0818 173.447 27.4151C173.204 27.7485 172.894 27.9756 172.556 28.0675C172.219 28.1595 171.869 28.1123 171.552 27.9319C171.234 27.7515 170.962 27.4459 170.771 27.0539C170.58 26.6619 170.478 26.201 170.478 25.7295C170.478 25.0973 170.661 24.491 170.987 24.0439C171.314 23.5969 171.756 23.3457 172.217 23.3457V23.3457ZM171.017 49.4327V32.2374H173.435V49.3929L171.017 49.4327Z"
                        fill="#494949"
                      />
                      <path
                        d="M179.173 50.6761V25.0859H182.598V36.106C183.417 34.5789 185.506 33.2172 188.438 33.2172C193.82 33.2172 196.565 37.1529 196.565 42.1198C196.565 47.1812 193.575 51.1641 188.324 51.1641C187.181 51.2233 186.043 50.9819 185.033 50.4659C184.023 49.9499 183.178 49.179 182.589 48.236V50.7155L179.173 50.6761ZM187.808 36.1218C184.76 36.1218 182.54 38.4202 182.54 42.0962C182.54 45.7722 184.744 48.1809 187.808 48.1809C190.871 48.1809 193.034 45.7722 193.034 42.0962C193.034 38.4202 191.019 36.1218 187.808 36.1218Z"
                        fill="#494949"
                      />
                      <path
                        d="M198.304 51.1729V25.0859H201.782V51.1729H198.304Z"
                        fill="#494949"
                      />
                      <path
                        d="M222.534 44.2584C221.99 45.8042 220.9 47.1466 219.43 48.0801C217.961 49.0136 216.193 49.4868 214.397 49.4273C209.535 49.4273 205.26 46.229 205.26 40.6811C205.26 35.5501 209.383 32.041 213.935 32.041C219.511 32.041 222.651 35.5122 222.651 40.6129C222.653 40.9554 222.625 41.2976 222.567 41.6361H208.922C208.906 42.2904 209.036 42.9408 209.305 43.5485C209.574 44.1562 209.976 44.7087 210.488 45.1728C210.999 45.637 211.608 46.0034 212.28 46.2499C212.952 46.4965 213.672 46.6183 214.397 46.6079C215.536 46.6715 216.664 46.3782 217.592 45.7774C218.519 45.1767 219.188 44.3055 219.486 43.311L222.534 44.2584ZM218.957 39.0592C218.873 36.7097 217.176 34.8756 213.977 34.8756C212.713 34.8585 211.492 35.2854 210.57 36.066C209.649 36.8467 209.1 37.92 209.039 39.0592H218.957Z"
                        fill="#494949"
                      />
                      <path
                        d="M56.5726 14.6484C51.9287 14.6469 47.3887 15.9716 43.5267 18.455C39.6646 20.9383 36.6541 24.4688 34.8759 28.5999C33.0977 32.7309 32.6316 37.277 33.5366 41.6632C34.4416 46.0493 36.6771 50.0785 39.9602 53.2412C43.2434 56.4038 47.4268 58.5579 51.9814 59.4308C56.5359 60.3038 61.257 59.8565 65.5476 58.1456C69.8381 56.4346 73.5054 53.5368 76.0856 49.8186C78.6658 46.1005 80.0429 41.729 80.0429 37.2571C80.0345 31.2647 77.5593 25.52 73.1598 21.282C68.7604 17.044 62.7955 14.6586 56.5726 14.6484ZM76.6003 37.2571C76.5972 41.0764 75.4179 44.809 73.2116 47.9828C71.0054 51.1566 67.8712 53.6291 64.2056 55.0875C60.54 56.5459 56.5076 56.9247 52.6184 56.1761C48.7292 55.4275 45.1579 53.585 42.3562 50.8817C39.5545 48.1784 37.6482 44.7357 36.8785 40.9891C36.1088 37.2424 36.5102 33.3601 38.032 29.8332C39.5538 26.3062 42.1275 23.2931 45.4278 21.1748C48.728 19.0566 52.6065 17.9284 56.5726 17.9329C61.8854 17.9511 66.9745 19.9941 70.7275 23.6153C74.4805 27.2364 76.5919 32.1411 76.6003 37.2571V37.2571Z"
                        fill="#494949"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-[360px] h-[362px]">
                  <div
                    className="w-[360px] h-[362px] absolute left-[539.5px] top-[889.5px] bg-white"
                    style={{
                      boxShadow:
                        '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                    }}
                  />
                  <div className="flex flex-col justify-center items-center w-[280px] h-[120px] absolute left-[580px] top-[1011px] gap-[14.043938636779785px] p-[14.043938636779785px]">
                    <Image
                      src="/image-1-2.png"
                      className="flex-grow-0 flex-shrink-0 w-[215.65px] h-[93.91px] object-none"
                      alt=""
                      width={1438}
                      height={848}
                    />
                  </div>
                </div>
                <div className="w-[360px] h-[362px]">
                  <div
                    className="w-[360px] h-[362px] absolute left-[539.5px] top-[507.5px] bg-white"
                    style={{
                      boxShadow:
                        '0px 56px 114px 0 rgba(150,151,169,0.17), 0px 12.508333206176758px 25.46339225769043px 0 rgba(150,151,169,0.1), 0px 3.724057197570801px 7.581116199493408px 0 rgba(150,151,169,0.07), 0px 1.5496636629104614px 3.154672384262085px 0 rgba(0,0,0,0.05)',
                    }}
                  />
                  <div className="flex flex-col justify-center items-center w-[280px] h-[120px] absolute left-[580px] top-[629px] gap-[14.043938636779785px] p-[14.043938636779785px]">
                    <Image
                      src="/image-1-2.png"
                      className="flex-grow-0 flex-shrink-0 w-[215.65px] h-[93.91px] object-none"
                      alt=""
                      width={1438}
                      height={848}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1440px] h-[483px]">
              <div className="flex justify-center items-start w-[1440px] absolute left-0 top-[1317px] gap-6 py-[100px]">
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[223px] relative overflow-hidden gap-2.5 px-2 py-3">
                  <svg
                    width={32}
                    height={29}
                    viewBox="0 0 32 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none">
                    <path
                      d="M32 0.295315L31.2741 5.85684C29.4997 5.73724 28.1285 6.05619 27.1607 6.81367C26.1928 7.57116 25.5476 8.62765 25.225 9.98314C24.9023 11.3386 24.8418 12.8735 25.0435 14.5879H32V29H18.6314V13.3918C18.6314 8.68745 19.7606 5.13923 22.0189 2.74717C24.3176 0.31525 27.6446 -0.502036 32 0.295315ZM13.3686 0.295315L12.6427 5.85684C10.8683 5.73724 9.49717 6.05619 8.5293 6.81367C7.56144 7.57116 6.91619 8.62765 6.59357 9.98314C6.27095 11.3386 6.21046 12.8735 6.4121 14.5879H13.3686V29H0V13.3918C0 8.68745 1.12917 5.13923 3.38752 2.74717C5.6862 0.31525 9.01323 -0.502036 13.3686 0.295315Z"
                      fill="#DDBE6F"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[862px] gap-8">
                  <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[147px] relative gap-8">
                    <p className="self-stretch flex-grow w-[862px] h-[147px] text-4xl font-semibold text-center text-[#272940]">
                      “We&apos;ve been delighted to make this contribution of
                      $51,692 of in-kind attorney work to the UNSW Founders
                      Program over the last 12 months.”
                    </p>
                  </div>
                  <div
                    className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-5 p-5 rounded-sm"
                    style={{
                      filter:
                        'drop-shadow(0px 56px 114px rgba(150,151,169,0.17)) drop-shadow(0px 12.508333206176758px 25.46339225769043px rgba(150,151,169,0.1)) drop-shadow(0px 3.724057197570801px 7.581116199493408px rgba(150,151,169,0.07)) drop-shadow(0px 1.5496636629104614px 3.154672384262085px rgba(0,0,0,0.05))',
                    }}>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative space-x-[-10px]">
                      <Image
                        className="flex-grow-0 flex-shrink-0"
                        src="/ellipse-469-2.png"
                        alt=""
                        width={1438}
                        height={848}
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#272940]">
                          Jhon doe al jhon
                        </p>
                      </div>
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                        <p className="flex-grow-0 flex-shrink-0 opacity-50 text-xl font-semibold text-left text-[#272940]">
                          Client leader
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[223px] relative overflow-hidden gap-2.5 px-2 py-3">
                  <svg
                    width={32}
                    height={29}
                    viewBox="0 0 32 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none">
                    <path
                      d="M-6.94307e-07 28.7047L0.725895 23.1432C2.50031 23.2628 3.87145 22.9438 4.83932 22.1863C5.80718 21.4288 6.45242 20.3724 6.77505 19.0169C7.09767 17.6614 7.15816 16.1265 6.95652 14.4121H-6.94307e-07V-7.24039e-07H13.3686V15.6082C13.3686 20.3126 12.2394 23.8608 9.98109 26.2528C7.68242 28.6847 4.35539 29.502 -6.94307e-07 28.7047ZM18.6314 28.7047L19.3573 23.1432C21.1317 23.2628 22.5028 22.9438 23.4707 22.1863C24.4386 21.4288 25.0838 20.3724 25.4064 19.0169C25.729 17.6614 25.7895 16.1265 25.5879 14.4121H18.6314V-7.24039e-07H32V15.6082C32 20.3126 30.8708 23.8608 28.6125 26.2528C26.3138 28.6847 22.9868 29.502 18.6314 28.7047Z"
                      fill="#DDBE6F"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start absolute left-0 top-[19854px]">
          <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[407px]">
            <div className="flex justify-start items-center absolute left-40 top-[120px] gap-[108px]">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p className="flex-grow-0 flex-shrink-0 w-[353px] text-xl font-bold text-left uppercase text-[#40320f]/50">
                  Meta office
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 py-5 rounded-[30px]">
                  <p className="flex-grow-0 flex-shrink-0 w-[553px] text-5xl font-medium text-left text-[#272940]">
                    Meet Us in Baxter IP Meta Office
                  </p>
                </div>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[459px] opacity-50 text-xl font-medium text-left text-black">
                We specialise aross various market segments, Your bussiness
                provides products or services that make society better. Our
                patent &amp; trademark attorneys bring you profession-leading
                experience in sector-specific IP to protect your valuable tech
                or brand.
              </p>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[1440px]- w-full h-[955px]">
            <div className="flex justify-center items-center w-[1440px] absolute left-0 top-[1255px] gap-2.5 px-40 py-10 rounded-sm bg-[#333552]">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">
                Visit meta office now
              </p>
              <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet">
                <path
                  d="M7.65039 21.6C7.40039 21.35 7.27539 21.054 7.27539 20.712C7.27539 20.3707 7.40039 20.075 7.65039 19.825L14.9754 12.5L7.62539 5.15C7.39206 4.91667 7.27539 4.625 7.27539 4.275C7.27539 3.925 7.40039 3.625 7.65039 3.375C7.90039 3.125 8.19639 3 8.53839 3C8.87972 3 9.17539 3.125 9.42539 3.375L17.8254 11.8C17.9254 11.9 17.9964 12.0083 18.0384 12.125C18.0797 12.2417 18.1004 12.3667 18.1004 12.5C18.1004 12.6333 18.0797 12.7583 18.0384 12.875C17.9964 12.9917 17.9254 13.1 17.8254 13.2L9.40039 21.625C9.16706 21.8583 8.87972 21.975 8.53839 21.975C8.19639 21.975 7.90039 21.85 7.65039 21.6Z"
                  fill="white"
                />
              </svg>
            </div>
            <Image
              src="/meta-office.png"
              className="w-[1438px] h-[848px] absolute left-[-0.5px] top-[406.5px] object-none"
              alt=""
              width={1438}
              height={848}
            />
          </div>
        </div>
        <div className="flex justify-start items-start w-[1440px] absolute left-0 top-[164px]">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[440px] bg-[#fbf8f1]">
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-40 py-6 bg-[#fffef8] border-t-0 border-r-0 border-b border-l-0 border-[#f0e4c3]">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none">
                <path
                  d="M4.66683 3.99998V2.66665C4.66683 2.29998 4.7975 1.98598 5.05883 1.72465C5.31972 1.46376 5.6335 1.33331 6.00016 1.33331H10.0002C10.3668 1.33331 10.6808 1.46376 10.9422 1.72465C11.2031 1.98598 11.3335 2.29998 11.3335 2.66665V3.99998H13.3335C13.7002 3.99998 14.0142 4.13065 14.2755 4.39198C14.5364 4.65287 14.6668 4.96665 14.6668 5.33331V12.6666C14.6668 13.0333 14.5364 13.3473 14.2755 13.6086C14.0142 13.8695 13.7002 14 13.3335 14H2.66683C2.30016 14 1.98639 13.8695 1.7255 13.6086C1.46416 13.3473 1.3335 13.0333 1.3335 12.6666V5.33331C1.3335 4.96665 1.46416 4.65287 1.7255 4.39198C1.98639 4.13065 2.30016 3.99998 2.66683 3.99998H4.66683ZM6.00016 3.99998H10.0002V2.66665H6.00016V3.99998ZM2.66683 11.3333H13.3335V9.33331H2.66683V11.3333Z"
                  fill="#7568D1"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left uppercase text-black">
                Patent service
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-40 py-6 border-t-0 border-r-0 border-b border-l-0 border-[#eeede9]">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none">
                <path
                  d="M1.99984 14.6667C1.63317 14.6667 1.31939 14.5362 1.0585 14.2754C0.797171 14.014 0.666504 13.7 0.666504 13.3334V6.00002H1.99984V13.3334H13.3332V14.6667H1.99984ZM4.6665 12C4.29984 12 3.98606 11.8696 3.72517 11.6087C3.46384 11.3474 3.33317 11.0334 3.33317 10.6667V3.33335H6.6665V2.00002C6.6665 1.63335 6.79717 1.31935 7.0585 1.05802C7.31939 0.797131 7.63317 0.666687 7.99984 0.666687H10.6665C11.0332 0.666687 11.3472 0.797131 11.6085 1.05802C11.8694 1.31935 11.9998 1.63335 11.9998 2.00002V3.33335H15.3332V10.6667C15.3332 11.0334 15.2027 11.3474 14.9418 11.6087C14.6805 11.8696 14.3665 12 13.9998 12H4.6665ZM7.99984 3.33335H10.6665V2.00002H7.99984V3.33335Z"
                  fill="#7568D1"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm font-semibold text-left uppercase text-black">
                Patent Specifications
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-40 py-6 border-t-0 border-r-0 border-b border-l-0 border-[#eeede9]">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none">
                <path
                  d="M11.5167 13.5L13.8333 11.2L13.1333 10.5L11.5167 12.0833L10.8667 11.4333L10.1667 12.15L11.5167 13.5ZM4 6H12V4.66667H4V6ZM12 15.3333C11.0778 15.3333 10.2918 15.0084 9.642 14.3587C8.99178 13.7084 8.66667 12.9222 8.66667 12C8.66667 11.0778 8.99178 10.2916 9.642 9.64133C10.2918 8.99156 11.0778 8.66667 12 8.66667C12.9222 8.66667 13.7084 8.99156 14.3587 9.64133C15.0084 10.2916 15.3333 11.0778 15.3333 12C15.3333 12.9222 15.0084 13.7084 14.3587 14.3587C13.7084 15.0084 12.9222 15.3333 12 15.3333ZM2 14.6667V3.33333C2 2.96667 2.13044 2.65267 2.39133 2.39133C2.65267 2.13044 2.96667 2 3.33333 2H12.6667C13.0333 2 13.3473 2.13044 13.6087 2.39133C13.8696 2.65267 14 2.96667 14 3.33333V7.78333C13.6889 7.62778 13.364 7.51378 13.0253 7.44133C12.6862 7.36933 12.3444 7.33333 12 7.33333H4V8.66667H8.73333C8.54444 8.85556 8.36933 9.06111 8.208 9.28333C8.04711 9.50556 7.90556 9.74444 7.78333 10H4V11.3333H7.38333C7.36111 11.4444 7.34711 11.5529 7.34133 11.6587C7.336 11.764 7.33333 11.8778 7.33333 12C7.33333 12.4667 7.39733 12.914 7.52533 13.342C7.65289 13.7696 7.84444 14.1778 8.1 14.5667L8 14.6667L7 13.6667L6 14.6667L5 13.6667L4 14.6667L3 13.6667L2 14.6667Z"
                  fill="#7568D1"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm font-semibold text-left uppercase text-black">
                Trademark services
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-40 py-6 border-t-0 border-r-0 border-b border-l-0 border-[#eeede9]">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none">
                <path
                  d="M2.66667 4.00002V2.66669H13.3333V4.00002H2.66667ZM2.66667 13.3334V9.33335H2V8.00002L2.66667 4.66669H13.3333L14 8.00002V9.33335H13.3333V13.3334H12V9.33335H9.33333V13.3334H2.66667ZM4 12H8V9.33335H4V12Z"
                  fill="#7568D1"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm font-semibold text-left uppercase text-black">
                Ip oppositions &amp; disputes
              </p>
            </div>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-40 py-6 border-t-0 border-r-0 border-b border-l-0 border-[#eeede9]">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="none">
                <path
                  d="M7.99984 15C7.29984 15 6.70828 14.7584 6.22517 14.2753C5.74162 13.7918 5.49984 13.2 5.49984 12.5C5.49984 11.9222 5.67206 11.4138 6.0165 10.9747C6.36095 10.536 6.79984 10.2389 7.33317 10.0833V8.66667H3.33317V6H1.6665V1.33333H6.33317V6H4.6665V7.33333H11.3332V5.91667C10.7998 5.76111 10.3609 5.46378 10.0165 5.02467C9.67206 4.586 9.49984 4.07778 9.49984 3.5C9.49984 2.8 9.74162 2.20822 10.2252 1.72467C10.7083 1.24156 11.2998 1 11.9998 1C12.6998 1 13.2916 1.24156 13.7752 1.72467C14.2583 2.20822 14.4998 2.8 14.4998 3.5C14.4998 4.07778 14.3276 4.586 13.9832 5.02467C13.6387 5.46378 13.1998 5.76111 12.6665 5.91667V8.66667H8.6665V10.0833C9.19984 10.2389 9.63873 10.536 9.98317 10.9747C10.3276 11.4138 10.4998 11.9222 10.4998 12.5C10.4998 13.2 10.2583 13.7918 9.77517 14.2753C9.29162 14.7584 8.69984 15 7.99984 15Z"
                  fill="#7568D1"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm font-semibold text-left uppercase text-black">
                bip partners
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow relative">
            <div className="flex-grow-0 flex-shrink-0 w-[1000.39px] h-[67px] relative">
              <div className="w-[235.81px] h-[67px]">
                <svg
                  width={236}
                  height={67}
                  viewBox="0 0 236 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[338.5px] top-[-0.5px]"
                  preserveAspectRatio="none">
                  <path
                    d="M235.813 67L220.951 0H0L14.8621 67H235.813Z"
                    fill="#FAF4E4"
                  />
                </svg>
                <div className="flex justify-start items-center absolute left-[388px] top-[22px] gap-2.5">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <path
                      d="M2 16.5C2 16.2348 2.10536 15.9804 2.29289 15.7929C2.48043 15.6054 2.73478 15.5 3 15.5H6V12L12 8L18 12V15.5H21C21.2652 15.5 21.5196 15.6054 21.7071 15.7929C21.8946 15.9804 22 16.2348 22 16.5V21C22 21.2652 21.8946 21.5196 21.7071 21.7071C21.5196 21.8946 21.2652 22 21 22H2V16.5Z"
                      stroke="#918F92"
                      strokeWidth={2}
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 3V8"
                      stroke="#918F92"
                      strokeWidth={2}
                      stroke-linecap="round"
                    />
                    <path
                      d="M14 22V15.5H10V22M9 22H15M18 5.99998V2.99998C18 2.99998 17.25 4.49998 15 2.99998C12.75 1.49998 12 2.99998 12 2.99998V5.99998C12 5.99998 12.75 4.49998 15 5.99998C17.25 7.49998 18 5.99998 18 5.99998Z"
                      stroke="#918F92"
                      strokeWidth={2}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm font-medium text-left text-[#272940]">
                    Funded Startups
                  </p>
                </div>
              </div>
              <div className="w-[236.17px] h-[67px]">
                <svg
                  width={237}
                  height={67}
                  viewBox="0 0 237 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[116.86px] top-[-0.5px]"
                  preserveAspectRatio="none">
                  <path
                    d="M236.168 67L221.306 0H0.355469L15.2176 67H236.168Z"
                    fill="#FFFDF7"
                  />
                </svg>
                <svg
                  width={236}
                  height={67}
                  viewBox="0 0 236 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[235.81px] h-[67px]"
                  preserveAspectRatio="none">
                  <mask
                    id="mask0_1_1862"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={236}
                    height={67}>
                    <path
                      d="M235.813 67L220.951 0H0L14.8621 67H235.813Z"
                      fill="#FFFDF7"
                    />
                  </mask>
                  <g mask="url(#mask0_1_1862)">
                    <path
                      d="M0 67L236 67"
                      stroke="#7568D1"
                      strokeWidth={4}
                    />
                  </g>
                </svg>
                <div className="flex justify-start items-center absolute left-[165px] top-[22px] gap-2.5">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <path
                      d="M22 3.99994H2V18.9999H9.5L12 21.4999L14.5 18.9999H22V3.99994Z"
                      fill="#7568D1"
                    />
                    <path
                      d="M12 11.9999C13.3807 11.9999 14.5 10.8807 14.5 9.49994C14.5 8.11923 13.3807 6.99994 12 6.99994C10.6193 6.99994 9.5 8.11923 9.5 9.49994C9.5 10.8807 10.6193 11.9999 12 11.9999Z"
                      fill="white"
                    />
                    <path
                      d="M16.5 16C16.5 13.791 14.485 12 12 12C9.515 12 7.5 13.791 7.5 16"
                      fill="white"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#272940]">
                    Corporate / SME
                  </p>
                </div>
              </div>
              <div className="w-[235.81px] h-[67px]">
                <svg
                  width={236}
                  height={67}
                  viewBox="0 0 236 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[558.5px] top-[-0.5px]"
                  preserveAspectRatio="none">
                  <path
                    d="M235.813 67L220.951 0H0L14.8621 67H235.813Z"
                    fill="#FAF4E4"
                  />
                </svg>
                <div className="flex justify-start items-center absolute left-[618px] top-[22px] gap-2.5">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <path
                      d="M2 10L12 3L22 10V21H2V10Z"
                      stroke="#918F92"
                      strokeWidth={2}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.34326 13.3431C7.84367 11.8431 9.87841 11.0004 12 11.0004C14.1216 11.0004 16.1563 11.8431 17.6568 13.3431M9.17126 16.1716C9.5427 15.8001 9.98366 15.5054 10.469 15.3044C10.9543 15.1034 11.4745 14.9999 11.9998 14.9999C12.5251 14.9999 13.0452 15.1034 13.5305 15.3044C14.0159 15.5054 14.4568 15.8001 14.8283 16.1716"
                      stroke="#918F92"
                      strokeWidth={2}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm font-medium text-left text-[#272940]">
                    Entrepreneur
                  </p>
                </div>
              </div>
              <div className="w-[220.39px] h-[67px]">
                <svg
                  width={220}
                  height={67}
                  viewBox="0 0 220 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[779.5px] top-[-0.5px]"
                  preserveAspectRatio="none">
                  <path
                    d="M220.386 67V0H0L14.8361 67H220.386Z"
                    fill="#FAF4E4"
                  />
                </svg>
                <div className="flex justify-start items-center absolute left-[814px] top-[22px] gap-2.5">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <path
                      d="M6 3.6275C5.5367 3.94969 5.15829 4.37924 4.89708 4.87946C4.63587 5.37967 4.49963 5.93569 4.5 6.5C4.49968 7.10392 4.65571 7.69763 4.95292 8.22335C5.25013 8.74907 5.67838 9.18889 6.196 9.5M18 3.6275C18.4633 3.94969 18.8417 4.37924 19.1029 4.87946C19.3641 5.37967 19.5004 5.93569 19.5 6.5C19.5004 7.06431 19.3641 7.62033 19.1029 8.12054C18.8417 8.62076 18.4633 9.05031 18 9.3725M22 21V20.4C22 18.16 22 17.04 21.564 16.184C21.1805 15.4314 20.5686 14.8195 19.816 14.436M2 21V20.4C2 18.16 2 17.04 2.436 16.184C2.81949 15.4314 3.43139 14.8195 4.184 14.436M12 10C12.4596 10 12.9148 9.90947 13.3394 9.73358C13.764 9.55769 14.1499 9.29988 14.4749 8.97487C14.7999 8.64987 15.0577 8.26403 15.2336 7.83939C15.4095 7.41475 15.5 6.95963 15.5 6.5C15.5 6.04037 15.4095 5.58525 15.2336 5.16061C15.0577 4.73597 14.7999 4.35013 14.4749 4.02513C14.1499 3.70012 13.764 3.44231 13.3394 3.26642C12.9148 3.09053 12.4596 3 12 3C11.0717 3 10.1815 3.36875 9.52513 4.02513C8.86875 4.6815 8.5 5.57174 8.5 6.5C8.5 7.42826 8.86875 8.3185 9.52513 8.97487C10.1815 9.63125 11.0717 10 12 10V10ZM6 20V21H18V20C18 18.1365 18 17.2045 17.6955 16.469C17.2894 15.489 16.5106 14.7104 15.5305 14.3045C14.7955 14 13.8635 14 12 14C10.1365 14 9.2045 14 8.4695 14.3045C7.98414 14.5055 7.54313 14.8002 7.17165 15.1717C6.80018 15.5431 6.50552 15.9841 6.3045 16.4695C6 17.204 6 18.1365 6 20Z"
                      stroke="#918F92"
                      strokeWidth={2}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 opacity-50 text-sm font-medium text-left text-[#272940]">
                    Foreign Associates
                  </p>
                </div>
              </div>
              <svg
                width={133}
                height={67}
                viewBox="0 0 133 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[132.78px] h-[67px]"
                preserveAspectRatio="none">
                <path
                  d="M132.782 67L117.99 0H0V67H132.782Z"
                  fill="url(#paint0_linear_1_1886)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M78.5983 39.4355C78.5983 39.4355 77.4746 37.9427 77.4746 36.2688C77.4746 34.595 78.5983 33.0997 78.5983 33.0997H79.7596C79.7596 33.0997 78.6549 34.5896 78.6549 36.2676C78.6549 37.9455 79.7596 39.4355 79.7596 39.4355H78.5983Z"
                  fill="#FFDF8D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M77.4264 39.4355C77.4264 39.4355 76.3027 37.9427 76.3027 36.2688C76.3027 34.595 77.4264 33.0997 77.4264 33.0997H78.5878C78.5878 33.0997 77.4831 34.5896 77.4831 36.2676C77.4831 37.9455 78.5878 39.4355 78.5878 39.4355H77.4264Z"
                  fill="#FFE6A5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M80.9469 39.4355C80.9469 39.4355 79.8232 37.9427 79.8232 36.2688C79.8232 34.595 80.9469 33.0997 80.9469 33.0997H82.1083C82.1083 33.0997 81.0036 34.5896 81.0036 36.2676C81.0036 37.9455 82.1083 39.4355 82.1083 39.4355H80.9469Z"
                  fill="#FFD15B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M79.7731 39.4355C79.7731 39.4355 78.6494 37.9427 78.6494 36.2688C78.6494 34.595 79.7731 33.0997 79.7731 33.0997H80.9344C80.9344 33.0997 79.8297 34.5896 79.8297 36.2676C79.8297 37.9455 80.9344 39.4355 80.9344 39.4355H79.7731Z"
                  fill="#FFD874"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M82.104 39.4325V44.9002H78.5963V43.1937C77.1506 44.2839 75.3494 44.9239 73.406 44.9239C70.5856 44.9239 68.0734 43.5729 66.4854 41.4873C64.8975 43.5729 62.3853 44.9239 59.565 44.9239C54.7775 44.9239 50.8906 41.037 50.8906 36.2495V22.0767H54.3746V29.2816C55.8203 28.2151 57.5978 27.5752 59.5413 27.5752C62.3616 27.5752 64.8738 28.9261 66.4618 31.0118C68.0497 28.9261 70.5619 27.5752 73.3823 27.5752C75.3257 27.5752 77.1269 28.2151 78.5726 29.3053V27.5752H82.104V33.0974H77.435C76.5107 31.8887 75.0413 31.1065 73.3823 31.1065C70.5145 31.1065 68.2156 33.4292 68.2156 36.2732C68.2156 39.1173 70.5382 41.4162 73.3823 41.4162C75.038 41.4162 76.5049 40.6372 77.4531 39.4325H82.104ZM59.565 41.4162C62.4327 41.4162 64.7316 39.0936 64.7316 36.2495C64.7079 33.3818 62.409 31.0829 59.565 31.0829C56.6972 31.0829 54.3983 33.4055 54.3983 36.2495C54.3983 39.1173 56.7209 41.4162 59.565 41.4162Z"
                  fill="white"
                />
                <defs>
                  <lineargradient
                    id="paint0_linear_1_1886"
                    x1="34.6204"
                    y1="-0.000218249"
                    x2="208.507"
                    y2="11.6218"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#404266" />
                    <stop
                      offset={1}
                      stop-color="#8083B6"
                    />
                  </lineargradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-12 pl-12 pr-40 pt-[30px] pb-[50px] bg-[#fffef8]">
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
                <div className="flex flex-col justify-start items-start flex-grow gap-8">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#272940]">
                        How to patent
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Patent benefits
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#272940]">
                        Patent search
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        International patent search
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        International-type search
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Australian patent search
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Freedom-to-operate patent search
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#272940]">
                        Registered design
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Registered design application
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Design disputes
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#272940]">
                        Other patent services
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 w-[132px] opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Inovation patents
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start flex-grow gap-8">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[392px] gap-2.5">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#272940]">
                        Ip strategy
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Ip audit
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Ip vaulation
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[392px] gap-2.5">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#272940]">
                        Patent opositions &amp; dispites
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 w-[132px] opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Patent opositions
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 w-[132px] opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Patent itigation
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[392px] gap-2.5">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#272940]">
                        Other patent services
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 w-[132px] opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Inovation patents
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#272940]">
                        Patent opositions &amp; dispites
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 w-[132px] opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Patent opositions
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 w-[132px] opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Patent itigation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-8">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#272940]">
                        Australian patent process
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Provisional patent applications
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        International-type patent search
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        PCT internationals patent applications
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        National phase patent application
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#272940]">
                        Australian patent process
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        Provisional patent applications
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        International-type patent search
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        PCT internationals patent applications
                      </p>
                    </div>
                    <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <p className="flex-grow-0 flex-shrink-0 opacity-60 text-sm font-semibold text-left text-[#272940]">
                        National phase patent application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Header />
      <Hero />
      <SocialProof />
      <ContentCard />
      <Features />
      <Logos />
      <ImagesHeadingDescription />
      <FeatureListCta />
      <CardCta />
      <FeaturesImages />
      <Blog />
      <Contact />
      <Newsletter /> */}
      <Footer />
    </>
  )
}
