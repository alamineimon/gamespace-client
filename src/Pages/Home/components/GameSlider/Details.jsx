import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Details = ({ gameDetails }) => {
    const { title, description, price, img, videolink, gameDownload } = gameDetails;

    const { data: showAllGame } = useQuery({
        queryKey: ["downloadGames"],
        queryFn: async () => {
            const res = await fetch(
                "https://gamespace-server.vercel.app/downloadGames"
            );
            const data = await res.json();
            return data;
        },
    });

    return (
        <div>
            <div className='bg-gray-800 pt-6 pb-4'>
                <div className='md:flex justify-between mx-5 md:mx-10 gap-5'>
                    <div className='w-full md:w-3/6 lg:w-3/6 '>
                        <div className='space-y-3'>
                            <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>
                            <hr className='text-gray-400' />
                        </div>
                        <div className='grid grid-cols-2 pt-5'>
                            <div className='space-y-2'>
                                <p>Title : </p>
                                <p>Number of Players : </p>
                                <p>Genre : </p>
                                <p>Release Date : </p>
                                <p>Price : </p>
                                <p>Videolink : </p>
                                <p>Official Site : </p>
                                <p>Description : </p>
                            </div>
                            <div className='space-y-2'>
                                <p>{title} </p>
                                <p>333</p>
                                <p>Genre : </p>
                                <p>22 / 01 / 2023</p>
                                <p>$ {price}</p>
                                <p>Videolink : text</p>
                                <p>Official Site : text2</p>
                                <p>{description} </p>
                            </div>
                        </div>
                        <div className='space-y-3 mt-8'>
                            <h1 className="text-2xl md:text-3xl font-bold">Screenshots (20)</h1>
                            <hr className='text-gray-400' />
                        </div>
                        <div className='-mb-10'>
                            < Carousel
                                infiniteLoop
                                autoPlay
                                interval={3000}
                                showArrows={true}
                            >
                                <div className="hero" >
                                    <div className="hero-content text-center text-neutral-content">
                                        <div className="">
                                            <img src="https://images.nintendolife.com/205c1ff68b7fd/persona-4-golden-cover.cover_300x.jpg" />
                                        </div>
                                        <div className="">
                                            <img src="https://images.nintendolife.com/205c1ff68b7fd/persona-4-golden-cover.cover_300x.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="hero" >
                                    <div className="hero-content text-center text-neutral-content">
                                        <div className="">
                                            <img src="https://images.nintendolife.com/205c1ff68b7fd/persona-4-golden-cover.cover_300x.jpg" />
                                        </div>
                                        <div className="">
                                            <img src="https://images.nintendolife.com/205c1ff68b7fd/persona-4-golden-cover.cover_300x.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="hero" >
                                    <div className="hero-content text-center text-neutral-content">
                                        <div className="">
                                            <img src="https://images.nintendolife.com/205c1ff68b7fd/persona-4-golden-cover.cover_300x.jpg" />
                                        </div>
                                        <div className="">
                                            <img src="https://images.nintendolife.com/205c1ff68b7fd/persona-4-golden-cover.cover_300x.jpg" />
                                        </div>
                                    </div>
                                </div>

                            </ Carousel>
                        </div>
                    </div>
                    <div className='w-full md:w-4/12 bg-slate-500 mt-5 md:mt-0'>
                        <div className='p-4 space-x-4'>
                            {
                                showAllGame.map((desplayGame, i) =>
                                    <Link>
                                        <div className='grid grid-cols-2 items-center gap-4'>
                                            <div className='max-w-44 h-44 '>
                                                <img src={desplayGame?.img} className='w-full h-full' alt="" />
                                            </div>
                                            <div>
                                                <h5 className='text-xl hover:underline'>{desplayGame?.title}</h5>
                                            </div>
                                        </div>
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

export default Details;