import React from "react";
// import Navbar from "../Shared/Navber/Navber";
import { io } from "socket.io-client";
import Chat from "./Chat/Chat";
import "./Chat/Chat.css";
import Users from "./Users/Users.js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthProvider";
import { useEffect } from "react";
import moment from "moment";
import Emoji from "./Emoji/Emoji";
import { AiOutlineLink, AiOutlineSend } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
// import { AuthContext } from "../../../context/AuthProvider";

const Massenger = () => {
  const { user } = useContext(AuthContext);

  //emoji open and close
  const [ispickervidevle, setIspickervisible] = useState(false);

  const [msg, setmsg] = useState("");
  const [img, setImg] = useState();

  //manage emoji
  const handleEmoji = (emoji) => {
    let newemoji = emoji.native;

    setmsg((msg) => [msg + newemoji]);
  };

  const [curentFriend, setCurrentFriend] = useState("");
  const [curentuser, setCurrentuser] = useState({});

  useEffect(() => {
    fetch(
      `https://remote-server-devsobuj910.vercel.app/curentuser?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentuser(data);
      });
  }, [user?.email]);

  const [allUsers, setAlluser] = useState([]);
  const [searchName, setSearchName] = useState("");

  //get all users
  useEffect(() => {
    fetch("https://remote-server-devsobuj910.vercel.app/allUsers")
      .then((res) => res.json())
      .then((data) => {
        const filteruser = data.filter(
          (user) => user.email !== curentuser.email
        );

        setAlluser(filteruser);
      });
  }, [curentuser?.email]);

  // Filter the users array based on the search name
  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(searchName.toLowerCase())
  );

  // Handle changes to the search input field
  const handleSearchInputChange = (event) => {
    setSearchName(event.target.value);
  };

  //handleimage
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
    const createMassge = {
      massege: massege ? massege : "👍",
      img: img,
      time: moment().format("LT"),
      senderId: curentuser._id,
      reciberId: curentFriend._id,
      msg: curentFriend._id
    };

    fetch("https://remote-server-devsobuj910.vercel.app/sendmsg", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(createMassge)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          from.reset();
          refetch();
          setmsg("");
          setImg("");
        }
      });
  };

  // get messages

  const { data: conversation = [], refetch } = useQuery({
    queryKey: ["conversation", curentuser._id, curentFriend._id],
    queryFn: async () => {
      const res = await fetch(
        `https://remote-server-devsobuj910.vercel.app/getmsg/${curentuser._id}/${curentFriend._id}`
      );
      const data = await res.json();

      return data;
    }
  });

  return (
    <div>
      {/* <Navbar></Navbar> */}

      <>
        {/* Messenger Clone */}
        <div className="h-screen w-full flex antialiased text-gray-200 shadow-2xl  overflow-hidden">
          <div className="flex-1 flex flex-col">
            <main className="flex-grow flex flex-row min-h-0">
              <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
                <>
                  <div className="header p-4 flex flex-row justify-between items-center flex-none">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img
                        className="rounded-full w-full h-full object-cover"
                        alt=""
                        src={curentuser.img}
                      />
                    </div>
                    <p className="text-md pr-3 font-bold hidden md:block group-hover:block">
                      Messenger
                    </p>
                  </div>
                  <div className="search-box p-4 flex-none">
                    <form>
                      <div className="relative">
                        <label>
                          <input
                            type="text"
                            value={searchName}
                            onChange={handleSearchInputChange}
                            className="rounded-full py-2 pr-6 pl-10 w-full border border-white  only: only:focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in bg-transparent"
                            placeholder="Search friend"
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
                </>

                <div className="contacts relative p-2 flex-1 overflow-y-scroll">
                  {filteredUsers?.map((user) => (
                    <Users
                      curentuser={curentuser}
                      setCurrentFriend={setCurrentFriend}
                      key={user._id}
                      user={user}
                    ></Users>
                  ))}

               
                </div>
              </section>

              {curentFriend ? (
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
                      <div className="text-sm flex items-center">
                        <p className="font-bold">{curentFriend.name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="chat-body p-4 flex-1 overflow-y-scroll">
                    {curentFriend || curentFriend.length > 0 ? (
                      <Chat
                        conversation={conversation}
                        curentuser={curentuser}
                        curentFriend={curentFriend}
                      ></Chat>
                    ) : (
                      <div>
                        <h2 className="text-4xl justify-center items-center">
                          please select a friend
                        </h2>
                      </div>
                    )}
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

                      <div className="relative flex-grow">
                        <label>
                          <input
                            onChange={(e) => setmsg(e.target.value)}
                            className="rounded-full py-2 pl-3 pr-10 w-full border border-white    focus:outline-none text-gray-200 focus:shadow-md  bg-transparent transition duration-300 ease-in"
                            type="text"
                            Value={msg}
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

                            <div
                              className={ispickervidevle ? "block" : "hidden"}
                            >
                              <div className="absolute bottom-12 right-0">
                                <Emoji handleEmoji={handleEmoji}></Emoji>
                              </div>
                            </div>
                          </button>
                        </label>
                      </div>

                      {msg || img ? (
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
              ) : (
                <h2 className="text-4xl flex justify-center items-center m-auto capitalize ">
                  please select friend{" "}
                </h2>
              )}
            </main>
          </div>
        </div>
      </>
    </div>
  );
};

export default Massenger;
