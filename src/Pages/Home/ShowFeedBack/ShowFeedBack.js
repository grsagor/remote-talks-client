import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedbackCard from "../../Shared/FeedbackCard/FeedbackCard";
import { Oval } from "react-loader-spinner";

function ShowFeedBack() {
	const [feedbacks, setFeedbacks] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		axios
			.get("https://remote-talks-server-tan.vercel.app/api/feedback/")
			.then(({ data }) => {
				console.log(data);
				setFeedbacks(data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, []);
	console.log(feedbacks);
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="px-24 pt-10 pb-20">
			{loading && (
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
			<Slider {...settings}>
				{feedbacks &&
					feedbacks.map((feedback) => (
						<FeedbackCard feedback={feedback}></FeedbackCard>
					))}
			</Slider>
		</div>
	);
}

export default ShowFeedBack;
