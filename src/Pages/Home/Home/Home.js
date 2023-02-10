import React, { useState } from "react";

import Banner from "../Banner/Banner";
import Collabaretions from "../Collabaretions/Collabaretions";
import Features from "../Features/Features";
import FeedBack from "../FeedBack/FeedBack";
import { useQuery } from "@tanstack/react-query";
import ShowFeedBack from "../ShowFeedBack/ShowFeedBack";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const Home = () => {
	const {
		data: feedbacks = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["feedback"],
		queryFn: async () => {
			const { data } = await axios.get(
				"https://remote-talks-server-tan.vercel.app/api/feedback/"
			);
			return data;
		},
	});

	return (
		<div>
			<Banner></Banner>

			<Features></Features>

			{isLoading && (
				<div className="flex justify-center">
					<Oval
						height={50}
						width={50}
						color="#4fa94d"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
						ariaLabel="oval-loading"
						secondaryColor="#4fa94d"
						strokeWidth={2}
						strokeWidthSecondary={2}
					/>
				</div>
			)}
			<ShowFeedBack feedbacks={feedbacks}></ShowFeedBack>
			<FeedBack refetch={refetch}></FeedBack>
		</div>
	);
};

export default Home;
