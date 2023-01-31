import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Details = () => {

    // const {_id, title, description, price, img, videolink, gameDownload } = gameDetails;
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
                                <p>Description : </p>
                                <p>Price : </p>
                                <p>Videolink : </p>
                                <p>Official Site : </p>
                            </div>
                            <div className='space-y-2'>
                                <p> The Legend of Zelda: Tears of the Kingdom (Switch) </p>
                                <p>333</p>
                                <p>Genre : </p>
                                <p>22 / 01 / 2023</p>
                                <p>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, adipisci! </p>
                                <p>price : $234 </p>
                                <p>Videolink : text</p>
                                <p>Official Site : text2</p>
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
                            <Link>
                                <div className='grid grid-cols-2 items-center gap-4'>
                                    <div className='max-w-44 h-44 '>
                                        <img src="https://images.nintendolife.com/3f71c3fc4cdaa/legend-of-zelda-tears-of-the-kingdom-artwork.1920x350.jpg" className='w-full h-full' alt="" />
                                    </div>
                                    <div>
                                        <h5 className='text-xl hover:underline'>The Legend of Zelda: Tears of the Kingdom (Switch)</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link>
                                <div className='grid grid-cols-2 items-center gap-4'>
                                    <div className='max-w-44 h-44 '>
                                        <img src="https://images.nintendolife.com/3f71c3fc4cdaa/legend-of-zelda-tears-of-the-kingdom-artwork.1920x350.jpg" className='w-full h-full' alt="" />
                                    </div>
                                    <div>
                                        <h5 className='text-xl hover:underline'>The Legend of Zelda: Tears of the Kingdom (Switch)</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link>
                                <div className='grid grid-cols-2 items-center gap-4'>
                                    <div className='max-w-44 h-44 '>
                                        <img src="https://images.nintendolife.com/3f71c3fc4cdaa/legend-of-zelda-tears-of-the-kingdom-artwork.1920x350.jpg" className='w-full h-full' alt="" />
                                    </div>
                                    <div>
                                        <h5 className='text-xl hover:underline'>The Legend of Zelda: Tears of the Kingdom (Switch)</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;