import React from 'react';
import { menuData } from '../assets/menuData';

const ServicesPage = () => {
	return (
		<div className='mx-auto max-w-prose flex flex-col my-8 px-2'>
			<div>
				<h1 className='font-display text-3xl'>
					<strong>Pedicures</strong>
				</h1>
				{menuData.pedicures.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<h3 className='font-header md:text-2xl text-xl mt-4'>{item.name}</h3>
							<p className='text-sm md:text-base'>{item.description}</p>
							<p>{item.price}</p>
						</React.Fragment>
					);
				})}
			</div>

			<div>
				<h1 className='font-display text-3xl mt-4'>
					<strong>Manicures</strong>
				</h1>
				{menuData.manicures.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<h3 className='font-header md:text-2xl text-xl mt-4'>{item.name}</h3>
							<p className='text-sm md:text-base'>{item.description}</p>
							<p>{item.price}</p>
						</React.Fragment>
					);
				})}
			</div>

			<div>
				<h1 className='font-display text-3xl mt-4'>
					<strong>Facials</strong>
				</h1>
				{menuData.facials.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<h3 className='font-header md:text-2xl text-xl mt-4'>{item.name}</h3>
							<p className='text-sm md:text-base'>{item.description}</p>
							<p>{item.price}</p>
						</React.Fragment>
					);
				})}
			</div>

			<div className='space-y-2'>
				<h1 className='font-display text-3xl my-4'>
					<strong>Nail Services</strong>
				</h1>
				{menuData.nailServices.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</div>

			<div className='space-y-2'>
				<h1 className='font-display text-3xl my-4'>
					<strong>Waxing & Threading</strong>
				</h1>
				{menuData.waxingAndThreading.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</div>

			<div className='space-y-2'>
				<h1 className='font-display text-3xl my-4'>
					<strong>Shellac Nails</strong>
				</h1>
				{menuData.shellacNails.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</div>

			<div className='space-y-2'>
				<h1 className='font-display text-3xl my-4'>
					<strong>Kids Packages</strong>
				</h1>
				{menuData.kidsPackages.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ServicesPage;
