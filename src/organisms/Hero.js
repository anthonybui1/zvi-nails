import React, { useEffect, useState } from 'react';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
  const [opacity, setOpacity] = useState('opacity-0')

  useEffect(() => {
    setOpacity('opacity-1')
  }, [])

	return (
		<div className={`flex ${opacity} transition-opacity duration-1000`}>
			<div className='max-w-lg'>
				<img className='object-contain' src={heroImg} alt='Hand covered in paint.' />
			</div>
			<div className='bg-lightpink flex items-center px-8'>
				<h1 className='font-header text-sm md:text-3xl'>
					Being one step ahead of a fashion trend is not so important to me. What matters is to
					always forge ahead.
				</h1>
			</div>
		</div>
	);
};

export default Hero;
