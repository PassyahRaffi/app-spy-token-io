import React from "react";
import Image from "../assets/double-coin.png";
import Checklist from "../assets/check.png";
import Calc from "../assets/calc.png";

export default function Card() {
  return (
    <>
      <div className="flex justify-evenly gap-5 lg:mx-1/2 my-2 lg:my-20">
        {/* card [0] */}
        <div className="flex justify-evenly">
          <div className="flex justify-center">
            <div className="block p-6 w-96 h-full rounded-lg shadow-lg bg-white overflow-x-hidden">
              <div className="flex justify-between overflow-hidden group">
                <div className="flex">
                  <img className="w-16 h-16" src={Image} alt="coin" />
                </div>
                <div className="block">
                  <p className="flex justify-end uppercase items-center text-gray-900 text-xl font-medium mb-2">
                    spy-bnb
                  </p>
                  <div className="grid gap-1 grid-cols-2">
                    <div className="bg-white border-solid border-2 border-sky-500 rounded-xl">
                      <div className="flex items-center px-3 py-1">
                        <div>
                          <img
                            className="w-4 h-4"
                            src={Checklist}
                            alt="ceklis"
                          />
                        </div>
                        <div>
                          <p className="ml-2 text-xs font-bold">Core</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-sky-500 rounded-xl flex justify-center">
                      <p className="flex text-xs font-bold items-center text-white">
                        15300X
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-center">APY:</div>
                <div className="flex">
                  <a href="#" className="font-bold pr-2 hover:text-black">908.22%</a>
                  <img className="w-4 h-6" src={Calc} alt="calc" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">Earn:</div>
                <div className="font-bold">SPY + Fees</div>
              </div>
              <div className="flex justify-between">
                <div className="">Harvest Lockup:</div>
                <div className="font-bold">12 Hour (s)</div>
              </div>
              <div className="py-2 flex uppercase">
                <p className="text-xs text-sky-500 font-bold">spy</p>
                <p className="text-xs font-bold pl-1">earned</p>
              </div>
              <div className="flex justify-between">
                <p className="flex text-xl items-center text-gray-400 font-bold">
                  0.000
                </p>
                <div className="bg-gray-300 rounded-xl flex justify-center">
                  <p className="text-gray-400 flex text-sm font-bold items-center py-3 px-6 cursor-not-allowed">
                    Harvest
                  </p>
                </div>
              </div>
              <div className="py-2 flex uppercase">
                <p className="text-xs text-sky-500 font-bold">spy-busd</p>
                <p className="text-xs font-bold pl-1">staked</p>
              </div>
              <button
                type="button"
                className="font-bold inline-block w-full py-2 bg-blue-700 text-white text-lg rounded-xl hover:bg-blue-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Connect Wallet
              </button>

              <div class="border-b border-gray-300">
                <br />
              </div>

              <div className="flex justify-center pt-4 dropdown dropdown-hover pb-10 cursor-pointer">
                <label tabindex="0" className="btn m-1 bg-white">
                  <p className="text-blue-600 font-bold">Details</p>
                </label>
                <div
                  tabindex="0"
                  className="dropdown-content menu p-5 pb-10 shadow bg-base-100 rounded-box w-full"
                >
                  <div className="flex justify-between">
                    <div className="font-bold text-blue-400">
                      Total Liquidity:
                    </div>
                    <div className="font-bold text-blue-400">$816,223</div>
                  </div>
                  <div className="py-2 flex">
                    <p className="text-sm text-sky-500 font-bold">Get</p>
                    <p className="text-sm uppercase text-sky-500 font-bold pl-1">
                      spy-busd
                    </p>
                  </div>
                  <div className="py-2 flex">
                    <p className="text-sm text-sky-500 font-bold">View</p>
                    <p className="text-sm text-sky-500 font-bold pl-1">
                      Contract
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card [1] */}
        <div className="flex justify-evenly">
          <div className="flex justify-center">
            <div className="block p-6 w-96 h-full rounded-lg shadow-lg bg-white overflow-x-hidden">
              <div className="flex justify-between overflow-hidden group">
                <div className="flex">
                  <img className="w-16 h-16" src={Image} alt="coin" />
                </div>
                <div className="block">
                  <p className="flex justify-end uppercase items-center text-gray-900 text-xl font-medium mb-2">
                    spy-bnb
                  </p>
                  <div className="grid gap-1 grid-cols-2">
                    <div className="bg-white border-solid border-2 border-sky-500 rounded-xl">
                      <div className="flex items-center px-3 py-1">
                        <div>
                          <img
                            className="w-4 h-4"
                            src={Checklist}
                            alt="ceklis"
                          />
                        </div>
                        <div>
                          <p className="ml-2 text-xs font-bold">Core</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-sky-500 rounded-xl flex justify-center">
                      <p className="flex text-xs font-bold items-center text-white">
                        15300X
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-center">APY:</div>
                <div className="flex">
                  <a href="#" className="font-bold pr-2 hover:text-black">908.22%</a>
                  <img className="w-4 h-6" src={Calc} alt="calc" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">Earn:</div>
                <div className="font-bold">SPY + Fees</div>
              </div>
              <div className="flex justify-between">
                <div className="">Harvest Lockup:</div>
                <div className="font-bold">12 Hour (s)</div>
              </div>
              <div className="py-2 flex uppercase">
                <p className="text-xs text-sky-500 font-bold">spy</p>
                <p className="text-xs font-bold pl-1">earned</p>
              </div>
              <div className="flex justify-between">
                <p className="flex text-xl items-center text-gray-400 font-bold">
                  0.000
                </p>
                <div className="bg-gray-300 rounded-xl flex justify-center">
                  <p className="text-gray-400 flex text-sm font-bold items-center py-3 px-6 cursor-not-allowed">
                    Harvest
                  </p>
                </div>
              </div>
              <div className="py-2 flex uppercase">
                <p className="text-xs text-sky-500 font-bold">spy-busd</p>
                <p className="text-xs font-bold pl-1">staked</p>
              </div>
              <button
                type="button"
                className="font-bold inline-block w-full py-2 bg-blue-700 text-white text-lg rounded-xl hover:bg-blue-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Connect Wallet
              </button>

              <div class="border-b border-gray-300">
                <br />
              </div>

              <div className="flex justify-center pt-4 dropdown dropdown-hover pb-10 cursor-pointer">
                <label tabindex="0" className="btn m-1 bg-white">
                  <p className="text-blue-600 font-bold">Details</p>
                </label>
                <div
                  tabindex="0"
                  className="dropdown-content menu p-5 pb-10 shadow bg-base-100 rounded-box w-full"
                >
                  <div className="flex justify-between">
                    <div className="font-bold text-blue-400">
                      Total Liquidity:
                    </div>
                    <div className="font-bold text-blue-400">$816,223</div>
                  </div>
                  <div className="py-2 flex">
                    <p className="text-sm text-sky-500 font-bold">Get</p>
                    <p className="text-sm uppercase text-sky-500 font-bold pl-1">
                      spy-busd
                    </p>
                  </div>
                  <div className="py-2 flex">
                    <p className="text-sm text-sky-500 font-bold">View</p>
                    <p className="text-sm text-sky-500 font-bold pl-1">
                      Contract
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card [2] */}
        <div className="flex justify-evenly">
          <div className="flex justify-center">
            <div className="block p-6 w-96 h-full rounded-lg shadow-lg bg-white overflow-x-hidden">
              <div className="flex justify-between overflow-hidden group">
                <div className="flex">
                  <img className="w-16 h-16" src={Image} alt="coin" />
                </div>
                <div className="block">
                  <p className="flex justify-end uppercase items-center text-gray-900 text-xl font-medium mb-2">
                    spy-bnb
                  </p>
                  <div className="grid gap-1 grid-cols-2">
                    <div className="bg-white border-solid border-2 border-sky-500 rounded-xl">
                      <div className="flex items-center px-3 py-1">
                        <div>
                          <img
                            className="w-4 h-4"
                            src={Checklist}
                            alt="ceklis"
                          />
                        </div>
                        <div>
                          <p className="ml-2 text-xs font-bold">Core</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-sky-500 rounded-xl flex justify-center">
                      <p className="flex text-xs font-bold items-center text-white">
                        15300X
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <div className="flex justify-center">APY:</div>
                <div className="flex">
                  <a href="#" className="font-bold pr-2 hover:text-black">908.22%</a>
                  <img className="w-4 h-6" src={Calc} alt="calc" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">Earn:</div>
                <div className="font-bold">SPY + Fees</div>
              </div>
              <div className="flex justify-between">
                <div className="">Harvest Lockup:</div>
                <div className="font-bold">12 Hour (s)</div>
              </div>
              <div className="py-2 flex uppercase">
                <p className="text-xs text-sky-500 font-bold">spy</p>
                <p className="text-xs font-bold pl-1">earned</p>
              </div>
              <div className="flex justify-between">
                <p className="flex text-xl items-center text-gray-400 font-bold">
                  0.000
                </p>
                <div className="bg-gray-300 rounded-xl flex justify-center">
                  <p className="text-gray-400 flex text-sm font-bold items-center py-3 px-6 cursor-not-allowed">
                    Harvest
                  </p>
                </div>
              </div>
              <div className="py-2 flex uppercase">
                <p className="text-xs text-sky-500 font-bold">spy-busd</p>
                <p className="text-xs font-bold pl-1">staked</p>
              </div>
              <button
                type="button"
                className="font-bold inline-block w-full py-2 bg-blue-700 text-white text-lg rounded-xl hover:bg-blue-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Connect Wallet
              </button>

              <div class="border-b border-gray-300">
                <br />
              </div>

              <div className="flex justify-center pt-4 dropdown dropdown-hover pb-10 cursor-pointer">
                <label tabindex="0" className="btn m-1 bg-white">
                  <p className="text-blue-600 font-bold">Details</p>
                </label>
                <div
                  tabindex="0"
                  className="dropdown-content menu p-5 pb-10 shadow bg-base-100 rounded-box w-full"
                >
                  <div className="flex justify-between">
                    <div className="font-bold text-blue-400">
                      Total Liquidity:
                    </div>
                    <div className="font-bold text-blue-400">$816,223</div>
                  </div>
                  <div className="py-2 flex">
                    <p className="text-sm text-sky-500 font-bold">Get</p>
                    <p className="text-sm uppercase text-sky-500 font-bold pl-1">
                      spy-busd
                    </p>
                  </div>
                  <div className="py-2 flex">
                    <p className="text-sm text-sky-500 font-bold">View</p>
                    <p className="text-sm text-sky-500 font-bold pl-1">
                      Contract
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card [3] */}
        <div className="flex justify-center">
          <div className="block p-6 w-96 h-full rounded-lg shadow-lg bg-white overflow-x-hidden">
            <div className="flex justify-between overflow-hidden group">
              <div className="flex">
                <img className="w-16 h-16" src={Image} alt="coin" />
              </div>

              <div className="block">
                <p className="flex justify-end items-center text-gray-900 text-xl font-medium mb-2">
                  SPY NFT Pool (V3)
                </p>
                <div className="flex justify-end">
                  <div className="bg-white border-solid border-2 border-sky-500 rounded-xl">
                    <div className="flex items-center px-3 py-1">
                      <div>
                        <img className="w-4 h-4" src={Checklist} alt="ceklis" />
                      </div>
                      <div>
                        <p className="ml-2 text-xs font-bold">Core</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <div className="flex justify-center">APY:</div>
              <div className="flex">
              <a href="#" className="font-bold pr-2 hover:text-black">908.22%</a>
                <img className="w-4 h-6" src={Calc} alt="calc" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">Total Power Staked:</div>
              <div className="font-bold">-</div>
            </div>
            <div className="flex justify-between">
              <div className="">Earn:</div>
              <div className="font-bold">SPY + Fees</div>
            </div>
            <div className="flex justify-between">
              <div className="">Harvest Lockup:</div>
              <div className="font-bold">12 Hour (s)</div>
            </div>
            <div className="flex justify-between">
              <div className="">Harvest Fee:</div>
              <div className="font-bold">10 %</div>
            </div>
            <div className="flex justify-between">
              <div className="uppercase">rewards rest in</div>
              <div className="font-bold">155:33:15</div>
            </div>
            <div className="py-2 flex uppercase">
              <p className="text-xs text-sky-500 font-bold">spy</p>
              <p className="text-xs font-bold pl-1">earned</p>
            </div>
            <div className="flex justify-between">
              <p className="flex text-xl items-center text-gray-400 font-bold">
                0.000
              </p>
              <div className="bg-gray-300 rounded-xl flex justify-center">
                <p className="text-gray-400 flex text-sm font-bold items-center py-3 px-6 cursor-not-allowed">
                  Harvest
                </p>
              </div>
            </div>
            <div className="py-2 flex uppercase">
              <p className="text-xs text-sky-500 font-bold">spy-busd</p>
              <p className="text-xs font-bold pl-1">staked</p>
              <div class="relative flex flex-col items-center group cursor-pointer ml-2">
                <svg
                  class="w-5 h-5 flex"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 2 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="absolute bottom-0 w-64 flex flex-col items-center hidden mb-6 group-hover:flex">
                  <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                    Harvest button is enabled only when your earnings is over 20 SPY
                  </span>
                  <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="font-bold inline-block w-full py-2 bg-blue-700 text-white text-lg rounded-xl hover:bg-blue-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Connect Wallet
            </button>

            <div class="border-b border-gray-300">
              <br />
            </div>

            <div className="flex justify-center pt-4 dropdown dropdown-hover pb-10 cursor-pointer">
              <label tabindex="0" className="btn m-1 bg-white">
                <p className="text-blue-600 font-bold">Details</p>
              </label>
              <div
                tabindex="0"
                className="dropdown-content menu p-2 px-4 shadow bg-base-100 rounded-box w-full"
              >
                <div className="flex justify-between">
                  <div className="font-bold text-blue-400">
                    Total Liquidity:
                  </div>
                  <div className="font-bold text-blue-400">$816,223</div>
                </div>
                <div className="py-2 flex">
                  <p className="text-sm text-sky-500 font-bold">Get</p>
                  <p className="text-sm uppercase text-sky-500 font-bold pl-1">
                    spy-busd
                  </p>
                </div>
                <div className="py-2 flex">
                  <p className="text-sm text-sky-500 font-bold">View</p>
                  <p className="text-sm text-sky-500 font-bold pl-1">
                    Contract
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
