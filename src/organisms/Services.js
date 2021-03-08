import React from 'react';
import lacquerImg from '../assets/services.jpg';
import { ReactComponent as Manicure } from '../assets/manicure.svg';

const Services = () => {
	return (
		<div className='flex flex-col sm:flex-row' id='services'>
			<div className='bg-neutral flex flex-col justify-center items-center px-8 w-full'>
				<h1 className='font-header text-lg md:text-3xl my-2'>
					<strong>Services</strong>
				</h1>
				<ul className='md:text-base text-xs font-body text-center space-y-1'>
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
					className='my-4 py-2 px-4 hover:shadow-lg border-2 rounded-lg border-primpink cursor-pointer font-body text-sm'
				>
					Menu
				</a>
			</div>
			<div className=''>
				{/* <img
					className='text-6xl'
					src={manicureImg}
					alt='A colorful assortment of nail lacquer.'
				/> */}
				<Manicure className=''/>
			</div>
		</div>
	);
};

export default Services;
