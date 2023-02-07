import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsPersonFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";

const HtmlGamesCards = ({ game }) => {
  const { gameName, authorName, gameLink, thumbnail, category, description, _id, } = game;

  const { user, theme } = useContext(AuthContext);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [createActivePlayerProfile, setCreateActivePlayerProfile] = useState({})
  const imageHostingKey = process.env.f71054c9a0ba3277364d756c3417b18e;

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.from?.state.pathname || '/'

  useEffect(() => {
    fetch(`http://localhost:9000/activePlayres`)
      .then(res => res.json())
      .then(data => {
        const activePlayers = data.find(players => players.email === user.email);
        setCreateActivePlayerProfile(activePlayers);

      })
  }, [])
  console.log(createActivePlayerProfile);

  const handlerPlayGame = () => {
    if (createActivePlayerProfile) {
      return navigate(from, { replace: true });
    }
    else {
      activePlayersInformation();
    }

  }

  const activePlayersInformation = data => {
    const image = data.playerImg[0];
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgbb => {
        if (imgbb.success) {
          const players = {
            player_name: user.displayName,
            email: user.email,
            playerImg: imgbb.data.url,
            playersExpert: data.playersExpert
          }
          console.log(players)
          fetch(`http://localhost:9000/activePlayres`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(players)
          })
            .then(res => res.json())
            .then(result => {
              toast.success(`Profile Create successfully`);
              return navigate(from, { replace: true });

            })
        }
      })

  }

  return (
    <div className="card w-full image-full  rounded-sm border group hover:border-primary">
      <figure className="before:hidden">
        <img
          src={thumbnail}
          alt={gameName}
          className="w-full group-hover:scale-125"
        />
      </figure>
      <div className="card-body text-center  flex flex-col justify-center space-y-5">
        <h2 className="card-title text-mainHeading mx-auto text-xl  font-bold uppercase">
          {gameName}
        </h2>
        <div className="card-actions justify-center">
          <label
            to={`/gameshtml/${_id}`}
            onClick={handlerPlayGame}
            htmlFor="booking-modal"
            className="px-6 py-3 hover:text-white text-black bg-primary rounded-none"> Play Now</label>

          <Link
            to={`/gameshtml/${_id}`}
            className="btn btn-bg1/30 rounded-none group-hover:bg-primary font-bold group-hover:text-secondary"
          >
            Play Now
          </Link>
        </div>
      </div>
      {/* //////////////............ Active Players Information ...........///////////////// */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-200 relative rounded-xl">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <BsPersonFill className='profile-icon'></BsPersonFill>
          <form onSubmit={handleSubmit(activePlayersInformation)} className="space-y-6 pt-8">
            <div className="space-y-1 text-sm">
              <input type="text" {...register("displayName",)} disabled defaultValue={user?.displayName} className="w-full text-base px-4 py-3 rounded-md border border-black text-black focus:border-violet-400" />
              {errors.name && <p className='text-orange-400'>{errors.name?.message}</p>}
            </div>
            <div className="space-y-1 text-sm">
              <input type="email" {...register("email",)} disabled defaultValue={user?.email} placeholder="Email Address" className="w-full px-4 py-3 rounded-md border border-black text-black focus:border-violet-400" />
              {errors.name && <p className='text-orange-400'>{errors.name?.message}</p>}
            </div>
            <div className="space-y-1 text-sm">
              <input type="file" {...register("playerImg", { required: "Image is required" })} placeholder="playerImg" className="w-full px-4 py-3 rounded-md border border-black text-black focus:border-violet-400" />
              {errors.name && <p className='text-orange-400'>{errors.name?.message}</p>}
            </div>

            <div className="space-y-1 text-sm">
              <select {...register("playersExpert",)} className="w-full px-4 py-3 rounded-md border border-black text-black focus:border-violet-400" >
                <option >Beginner</option>
                <option >Intermediate</option>
                <option >Experted</option>
              </select>
            </div>

            <button type='submit' className="block w-full p-3 text-center font-bold rounded-lg text-black bg-yellow-400">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HtmlGamesCards;
