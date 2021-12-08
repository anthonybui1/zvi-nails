import React, { useState } from 'react';
import heroImg from "../assets/hero.jpg";
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
			<section className='bg-gray-50 container max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center'>
				<img src={heroImg} alt="Manicured hands" />
				<div className='bg-gray-50 flex flex-col justify-center items-center p-8 md:px-8'>
					<span className='md:my-4 mb-1'>
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
					</span>
					<h2 className='font-display sm:text-xl text-center'>"{reviewData[currIndex].review}"</h2>
					<p className='sm:text-lg md:mt-4 mt-1 self-end'>—{reviewData[currIndex].name}</p>
				</div>
			</section>
			<span id='gallery' className='block relative -top-28' />
		</React.Fragment>
	);
};

export default Hero;
