import React, { useState } from "react";
import RatingCard from "../Rating/RatingCard";
import "./FeedbackCard.css";
function FeedbackCard({ feedback }) {
	const { message, name, rating, email } = feedback;
	const [messageDetails, setMessageDetails] = useState(false);
	return (
		<div
			className={`p-5 break-all feedback__card mx-4 ${
				messageDetails ? "h-auto" : "h-[200px]"
			} rounded-md shadow-md relative`}
		>
			<p className="font-bold">{name}</p>
			<a
				className=" pb-2 hover:underline hover:text-gray-300"
				href={`mailto:${email}`}
			>
				{email}
			</a>
			<p className="text-base text-start capitalize mt-2">
				{message?.length > 100 ? message.substring(0, 100) : message}
				{!messageDetails && message?.length > 100 && (
					<>
						..
						<span
							onClick={() => setMessageDetails((prev) => !prev)}
							className="lowercase text-xl cursor-pointer hover:underline font-semibold text-[#1F42BF]"
						>
							see more
						</span>
					</>
				)}
				{messageDetails && (
					<>
						<span>{message.substring(100, message?.length)}</span>
						<span
							onClick={() => setMessageDetails((prev) => !prev)}
							className="lowercase text-xl cursor-pointer hover:underline font-semibold text-[#1F42BF]"
						>
							see less
						</span>
					</>
				)}
			</p>
			<div className="absolute top-0 right-2">
				<RatingCard rating={Number(rating)} />
			</div>
		</div>
	);
}

export default FeedbackCard;
