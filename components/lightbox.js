import FsLightbox from "fslightbox-react"

export default function Lightbox({
  images,
  index,
  toggler,
  type
}) {

  return (
    <>
        <FsLightbox  
          toggler={toggler}
          sources={[images[index]]}
          key={index}
          type={type}
          customAttributes={[
            {
              className: "bg-white"
            }
          ]}
        />
    </>
  )
}