import React from 'react';

import familyImg from '../assets/family.jpeg';

const About = () => {
	return (
		<React.Fragment>
			<span id='about' className='block relative -top-28' />
			<section className='flex my-4'>
				<div className='w-1/2 flex-shrink-0'>
					<img
						className='object-fit'
						src={familyImg}
						alt='Two hands holding a heart shaped bouquet.'
						loading='lazy'
					/>
				</div>
				<div className='bg-lightpink w-full flex flex-col justify-center items-center px-4'>
					<h1 className='font-header text-lg md:text-4xl mb-2'>
						<strong>About Us</strong>
					</h1>
					<p className='md:text-base text-xs text-center'>
						We are a family owned business that takes pride in serving the Houston community for
						over 20 years.
					</p>
				</div>
			</section>
		</React.Fragment>
	);
};

export default About;
