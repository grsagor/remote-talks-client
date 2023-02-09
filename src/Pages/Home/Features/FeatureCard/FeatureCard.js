import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({card}) => {
  const {name, description, icon, bgClass} =card;
  const [descriptionDetails, setdescriptionDetails] = useState(false);
  // console.log(card)


  return (
    <div className='text-center hover:bg-base-200 p-5 pb-8'>
    <div className={`text-center flex justify-center items-center py-4 lg:py-6 text-5xl ${bgClass}`}>
      {icon}
    </div>
    <div>
      <h3 className='text-2xl font-semibold pb-3'>{name}</h3>
      <p className='text-gray-400'>
      {description?.length > 160 ? description.substring(0, 160) : description}
				{!descriptionDetails && description?.length > 160 && (
					<>
						..
						<span
							onClick={() => setdescriptionDetails((prev) => !prev)}
							className="cursor-pointer hover:underline text-blue-700 ml-1"
						>
							Read more
						</span>
					</>
				)}
				{descriptionDetails && (
					<>
						<span>{description.substring(160, description?.length)}</span>
						<span
							onClick={() => setdescriptionDetails((prev) => !prev)}
							className="cursor-pointer hover:underline text-blue-700 ml-1"
						>
							Read less
						</span>
					</>
				)}
      </p>
    </div>
  </div>
  );
};

export default FeatureCard;