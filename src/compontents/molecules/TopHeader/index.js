import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaPinterestP } from "@react-icons/all-files/fa/FaPinterestP";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import Button from "src/compontents/atoms/Button";

function TopHeader() {
  return (
    <header className="bg-black py-3">
      <div className="grid grid-cols-3 lg:flex lg:justify-between items-center px-8 xl:px-0 md:px-4 max-w-5xl mx-auto">
        <button className="focus:outline-none lg:hidden">
          <FaBars size={22} className={`text-white block`} />
        </button>

        <div className="w-max place-self-center lg:place-self-auto">
          <a href="">
            <img
              src="http://charity-is-hope-html.themerex.net/images/logo.png"
              alt=""
              className=""
            />
          </a>
        </div>
        <div className="lg:flex items-center hidden">
          <div className="flex space-x-3">
            <button className="block border-2 border-blue-400 rounded-full p-2 delay-100 focus:outline-none transition group hover:bg-transparent hover:border-blue-400 bg-blue-400">
              <FaTwitter className="text-white group-hover:text-blue-400 transition delay-100" />
            </button>
            <button className="block border-2 border-blue-600 rounded-full p-2 delay-100 focus:outline-none transition group hover:bg-transparent hover:border-blue-600 bg-blue-600">
              <FaFacebookF className="text-white group-hover:text-blue-600 transition delay-100" />
            </button>
            <button className="block border-2 border-red-400 rounded-full p-2 delay-100 focus:outline-none transition group hover:bg-transparent hover:border-red-400 bg-red-400">
              <FaYoutube className="text-white group-hover:text-red-400 transition delay-100" />
            </button>
            <button className="block border-2 border-red-400 rounded-full p-2 delay-100 focus:outline-none transition group hover:bg-transparent hover:border-red-400 bg-red-400">
              <FaPinterestP className="text-white group-hover:text-red-400 transition delay-100" />
            </button>
          </div>
          <div className="space-x-2 ml-6">
            <Button sm title="donate" />
            <Button lg bgYellow title="become volunteer" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
