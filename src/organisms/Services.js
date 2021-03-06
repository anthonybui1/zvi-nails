import React from 'react';
import lacquerImg from '../assets/services.jpg';

const Services = () => {
	return (
		<div className='flex' id='services'>
			<div className='bg-neutral flex items-center px-8'>
				<h1 className='font-header text-sm md:text-3xl'>
					Being one step ahead of a fashion trend is not so important to me. What matters is to
					always forge ahead.
				</h1>
			</div>
			<div className='max-w-lg'>
				<img
					className='object-contain opacity-90'
					src={lacquerImg}
					alt='A colorful assortment of nail lacquer.'
				/>
			</div>
		</div>
	);
};

export default Services;
