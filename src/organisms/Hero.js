import React, { useState } from 'react';
import heroImg from '../assets/hero.jpeg';
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
			<section className='w-full bg-lightpink container max-w-screen-lg mx-auto md:h-144 h-96 flex justify-center items-center'>
				<div className='flex h-full w-1/2'>
					<img
						className='object-cover w-full'
						src={heroImg}
						alt='Hand covered in paint.'
						loading='eager'
					/>
				</div>
				<div className='bg-lightpink flex flex-shrink-0 w-1/2 flex-col justify-center items-center px-4 md:px-8'>
					<span className='md:my-4 mb-1'>
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
						<i className='fas fa-star text-xs sm:text-base' />
					</span>
					<h2 className='font-display text-xs sm:text-xl'>"{reviewData[currIndex].review}"</h2>
					<p className='text-xs sm:text-lg md:mt-4 mt-1 self-end'>—{reviewData[currIndex].name}</p>
				</div>
			</section>
			<span id='gallery' className='block relative -top-28' />
		</React.Fragment>
	);
};

export default Hero;
