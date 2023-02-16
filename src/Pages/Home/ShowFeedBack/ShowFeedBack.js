import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedbackCard from "../../Shared/FeedbackCard/FeedbackCard";
import { Oval } from "react-loader-spinner";

function ShowFeedBack({ feedbacks }) {
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<h1 className="text-3xl text-center mb-3 font-semibold">Our Clients Reviews </h1>
			<div className="pt-5 px-10  lg:px-24  pb-20">
				<Slider {...settings}>
					{feedbacks &&
						feedbacks.map((feedback) => (
							<FeedbackCard feedback={feedback}></FeedbackCard>
						))}
				</Slider>
			</div>
		</>
	);
}

export default ShowFeedBack;
