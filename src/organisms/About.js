import React from 'react';

import familyImg from '../assets/family.jpeg';

const About = () => {
	return (
		<section className='bg-lightpink md-custom-container'>
			<span id='about' className='block relative -top-28' />
			<div className='container max-w-screen-lg mx-auto py-8 px-4 flex justify-center md:my-4'>
				<div className='w-1/2 flex-shrink-0'>
					<img
						className='object-fit rounded-full shadow-md'
						src={familyImg}
						alt='Two hands holding a heart shaped bouquet.'
						loading='lazy'
					/>
				</div>
				<div className='w-1/2 px-4 flex flex-col justify-center items-center'>
					<h1 className='font-display text-lg md:text-4xl mb-2'>
						<b>About Us</b>
					</h1>
					<p className='md:text-base text-xs text-center'>
						We are a family owned business that takes pride in serving the Houston community for
						over 20 years.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
