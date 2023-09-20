import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Lightboxs({
  images,
  index,
  toggler,
  type,
  setToggler
}) {

  return (
    <>
      <Lightbox
        key={index}
        open={toggler}
        close={() => setToggler(false)}
        slides={[{ src: images[index] }]}
        plugins={[Fullscreen, Zoom]}
        zoom={{
          maxZoomPixelRatio : 10
         }}
      />
    </>
  )
}