import React from "react";

const Cards = () => {
  return (
    <div className="flex px-12 h-[120px] gap-6 justy-center items-center">
      <div className="card h-[120px] bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://i.ibb.co/Csq5gFZ/wallpaperflare-com-wallpaper-1.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card h-[120px]  bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://i.ibb.co/yNSX0MQ/Cute-anime-girl-wallpaper-download.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card h-[120px] bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://i.ibb.co/sbGx02W/wallpaperflare-com-wallpaper.jpg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
