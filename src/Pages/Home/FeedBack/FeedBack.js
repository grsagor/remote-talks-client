import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { CirclesWithBar } from "react-loader-spinner";
import RatingComponent from "../../Shared/Rating/RatingComponent";
import "./Feedback.css";

const FeedBack = () => {
	const [rating, setRating] = useState(5);
	const [feedBackLoading, setFeedBackLoading] = useState(false);
	console.log(rating);
	const submitHandler = async (e) => {
		e.preventDefault();
		// form
		const form = e.target;

		const firstName = form.firstname.value;
		const lastName = form.lastname.value;
		const message = form.message.value;
		const email = form.email.value;
		const createFeedBack = {
			name: `${firstName} ${lastName}`,
			message,
			email,
			rating: Number(rating),
		};
		setFeedBackLoading(true);
		fetch("https://remote-talks-server-tan.vercel.app/api/feedback/", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(createFeedBack),
		})
			.then((res) => res.json())
			.then((data) => {
				form.reset();
				if (data.acknowledged) {
					toast.success("feedback is sent successfully");
					setFeedBackLoading(false);
				}
			})
			.catch((err) => {
				setFeedBackLoading(false);
				console.log(err);
			});
	};
	return (
		<>
			<div className="feedback__container w-[90%] pt-[15px] mx-auto">
				<h1 className="px-5 py-5 text-2xl text-center capitalize sm:px-0 sm:text-3xl feedback__title">
					We'd love to know what{" "}
					<br className="block sm:hidden feedback__break" /> you think
				</h1>
				<div className="feedback__subcontainer pt-[10px]">
					<form onSubmit={submitHandler} className="w-[80%] mx-auto">
						<div className="flex flex-col justify-center w-full py-5 sm:flex-row">
							<div className="sm:w-[50%] w-full sm:mr-10 mr-0">
								<input
									type="text"
									name="firstname"
									required
									className="w-full px-1 py-2 text-black border-[1px] rounded-md outline-none feedback__input"
									placeholder="first name...."
								/>
							</div>
							<div className="sm:w-[50%] sm:pt-0 pt-10 w-full">
								<input
									type="text"
									name="lastname"
									className="w-full px-1 py-2 text-black border-[1px] rounded-md outline-none feedback__input"
									placeholder="last name....."
								/>
							</div>
						</div>

						<div className="flex justify-center w-full py-5">
							<div className="w-full">
								<input
									type="email"
									name="email"
									className="w-full px-1 py-2 text-black border-[1px] rounded-md outline-none feedback__input"
									placeholder="example@gmail.com...."
									required
								/>
							</div>
						</div>
						<div className="flex justify-center w-full py-5">
							<div className="w-full">
								<textarea
									name="message"
									placeholder="How can we Improve?"
									className="w-full px-3 py-2 rounded-md outline-none feedback__input"
									required
								></textarea>
							</div>
						</div>
						<div className="py text-center">
							<RatingComponent rating={rating} setRating={setRating} />
						</div>
						<div className="py-5 text-center ">
							<button
								type="submit"
								className="px-5 py-3 capitalize transition-all duration-500 ease-in-out rounded-md feedback__button"
							>
								{!feedBackLoading ? (
									"send feedback"
								) : (
									<CirclesWithBar
										height="30"
										width="30"
										color="#4fa94d"
										wrapperStyle={{}}
										wrapperClass=""
										visible={true}
										outerCircleColor=""
										innerCircleColor=""
										barColor=""
										ariaLabel="circles-with-bar-loading"
									/>
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default FeedBack;
