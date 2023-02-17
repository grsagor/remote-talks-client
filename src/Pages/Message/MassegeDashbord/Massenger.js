import React from "react";
import Navbar from "../Shared/Navber/Navber";
import { io } from "socket.io-client";
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
import { useRef } from "react";

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

  const [curentFriend, setCurrentFriend] = useState("")
  const [curentuser, setCurrentuser] = useState({});
 
  useEffect(() => {
    fetch(`https://remote-server-devsobuj910.vercel.app/curentuser?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentuser(data);
      });
  }, [user?.email]);

  const [allUsers, setAlluser] = useState([]);

  useEffect(() => {
    fetch(`https://remote-server-devsobuj910.vercel.app/allusers?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
   
        setAlluser(data);
      });
  }, [user?.email]);

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
      massege: massege,
      img:img,
      time:moment().format('LT'),
      senderId: curentuser._id,
      reciberId: curentFriend._id,
      msg: curentFriend._id
    };

socket.current.emit("sendMessage", {
  senderId: curentuser._id,
  reciberId: curentFriend._id,
  massege: massege
});


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
          // refetch()
          setmsg("");
          setImg("");
          refetch()
        }
      });
  };

  // get messages

  const { data: conversation = [], refetch } = useQuery({
    queryKey: ["conversation", curentuser._id, curentFriend._id],
    queryFn: async () => {
      const res = await  fetch(`https://remote-server-devsobuj910.vercel.app/getmsg/${curentuser._id}/${curentFriend._id}`)
      const data = await res.json();

      return data;
    }
  });
 

  //socekt io is  connect  here

  const socket = useRef();
  useEffect(()=>{
socket.current=io("ws://localhost:8000")


  },[])

  const [socetmsg,setSocketmsg]=useState(null)


  
useEffect(()=>{
  socket.current.on("getmsg",(data)=>{
setSocketmsg(data)
  });
},[])

useEffect(()=>{
  if(curentFriend && socetmsg){
    if( socetmsg.senderId ===curentFriend._id ){
      conversation.push(socetmsg)
    }
  }
})


useEffect(()=>{
  socket.current.emit("addUser", curentuser._id);
  console.log(curentuser._id +"curent userid");
},[curentuser])




const [onlineuser,setOnlineuser] =useState([])

useEffect(()=>{
socket.current.on("senduser", (data) => {
 setOnlineuser(data)
});
},[])





  return (
    <div>
      <Navbar></Navbar>

      <>
        {/* Messenger Clone */}
        <div className="h-screen w-full flex antialiased text-gray-200 shadow-2xl bg-gray-900 overflow-hidden">
          <div className="flex-1 flex flex-col">
            <div className="border-b- shadow-xl border-gray-800 p-2 flex flex-row z-20">
              <div className="bg-red-600 w-3 h-3 rounded-full mr-2" />
              <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2" />
              <div className="bg-green-500 w-3 h-3 rounded-full mr-2" />
            </div>
            <main className="flex-grow flex flex-row min-h-0">
              <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
                <div className="header p-4 flex flex-row justify-center items-center flex-none">
                  <div className="w-28 h-28 relative flex flex-shrink-0">
                    <img
                      className="rounded-full w-full h-full object-cover"
                      alt="ravisankarchinnam"
                      src={curentuser.img}
                    />
                  </div>
              
                  
                </div>
             

                <div className="contacts p-2 flex-1 overflow-y-scroll">
                  {allUsers?.reverse().map((user) => (
                    <Users
                      onlineuser={onlineuser}
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
                          plsease select a friend
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
                            className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
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
                  plsease select friend{" "}
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
