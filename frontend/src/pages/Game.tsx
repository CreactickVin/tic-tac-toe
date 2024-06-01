import { useState } from 'react';
import logo from '../assets/logo.svg'
import restart from '../assets/icon-restart.svg'
import icon_x from '../assets/icon-x.svg'
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';

function Game() {

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(['X', 'O', 'O', 'O', 'X', 'O', 'X', 'O', 'O']);

    const { turn } = useParams();
    console.log("turn", turn);
    
    // const socket = io('http://localhost:8080');
    // socket.on('connect', () => {
    //     console.log("id", socket.id);

    // })

    // socket.emit('board-data',)

    function modifyData(index) {
        setData(prevData => prevData.map((item, i) => i === index ? turn : item));
    }



    return (
        <div className='bg-[#1a2a33] text-white min-h-screen  flex flex-col items-center font-outfit font-bold '>
            <div className='w-1/2 pt-10 flex flex-col items-center'>

                <div className='w-full flex justify-evenly items-center'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className='px-6 py-4 bg-[#1f3641] flex p-6 rounded-lg shadow-[inset_0_-0.4rem_0_#0f191e]'>
                        <img className='w-5 h-5 text-black' src={icon_x} alt="turn of" />
                        <div className='ml-3'>TURN</div>

                    </div>

                    <button className='p-5 bg-[#dbe8ed] rounded-lg shadow-[inset_0_-0.4rem_0_#6991a2]' onClick={() => setShowModal(true)}>
                        <img src={restart} alt="reset button" />
                    </button>
                </div>

                {/*grid*/}
                <div className='grid grid-cols-3 gap-10 mt-4'>

                    {
                        data.map((item, index) =>
                            <div
                                key={index}
                                className={`bg-[#1f3641] p-8 rounded-lg cursor-pointer ${!item ?'empty-item' :(item === 'X' ?  'w-max before:content-path-x' : 'w-max before:content-path-o')  } shadow-[inset_0_-0.5rem_0_#0f191e]`}
                                onClick={() => modifyData(index)}>
                            </div>
                        )
                    }
                    {/* <div
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
                        className="w-max bg-[#1f3641] p-8  rounded-lg before:content-path-o shadow-[inset_0_-0.5rem_0_#0f191e]"></div> */}

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
                {showModal && <div className='absolute top-1/4 p-20 bg-[#1f3641] text-[#1a2a33] w-full z-40 flex flex-col items-center'>
                    <h1 className='text-[#a8bfc9] text-5xl'>RESTART GAME</h1>

                    <div className='mt-10 text-2xl'>
                        <button className='bg-[#a8bfc9] p-4 rounded-lg shadow-[inset_0_-0.4rem_0_#6991a2]' onClick={() => setShowModal(false)}>NO, CANCEL</button>
                        <button className='bg-[#f2b137] p-4 ml-6 rounded-lg shadow-[inset_0_-0.4rem_0_#b77c0c]'>YES, RESTART</button>
                    </div>
                </div>
                }
            </div>
        </div>

    );
}

export default Game;
