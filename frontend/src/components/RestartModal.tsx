function RestartModal() {
    return (
        <div className='absolute top-1/4 p-20 bg-[#1f3641] text-[#1a2a33] w-full z-40 flex flex-col items-center'>
            <h1 className='text-[#a8bfc9] text-5xl'>RESTART GAME</h1>

            <div className='mt-10 text-2xl'>
                <button className='bg-[#a8bfc9] p-4 rounded-lg shadow-[inset_0_-0.4rem_0_#6991a2]' >NO, CANCEL</button>
                <button className='bg-[#f2b137] p-4 ml-6 rounded-lg shadow-[inset_0_-0.4rem_0_#b77c0c]'>YES, RESTART</button>
            </div>
        </div>
    );
}

export default RestartModal;