import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

function NavBar() {
  const openSearchInput = () => alert("Search..");

  return (
    <nav className="bg-white sticky top-0 z-50 ">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <ul className="font-bold text-sm flex py-5 ">
          <li>
            <a
              className="pr-7 pl-4 xl:pl-0 py-4 hover:text-green-700 transition delay-100"
              href="#home"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="px-7 py-4 hover:text-green-700 transition delay-100"
              href="#about"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              className="px-7 py-4 hover:text-green-700 transition delay-100"
              href="#home"
            >
              OUR CAUSES
            </a>
          </li>
          <li>
            <a
              className="px-7 py-4 hover:text-green-700 transition delay-100"
              href="#home"
            >
              CONTACT US
            </a>
          </li>
        </ul>
        <button
          className="block p-4 xl:pr-0 focus:outline-none"
          onClick={openSearchInput}
        >
          <FaSearch size={20} className="text-green-700" />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
