import React from 'react';
import lacquerImg from '../assets/services.jpg';

const Services = () => {
	return (
		<div className='flex' id='services'>
			<div className='bg-neutral flex flex-col justify-center items-center px-8 w-full'>
				<h1 className='font-header text-lg md:text-3xl mb-4'>
					<strong>Services</strong>
				</h1>
				<ul className='md:text-md text-xs text-center space-y-1'>
					<li>Nail Services</li>
					<li>Shellac Nails</li>
					<li>Kids Packages</li>
					<li>Pedicures</li>
					<li>Manicures</li>
					<li>Waxing & Threading</li>
					<li>Facials</li>
				</ul>
				<a
					href='#services'
					className='mt-4 py-2 px-4 hover:shadow-lg border-2 rounded-lg border-primpink cursor-pointer font-header text-sm'
				>
					Menu
				</a>
			</div>
			<div className='max-w-md'>
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
