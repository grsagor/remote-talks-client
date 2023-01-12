import React from "react";
import { Link } from "react-router-dom";
import Features from "../Features/Features";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
	return (
		<div>
      <Features></Features>
			<FeedBack></FeedBack>
		</div>
	);
};

export default Home;
