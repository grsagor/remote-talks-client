import React from "react";
import Navbar from "../Shared/Navber/Navber";
import Profile from "./Profile/Profile";
import Chat from "./Chat/Chat";
import "./Chat/Chat.css";
import Users from "./Users/Users.js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useEffect } from "react";
import moment from "moment";
import Emoji from "./Emoji/Emoji";
import { AiOutlineLink, AiOutlineSend } from "react-icons/ai";
import { toast } from "react-hot-toast";

const Massenger = () => {
  const { user } = useContext(AuthContext);
  const [ispickervidevle, setIspickervisible] = useState(false);

  const [msg, setmsg] = useState("");
  const [img, setImg] = useState();

  const handleEmoji = (emoji) => {
    const newemoji = emoji?.native;
    setmsg(newemoji + msg);
  };

  const [curentFriend, setCurrentFriend] = useState({});
  const [curentuser, setCurrentuser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/curentuser?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentuser(data);
      });
  }, [user]);

  const { data: allUsers = [], isLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allusers");
      const data = await res.json();
      return data;
    }
  });

  const handleimg = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("image", img);
    const url =
      "https://api.imgbb.com/1/upload?key=361db61aaf2e5a08fc416c3257898005";

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((imgData) => {
        const img = imgData.data.url;
        setImg(img);
      })
      .catch((e) => {
        toast.error("internet  problem");
      });
  };

  //handle massege
  const handelmassege = (event) => {
    event.preventDefault();
    const from = event.target;
    const massege = msg;
    const images=img;
    const createMassge = {
      massege: massege ? massege : <e>😀</e>,
      massegeSendTime: moment().format("LT"),
      senderId: curentuser._id,
      sendeName: curentuser.name,
      img: images,
      senderPhoto: curentuser.img,
      reciberName: curentFriend.name,
      riciberphto: curentFriend.img,
      reciberId: curentFriend._id
    };

    fetch("http://localhost:5000/massege", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(createMassge)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          from.reset()
          
        }
       
      });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">loading ,...... </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>

      <>
        {/* Messenger Clone */}
        <div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
          <div className="flex-1 flex flex-col">
            <div className="border-b-2 border-gray-800 p-2 flex flex-row z-20">
              <div className="bg-red-600 w-3 h-3 rounded-full mr-2" />
              <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2" />
              <div className="bg-green-500 w-3 h-3 rounded-full mr-2" />
            </div>
            <main className="flex-grow flex flex-row min-h-0">
              <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
                <div className="header p-4 flex flex-row justify-between items-center flex-none">
                  <div
                    className="w-16 h-16 relative flex flex-shrink-0"
                    style={{ filter: "invert(100%)" }}
                  >
                    <img
                      className="rounded-full w-full h-full object-cover"
                      alt="ravisankarchinnam"
                      src="https://avatars3.githubusercontent.com/u/22351907?s=60"
                    />
                  </div>
                  <p className="text-md font-bold hidden md:block group-hover:block">
                    Messenger
                  </p>
                  <a
                    href="#"
                    className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full fill-current"
                    >
                      <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
                    </svg>
                  </a>
                </div>
                <div className="search-box p-4 flex-none">
                  <form onSubmit={(event) => {}}>
                    <div className="relative">
                      <label>
                        <input
                          className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                          type="text"
                          value={"serch bar"}
                          placeholder="Search Messenger"
                        />
                        <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                          <svg viewBox="0 0 24 24" className="w-6 h-6">
                            <path
                              fill="#bbb"
                              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                            />
                          </svg>
                        </span>
                      </label>
                    </div>
                  </form>
                </div>

                <div className="contacts p-2 flex-1 overflow-y-scroll">
                  {allUsers?.map((user) => (
                    <Users
                      setCurrentFriend={setCurrentFriend}
                      key={user._id}
                      user={user}
                    ></Users>
                  ))}
                </div>
              </section>
              <section className="flex flex-col flex-auto border-l border-gray-800">
                <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
                  <div className="flex">
                    <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                      <img
                        className="shadow-md rounded-full w-full h-full object-cover"
                        src={curentFriend.img}
                        alt=""
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-bold">{curentFriend.name}</p>
                      <p>Active 1h ago</p>
                    </div>
                  </div>

                  <div className="flex">
                    <a
                      href="#"
                      className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current text-blue-500"
                      >
                        <path d="M11.1735916,16.8264084 C7.57463481,15.3079672 4.69203285,12.4253652 3.17359164,8.82640836 L5.29408795,6.70591205 C5.68612671,6.31387329 6,5.55641359 6,5.00922203 L6,0.990777969 C6,0.45097518 5.55237094,3.33066907e-16 5.00019251,3.33066907e-16 L1.65110039,3.33066907e-16 L1.00214643,8.96910337e-16 C0.448676237,1.13735153e-15 -1.05725384e-09,0.445916468 -7.33736e-10,1.00108627 C-7.33736e-10,1.00108627 -3.44283713e-14,1.97634814 -3.44283713e-14,3 C-3.44283713e-14,12.3888407 7.61115925,20 17,20 C18.0236519,20 18.9989137,20 18.9989137,20 C19.5517984,20 20,19.5565264 20,18.9978536 L20,18.3488996 L20,14.9998075 C20,14.4476291 19.5490248,14 19.009222,14 L14.990778,14 C14.4435864,14 13.6861267,14.3138733 13.2940879,14.7059121 L11.1735916,16.8264084 Z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current text-blue-500"
                      >
                        <path d="M0,3.99406028 C0,2.8927712 0.894513756,2 1.99406028,2 L14.0059397,2 C15.1072288,2 16,2.89451376 16,3.99406028 L16,16.0059397 C16,17.1072288 15.1054862,18 14.0059397,18 L1.99406028,18 C0.892771196,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M8,14 C10.209139,14 12,12.209139 12,10 C12,7.790861 10.209139,6 8,6 C5.790861,6 4,7.790861 4,10 C4,12.209139 5.790861,14 8,14 Z M8,12 C9.1045695,12 10,11.1045695 10,10 C10,8.8954305 9.1045695,8 8,8 C6.8954305,8 6,8.8954305 6,10 C6,11.1045695 6.8954305,12 8,12 Z M16,7 L20,3 L20,17 L16,13 L16,7 Z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current text-blue-500"
                      >
                        <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="chat-body p-4 flex-1 overflow-y-scroll">
                  <Chat
                    curentuser={curentuser}
                    curentFriend={curentFriend}
                  ></Chat>
                </div>

                <div className="chat-footer flex-none">
                  {img && (
                    <div className="flex justify-center items-center absolute w-28 h-23  object-cover left-1/2 -bottom-5 ">
                      <img src={img} alt="" />
                    </div>
                  )}
                  <form
                    onSubmit={handelmassege}
                    className="flex flex-row items-center p-4"
                  >
                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="w-full h-full fill-current"
                      >
                        <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <label htmlFor="image">
                        <input
                          onChange={handleimg}
                          accept="image/*"
                          type="file"
                          name="image"
                          id="image"
                          className="hidden"
                        />
                        <svg
                          id="image"
                          viewBox="0 0 20 20"
                          className="w-full h-full fill-current"
                        >
                          <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                        </svg>
                      </label>
                    </button>

                    <button
                      type="button"
                      className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                    >
                      <span className="text-xl">
                        <AiOutlineLink></AiOutlineLink>
                      </span>
                    </button>
                    <div className="relative flex-grow">
                      <label>
                        <input
                          onChange={(e) => setmsg(e.target.value)}
                          className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                          type="text"
                          defaultValue={msg}
                          placeholder="Aa"
                        />
                        <button
                          onClick={() => setIspickervisible(!ispickervidevle)}
                          type="button"
                          className="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-current"
                          >
                            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
                          </svg>

                          <div className={ispickervidevle ? "block" : "hidden"}>
                            <div className="absolute bottom-12 right-0">
                              <Emoji handleEmoji={handleEmoji}></Emoji>
                            </div>
                          </div>
                        </button>
                      </label>
                    </div>

                    {msg ||img ? (
                      <button
                        type="submit"
                        className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                      >
                        <span className="text-xl">
                          {" "}
                          <AiOutlineSend></AiOutlineSend>
                        </span>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="w-full h-full fill-current"
                        >
                          <path d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z" />
                        </svg>
                      </button>
                    )}
                  </form>
                </div>
              </section>
            </main>
          </div>
        </div>
      </>
    </div>
  );
};

export default Massenger;
