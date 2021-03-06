import React from 'react';
import familyImg from '../assets/familyphoto.jpg';

const About = () => {
	return (
		<div className='flex my-4' id='about'>
			<img className='md:w-192 w-60' src={familyImg} alt='Hand covered in paint.' />
			<div className='bg-lightpink flex items-center px-8'>
				<h1 className='font-header text-sm md:text-3xl'>
				I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable.
				</h1>
			</div>
		</div>
	);
};

export default About;
