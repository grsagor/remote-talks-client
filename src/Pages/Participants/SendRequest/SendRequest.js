import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import EachRequest from "./EachRequest";
import "../../../CommonStyles/CommonStyle.css";

const SendRequest = ({ users }) => {
	const { user } = useContext(AuthContext);
	const [loggedUser, setLoggedUser] = useState();

	useEffect(() => {
		fetch(`https://remote-talks-server.vercel.app/users?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => setLoggedUser(data[0]));
	}, []);

	const showUsers1 = users?.filter((user) => {
		return loggedUser?.sentRequest?.every((mail) => mail !== user?.email);
	});
	const showUsers2 = showUsers1?.filter((user) => {
		return loggedUser?.requests?.every((mail) => mail !== user?.email);
	});
	const showUsers = showUsers2?.filter((user) => {
		return loggedUser?.friends?.every((mail) => mail !== user?.email);
	});

	return (
		<div>
			<h1 className="text-3xl font-bold my-3">All Participants</h1>
			<div className="flex flex-col gap-y-4">
				{user ? (
					<>
						{showUsers?.map((mongouser) => (
							<EachRequest
								key={mongouser._id}
								mongouser={mongouser}
								users={users}
							></EachRequest>
						))}
					</>
				) : (
					<>
						<h1>Loading</h1>
					</>
				)}
			</div>
		</div>
	);
};

export default SendRequest;
