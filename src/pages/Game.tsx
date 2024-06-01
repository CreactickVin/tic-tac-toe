import logo from '../assets/logo.svg'
import restart from '../assets/icon-restart.svg'

import icon_x from '../assets/icon-x.svg'
import RestartModal from "../components/RestartModal";

function Game() {
    return (
        <div className='bg-[#1a2a33] text-white min-h-screen  flex flex-col items-center font-outfit font-bold '>
            <div className='w-1/2 pt-10 flex flex-col items-center'>

                <div className='w-full flex justify-evenly items-center'>
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>

                    <div className='px-6 py-4 bg-[#1f3641] flex p-6 rounded-lg shadow-[inset_0_-0.4rem_0_#0f191e]'>
                        <img className='w-5 h-5 text-black' src={icon_x} alt="turn of"/>
                        <div className='ml-3'>TURN</div>

                    </div>

                    <button className='p-5 bg-[#dbe8ed] rounded-lg shadow-[inset_0_-0.4rem_0_#6991a2]'>
                        <img src={restart} alt="reset button"/>
                    </button>
                </div>

                {/*grid*/}
                <div className='grid grid-cols-3 gap-10 mt-4'>
                    <div
                        className="w-max bg-[#1f3641] p-8 rounded-lg before:content-path-x shadow-[inset_0_-0.5rem_0_#0f191e]"></div>
                    <div
                        className="w-max bg-[#1f3641] p-8 rounded-lg before:content-path-o shadow-[inset_0_-0.5rem_0_#0f191e]"></div>
                    <div
                        className="w-max bg-[#1f3641] p-8 rounded-lg before:content-path-x shadow-[inset_0_-0.5rem_0_#0f191e]"></div>
                    <div
                        className="w-max bg-[#1f3641] p-8 rounded-lg before:content-path-o shadow-[inset_0_-0.5rem_0_#0f191e]"></div>
                    <div
                        className="w-max bg-[#1f3641] p-8 rounded-lg before:content-path-o shadow-[inset_0_-0.5rem_0_#0f191e]"></div>
                    <div
                        className="w-max bg-[#1f3641] p-8 rounded-lg before:content-path-x shadow-[inset_0_-0.5rem_0_#0f191e]"></div>
                    <div
                        className="w-max bg-[#1f3641] p-8 rounded-lg before:content-path-o shadow-[inset_0_-0.5rem_0_#0f191e]"></div>
                    <div
                        className="w-max bg-[#1f3641] p-8 rounded-lg before:content-path-x shadow-[inset_0_-0.5rem_0_#0f191e]"></div>
                    <div
                        className="w-max bg-[#1f3641] p-8  rounded-lg before:content-path-o shadow-[inset_0_-0.5rem_0_#0f191e]"></div>

                    <div className='flex flex-col items-center text-black bg-[#31c3bd] p-3 rounded-lg'>
                        <div className='font-normal'>X (player 1)</div>
                        <div className='text-2xl'>0</div>
                    </div>

                    <div className='bg-[#a8bfc9] flex flex-col items-center text-black p-3 rounded-lg '>
                        <div className='font-normal'>Ties</div>
                        <div className='text-2xl'>0</div>
                    </div>
                    <div className='bg-[#f2b137] flex flex-col items-center text-black  p-3 rounded-lg '>
                        <div className='font-normal'>O (player 2)</div>
                        <div className='text-2xl'>0</div>
                    </div>
                </div>
                <RestartModal/>
            </div>
        </div>

    );
}

export default Game;
