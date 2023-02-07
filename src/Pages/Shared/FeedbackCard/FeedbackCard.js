<<<<<<< HEAD
import React from "react";
import RatingCard from "../Rating/RatingCard";
import "./FeedbackCard.css";
function FeedbackCard({ feedback }) {
	const { message, name, rating, email } = feedback;
	return (
		<div className="p-5 break-all feedback__card mx-4 min-h-[200px] rounded-md shadow-md">
			<p className="text-base text-start capitalize">{message}</p>
			<RatingCard rating={Number(rating)} />
			<p>{name}</p>
			<a className="" href={`mailto:${email}`}>
				{email}
			</a>
		</div>
	);
}

export default FeedbackCard;
=======
import React from "react";
import RatingCard from "../Rating/RatingCard";
import "./FeedbackCard.css";
function FeedbackCard({ feedback }) {
	const { message, name, rating, email } = feedback;
	return (
		<div className="p-5 break-all feedback__card mx-4 min-h-[200px] rounded-md shadow-md">
			<p className="text-base text-start capitalize">{message}</p>
			<RatingCard rating={Number(rating)} />
			<p>{name}</p>
			<a className="" href={`mailto:${email}`}>
				{email}
			</a>
		</div>
	);
}

export default FeedbackCard;
>>>>>>> 421b7e9489cf3145122a604d5aecce40bca303f2
