import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";

function ButtonIcon({ title, id }) {
  return (
    <div>
      <a
        href={id}
        className="px-4 py-3 lg:px-8 lg:py-7 font-black lg:text-2xl cursor-pointer hover:bg-green-700 hover:text-white transition delay-100 rounded items-center bg-yellow-500 flex"
      >
        {title} <FaArrowAltCircleRight size={40} className="ml-4" />
      </a>
    </div>
  );
}

export default ButtonIcon;
