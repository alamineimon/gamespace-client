import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';
import GameComment from './GameComment';

const GameDetails = () => {
    const { user } = useContext(AuthContext);
    const gameDetails = useLoaderData();
    const [gameDisplay, setGameDisplay] = useState();

    const { _id, imgBG, title, ratings, imgScreenshot, releaseDate, totalPlayer, description, price, img, videolink, gameDownload } = gameDetails;

    const { data: showAllGame, isLoading } = useQuery({
        queryKey: ["downloadGames"],
        queryFn: async () => {
            const res = await fetch(
                "https://gamespace-server.vercel.app/downloadGames"
            );
            const data = await res.json();
            return data;
        },
    });

    
    const gameDisplayShow = data => {
        setGameDisplay(data)
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className='text-white'>
            <div className=" w-full  flex flex-col items-center justify-center relative transition-all">
                <img src={imgBG} className=' w-full h-[600px]' alt="" />

            </div>
            <div className='bg-gray-900 px-5 md:px-10'>
                <div className='flex justify-center items-center space-x-2 lg:space-x-20 space-y-4 pt-5 pb-16'>
                    <div className="hidden md:block -mt-32 z-10 ">
                        <img src={img} className='w-44 md:w-60 p-4 bg-yellow-500' alt="" />
                    </div>
                    <div className=''>
                        <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl hover:underline cursor-pointer ">{title} </h1>
                    </div>

                    <div className="w-72 p-3 flex justify-between items-center bg-amber-700">
                        <div>
                            <h3 className="text-lg md:text-2xl font-bold">Game Rating</h3>
                            <h4 className="text-sm md:text-md lg:text-xl">User Ratings: {ratings}</h4>
                            <h4 className="text-sm md:text-md lg:text-xl">Our Review: 9/10</h4>
                        </div>
                        <div>
                            <FaStar className='text-yellow-500 text-5xl md:text-7xl'></FaStar>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800 pt-6 pb-4'>
                <div className='md:flex justify-between mx-5 md:mx-10 gap-5 space-y-5'>
                    <div className='w-full md:w-3/6 lg:w-3/6 '>
                        <div className='space-y-3'>
                            <div className='flex justify-between'>
                                <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>
                                <a href={gameDownload} className="py-3 text-secondary hover:translate-y-1  relative px-5 rounded-none font-bold bg-yellow-500 uppercase">Download</a>
                            </div>
                            <hr className='text-gray-400' />
                        </div>
                        <div className='grid grid-cols-2 pt-5'>
                            <div className='space-y-2'>
                                <p>Title : </p>
                                <p>Number of Players : </p>
                                <p>Ratings : </p>
                                <p>Release Date : </p>
                                <p>Price : </p>
                                <p>Videolink : </p>
                                <p>Description : </p>
                            </div>
                            <div className='space-y-2'>
                                <p>{title} </p>
                                <p>{totalPlayer}</p>
                                <p>{ratings}</p>
                                <p>{releaseDate}</p>
                                <p className='font-bold  text-xl'>$ <span className='text-amber-500'>{price}</span></p>
                                <a href={videolink} target="_blank" className='hover:underline text-blue-600 text-sm md:text-lg' alt='' >{videolink ? videolink.slice(0, 29) : 'videolink'}</a>
                                <p className='text-justify'>{description} </p>
                            </div>
                        </div>
                        <div className='space-y-3 mt-8'>
                            <h1 className="text-2xl md:text-3xl font-bold">Screenshots (05)</h1>
                            <hr className='text-gray-400' />
                        </div>
                        <div className=''>
                            < Carousel
                                infiniteLoop
                                autoPlay
                                interval={3000}
                                showArrows={true}
                            >
                                {
                                    imgScreenshot?.map((desplayGame, i) =>
                                        <div className="hero w-full h-52 " >
                                            <div className="hero-content text-center text-neutral-content">
                                                <div className="flex h-full w-full ">
                                                    <img src={desplayGame?.screenshot} className='w-full bg-cover' alt='' />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </ Carousel>
                        </div>
                      <GameComment></GameComment>
                    </div>
                    <div className='w-full md:w-4/12 bg-yellow-600 mt-5 md:mt-0 '>
                        <div className='p-4 space-x-4'>
                            {
                                showAllGame?.map((desplayGame, i) =>
                                    <Link onClick={() => gameDisplayShow(gameDetails)} to={`/downloadGames/${_id}`}>
                                        <div className='grid grid-cols-2 items-center gap-4'>
                                            <div className='max-w-32 h-32'>
                                                <img src={desplayGame?.img} className='w-full h-full' alt="" />
                                            </div>
                                            <div>
                                                <h5 className='text-xl md:text-sm lg:text-xl hover:underline'>{desplayGame?.title}</h5>
                                            </div>
                                        </div>
                                        <hr className='mt-5' />
                                    </Link>

                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;