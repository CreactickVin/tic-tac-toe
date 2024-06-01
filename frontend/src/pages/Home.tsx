import xIcon from "../assets/icon-x.svg";
import oIcon from "../assets/icon-o.svg";
import oDarkIcon from "../assets/icon-o-dark.svg";
import oLightIcon from "../assets/icon-o-light.svg";
import xDarkIcon from "../assets/icon-x-dark.svg";
import xLightIcon from "../assets/icon-x-light.svg";
import { useState } from "react";

function Home() {
  const [isXClicked, setIsXClicked] = useState(true);

  return (
    <div className="bg-[#1a2a33] h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mb-10 w-1/2">
        <img src={xIcon} alt="ox-Icon" className="mr-3" width={40} />
        <img src={oIcon} alt="o-Icon" width={40} />
      </div>
      <div className="bg-[#1f3641] w-1/3 rounded-xl p-6 mb-8 custom-box-shadow-dark">
        <h1 className="text-[#a8bfc9] font-outfit font-bold mb-4 text-center">
          PICK PLAYER 1'S MARK
        </h1>
        <div className="w-full flex justify-around items-center bg-[#1a2a33] p-3 rounded-xl mb-4">
          <button
            className={`w-full flex justify-center rounded-xl py-3 transition-colors duration-300 ${isXClicked ? 'bg-[#a8bfc9]' : 'hover:bg-[#1d303a]'}`}
            onClick={() => setIsXClicked(true)}
          >
            <img src={isXClicked ? xDarkIcon : xLightIcon} alt="x-Icon" width={40} />
          </button>
          <button
            className={`w-full flex justify-center rounded-xl py-3 transition-colors duration-300 ${!isXClicked ? 'bg-[#a8bfc9]' : 'hover:bg-[#1d303a]'}`}
            onClick={() => setIsXClicked(false)}
          >
            <img src={!isXClicked ? oDarkIcon : oLightIcon} alt="o-Icon" width={40} />
          </button>
        </div>
        <h1 className="text-[#a8bfc9] font-outfit opacity-40 text-sm text-center">
          REMEMBER: X GOES FIRST
        </h1>
      </div>
      <div>
        <button className="px-36 custom-box-shadow-blue text-[#1a2a33] font-outfit p-6 bg-[#31c3bd] font-semibold rounded-xl text-xl">
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  );
}

export default Home;
