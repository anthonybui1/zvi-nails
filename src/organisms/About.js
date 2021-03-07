import React from 'react';
import familyImg from '../assets/family.jpg';

const About = () => {
	return (
		<div className='flex my-4' id='about'>
			<img className='xl:w-192 md:w-144 sm:w-48 w-40' src={familyImg} alt='Hand covered in paint.' />
			<div className='bg-lightpink flex items-center px-8'>
				<h1 className='font-header text-sm md:text-3xl'>
				I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable.
				</h1>
			</div>
		</div>
	);
};

export default About;
