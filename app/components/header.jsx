"use client"
import Image from 'next/image'
import Link from 'next/link'
import { IoIosCart, IoIosPerson, IoMdMenu, IoMdClose, IoMdSearch } from "react-icons/io";
import {
    useState,
    useEffect,
    useRef,
    useContext,
    useCallback,
    useReducer,
    useMemo,
  } from "react";

export default function Header() {

    const [menuState, setMenuState] = useState("menu");
  

  function onToggleMenu() {
    setMenuState((prevState) => (prevState === "menu" ? "close" : "menu"));
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("top-[20%]");
  }

  return (
    <header className="px-12 py-2 flex flex-wrap justify-between items-center w-[100%] mx-auto shadow-[2px_2px_5px_-1px_rgba(0,0,0,0.20),-2px_-2px_5px_-1px_rgba(0,0,0,0.05)]">
      
      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CC0000] to-[#181842]"><img
              src="méjo-logo.png"
              className="block w-[50px] h-[50px]"
              alt="Méjo"
            /></p>
      
      <div className="flex items-center gap-6">
      <div className="nav-links bg-white duration-500 md:static absolute z-40 md:min-h-fit min-h-[30vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 py-5 md:py-0 md:px-1">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] lg:gap-[1vw] gap-4">
          <li className="inline-block p-2 lg:p-5 font-semibold  hover:border-b-2 hover:border-[#0099FF] active:text-blue-600 hover:duration-500">
            <Link href="/">Accueil</Link>
          </li>
          <li className="inline-block p-2 lg:p-5 font-semibold hover:border-b-2 hover:border-[#0099FF] active:text-blue-600 hover:duration-500">
            <Link href="/#méjo">Méjo</Link>
          </li>
          <li className="inline-block p-2 lg:p-5 font-semibold hover:border-b-2 hover:border-[#0099FF] active:text-blue-600 hover:duration-500">
            <Link href="/#mission">Notre Mission</Link>
          </li>
          <li className="inline-block p-2 lg:p-5 font-semibold hover:border-b-2 hover:border-[#0099FF] active:text-blue-600 hover:duration-500">
            <Link href="/#comment-ça-marche">Comment ça marche</Link>
          </li>
          <li className="inline-block text-center text-white p-4 rounded-lg bg-[#0099FF] font-semibold hover:bg-white hover:text-[#0099FF] hover:duration-500 hover:border hover:border-[#0099FF]">
            <Link href="/contact">Contactez-nous</Link>
          </li>     
        </ul>
      </div>

        {menuState === "menu" ? (
          <IoMdMenu
            onClick={() => onToggleMenu()}
            size={20}
            color="#0099FF"
            className="text-3xl cursor-pointer md:hidden"
          />
        ) : (
          <IoMdClose
            onClick={() => onToggleMenu()}
            size={20}
            color="#0099FF"
            className="text-3xl cursor-pointer md:hidden"
          />
        )}
      </div>
    </header>
  )
}