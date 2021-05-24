import ButtonIcon from "src/compontents/atoms/ButtonIcon";

function Hero() {
  return (
    <section
      className="bg-hero-pattern bg-no-repeat h-screen text-white w-full mx-auto font-black flex justify-end items-center"
      style={{ maxHeight: "700px" }}
    >
      <div className="max-w-x6">
        <div>
          <h4 className="text-2xl">Community Foundation</h4>
          <h1 className="text-7xl mt-3 mb-14 leading-tight">
            Why Work for <br /> a Charity?
          </h1>
          <ButtonIcon title="How You Can Help?" id="#contact" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
