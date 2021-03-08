import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
	return (
		<div className='flex flex-col bg-neutral justify-center items-center px-8 w-full' id='services'>
			<h1 className='font-header md:text-4xl text-3xl mt-6 mb-2'>
				<strong>Services</strong>
			</h1>
			<ul className='text-center md:text-lg'>
				<li className='w-full px-2 py-2'>Nail Services</li>
				<li className='w-full px-2 py-2'>Shellac Nails</li>
				<li className='w-full px-2 py-2'>Kids Packages</li>
				<li className='w-full px-2 py-2'>Pedicures</li>
				<li className='w-full px-2 py-2'>Manicures</li>
				<li className='w-full px-2 py-2'>Waxing & Threading</li>
				<li className='w-full px-2 py-2'>Facials</li>
			</ul>
			<Link
				to='/services'
				className='my-4 py-2 px-4 shadow-md hover:shadow-lg border-4 border-primpink cursor-pointer md:text-lg'
			>
				<strong>Menu</strong>
			</Link>
		</div>
	);
};

export default Services;
