import ButtonIcon from "src/compontents/atoms/ButtonIcon";
import AliceCarousel from "react-alice-carousel";
import Carousel from "src/compontents/molecules/Carousel";

const items = [
  <Carousel
    src="http://charity-is-hope-html.themerex.net/images/slider_1_1.jpg"
    right
    maxWidth="max-w-7xl"
  >
    <div className="px-5 xl:px-0">
      <h4 className="text-xl lg:text-2xl">Community Founation</h4>
      <h1
        className="text-6xl lg:text-8xl mt-3 mb-14"
        style={{ lineHeight: "7rem" }}
      >
        Why Work for <br className="lg:block hidden" /> a Charity?
      </h1>
      <div className="mt-20 flex justify-start">
        <ButtonIcon title="How You Can Help?" id="#contact" />
      </div>
    </div>
  </Carousel>,

  <Carousel
    src="http://charity-is-hope-html.themerex.net/images/slider_1_3.jpg"
    maxWidth="max-w-5xl"
  >
    <div className="px-5">
      <h4 className="text-xl lg:text-2xl">Community Foundation</h4>
      <h1
        className="text-6xl lg:text-8xl mt-3 mb-14"
        style={{ lineHeight: "7rem" }}
      >
        Why Work for <br className="lg:block hidden" /> a Charity?
      </h1>
      <div className="mt-20 flex justify-start">
        <ButtonIcon title="How You Can Help?" id="#contact" />
      </div>
    </div>
  </Carousel>,
  
  <Carousel
    src="http://charity-is-hope-html.themerex.net/images/slider_1_2.jpg"
    maxWidth="max-w-5xl"
  >
    <div className="px-5">
      <h4 className="text-xl lg:text-2xl">Community Foundation</h4>
      <h1
        className="text-6xl lg:text-8xl mt-3 mb-14"
        style={{ lineHeight: "7rem" }}
      >
        Why Work for <br className="lg:block hidden" /> a Charity?
      </h1>
      <div className="mt-20 flex justify-start">
        <ButtonIcon title="How You Can Help?" id="#contact" />
      </div>
    </div>
  </Carousel>,
];

function Hero() {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      animationType="fadeout"
      disableDotsControls
      infinite
      animationDuration={1000}
      disableButtonsControls
      autoPlayInterval={5000}
    />
  );
}

export default Hero;
