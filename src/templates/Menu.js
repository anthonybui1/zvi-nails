import React from 'react';
import { menuData } from '../assets/menuData';

const Menu = () => {
	return (
		<section className='mx-auto max-w-prose flex flex-col mt-8 mb-24 px-4'>
			<article>
				<h2 className='font-display text-3xl text-center'>
					<b>Pedicures</b>
				</h2>
				{menuData.pedicures.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<h3 className='font-display md:text-2xl text-xl mt-4'>{item.name}</h3>
							<p className='text-sm md:text-base'>{item.description}</p>
							<p>{item.price}</p>
						</React.Fragment>
					);
				})}
			</article>

			<article>
				<h2 className='font-display text-3xl text-center mt-4'>
					<b>Manicures</b>
				</h2>
				{menuData.manicures.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<h3 className='font-display md:text-2xl text-xl mt-4'>{item.name}</h3>
							<p className='text-sm md:text-base'>{item.description}</p>
							<p>{item.price}</p>
						</React.Fragment>
					);
				})}
			</article>

			<article>
				<h2 className='font-display text-3xl text-center mt-4'>
					<b>Facials</b>
				</h2>
				{menuData.facials.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<h3 className='font-display md:text-2xl text-xl mt-4'>{item.name}</h3>
							<p className='text-sm md:text-base'>{item.description}</p>
							<p>{item.price}</p>
						</React.Fragment>
					);
				})}
			</article>

			<article className='space-y-2'>
				<h2 className='font-display text-3xl text-center my-4'>
					<b>Nail Services</b>
				</h2>
				{menuData.nailServices.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</article>

			<article className='space-y-2'>
				<h2 className='font-display text-3xl text-center my-4'>
					<b>Waxing & Threading</b>
				</h2>
				{menuData.waxingAndThreading.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</article>

			<article className='space-y-2'>
				<h2 className='font-display text-3xl text-center my-4'>
					<b>Shellac Nails</b>
				</h2>
				{menuData.shellacNails.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</article>

			<article className='space-y-2'>
				<h2 className='font-display text-3xl text-center my-4'>
					<b>Kids Packages</b>
				</h2>
				{menuData.kidsPackages.map((item, index) => {
					return (
						<div className='flex justify-between' key={index}>
							<p>{item.name}</p>
							<p>{item.price}</p>
						</div>
					);
				})}
			</article>
		</section>
	);
};

export default Menu;
