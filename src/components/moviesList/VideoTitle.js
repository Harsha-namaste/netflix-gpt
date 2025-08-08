import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-80 px-12 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='p-6 text-md w-1/2'>{overview}</p>
            <div >
                <button className="bg-white  text-black  p-4 px-12 rounded-lg text-xl hover:bg-opacity-80">
                    <span>▶️</span> Play
                </button>
                <button className="mx-2 bg-gray-500 text-white  p-4 px-12 rounded-lg text-xl"><span>ℹ️</span>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
