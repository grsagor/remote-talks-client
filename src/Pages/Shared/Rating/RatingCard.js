import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function RatingCard({ rating }) {
	return (
		<div className="flex justify-start items-center py-2">
			{rating > 0.5 ? (
				<FaStar className="w-5 my-1 mr-1 ml-0 h-6 rating__color" />
			) : (
				<FaStarHalfAlt className="w-5  my-1 mr-1 ml-0 h-6 rating__color" />
			)}
			{rating > 1.5 ? (
				<FaStar className="w-5 m-1 h-6 rating__color" />
			) : rating === 1.5 ? (
				<FaStarHalfAlt className="w-5 m-1 h-6 rating__color" />
			) : (
				<FaRegStar className="w-5 m-1 h-6 rating__color" />
			)}
			{rating > 2.5 ? (
				<FaStar className="w-5 m-1 h-6 rating__color" />
			) : rating === 2.5 ? (
				<FaStarHalfAlt className="w-5 m-1 h-6 rating__color" />
			) : (
				<FaRegStar className="w-5 m-1 h-6 rating__color" />
			)}
			{rating > 3.5 ? (
				<FaStar className="w-5 m-1 h-6 rating__color" />
			) : rating === 3.5 ? (
				<FaStarHalfAlt className="w-5 m-1 h-6 rating__color" />
			) : (
				<FaRegStar className="w-5 m-1 h-6 rating__color" />
			)}
			{rating > 4.5 ? (
				<FaStar className="w-5 m-1 h-6 rating__color" />
			) : rating === 4.5 ? (
				<FaStarHalfAlt className="w-5 m-1 h-6 rating__color" />
			) : (
				<FaRegStar className="w-5 m-1 h-6 rating__color" />
			)}
			{rating > 5.5 ? (
				<FaStar className="w-5 m-1 h-6 rating__color" />
			) : rating === 5.5 ? (
				<FaStarHalfAlt className="w-5 m-1 h-6 rating__color" />
			) : (
				<FaRegStar className="w-5 m-1 h-6 rating__color" />
			)}
			{rating > 6.5 ? (
				<FaStar className="w-5 m-1 h-6 rating__color" />
			) : rating === 6.5 ? (
				<FaStarHalfAlt className="w-5 m-1 h-6 rating__color" />
			) : (
				<FaRegStar className="w-5 m-1 h-6 rating__color" />
			)}
			{rating > 7.5 ? (
				<FaStar className="w-5 m-1 h-6 rating__color" />
			) : rating === 7.5 ? (
				<FaStarHalfAlt className="w-5 m-1 h-6 rating__color" />
			) : (
				<FaRegStar className="w-5 m-1 h-6 rating__color" />
			)}
			{rating > 8.5 ? (
				<FaStar className="w-5 m-1 h-6 rating__color" />
			) : rating === 8.5 ? (
				<FaStarHalfAlt className="w-5 m-1 h-6 rating__color" />
			) : (
				<FaRegStar className="w-5 m-1 h-6 rating__color" />
			)}
			{rating > 9.5 ? (
				<FaStar className="w-5 m-1 h-6 rating__color" />
			) : rating === 9.5 ? (
				<FaStarHalfAlt className="w-5 m-1 h-6 rating__color" />
			) : (
				<FaRegStar className="w-5 m-1 h-6 rating__color" />
			)}
			<span className="ml-2 my-1">{`(${rating})`}</span>
		</div>
	);
}

export default RatingCard;
