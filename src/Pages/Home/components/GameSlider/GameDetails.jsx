import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Details from './Details';

const GameDetails = () => {
    const gameDetails = useLoaderData()

    // const {_id, title, description, price, img, videolink, gameDownload } = gameDetails;
    console.log(gameDetails);

    return (
        <div className='text-white'>
            <div className=" w-full max-h-[87vh] flex flex-col items-center justify-center relative transition-all">
                <img src="https://images.nintendolife.com/3f71c3fc4cdaa/legend-of-zelda-tears-of-the-kingdom-artwork.1920x350.jpg" className='min-h-[87vh] ' alt="" />
                {/* <div className=" h-full w-full bg-black/50 z-10"></div> */}
            </div>
            <div className='bg-gray-900 px-5 md:px-10'>
                <div className='md:flex justify-center space-x-4 space-y-4 pt-12 pb-16'>
                    <div className="text-center -mt-44 z-20 ">
                        <img src="https://images.nintendolife.com/205c1ff68b7fd/persona-4-golden-cover.cover_300x.jpg" className='p-4 bg-yellow-500' alt="" />
                    </div>
                    <div className='flex'>
                        <div className='w-4/6'>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl hover:underline cursor-pointer">The Legend of Zelda: Tears of the Kingdom (Switch) </h1>
                        </div>
                        <div className="w-72 max-h-48 p-3 flex justify-between items-center bg-amber-700">
                            <div>
                                <h3 className="text-lg md:text-2xl font-bold">Game Rating</h3>
                                <h4 className="text-md md:text-xl">User Ratings: 238</h4>
                                <h4 className="text-md md:text-xl">Our Review: 9/10</h4>
                            </div>
                            <div>
                                <FaStar className='text-yellow-500 text-5xl md:text-7xl'></FaStar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Details/>
        </div>
    );
};

export default GameDetails;