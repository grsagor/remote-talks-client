import React from "react";
import "./Feedback.css";

const FeedBack = () => {
	return (
		<div className="feedback__container w-[90%] pt-[15px] mx-auto">
			<h1 className="py-5 text-2xl text-center capitalize sm:text-3xl feedback__title">
				We'd love to know what you think
			</h1>
			<div className="feedback__subcontainer pt-[10px]">
				<form action="" className="w-[80%] mx-auto">
					<div className="flex justify-center w-full py-5">
						<div className="w-[50%] mr-10">
							<input
								type="text"
								className="w-full px-1 py-2 text-black border-[1px] rounded-md outline-none feedback__input"
								placeholder="first name...."
							/>
						</div>
						<div className="w-[50%]">
							<input
								type="text"
								className="w-full px-1 py-2 text-black border-[1px] rounded-md outline-none feedback__input"
								placeholder="last name....."
							/>
						</div>
					</div>

					<div className="flex justify-center w-full py-5">
						<div className="w-full">
							<input
								type="email"
								className="w-full px-1 py-2 text-black border-[1px] rounded-md outline-none feedback__input"
								placeholder="example@gmail.com...."
							/>
						</div>
					</div>
					<div className="flex justify-center w-full py-5">
						<div className="w-full">
							<textarea
								name=""
								placeholder="How can we Improve?"
								className="w-full px-3 py-2 rounded-md outline-none feedback__input"
							></textarea>
						</div>
					</div>
					<div className="py-5 text-center ">
						<button className="px-5 py-3 capitalize rounded-md feedback__button">
							send feedback
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FeedBack;
