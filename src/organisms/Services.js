import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
	const services = [
		'Nail Services',
		'Shellac Nails',
		'Kids Packages',
		'Pedicures',
		'Manicures',
		'Waxing & Threading',
		'Facials',
	];

	return (
		<section className='md-custom-container bg-primary flex flex-col justify-center items-center w-full'>
			<h2 className='font-display md:text-4xl text-3xl mt-6 mb-2 font-bold'>Services</h2>
			<ul className='text-center'>
				{services.map((service, idx) => (
					<li key={idx} className='w-full px-2 py-2 text-lg'>
						{service}
					</li>
				))}
			</ul>
			<Link
				to='/services'
				onClick={() => window.scrollTo(0, 0)}
				className='mt-4 mb-8 py-2 px-12 bg-gray-50 shadow-md hover:shadow-lg \
					text-lg font-display transform hover:scale-105 transition-all rounded-lg font-bold'
				aria-label='Clicking this link will take you to an overview of our services.'
			>
				Details
			</Link>
		</section>
	);
};

export default Services;
