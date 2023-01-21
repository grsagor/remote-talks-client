import React, { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [allusers, setAllusers] = useState([]);

  useEffect(() => {
    fetch("massegedata.json")
      .then((res) => res.json())
      .then((data) => setAllusers(data));
  }, []);

  return (
    <div>
      {allusers.map((user) => (
        <User key={user._id} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
