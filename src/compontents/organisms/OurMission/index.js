import CardIcon from "src/compontents/molecules/CardIcon";
import ButtonIcon from "src/compontents/atoms/ButtonIcon";

function OurMission() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-black">OUR MISSION</h1>
          <p className="my-10 text-2xl font-semibold">
            Protecting the rights and wellbeing of EVERY child
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 ">
          <CardIcon
            src="http://charity-is-hope-html.themerex.net/images/mission_1.png"
            content="Promoting the right and wellbeing of every child, in everything we do."
          />
          <CardIcon
            src="http://charity-is-hope-html.themerex.net/images/mission_2.png"
            content="Supporting Hope programs for children in more than 150 countries and territories."
          />
          <CardIcon
            src="http://charity-is-hope-html.themerex.net/images/mission_3.png"
            content="Focus on reaching the most vunerable children, to benefit all children, everywhere."
          />
        </div>
        <div className="mt-20 flex justify-center">
          <ButtonIcon title="Learn more about SAM" />
        </div>
      </div>
    </section>
  );
}

export default OurMission;
