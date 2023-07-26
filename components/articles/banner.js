import { Container } from '../templates/Container'
import Avatar from './profile-avatar'
import { InnerContainer } from '../../components/templates/InnerContainer'

export default function Banner(author) {
  return (
    <Container className=" bg-hero-banner flex justify-center text-center">
       <InnerContainer>
      <div className="w-full py-20 flex justify-center items-center">
        <div className="w-1/2 flex flex-col">
          <span className=" text-6xl text-black font-lora">
            {
              '“ Infringement of third party trade marks – Hells Angels and Redbubble “'
            }
          </span>

          <div className="flex flex-row justify-center py-20">
            <span className="flex justify-center text-center">
              <Avatar name={author.name} picture={author.picture} />
            </span>
            <span className=" flex justify-center items-center text-xl text-black font-medium font-lora">
              {'Nicole more · Nov 25'}
            </span>
          </div>
        </div>
      </div>
      </InnerContainer>
    </Container>
  )
}
