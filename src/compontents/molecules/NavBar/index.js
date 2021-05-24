import React from "react";

function NavBar() {
    return (
        <nav className='bg-white'>
            <ul className="font-bold text-sm flex py-7 max-w-6xl mx-auto">
                <li>
                    <a className='pr-7 pl-4 py-4 hover:text-green-400 transition delay-100' href="#home">HOME</a>
                </li>
                <li>
                    <a className='px-7 py-4 hover:text-green-400 transition delay-100' href="#about">ABOUT US</a>
                </li>
                <li>
                    <a className='px-7 py-4 hover:text-green-400 transition delay-100' href="#home">OUR CAUSES</a>
                </li>
                <li>
                    <a className='px-7 py-4 hover:text-green-400 transition delay-100' href="#home">CONTACT US</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
