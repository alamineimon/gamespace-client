import React, { useContext } from "react";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  // const navigate = useNavigate();

  const handleSubmit = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const bio = form.bio.value;
    console.log(firstName, lastName, email, phoneNumber, bio);

    //upload image in imgBB
    const image = form.image.files[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?key=8ab0829af0fdf06d333782b540e01bbb";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const photoUrl = data.data.display_url;
        console.log(photoUrl);

        const updateUser = {
          firstName,
          lastName,
          email,
          phoneNumber,
          bio,
          photoUrl,
        };
        console.log(updateUser);
        toast("Updatttttttttttttttttte");
        // fetch(`http://localhost:5000/users${user.uid}`, {
        //   method: "PUT",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(updateUser)
        // })
        // .then((res) => res.json())
        // .then(data => console.log(data))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleCancel =()=>{
  //   process.form.rest()
  //   navigate('/profile');
  // }

  return (
    <div className=" mt-16 px-64 ">
      <div className=" p-10">
        <h1 className="text-3xl">Acount</h1>
        <hr className="mt-2 h-[2px] bg-blue-400 mb-4" />

        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-12 px-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex mr-6 space-between">
                <p className="text-xl mr-4 text-bold">Profile Picture</p>
                {user?.photoURL ? (
                  <img
                    className="rounded-full h-28"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    className="rounded-full h-28"
                    src="https://i.ibb.co/bRZmT6x/blank-profile-picture-973460-340.webp"
                    alt=""
                  />
                )}
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input type="file" id="image" name="image" accept="image/*" />
              </div>
            </div>

            <div className="flex w-full justify-between">
              <div className="w-1/2 mr-2">
                <label htmlFor="FirstName" className="block mb-2 text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  placeholder="First Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="LastName" className="block mb-2 text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                readOnly
                value={user?.email}
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="phoneNumber" className="text-sm">
                  Phone Number
                </label>
              </div>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                required
                placeholder="Enter Your Number Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="bio" className="text-sm">
                  Bio
                </label>
              </div>
              <textarea
                type="text"
                name="bio"
                id="bio"
                required
                placeholder="Enter Your Bio Here"
                className="w-full px-3 py-2 h-32 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="buttons flex">
              <button className="update">Update</button>
              {/* <button onClick={handleCancel} className="cancel">Cancel</button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
