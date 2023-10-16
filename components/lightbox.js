import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import React, { useState, useEffect } from 'react'

export default function Lightboxs({
  images,
  index,
  toggler,
  type,
  setToggler
}) {
  const [render, setRender] = useState({
    buttonPrev: null,
    buttonNext: null,
  })

  useEffect(() => {
    let ignore = false

    if (!ignore) {
      if (images.length == 1) {
        setRender({
          iconPrev: () => images.length > 1 ? undefined : null,
          iconNext: () => images.length > 1 ? undefined : null,
          buttonPrev: images.length > 1 ? undefined : null,
          buttonNext: images.length > 1 ? undefined : null,
        })
      }
    }

    return () => {
      ignore = true
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        .yarl__slide_image {
          background-color: #fff;
        }
      `}</style>

      <Lightbox
        key={index}
        open={toggler}
        close={() => setToggler(false)}
        index={index}
        slides={images}
        plugins={[Fullscreen, Zoom]}
        zoom={{
          maxZoomPixelRatio : 10
         }}
        carousel={{ finite: images.length > 1 ? false : true }}
        render={render}
      />
    </>
  )
}