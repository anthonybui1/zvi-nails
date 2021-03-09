import React, { useState } from 'react';
import heroImg from '../assets/hero.jpg';
import { reviewData } from '../assets/reviewData.js';
import { useInterval } from '../hooks/useInterval';

const Hero = () => {
	const [currIndex, setCurrIndex] = useState(0);

	useInterval(() => {
		if (currIndex + 1 >= reviewData.length) {
			setCurrIndex(0);
		} else {
			setCurrIndex(currIndex + 1);
		}
	}, 7000);

	return (
		<React.Fragment>
			<div className='flex bg-lightpink' id='hero'>
				<div>
					<img
						className='object-cover h-full lg:max-h-eightyscreen md:max-h-eightyscreen max-h-fiftyscreen'
						src={heroImg}
						alt='Hand covered in paint.'
					/>
				</div>
				<div className='bg-lightpink flex flex-shrink-0 w-1/2 flex-col justify-center items-center px-4 md:px-8'>
					<div className='md:my-4 mb-1'>
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
					</div>
					<h1 className='font-header text-xs sm:text-xl'>"{reviewData[currIndex].review}"</h1>
					<p className='text-xs sm:text-lg md:mt-4 mt-1 self-end'>—{reviewData[currIndex].name}</p>
				</div>
			</div>
			<span id='gallery' className='block relative -top-32' />
		</React.Fragment>
	);
};

export default Hero;
