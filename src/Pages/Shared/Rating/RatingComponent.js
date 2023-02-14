import { Box, Rating, Typography } from "@mui/material";
import React from "react";

const RatingComponent = ({ rating, setRating }) => {
	const [hover, setHover] = React.useState(-1);

	const labels = {
		0.5: "Useless",
		1.0: "Useless",
		1.5: "Ugly",
		2.0: "Ugly",
		2.5: "Ok",
		3.5: "Good",
		4.0: "Excellent",
		4.5: "Awesome",
		5.0: "Awesome",
	};
	return (
		<div>
			<Typography component="legend">Rate us</Typography>
			<div className="flex justify-center mt-2">
				<Rating
					name="customized-10"
					precision={0.5}
					defaultValue={3}
					value={Number(rating)}
					max={5}
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
