import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
	return (
		<section className='flex flex-col bg-neutral justify-center items-center px-8 w-full'>
			<h2 className='font-header md:text-4xl text-3xl mt-6 mb-2'>
				<b>Services</b>
			</h2>
			<ul className='text-center'>
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
				onClick={() => window.scrollTo(0, 0)}
				className='my-4 py-2 px-8 hover:shadow-md border-b-4 border-r-4 border-primpink text-lg'
				aria-label='Clicking this link will take you to an overview of our services.'
			>
				<b>Menu</b>
			</Link>
		</section>
	);
};

export default Services;
