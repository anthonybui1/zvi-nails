import React, { useEffect, useState } from 'react';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
	const [opacity, setOpacity] = useState('opacity-0');

	useEffect(() => {
		setOpacity('opacity-1');
	}, []);

	return (
		<div className={`flex ${opacity} transition-opacity duration-1000`} id='hero'>
			<div className='max-w-lg'>
				<img className='object-contain' src={heroImg} alt='Hand covered in paint.' />
			</div>
			<div className='bg-lightpink flex items-center px-8'>
				<h1 className='font-header text-sm md:text-3xl'>
					"The staff is very kind and all of them are very good at their jobs. The building is
					beautiful and very clean and I have never had a problem with their service."
				</h1>
			</div>
		</div>
	);
};

export default Hero;
