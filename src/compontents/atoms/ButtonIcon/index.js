import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";

function ButtonIcon({ title, id }) {
  return (
    <div>
      <a
        href={id}
        className="px-8 py-7 text-2xl hover:bg-green-400 transition delay-100 rounded items-center bg-yellow-500 flex w-max"
      >
        {title} <FaArrowAltCircleRight size={40} className="ml-4" />
      </a>
    </div>
  );
}

export default ButtonIcon;
