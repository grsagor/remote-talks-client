import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { CirclesWithBar } from "react-loader-spinner";
import RatingComponent from "../../Shared/Rating/RatingComponent";
import "./Feedback.css";

const FeedBack = ({ refetch }) => {
	const [rating, setRating] = useState(2.5);
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
					refetch();
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
			<div className="feedback__container w-[90%] pt-[15px] mb-20 mx-auto">
				<h1 className="px-5  text-2xl text-center font-semibold capitalize sm:px-0 sm:text-3xl text-white">
					Share Your Feedback{" "}
					{/* <br className="block sm:hidden feedback__break" /> Feedback */}
				</h1>
				<h1 className="text-center text-xl font-semibold text-white">Help us to grow</h1>
				<div className="feedback__subcontainer pt-[10px]">
					<form onSubmit={submitHandler} className="w-[80%] mx-auto">
						<div className="flex flex-col justify-center w-full py-5 sm:flex-row">
							<div className="sm:w-[50%] w-full sm:mr-10 mr-0">
								<input
									type="text"
									name="firstname"
									required
									className="w-full px-1 py-2 text-black border-[1px] rounded-md outline-none feedback__input"
									placeholder="First Name"
								/>
							</div>
							<div className="sm:w-[50%] sm:pt-0 pt-10 w-full">
								<input
									type="text"
									name="lastname"
									className="w-full px-1 py-2 text-black border-[1px] rounded-md outline-none feedback__input"
									placeholder="Last Name"
								/>
							</div>
						</div>

						<div className="flex justify-center w-full py-5">
							<div className="w-full">
								<input
									type="email"
									name="email"
									className="w-full px-1 py-2 text-black border-[1px] rounded-md outline-none feedback__input"
									placeholder="Email Address"
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
