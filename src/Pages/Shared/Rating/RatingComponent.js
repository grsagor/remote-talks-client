<<<<<<< HEAD
import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const RatingComponent = ({ rating, setRating }) => {
	const [hover, setHover] = React.useState(-1);

	const labels = {
		0.5: "Useless",
		1: "Useless+",
		1.5: "Useless+",
		2: "Useless+++",
		2.5: "Ugly",
		3: "Ugly+",
		3.5: "Ugly++",
		4: "Ok",
		4.5: "Ok+",
		5: "Ok++",
		5.5: "Ok+++",
		6: "Good",
		6.5: "Good+",
		7: "Good++",
		7.5: "Excellent",
		8: "Excellent+",
		8.5: "Excellent++",
		9: "Excellent++",
		9.5: "Awesome",
		10: "Awesome+",
	};
	return (
		<div>
			<Typography component="legend">Give Your Rating</Typography>
			<div className="flex justify-center mt-2">
				<Rating
					name="customized-10"
					precision={0.5}
					defaultValue={3}
					value={Number(rating)}
					max={10}
					onChange={(event) => {
						setRating(event.target.value);
					}}
					onChangeActive={(event, newHover) => {
						setHover(newHover);
					}}
				/>

				{rating !== null && (
					<Box variant="success" sx={{ ml: 2 }}>
						{labels[hover !== -1 ? hover : rating]}
					</Box>
				)}
			</div>
		</div>
	);
};

export default RatingComponent;
=======
import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const RatingComponent = ({ rating, setRating }) => {
	const [hover, setHover] = React.useState(-1);

	const labels = {
		0.5: "Useless",
		1: "Useless+",
		1.5: "Useless+",
		2: "Useless+++",
		2.5: "Ugly",
		3: "Ugly+",
		3.5: "Ugly++",
		4: "Ok",
		4.5: "Ok+",
		5: "Ok++",
		5.5: "Ok+++",
		6: "Good",
		6.5: "Good+",
		7: "Good++",
		7.5: "Excellent",
		8: "Excellent+",
		8.5: "Excellent++",
		9: "Excellent++",
		9.5: "Awesome",
		10: "Awesome+",
	};
	return (
		<div>
			<Typography component="legend">Give Your Rating</Typography>
			<div className="flex justify-center mt-2">
				<Rating
					name="customized-10"
					precision={0.5}
					defaultValue={3}
					value={Number(rating)}
					max={10}
					onChange={(event) => {
						setRating(event.target.value);
					}}
					onChangeActive={(event, newHover) => {
						setHover(newHover);
					}}
				/>

				{rating !== null && (
					<Box variant="success" sx={{ ml: 2 }}>
						{labels[hover !== -1 ? hover : rating]}
					</Box>
				)}
			</div>
		</div>
	);
};

export default RatingComponent;
>>>>>>> 421b7e9489cf3145122a604d5aecce40bca303f2
