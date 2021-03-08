import React from 'react';
import familyImg from '../assets/family.jpg';

const About = () => {
	return (
		<div className='flex my-4' id='about'>
			<img
				className='xl:w-144 lg:w-96 md:w-72 w-40'
				src={familyImg}
				alt='Person holding bouquet.'
			/>
			<div className='bg-lightpink w-full flex flex-col justify-center items-center px-4'>
				<h1 className='font-header text-lg md:text-3xl mb-2'>
					<strong>About Us</strong>
				</h1>
				<p className='md:text-base text-xs text-center'>
					We are a family owned business that takes pride in serving the Houston community for over
					20 years.
				</p>
			</div>
		</div>
	);
};

export default About;
