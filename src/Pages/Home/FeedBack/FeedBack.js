import React from "react";
import "./Feedback.css";

const FeedBack = () => {
	return (
		<div className="feedback__container w-[90%] pt-[15px] mx-auto">
			<h1 className="px-5 py-5 text-2xl text-center capitalize sm:px-0 sm:text-3xl feedback__title">
				We'd love to know what{" "}
				<br className="block sm:hidden feedback__break" /> you think
			</h1>
			<div className="feedback__subcontainer pt-[10px]">
				<form action="" className="w-[80%] mx-auto">
					<div className="flex flex-col justify-center w-full py-5 sm:flex-row">
						<div className="sm:w-[50%] w-full sm:mr-10 mr-0">
							<input
								type="text"
								className="w-full px-1 py-2 text-black border-[1px] rounded-md outline-none feedback__input"
								placeholder="first name...."
							/>
						</div>
						<div className="sm:w-[50%] sm:pt-0 pt-10 w-full">
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
						<button className="px-5 py-3 capitalize transition-all duration-500 ease-in-out rounded-md feedback__button">
							send feedback
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FeedBack;
