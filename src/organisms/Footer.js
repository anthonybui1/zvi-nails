import React from 'react';

const Footer = () => {
	return (
		<div className='bg-lightpink w-full flex flex-col justify-between items-center pb-2 px-4'>
			<div className='my-4'>
				<h1 className='font-display text-5xl text-center'>ZVI Nails & Spa</h1>
			</div>
			<div className='my-4 flex items-center'>
				<p className='text-2xl'>Find us on Instagram</p>
				<a href='https://www.instagram.com/zvi_nails/' className='cursor-pointer'>
					<i className='fab fa-instagram-square text-3xl mx-6 transform hover:rotate-6 transition-all'></i>
				</a>
			</div>
			<div className='font-body text-xs mt-3'>
				<p>© 2021 ZVI Nails & Spa. All Rights Reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
