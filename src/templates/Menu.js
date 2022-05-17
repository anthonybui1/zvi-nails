import React from 'react';
import { menuData } from '../assets/menuData';
import manicuristWorking from "../assets/manicurist-working.jpg";

const Menu = () => {
	return (
		<section className='mx-auto max-w-prose flex flex-col mt-8 mb-24 px-4'>
			<img className="mb-8" alt="Manicurist at work" src={manicuristWorking} />
			<article>
				<h2 className='font-display text-3xl text-center font-bold'>Pedicures</h2>
				{menuData.pedicures.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<h3 className='font-display text-2xl mt-4'>{item.name}</h3>
							<p>{item.addition}</p>
							<p>{item.description}</p>
							<p className="text-lg text-right">{item.price}</p>
						</React.Fragment>
					);
				})}
			</article>
			<article>
				<h2 className='font-display text-3xl text-center mt-4 font-bold'>Manicures</h2>
				{menuData.manicures.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<h3 className='font-display text-2xl mt-4'>{item.name}</h3>
							<p>{item.description}</p>
							<p className="text-lg text-right">{item.price}</p>
						</React.Fragment>
					);
				})}
			</article>
			<article>
				<h2 className='font-display text-3xl text-center mt-4 font-bold'>Facials</h2>
				{menuData.facials.map((item, index) => {
					return (
						<React.Fragment key={index}>
							<h3 className='font-display text-xl mt-4'>{item.name}</h3>
							<p>{item.description}</p>
							<p className="text-lg text-right">{item.price}</p>
						</React.Fragment>
					);
				})}
			</article>
			<article className='space-y-2'>
				<h2 className='font-display text-3xl text-center my-4 font-bold'>Nail Services</h2>
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
				<h2 className='font-display text-3xl text-center my-4 font-bold'>Waxing & Threading</h2>
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
				<h2 className='font-display text-3xl text-center my-4 font-bold'>Shellac Nails</h2>
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
				<h2 className='font-display text-3xl text-center my-4 font-bold'>Kids Packages</h2>
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
