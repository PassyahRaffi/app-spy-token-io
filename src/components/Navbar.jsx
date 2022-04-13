import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/coin.png";
import Bahasa from "../assets/bahasa.png";

export default function Navbar() {
  return (
    <>
      {/* left */}
      <nav className="relative flex flex-wrap items-center justify-between py-4 bg-gray-100 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex items-center">
              <Link to="/">
                <img className="w-10 h-10" src={Logo} alt="logo" />
              </Link>
              <a
                className="flex text-lg font-bold mr-5 py-2 text-blue-500 pl-2"
                href="#"
              >
                Smarty Pay
              </a>
            </div>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span className="block relative w-6 h-px rounded-sm bg-blue-600"></span>
              <span className="block relative w-6 h-px rounded-sm bg-blue-600 mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-blue-600 mt-1"></span>
            </button>
          </div>
          <div className="lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="nav-item">
                <a
                  className="mx-5 my-2 flex items-center text-xs font-bold text-gray-600 hover:opacity-75"
                  href="#"
                >
                  <span className="">Trade</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="mx-5 my-2 flex items-center text-xs font-bold text-gray-600 hover:opacity-75"
                  href="#"
                >
                  <span className="">Earn</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="mx-5 my-2 flex items-center text-xs font-bold text-gray-600 hover:opacity-75"
                  href="#"
                >
                  <span className="">Referral</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="mx-5 my-2 flex items-center text-xs font-bold text-gray-600 hover:opacity-75"
                  href="#"
                >
                  <span className="">NFTs</span>
                </a>
              </li>
            </ul>

            {/* right */}
            <div
              className="lg:flex flex-grow items-center"
              id="example-navbar-warning"
            >
              <ul className="flex items-center flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs font-bold text-gray-600"
                    href="#"
                  >
                    <img className="w-5 h-5 transform transition duration-500 hover:scale-125" src={Logo} alt="logo" />
                    <span className="ml-2">$0.169</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs font-bold text-gray-600 hover:opacity-75"
                    href="#"
                  >
                    <img className="w-5 h5" src={Bahasa} alt="bahasa" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs font-bold text-gray-100 hover:opacity-75"
                    href="#"
                  >
                    <button className="flex items-center bg-blue-600 rounded-full px-3 py-1">
                      <p className="font-bold text-sm">Connect Wallet</p>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
